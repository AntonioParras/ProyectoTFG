<template>
    <div>
        <HomeControllerComponent />
        <SettingsComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HomeControllerComponent from '@/components/HomeControllerComponent.vue';
import SettingsComponent from '@/components/SettingsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        components: { HomeControllerComponent, SettingsComponent, FooterComponent }
    }
</script>

<style lang="scss" scoped>

</style>