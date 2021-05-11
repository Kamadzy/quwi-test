<template>
    <div class="app">
        <NavBar />
        <router-view />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar';
export default {
    name: 'App',
    components: {
        NavBar,
    },
};
</script>

<style>
.app {
    font-family: 'Roboto', sans-serif;
    /* background: rgb(244, 244, 244); */
}
</style>
