<template>
    <div class="agency-page">
        <NuxtLayout>
            <ul class="agency-list">
               <li
                   v-for="(item, index) in mainStore.getAgencyData"
                   class="agency-list__item"
                   :key="index"
               >
                   <CardAgency
                       :item="item"
                   />
               </li>
            </ul>
        </NuxtLayout>
    </div>
</template>

<script
    setup
>
import CardAgency from '~/pages/agency/components/CardAgency.vue';
import { useMainStore } from '~/store/useMainStore.js';

const mainStore = useMainStore();
</script>
