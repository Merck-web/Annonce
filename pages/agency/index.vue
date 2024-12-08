<template>
    <div class="agency-page">
        <NuxtLayout>
            <ul class="agency-list">
               <li
                   v-for="(item, index) in mainStore.getAgencyData"
                   :key="index"
                   class="agency-list__item"
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

definePageMeta({
    middleware: [ 'auth' ],
})

const { fetchData } = useFetchData();

onMounted(async () => {
    mainStore.agencyData = await fetchData('agencyData');
});
</script>
