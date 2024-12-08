<template>
    <div>
        <NuxtPage/>
    </div>
</template>

<script
    setup
>
import { useMainStore } from '~/store/useMainStore.js';

const mainStore = useMainStore();
const controller = new AbortController();
const { signal } = controller;

onMounted(() => {
    nextTick(() => {
        mainStore.changeWindowWidth(window.innerWidth);
    });
    window.addEventListener('resize', () => {
        mainStore.changeWindowWidth(window.innerWidth);
    }, { signal });
});

onUnmounted(() => {
    controller.abort();
});
</script>
