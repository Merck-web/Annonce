<template>
        <button
            class="header-burger cursor-pointer"
            @click="mainStore.changeBurgerState(!mainStore.getBurgerState)"
        >
            <span
                class="header-burger__line"
                :class="computedClass"
            />
        </button>
</template>

<script
    setup
>

import { useMainStore } from '~/store/useMainStore.js';
import { computed } from 'vue';

const mainStore = useMainStore();

const computedClass = computed(() => mainStore.getBurgerState ? 'is-active' : '');
</script>

<style scoped>

</style>