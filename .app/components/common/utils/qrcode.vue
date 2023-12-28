<template>
    <vue-qrcode :color="{}"  type="image/png" value="https://Zihux" class="w-full h-full" @change="onDataUrlChange" />
</template>


<script>
import VueQrcode from 'vue-qrcode'

export default {
    data() {
        return {
            dataUrl: null,
        }
    },
    components: {
        VueQrcode,
    },
    methods: {
        onDataUrlChange(dataUrl) {
            this.dataUrl = dataUrl
        },
    },
}
</script>