<template>
    <ul class="approve-list d-flex">
        <li
            v-if="documentApprove"
            class="head-list__item d-flex items-center justify-center"
        >
            <img
                src="/public/icons/check.svg"
                alt="Иконка проверены"
            />
            
            <template
                v-if="documentApproveShort && computedWidth < 600"
            >
                Проверен
            </template>
            <template
                v-else
            >
                Документы проверены
            </template>
        </li>
        <li
            v-if="rating > 0"
            class="head-list__item d-flex items-center justify-center"
        >
            <img
                src="/public/icons/star.svg"
                alt="Иконка рейтинга"
            />
            {{ rating }}
        </li>
        <li class="head-list__item d-flex items-center justify-center">
            <template
                v-if="testimonials > 0"
            >
                {{ declineWord(testimonials, 'отзыв', 'отзыва', 'отзывов') }}
            </template>
            <template
                v-else
            >
                Нет отзывов
            </template>
        </li>
    </ul>
</template>

<script
    setup
>

import { useHelpers } from '~/composables/useHelpers.js';
import { useMainStore } from '~/store/useMainStore.js';

const { declineWord } = useHelpers();

const mainStore = useMainStore();

defineProps({
    documentApprove:      { type: Boolean, default: false },
    documentApproveShort: { type: Boolean, default: false },
    rating:               { type: Number, default: 0 },
    testimonials:         { type: Number, default: 0 },
});

const computedWidth = computed(() => mainStore.getWindowWidth)
</script>

<style
    lang="scss"
    scoped
>
.approve-list {
    
    &__item {
        font-weight: 400;
        font-size:   15px;
        line-height: 133%;
        
        &:not(:first-child) {
            padding-left: 17px;
            position:     relative;
            
            &::before {
                content:     '•';
                position:    absolute;
                left:        0;
                width:       9px;
                margin-left: 4px;
            }
        }
        
        img {
            margin-right: 4px;
        }
    }
}
</style>