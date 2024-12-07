<template>
    <div class="card-market">
        <div class="card-market__img">
            <img
                :src="`/market/${item.src}`"
                :alt="`Картинка ${item.label}`"
            />
            
            <div class="img-info d-flex items-center justify-start">
                <div class="img-info__reviews">
                    <img
                        src="/public/icons/eye.svg"
                        alt="Просмотры"
                    />
                    {{ item.reviews }}
                </div>
                
                <div class="img-info__days">
                    <img
                        src="/public/icons/calendar.svg"
                        alt="Дней"
                    />
                    {{ declineWord(item.days, 'день', 'дня', 'дней') }}
                </div>
            </div>
        </div>
        
        <p class="card-market__amount">
            {{ addSpacesToNumber(item.amount) }} ₽
        </p>
        
        <p class="card-market__label">
            {{ item.label }}
        </p>
        
        <div class="card-market__info">
            <p
                v-if="item.status === 1"
                class="success"
            >
                Объявление продвигается
            </p>
            
            <div
                v-else-if="item.status === 2"
                class="action d-flex justify-between items-center"
            >
                <span class="text-grey">
                    Увеличьте количество просмотров
                </span>
                
                <button>Продвигать</button>
            </div>
            
            <p
                v-else-if="item.status === 3"
                class="negative"
            >
                Объявление скрыто
            </p>
        </div>
    </div>
</template>

<script
    setup
>

import { useHelpers } from '~/composables/useHelpers.js';

const { declineWord, addSpacesToNumber } = useHelpers();

defineProps({
    item: {
        type:    Object,
        default: () => {
        },
    },
});
</script>

<style
    lang="scss"
    scoped
>
.card-market {
    max-width: 430px;
    width:     100%;
    
    &__img {
        margin:        8px 8px 16px;
        height:        322px;
        position:      relative;
        border-radius: 20px;
        
        > img {
            border-radius: 20px;
        }
    }
    
    .img-info {
        position: absolute;
        top:      8px;
        left:     8px;
        
        &__reviews,
        &__days {
            border-radius:   12px;
            padding:         4px 8px;
            background:      rgba(27, 29, 34, 0.6);
            
            font-weight:     500;
            font-size:       13px;
            line-height:     154%;
            text-align:      center;
            color:           #f5f5f5;
            
            display:         flex;
            justify-content: center;
            align-items:     center;
        }
        
        &__reviews {
            margin-right: 4px;
        }
        
        &__reviews img {
            width:        24px;
            height:       24px;
            margin-right: 9px;
        }
        
        &__days img {
            width:        24px;
            height:       24px;
            margin-right: 11px;
        }
    }
    
    &__amount {
        font-weight:   500;
        font-size:     17px;
        line-height:   118%;
        margin-bottom: 12px;
    }
    
    &__label {
        position:       relative;
        font-weight:    500;
        font-size:      15px;
        line-height:    160%;
        padding-bottom: 9px;
        
        &::after {
            position:   absolute;
            content:    '';
            bottom:     0;
            left:       0;
            width:      100%;
            height:     1px;
            background: #e8e8e8;
        }
    }
    
    &__info {
        padding: 12px 4px 4px 4px;
        height:  56px;
        
        .success {
            font-weight:     400;
            font-size:       15px;
            line-height:     133%;
            text-align:      center;
            color:           #337566;
            display:         flex;
            justify-content: center;
            align-items:     center;
            height:          100%;
        }
        
        .negative {
            font-weight:     400;
            font-size:       15px;
            line-height:     133%;
            text-align:      center;
            color:           #bd3223;
            display:         flex;
            justify-content: center;
            align-items:     center;
            height:          100%;
        }
        
        .action {
            padding: 0 4px;
            
            span {
                font-weight: 400;
                font-size:   13px;
                line-height: 138%;
            }
            
            button {
                font-weight:   500;
                font-size:     15px;
                line-height:   160%;
                text-align:    center;
                color:         #f5f5f5;
                border-radius: 12px;
                padding:       8px 12px;
                width:         112px;
                height:        40px;
                background:    #337566;
            }
        }
    }
}
</style>