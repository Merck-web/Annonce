<template>
    <q-footer
        class="footer"
    >
        <div class="container">
            <ul class="footer-list d-flex items-center">
                <li class="footer-list__item">© Annonce 2023</li>
                <li class="footer-list__item">
                    <router-link to="/documents">
                        Документы
                    </router-link>
                </li>
                <li class="footer-list__item">
                    <router-link to="/about">
                        О компании
                    </router-link>
                </li>
                
                <li class="footer-list__item seller">
                    <router-link to="/">
                        Продавцам
                    </router-link>
                </li>
                
                <li class="footer-list__item byer">
                    <router-link to="/">
                        Покупателям
                    </router-link>
                </li>
                
                <li class="footer-list__item set">
                    <router-link to="/">
                        Разместить объявление
                    </router-link>
                </li>
                
                <li class="footer-list__item rus">
                    <div class="d-flex items-center">
                        <img
                            src="/public/icons/russia.svg"
                            alt="Флаг России"
                            class="mr-xs"
                        >
                        <span class="font-normal color-default">Русский</span>
                    </div>
                </li>
            </ul>
        </div>
    </q-footer>
</template>

<script
    setup
    lang="ts"
>

</script>

<style scoped>

</style>