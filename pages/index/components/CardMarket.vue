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
                
                <div class="img-info__actions">
                    Действия
                </div>
            </div>
        </div>
        
        <p class="card-market__amount">
            {{ addSpacesToNumber(item.amount) }} ₽
            
            <span
                v-if="item.thing"
                class="card-market__thing"
            >
                шт
            </span>
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
        margin:        4px 4px 16px;
        height:        322px;
        position:      relative;
        border-radius: 20px;
        
        @media (max-width: 480px) {
            margin: 0 0 16px;
            height: 328px;
        }
        
        > img {
            max-width:     414px;
            width:         100%;
            height:        100%;
            border-radius: 20px;
        }
    }
    
    .img-info {
        position: absolute;
        top:      8px;
        left:     8px;
        right:    8px;
        width:    calc(100% - 16px);
        
        &__reviews,
        &__days {
            border-radius:   12px;
            width:           73px;
            height:          32px;
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
        
        &__days {
            width: 83px;
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
            margin-right: 8px;
        }
        
        &__actions {
            display:       none;
            
            font-weight:   500;
            font-size:     13px;
            line-height:   154%;
            text-align:    center;
            border:        1px solid #dbdbdb;
            border-radius: 12px;
            padding:       6px 12px;
            width:         87px;
            height:        32px;
            background:    #f5f5f5;
            margin-left:   auto;
            
            @media (max-width: 480px) {
                display: block;
            }
        }
    }
    
    &__amount {
        font-weight:   500;
        font-size:     17px;
        line-height:   118%;
        margin-bottom: 12px;
        padding:       0 4px;
        
        @media (max-width: 480px) {
            margin-bottom: 4px;
        }
    }
    
    &__label {
        position:    relative;
        font-weight: 500;
        font-size:   15px;
        line-height: 160%;
        padding:     0 4px 9px;
        
        
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
    
    &__thing {
        font-weight: 500;
        font-size:   11px;
        line-height: 145%;
        margin-left: 4px;
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