<template>
    <header
        class="header"
    >
        <div class="container full-height">
            <div class="d-flex justify-between items-center full-height">
                <div class="header-left d-flex items-center">
                    
                    <TheBurger/>
                    
                    <router-link
                        to="/"
                        class="header-left__logo-link"
                    >
                        <img
                            class="header-left__logo cursor-pointer"
                            src="/public/icons/logo.svg"
                            alt="Логотип"
                        />
                    </router-link>
                    
                    <button
                        class="header-left__categories d-flex items-center"
                    >
                        <img
                            src="/public/icons/union.svg"
                            alt="Все категории"
                            width="16px"
                            height="16px"
                        />
                        Все категории
                        
                        <q-menu>
                            <q-list>
                                <q-item
                                    clickable
                                    v-close-popup
                                >
                                    <q-item-section>Тут какие то все категории</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </button>
                    
                    <div class="header-left__basket">
                        <img
                            src="/public/icons/basket.svg"
                            alt="Корзина"
                        />
                        
                        <div class="header-left__basket--count">6</div>
                    </div>
                </div>
                
                <div class="header-right d-flex items-center">
                    <div class="header-right__city d-flex items-center">
                        <img
                            class="header-right__marker"
                            src="/public/icons/marker.svg"
                            alt="Маркер"
                            width="16px"
                            height="16px"
                        />
                        
                        <p>Ростов-на-Дону</p>
                    </div>
                    
                    <button class="header-right__create">Разместить объявление</button>
                    
                    <button
                        class="header-right__btn d-flex items-center"
                    >
                        <TheBurger/>
                        
                        <img
                            src="/public/images/man.png"
                            alt="Аватар"
                        />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script
    setup
>

import TheBurger from '~/components/TheBurger.vue';
</script>

<style scoped>

</style>