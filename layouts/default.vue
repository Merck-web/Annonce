<template>
    <q-layout
        class="layout-default"
    >
        <TheHeader/>
        
            <q-page-container>
                <section class="head">
                    <img
                        class="head-logo"
                        src="/public/images/nasledie.png"
                        alt="Лого наследия"
                    />
                    
                    <h1 class="head-title">Наследие</h1>
                    
                    <ul class="head-list d-flex items-center justify-center">
                        <li class="head-list__item d-flex items-center justify-center">
                            <img
                                src="/public/icons/check.svg"
                                alt="Иконка проверены"
                            />
                            Документы проверены
                        </li>
                        <li class="head-list__item d-flex items-center justify-center">
                            <img
                                src="/public/icons/star.svg"
                                alt="Иконка рейтинга"
                            />
                            4.7
                        </li>
                        <li class="head-list__item d-flex items-center justify-center">
                            19 отзывов
                        </li>
                    </ul>
                    
                    <button class="head-tell">
                        Показать номер телефона
                    </button>
                    
                    <nav class="head-navigation d-flex items-center">
                        <router-link to="/">Товары и услуги <span>29</span></router-link>
                        <router-link to="/agency">Агенты <span>7</span></router-link>
                        <router-link to="/about">О компании <span>12</span></router-link>
                    </nav>
                    
                </section>
                
                <q-separator class="head-separator"/>
                
                <main>
                    <slot/>
                    
                    <q-drawer
                        :model-value="mainStore.getBurgerState"
                        :width="200"
                        elevated
                        overlay
                        @update:model-value="val => mainStore.changeBurgerState(val)"
                    >
                        <q-scroll-area class="fit">
                            <div class="q-pa-sm">
                                <div
                                    v-for="n in 50"
                                    :key="n"
                                >
                                    Контент {{ n }} / 50
                                </div>
                            </div>
                        </q-scroll-area>
                    </q-drawer>
                </main>
            </q-page-container>
        
        <TheFooter/>
    </q-layout>
</template>

<script
    setup
>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';
import { useMainStore } from '~/store/useMainStore.js';

const mainStore = useMainStore();
</script>
