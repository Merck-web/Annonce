<template>
    <NuxtLayout>
        <div class="main-page">
            <div class="row items-center justify-center q-px-md">
                <q-select
                    v-model="model"
                    :options="options"
                    outlined
                    option-value="label"
                    emit-value
                    class="filter-select"
                    popup-content-class="filter-select-menu"
                    dropdown-icon="img:icons/select-dropdown.svg"
                >
                    <template
                        #option="scope"
                    >
                        <q-item
                            v-bind="scope.itemProps"
                            :disable="!scope.opt.id"
                            :class="scope.opt.className"
                        >
                            <div class="row items-center justify-between full-width">
                                <span>{{ scope.opt.label }}
                                    <span
                                        v-if="scope.opt.count"
                                        class="color-grey"
                                    >
                                        {{ scope.opt.count }}
                                    </span>
                                </span>
                                
                                <img
                                    v-if="scope.opt.label === model"
                                    src="/icons/selected.svg"
                                    alt="Выбранный элемент"
                                >
                            </div>
                        </q-item>
                    </template>
                </q-select>
            </div>
            
            <div class="market-list">
                <CardMarket
                    v-for="(item, index) in mainStore.getMarketData"
                    :key="index"
                    :item="item"
                />
            </div>
        </div>

    </NuxtLayout>
</template>

<script
    setup
>
import CardMarket from '~/pages/index/components/CardMarket.vue';
import { useMainStore } from '~/store/useMainStore.js';

const model = ref('Все товары и услуги');
const options = [
    {
        id:        1,
        label:     'Все товары и услуги',
        className: 'all',
    },
    {
        id:        null,
        label:     'Категория 1',
        className: 'title',
    },
    {
        id:        2,
        label:     'Гробы',
        count:     5,
        className: 'grob',
    },
    {
        id:        3,
        label:     'Урны',
        count:     12,
        className: 'urns',
    },
    {
        id:        null,
        label:     'Категория 2',
        className: 'title',
    },
    {
        id:        4,
        label:     'Тапки',
        count:     2,
        className: 'tapki',
    },
    {
        id:        5,
        label:     'Покрывало',
        count:     1,
        className: 'pocrivalo',
    },
];

const mainStore = useMainStore();
</script>

<style scoped>

</style>