<!-- PROTECT -->

<script setup lang="ts">
import toggleThemeMode, { getTheme } from '~/helpers/themeContext';

const { logout } = useAuth()

const app = useAppConfig()
const userStore = useUserStore()
const user = computed(() => userStore.getProfile)
const logoUrl = computed(() => getLogoUrl())
const { toast } = useUtils()
const router = useRouter()
async function Logout() {
  const response = await logout()
  userStore.clearProfile()
  userStore.setIsLoggedIn(false)
  router.push({ name: 'login' })
  toast.response(response)
}


const getLogoUrl = () => {
  switch (route.path.split('/')[1]) {
    case 'trade':
      return '/user'
    case 'binary':
      return '/user/binary'
    case 'forex':
      return '/user/forex'
    case 'ai-trading':
      return '/user/ai-trading'
    default:
      return '/user'
  }
}

const maskedEmail = computed(() => {
  const [username, domain] = user.value.email.split('@');
  const maskedUsername = username.slice(0, 3) + '***' + username.slice(-1);
  return `${maskedUsername}@${domain}`;
});

const navbarData: Array<{
    name: string,
    caret?: boolean,
    href?: string,
    dropdown?: Array<{
        icon: string,
        sub: string,
        title: string,
        href: string
    }>
}> = [
        {
            name: "Binary",
            href: "/binary/BTC/USDT"
        },
        {
            name: "Trade",
            caret: true,
            dropdown: [
                {
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 15.75c-.18 0-.38-.01-.57-.02a.751.751 0 0 1-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 0 1-.69-.7c-.01-.19-.02-.38-.02-.57 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25ZM9.75 8.36c2.98.52 5.37 2.91 5.89 5.89a5.755 5.755 0 0 0 5.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61Z"></path><path fill="currentColor" d="M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 0 1 7.82-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75a5.757 5.757 0 0 0 5.73-6.22c-.22-2.77-2.48-5.04-5.27-5.26-.14-.01-.3-.02-.46-.02ZM3 7.34a1.737 1.737 0 0 1-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h2.59a1.752 1.752 0 0 1 1.24 2.99L4.24 6.83c-.34.33-.78.51-1.24.51Zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.1.21.15.23.06.02.17.05.27-.05l2.59-2.59c.1-.1.08-.21.05-.27-.03-.06-.09-.15-.23-.15H3v-.01ZM20.999 22.749h-2.59a1.752 1.752 0 0 1-1.24-2.99l2.59-2.59c.5-.5 1.25-.65 1.91-.38.66.27 1.08.91 1.08 1.62v2.59c0 .96-.79 1.75-1.75 1.75Zm-.01-4.59a.24.24 0 0 0-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27.03.06.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23a.36.36 0 0 0-.11-.02Z"></path></svg>
                    `,
                    title: "Spot",
                    sub: "Trade with competitive fees via advanced charting tools.",
                    href: "/trade/BTC/USDT"
                },
            ]
        },
        {
            name: "Derivatives",
            caret: true,
            dropdown: [
                {
                    icon: `
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.52 16.258c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.05-3.05c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.05 3.05c-.15.14-.34.22-.53.22Z"></path><path fill="currentColor" d="M9.6 16.29c-.19 0-.38-.07-.53-.22l-3.05-3.05a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.05 3.05c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1ZM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1ZM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01ZM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01Z"></path><path fill="currentColor" d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75v-2c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 5.43-2.32 7.75-7.75 7.75Zm-6-16c-4.61 0-6.25 1.64-6.25 6.25v2c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-4.61-1.64-6.25-6.25-6.25H9Z"></path><path fill="currentColor" d="M12.99 6.75h-1c-.96 0-1.75-.79-1.75-1.75s.78-1.75 1.74-1.75c.16 0 .27-.11.28-.25l.01-1.01c.01-.41.34-.74.75-.74h.01c.41.01.75.35.74.76l-.01 1.01c-.01.95-.8 1.73-1.75 1.73-.16 0-.26.11-.26.25s.11.25.25.25h1c.41 0 .75.34.75.75s-.35.75-.76.75Z"></path></svg>
                        `,
                    title: "Demo Trading",
                    sub: "Practice your strategies in Demo.",
                    href: "/binary/BTC/USDT?isPractice=true"
                },
            ]
        },
        {
            name: "Investment",
            href: "/user/invest"
        },
    ]

const assets = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"></path><path fill="currentColor" d="M14 17.75h-4c-2.07 0-3.75-1.68-3.75-3.75v-4c0-2.07 1.68-3.75 3.75-3.75h4c2.07 0 3.75 1.68 3.75 3.75v4c0 2.07-1.68 3.75-3.75 3.75Zm-4-10c-1.24 0-2.25 1.01-2.25 2.25v4c0 1.24 1.01 2.25 2.25 2.25h4c1.24 0 2.25-1.01 2.25-2.25v-4c0-1.24-1.01-2.25-2.25-2.25h-4Z"></path><path fill="currentColor" d="M12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75Z"></path><path fill="currentColor" d="M17 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path></svg>`,
        value: "Dashboard",
        href: "/user"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.25 10.8c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"></path><path fill="currentColor" d="M11.25 5.8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM11.25 8.8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.96 10.321l-2.804-4.876a.756.756 0 0 1 .222-1.038.755.755 0 0 1 1.037.223l2.803 4.876a.755.755 0 0 1-.222 1.037.756.756 0 0 1-1.037-.222Z"></path><path fill="currentColor" d="m14.416 10.321 2.803-4.876a.756.756 0 0 0-.222-1.038.755.755 0 0 0-1.037.223l-2.804 4.876a.755.755 0 0 0 .223 1.037.756.756 0 0 0 1.037-.222Z"></path><path fill="currentColor" d="M17.56 17.97H6.44c-3.98 0-5.19-1.21-5.19-5.19V6.44c0-3.98 1.21-5.19 5.19-5.19h11.11c3.98 0 5.19 1.21 5.19 5.19v6.33c.01 3.99-1.2 5.2-5.18 5.2ZM6.44 2.75c-3.14 0-3.69.55-3.69 3.69v6.33c0 3.14.55 3.69 3.69 3.69h11.11c3.14 0 3.69-.55 3.69-3.69V6.44c0-3.14-.55-3.69-3.69-3.69H6.44Z"></path><path fill="currentColor" d="M12 22.75c-.41 0-.75-.34-.75-.75v-4.78c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75ZM22 13.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path><path fill="currentColor" d="M16.5 22.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path></svg>`,
        value: "Invest",
        href: "/user/invest"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.882 14.99c-.19 0-.38-.07-.53-.22l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.03 2.03 2.03-2.03c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22Z"></path><path fill="currentColor" d="M11.88 14.924c-.41 0-.75-.34-.75-.75V4.004c0-.41.34-.75.75-.75s.75.34.75.75v10.17c0 .41-.34.75-.75.75Z"></path><path fill="currentColor" d="M12 20.928c-5.15 0-8.75-3.6-8.75-8.75 0-.41.34-.75.75-.75s.75.34.75.75c0 4.27 2.98 7.25 7.25 7.25s7.25-2.98 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.15-3.6 8.75-8.75 8.75Z"></path></svg>`,
        value: "Deposit",
        href: "/user/wallets/spot"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.442 7.249c-.19 0-.38-.07-.53-.22l-2.03-2.03-2.03 2.03c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"></path><path fill="currentColor" d="M11.88 14.93c-.41 0-.75-.34-.75-.75V4.01c0-.41.34-.75.75-.75s.75.34.75.75v10.17c0 .42-.34.75-.75.75Z"></path><path fill="currentColor" d="M12 20.75c-5.15 0-8.75-3.6-8.75-8.75 0-.41.34-.75.75-.75s.75.34.75.75c0 4.27 2.98 7.25 7.25 7.25s7.25-2.98 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.15-3.6 8.75-8.75 8.75Z"></path></svg>`,
        value: "Withdrawal",
        href: "/user/wallets/spot"
    }
]

const userProfile = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM12 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 12 2.75ZM12.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z"></path></svg>`,
        value: "Dashboard",
        href: "/user"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM12 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 12 2.75ZM12.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z"></path></svg>`,
        value: "Profile",
        href: "/user/profile-edit"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.63c-1.32 0-2.4-1.08-2.4-2.4v-2.47c0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4v2.47a2.4 2.4 0 0 1-2.4 2.4Zm0-5.76c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9Z"></path><path fill="currentColor" d="M12 18.82c-3.17 0-5.75-2.58-5.75-5.75v-2.14c0-3.17 2.58-5.75 5.75-5.75 2.96 0 5.42 2.22 5.72 5.16a.75.75 0 0 1-.67.82.744.744 0 0 1-.82-.67A4.236 4.236 0 0 0 12 6.68a4.26 4.26 0 0 0-4.25 4.25v2.14A4.26 4.26 0 0 0 12 17.32c2.2 0 4.06-1.72 4.24-3.91a.752.752 0 1 1 1.5.12c-.24 2.97-2.76 5.29-5.74 5.29ZM22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75ZM2 9.75c-.41 0-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75ZM17 22.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75ZM9 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path></svg>`,
        value: "Security",
        href: "/user/profile-edit/security"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.96 21.32c-.19 0-.38-.07-.53-.22l-1.52-1.52a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.99.99L18.47 17c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22ZM12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c-.01-1.38.53-2.68 1.51-3.66a5.16 5.16 0 0 1 3.67-1.53c2.86 0 5.19 2.33 5.19 5.19 0 2.81-2.19 5.08-4.99 5.18h-.03Zm-.17-8.87c-.99 0-1.91.39-2.61 1.08-.69.7-1.07 1.62-1.07 2.6 0 2 1.56 3.62 3.55 3.68.06-.01.19-.01.32 0 1.97-.09 3.5-1.7 3.5-3.68 0-2.02-1.66-3.68-3.69-3.68Z"></path><path fill="currentColor" d="M11.99 22.56c-2.04 0-3.97-.53-5.43-1.51-1.39-.93-2.15-2.2-2.15-3.57 0-1.37.77-2.63 2.15-3.55 2.99-2 7.85-2 10.84 0 .34.23.44.7.21 1.04-.23.35-.7.44-1.04.21-2.49-1.66-6.69-1.66-9.18 0-.96.64-1.48 1.45-1.48 2.3 0 .85.52 1.68 1.48 2.32 1.21.81 2.84 1.25 4.59 1.25a.755.755 0 0 1 .01 1.51Z"></path></svg>`,
        value: "KYC",
        href: "/user/kyc"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.16 11.62h-.08a.543.543 0 0 0-.18 0C6 11.53 3.81 9.25 3.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM9 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.06-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 9 2.75ZM16.54 11.75c-.03 0-.06 0-.09-.01-.41.04-.83-.25-.87-.66-.04-.41.21-.78.62-.83.12-.01.25-.01.36-.01 1.46-.08 2.6-1.28 2.6-2.75 0-1.52-1.23-2.75-2.75-2.75a.74.74 0 0 1-.75-.74c0-.41.34-.75.75-.75a4.26 4.26 0 0 1 4.25 4.25c0 2.3-1.8 4.16-4.09 4.25h-.03ZM9.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0ZM18.34 20.75c-.35 0-.66-.24-.73-.6a.76.76 0 0 1 .58-.89c.63-.13 1.21-.38 1.66-.73.57-.43.88-.97.88-1.54 0-.57-.31-1.11-.87-1.53-.44-.34-.99-.58-1.64-.73a.756.756 0 0 1-.57-.9c.09-.4.49-.66.9-.57.86.19 1.61.53 2.22 1 .93.7 1.46 1.69 1.46 2.73s-.54 2.03-1.47 2.74c-.62.48-1.4.83-2.26 1-.06.02-.11.02-.16.02Z"></path></svg>`,
        value: "Referral",
        href: "#"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75v-.5c0-.41.34-.75.75-.75.96 0 1.75-.79 1.75-1.75S2.96 10.25 2 10.25c-.41 0-.75-.34-.75-.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75c.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75ZM2.75 15.16c.02 3.44.73 4.09 4.25 4.09h10c3.34 0 4.15-.59 4.24-3.59a3.25 3.25 0 0 1-2.49-3.16c0-1.53 1.07-2.82 2.5-3.16V9c0-3.57-.67-4.25-4.25-4.25H7c-3.52 0-4.23.65-4.25 4.09 1.43.34 2.5 1.63 2.5 3.16 0 1.53-1.07 2.82-2.5 3.16Z"></path><path fill="currentColor" d="M10 7.25c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75ZM10 14.58c-.41 0-.75-.34-.75-.75v-3.67c0-.41.34-.75.75-.75s.75.34.75.75v3.67c0 .42-.34.75-.75.75ZM10 20.75c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75Z"></path></svg>`,
        value: "Support Ticket",
        href: "/user/support"
    },
]



const close = ref(false)
const closeUser = ref(false)


function closeSideMethod(value: boolean) {
    close.value = value
}

function closeSideUserMethod(value: boolean) {
    closeUser.value = value
}

const verified = ref(false)
</script>



<template>
    <header
        class="flex items-center justify-between px-5 p-2 bg-white border-b dark:border-b-0 dark:bg-dark2  z-10 fixed left-0 top-0 w-full transition-colors duration-200">
        <div class="flex items-center gap-5">
            <figure class="leading-[3]">
                <Logo style="width:8rem;" class="h-10" />
            </figure>

            <div class="lg:flex gap-5 hidden text-dark dark:text-white">
                <figure class="group leading-[3.5] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="none" viewBox="0 0 24 24"
                        class="">
                        <path fill="currentColor"
                            d="M19 10.75h-2c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-2ZM7 22.75H5c-2.42 0-3.75-1.33-3.75-3.75v-2c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-2c0-1.58-.67-2.25-2.25-2.25H5Z">
                        </path>
                        <path fill="#FCD535"
                            d="M6 10.75c-2.62 0-4.75-2.13-4.75-4.75S3.38 1.25 6 1.25 10.75 3.38 10.75 6 8.62 10.75 6 10.75Zm0-8C4.21 2.75 2.75 4.21 2.75 6S4.21 9.25 6 9.25 9.25 7.79 9.25 6 7.79 2.75 6 2.75ZM18 22.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25Z">
                        </path>
                    </svg>
                    <CommonUtilsSpinCaret svg-class="text-dark dark:text-white" />
                </figure>

                <ul class="flex gap-5">
                    <li v-for="(data, key) in navbarData" :key="key" class="relative group">
                        <a :href="data.href" class="flex items-center gap-1 leading-[3.5rem] cursor-pointer">
                            <div>{{ data.name }}</div>
                            <CommonUtilsSpinCaret v-if="data.caret" svg-class="text-dark dark:text-white" />
                            <CommonUtilsDropdownDashboard :dropdownData="data.dropdown" v-if="data.caret" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <!-- right side -->

        <div class="flex  items-center gap-3 text-navColor lg:divide-x divide-navColor/20">
            <div class="items- gap-2 hidden lg:flex">
                <div class="group relative leading-[3.5] ">
                    <div class="flex items-center gap-1 dark:text-navColor px-[5px] text-black">
                        <span>Assets</span>
                        <CommonUtilsSpinCaret svg-class="dark:text-navColor text-black" />
                    </div>

                    <CommonUtilsDynamicDropdown
                        class="absolute top-[50px] -left-[10rem] w-[220px] rounded-sm py-2 bg-white shadow-md group innerchild2 dark:bg-[#272729] dark:shadow-none">
                        <ul>
                            <li v-for="(data, key) in assets" :key="key"
                                class="flex gap-2 items-center p-3 leading-tight group-[.innerchild2]:hover:text-main hover:bg-[#f5f5f5] text-black bg-white dark:text-white dark:bg-[#272729] dark:hover:bg-dropdownHover">
                                <div class="" v-html="data.icon"></div>
                                <div>
                                    <a :href="data.href" class="text-black dark:text-[#d4d4d5] font-light text-sm">
                                        {{ data.value }}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </CommonUtilsDynamicDropdown>
                </div>

                <div class="group relative leading-[3.5rem] flex items-center border-0 dark:text-navColor text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="none" viewBox="0 0 24 24"
                        class="navbar-module_nav_profile_icon__jqTiJ">
                        <path fill="currentColor"
                            d="M12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM12 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 12 2.75ZM12.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z">
                        </path>
                    </svg>
                    <CommonUtilsDynamicDropdown
                        class="absolute top-[57.5px] -left-[15rem] min-w-[300px] rounded-sm bg-white shadow-lg group innerchild2 dark:bg-[#272729] dark:shadow-none">
                        <div class="px-5">
                            <div class="p-3 border-b dark:border-navColor/20">
                                <div class="flex items-center gap-4">
                                    <div class="min-w-[40px] min-h-[40px] rounded-full text-white flex items-center justify-center"
                                        style="background: linear-gradient(135deg, #7284da 50%, rgb(154, 160, 254) 50%);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2ZM17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="leading-tight">
                                        <div class="">
                                            <h2 class="font-light  text-md text-secondaryText leading-8">{{maskedEmail}}
                                            </h2>
                                        </div>


                                        <div class="flex items-center gap-2">
                                            <div class="bg-[rgb(237,237,237)] dark:bg-dark3sub dark:text-[#939393]  rounded-full px-2 text-xs text-[#9c9c9e] flex items-center  gap-1 py-[.15rem]"
                                                :class="!verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                                                <svg width="20" height="20" viewBox="0 0 16 17" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path class="text-[#e1e3e5]"
                                                        d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                                        fill="currentColor"></path>
                                                    <path class="kyc_svg_tick"
                                                        d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <p class="text-[10px] font-light dark:text-[#d4d4d5]">Email Verifed</p>
                                            </div>

                                         <!--   <div class="bg-[rgb(237,237,237)] dark:bg-dark3sub dark:text-[#939393]  flex px-2 items-center gap-1 text-secondaryText rounded-full py-1"
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
                                                    <span>Regular User</span>
                                                </p>
                                            </div> -->
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <ul class="py-3">
                            <a v-for="(data, key) in userProfile" :key="key" :href="data.href">
                                <li
                                    class="flex gap-2 items-center p-3 px-5  leading-tight group-[.innerchild2]:hover:text-main hover:bg-[#f5f5f5] text-black bg-white dark:text-white dark:bg-[#272729] dark:hover:bg-dropdownHover">
                                    <div class="" v-html="data.icon"></div>
                                    <div class="text-black dark:text-[#d4d4d5] font-light text-sm">
                                        {{ data.value }}
                                    </div>
                                </li>
                            </a>

                            <button class="lg:hidden block text-dark dark:text-white" @click="Logout">
                                <div
                                    class="p-3 px-5 mt-[2rem] group-[.innerchild2]:hover:text-main dark:hover:bg-dropdownHover">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.4-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.4.72-.82.68a.751.751 0 0 1-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01Z">
                                            </path>
                                            <path fill="currentColor"
                                                d="M15 12.75H3.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H15c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                            </path>
                                            <path fill="currentColor"
                                                d="M5.85 16.1c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 0 1 0-1.06l3.35-3.35c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.56 12l2.82 2.82c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z">
                                            </path>
                                        </svg>

                                        <span class="text-black dark:text-[#d4d4d5] font-light text-sm">
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </ul>
                    </CommonUtilsDynamicDropdown>
                </div>

            </div>

            <div class="items- gap-2 lg:hidden flex dark:text-navColor text-black" @click="closeSideUserMethod(true)">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="none" viewBox="0 0 24 24"
                        class="navbar-module_nav_profile_icon__jqTiJ">
                        <path fill="currentColor"
                            d="M12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM12 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 12 2.75ZM12.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z">
                        </path>
                    </svg>
                </button>
            </div>

            <button class="lg:hidden block text-dark dark:text-white" @click="closeSideMethod(true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 24 24" class=""
                    id="navbar_mobile_menu">
                    <path fill="currentColor"
                        d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                    </path>
                </svg>
            </button>

            <div class="lg:flex hidden items-center leading-[3.5] gap-3 text-dark dark:text-white">
                <button class=" px-2 h-full flex items-center" @click="toggleThemeMode()">
                    <svg class="dark:block hidden" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em"
                        fill="none" viewBox="0 0 24 24" id="mobile_navbar_theme">
                        <g fill="currentColor" clip-path="url(#sun-outline_svg__a)">
                            <path
                                d="M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z">
                            </path>
                        </g>
                        <defs>
                            <clipPath id="sun-outline_svg__a">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>

                    <!-- light icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="block dark:hidden" width="1.2em" height="1.2em"
                        fill="none" viewBox="0 0 24 24" id="navbar_theme">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z">
                        </path>
                    </svg>
                </button>

                <button class=" px-2 h-full flex items-center text-dark dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                            stroke-width="1.5"
                            d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z">
                        </path>
                        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                            d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
                            d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z">
                        </path>
                    </svg>
                </button>

                <div
                    class="group cursor-pointer relative leading-[3.5] h-full flex items-center px-2 text-dark dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none" viewBox="0 0 24 24"
                        id="navbar_download">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15.35 12.65 12 16l-3.35-3.35"></path>
                    </svg>

                    <CommonUtilsDynamicDropdown
                        class="absolute top-10 w-[220px] rounded-lg p-3 -right-4 bg-white shadow-md dark:bg-[#272729]">
                        <div class="flex items-center flex-col -translate-y">

                            <p class="text-xs mb-5">Scan to Download Zihux App</p>
                            <div
                                class="w-[150px] h-[150px] flex justify-center items-center rounded-md border mb-2 overflow-hidden">
                                <CommonUtilsQrcode />
                            </div>
                            <a href="" class="font-semibold text-main">View More &rarr;</a>
                        </div>
                    </CommonUtilsDynamicDropdown>
                </div>
            </div>
        </div>

        <CommonUtilsDashboardSidebar @close-sidebar="closeSideMethod" :closeSideBarState="close" />
        <CommonUtilsDashboardSidebarUser @close-user-sidebar="closeSideUserMethod" :closeUserSideBarState="closeUser" />
    </header>
</template>
