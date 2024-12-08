<template>
    <div class="about-page">
        <NuxtLayout>
            <div class="about-page__container">
                
                <HeritageBlock
                    class="about-page__heritage"
                    document-approve-short
                />
                
                <div class="about-page__company">
                    <p class="about-page__title">
                        О компании
                    </p>
                    
                    <p class="about-page__text">
                        Копкой занимаемся 15 лет. Все&nbsp;началось с хобби и плавно переросло в любимую работу. Работаем с&nbsp;профессиональной техникой.
                    </p>
                </div>
                <div class="about-page__time">
                    <p class="d-flex full-width justify-between">
                        <span class="about-page__title">Режим работы</span>
                        
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                                fill="#0F0F0F"
                            />
                        </svg>
                    </p>
                    
                    <p class="about-page__text">
                        Сегодня с 8:00 до 23:00
                    </p>
                </div>
                <div class="about-page__map">
                    <div class="d-flex">
                        <div class="about-page__map-text">
                            <p class="about-page__title">
                                Местоположение
                            </p>
                            
                            <p class="about-page__text">
                                Ростов на Дону, Воронежская ул., 42А
                                <nobr>корп. 12</nobr>
                            </p>
                        </div>
                        
                        <img
                            src="/public/about/map-pc.png"
                            alt="Карта для ПК"
                        >
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script
    setup
    lang="ts"
>

import HeritageBlock from '~/components/HeritageBlock.vue';
</script>

<style
    scoped
    lang="scss"
>
@import "@/assets/css/variables";

.about-page {
    &__container {
        max-width:             560px;
        width:                 100%;
        margin:                32px auto 64px;
        
        display:               grid;
        grid-template-columns: 1fr;
        gap:                   12px;
        
        @media (max-width: $miniTablet) {
            gap:    8px;
            margin: 24px auto 48px;
        }
    }
    
    &__company, &__map-text, &__time {
        padding: 20px;
        
        @media (max-width: $miniTablet) {
            padding: 16px;
        }
    }
    
    &__title {
        font-weight:   600;
        font-size:     24px;
        line-height:   117%;
        margin-bottom: 8px;
        
        @media (max-width: $miniTablet) {
            font-size:   20px;
            line-height: 120%;
        }
    }
    
    &__text {
        font-weight: 400;
        font-size:   17px;
        line-height: 165%;
        @media (max-width: $miniTablet) {
            font-size:   15px;
            line-height: 160%;
        }
    }
    
    &__time {
        background:    #f5f5f5;
        opacity:       0.3;
        border-radius: 16px;
    }
    
    &__map {
        .about-page__text {
            max-width: 309px;
            width:     100%;
            color:     #337566;
            
            @media (max-width: $miniTablet) {
                max-width: 100%;
            }
        }
        
        > div {
            @media (max-width: $miniTablet) {
                flex-direction: column-reverse;
            }
        }
        
        img {
            @media (max-width: $miniTablet) {
                content: url('/public/about/map-mobile.png');
            }
            
            @media (max-width: 360px) {
                max-width: 360px;
                width:     100%;
            }
        }
    }
    
    &__heritage {
        display: none !important;
        
        @media (max-width: $mobile) {
            display:       flex !important;
            margin-bottom: 8px;
        }
    }
}
</style>