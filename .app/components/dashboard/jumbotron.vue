<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { KycTemplate } from '~~/types'
const props = defineProps({
  flutter: {
    type: Boolean,
    default: false,
  },
})

const userIPAddress = ref('');   
const simplifiedDevice = ref('');   
const simplifiedBrowser = ref('');  

onMounted(async () => {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  userIPAddress.value = data.ip;

  const userAgent = navigator.userAgent;
  simplifiedDevice.value = extractDevice(userAgent);

  
  simplifiedBrowser.value = extractBrowser(userAgent);
});

const extractDevice = (userAgent: string): string => {
  if (userAgent.includes('Android')) {
    return 'Android';
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    return 'iOS';
  } else if (userAgent.includes('Windows')) {
    return 'Windows';
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
    return 'Mac';
  } else {
    return 'Unknown Device';
  }
};

const extractBrowser = (userAgent: string): string => {
  if (userAgent.includes('SamsungBrowser')) {
    return 'Samsung Browser';
  } else if (userAgent.includes('Chrome')) {
    return 'Google Chrome';
  } else if (userAgent.includes('Firefox')) {
    return 'Mozilla Firefox';
  } else if (userAgent.includes('Safari')) {
    return 'Safari';
  } else {
    return 'Unknown Browser';
  }
};

const userStore = useUserStore()
const user = computed(() => userStore.getProfile)
const { getActiveKycTemplate } = useKyc()
const activeTemplate = ref<KycTemplate | null>(null)

const maskedEmail = computed(() => {
    const [username, domain] = user.value.email.split('@');
    const maskedUsername = username.slice(0, 3) + '***' + username.slice(-1);
    return `${maskedUsername}@${domain}`;
});

const securityLevel = computed(() => {
    if (user.value.email && user.value.kyc && user.value.twofactor) {
        // Neither email nor KYC is verified
        return 'High';
    } else if (!user.value.email && !user.value.kyc && !user.value.twofactor) {
        // Both email and KYC are verified
        return 'Low';
    } else if (user.value.email || user.value.kyc || !user.value.twofactor) {
        // Either email or KYC is verified
        return 'Medium';
    }
});
const lastLevel = ref<number>(0)
const level = computed(() => parseInt(user.value?.kyc?.level) || 0)
const getKycApplicationRoute = (state: string) =>
  `/user/${props.flutter ? 'flutter/' : ''}kyc/application?state=${state}&l=${
    level.value + (state === 'new' ? 1 : 0)
  }`
  const statusClassMap = {
  APPROVED:
    'text-success-700 bg-success-100 border border-success-300 rounded-lg dark:bg-gray-800 dark:border-success-800 dark:text-success-400',
  PENDING:
    'text-info-700 bg-info-100 border border-info-300 rounded-lg dark:bg-gray-800 dark:border-info-800 dark:text-info-400',
  REJECTED:
    'text-danger-700 bg-danger-100 border border-danger-300 rounded-lg dark:bg-gray-800 dark:border-danger-800 dark:text-danger-400',
  MUTED:
    'text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400',
}

const statusClass = computed(() => {
  const status = user.value?.kyc?.status
  return statusClassMap[status] || statusClassMap['MUTED']
})

const levelMap = {
  0: 'Verified',
  1: 'Verified Plus',
  2: 'Verified Pro',
  3: 'Verified Business',
}

const verificationLevel = computed(() => {
  return levelMap[level.value] || 'Verified'
})

const updateLastLevel = (fields) => {
  for (const key in fields) {
    if (
      activeTemplate.value?.options.hasOwnProperty(key) &&
      parseInt(activeTemplate.value?.options[key].level) > lastLevel.value
    ) {
      lastLevel.value = parseInt(activeTemplate.value?.options[key].level)
    }
  }
}

const router = useRouter()
const { toast } = useUtils()
onMounted(async () => {
  try {
    await userStore.fetchProfile()
    const response = await getActiveKycTemplate()
    if (response.data?.result && response.data?.result?.id) {
      activeTemplate.value = response.data.result
      const { options } = activeTemplate.value
      if (options) {
        updateLastLevel(options)

        // Search in custom_fields inside options
        if (options.custom_fields) {
          updateLastLevel(options.custom_fields)
        }
      }
    } else {
      toast.warning('KYC system under maintenance. Please try again later.')
      router.push('/user')
    }
  } catch (error) {
    console.error(error)
  }
})

const statusIcon = computed(() => {
  switch (user.value?.kyc?.status) {
    case 'APPROVED':
      return 'line-md:confirm'
    case 'PENDING':
      return 'line-md:loading-alt-loop'
    case 'REJECTED':
      return 'line-md:close'
    default:
      return ''
  }
})

const computedLevels = computed(() => {
  const levels = []
  for (let i = 1; i <= lastLevel.value; i++) {
    let item = {
      id: i,
      level: i,
      name: ['Verified', 'Verified Plus', 'Verified Pro'][i - 1],
      cssClass:
        level.value >= i
          ? level.value === i
            ? statusClass.value
            : statusClassMap['APPROVED']
          : statusClassMap['MUTED'],
      icon:
        level.value >= i
          ? level.value === i
            ? statusIcon.value
            : 'line-md:confirm'
          : '',
      showStatus: level.value >= i,
    }
    levels.push(item)
  }
  return levels
})
</script>

<template>
    <div class="dark:bg-dark3 dark:text-white bg-[#f7f7f7] w-full rounded-lg lg-sm:p-5 p-3">
        <div class="">
            <!-- avatar -->
            <div class="flex items-start gap-4">
                <div class="min-w-[40px] min-h-[40px] rounded-full text-white flex items-center justify-center"
                    style="background: linear-gradient(135deg, #53d004 50%, #a0fa68 50%);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2ZM17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z">
                        </path>
                    </svg>
                </div>
                <div
                    class="flex flex-col lg-sm:flex-row justify-normal lg-sm:justify-between w-full items-start lg-sm:items-center">
                    <div class="">
                        <h2 class="font-regular lg-sm:text-[1.2rem] text-sm first-letter:uppercase">{{ user.first_name }} {{ user.last_name }}</h2>
                        <!--                         <p class="font-light text-secondaryText text-sm lg-sm:block hidden">UID: 3677875</p> -->
                    </div>


                    <div class="flex items-center gap-2">
                        <div class="dark:bg-dark3sub bg-[rgb(237,237,237)] rounded-full px-2 text-xs text-[#bebec0] dark:text-[#939393] flex items-center py-1 gap-1"
                            :class="user.email_verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="text-[#e1e3e5]"
                                    d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                    fill="currentColor"></path>
                                <path class="kyc_svg_tick"
                                    d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                    fill="currentColor"></path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]">Email Verified</p>
                            </div>
                            <div v-if="
                !user?.kyc || (level === 0 && user?.kyc?.status !== 'PENDING')
              " class="dark:bg-dark3sub bg-[rgb(237,237,237)] rounded-full px-2 text-xs text-[#bebec0] dark:text-[#939393] flex items-center py-1 gap-1"
                            :class="user.email_verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="text-[#e1e3e5]"
                                    d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                    fill="currentColor"></path>
                                <path class="kyc_svg_tick"
                                    d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                    fill="currentColor"></path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]"><a href="/user/kyc">Verify Kyc</a></p>
                        </div>
                        <template v-else-if="user?.kyc?.status === 'PENDING'">
                          <div class="dark:bg-dark3sub bg-[rgb(237,237,237)] rounded-full px-2 text-xs text-[#bebec0] dark:text-[#939393] flex items-center py-1 gap-1"
                            :class="user.email_verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="text-[#e1e3e5]"
                                    d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                    fill="currentColor"></path>
                                <path class="kyc_svg_tick"
                                    d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                    fill="currentColor"></path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]">Kyc Pending</p>
                        </div>
                        </template>
                        <template v-else-if="user?.kyc?.status === 'REJECTED'">
                          <div class="dark:bg-dark3sub bg-[rgb(237,237,237)] rounded-full px-2 text-xs text-[#bebec0] dark:text-[#939393] flex items-center py-1 gap-1"
                            :class="user.email_verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="text-[#e1e3e5]"
                                    d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                    fill="currentColor"></path>
                                <path class="kyc_svg_tick"
                                    d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                    fill="currentColor"></path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]"><a href="/user/kyc">Kyc Rejected</a></p>
                        </div>
                        </template>
                        <template v-else-if="user?.kyc?.status === 'APPROVED'">
                          <div class="dark:bg-dark3sub bg-[rgb(237,237,237)] rounded-full px-2 text-xs text-[#bebec0] dark:text-[#939393] flex items-center py-1 gap-1"
                            :class="user.email_verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="text-[#e1e3e5]"
                                    d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                    fill="currentColor"></path>
                                <path class="kyc_svg_tick"
                                    d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                    fill="currentColor"></path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]">Kyc Verified</p>
                        </div>
                        </template>
                        
                         

        <!--                <div class="dark:bg-dark3sub bg-[rgb(237,237,237)] flex px-2 items-center gap-1 rounded-full py-1 dark:text-[#939393] "
                            :class="!verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M16.7 19.73H7.3c-.74 0-1.49-.53-1.74-1.22L1.42 6.92c-.51-1.46-.14-2.13.26-2.43.4-.3 1.15-.48 2.41.42l3.9 2.79c.12.07.23.1.31.08.09-.03.16-.11.21-.25l1.76-4.69c.53-1.4 1.31-1.61 1.73-1.61.42 0 1.2.21 1.73 1.61l1.76 4.69c.05.13.12.22.21.25s.2 0 .31-.09l3.66-2.61c1.34-.96 2.12-.77 2.55-.46.42.32.81 1.03.26 2.58l-4.04 11.31c-.25.69-1 1.22-1.74 1.22ZM2.68 5.81c.02.14.06.34.16.6L6.98 18c.04.1.22.23.32.23h9.4c.11 0 .29-.13.32-.23l4.04-11.3c.14-.38.18-.64.19-.79-.15.05-.38.16-.71.4l-3.66 2.61c-.5.35-1.09.46-1.62.3-.53-.16-.96-.58-1.18-1.15l-1.76-4.69c-.13-.35-.25-.52-.32-.6-.07.08-.19.25-.32.59L9.92 8.06c-.21.57-.64.99-1.18 1.15-.53.16-1.13.05-1.62-.3l-3.9-2.79a2.76 2.76 0 0 0-.54-.31ZM17.5 22.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                </path>
                                <path fill="currentColor"
                                    d="M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                </path>
                            </svg>
                            <p class="text-[10px] font-light dark:text-[#d4d4d5]">
                                <span>VIP Level : </span>
                                <span>Regular User</span>
                            </p>
                        </div> -->
                    </div>
                </div>

            </div>


            <div class="flex flex-col lg-sm:flex-row gap-5 mt-5">
                <div class="flex lg-sm:flex-col lg-sm:justify-normal justify-between lg-sm:items-start items-center">
                    <h4 class="text-[#bebec0] text-sm">Email</h4>

                    <a href="">
                        <p class="leading-tight flex items-center gap-1 text-sm mt-1">
                            <span>{{ maskedEmail }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5.54 19.52c-.61 0-1.18-.21-1.59-.6-.52-.49-.77-1.23-.68-2.03l.37-3.24c.07-.61.44-1.42.87-1.86l8.21-8.69c2.05-2.17 4.19-2.23 6.36-.18s2.23 4.19.18 6.36l-8.21 8.69c-.42.45-1.2.87-1.81.97l-3.22.55c-.17.01-.32.03-.48.03ZM15.93 2.91c-.77 0-1.44.48-2.12 1.2l-8.21 8.7c-.2.21-.43.71-.47 1l-.37 3.24c-.04.33.04.6.22.77.18.17.45.23.78.18l3.22-.55c.29-.05.77-.31.97-.52l8.21-8.69C19.4 6.92 19.85 5.7 18.04 4c-.8-.77-1.49-1.09-2.11-1.09Z">
                                </path>
                                <path fill="currentColor"
                                    d="M17.34 10.95h-.07a6.86 6.86 0 0 1-6.11-5.78c-.06-.41.22-.79.63-.86.41-.06.79.22.86.63a5.372 5.372 0 0 0 4.78 4.52c.41.04.71.41.67.82-.05.38-.38.67-.76.67ZM21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                </path>
                            </svg>
                        </p>
                    </a>
                </div>
                <div class="flex lg-sm:flex-col lg-sm:justify-normal justify-between lg-sm:items-start items-center">
                    <h4 class="text-[#bebec0] text-sm">Phone Number</h4>
                    <a href="">
                        <p class="leading-tight flex items-center text-sm mt-1">
                            <span>{{ !user.phone ? "Not Configured" : user.phone }}</span>
                            <i class="fa fa-angle-right text-[1.1rem] ml-1"></i>
                        </p>
                    </a>
                </div>

                <div class="flex lg-sm:flex-col lg-sm:justify-normal justify-between lg-sm:items-start items-center">
                    <h4 class="text-[#bebec0] text-sm">Security Level</h4>
                    <a href="">
                        <p class="leading-tight flex items-center text-sm mt-1"
                            :style="{ color: securityLevel === 'Low' ? '#ff6961' : securityLevel === 'Medium' ? '#ffab61' : '#8bff61' }">
                            <span>{{ securityLevel }}</span>
                            <i class="fa fa-angle-right text-[1.1rem] ml-1"></i>
                        </p>

                    </a>
                </div>

                <div class="flex lg-sm:flex-col lg-sm:justify-normal justify-between lg-sm:items-start items-center">
                    <h4 class="text-[#bebec0] text-sm w-1/2">Login Info</h4>

                    <!-- <a href=""> -->
                    <p class="leading-tight text-right text-sm mt-1 min-h min-w">
                    <p class="leading-tight lg-sm:text-right">{{ userIPAddress }} || {{ simplifiedDevice }} || {{ simplifiedBrowser }}</p>
                    </p>
                    <!-- </a> -->

                </div>
            </div>

        </div>
</div></template>