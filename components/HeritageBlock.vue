<template>
    <div class="heritage">
        <img
            class="head-logo"
            src="/public/images/nasledie.png"
            alt="Лого наследия"
        >
        
        <h1 class="head-title">Наследие</h1>
        
        <ApproveRow
            class="head-list items-center justify-center"
            document-approve
            :rating="4.3"
            :testimonials="19"
            :document-approve-short="documentApproveShort"
        />
    </div>
</template>

<script
    setup
>
defineProps({
    documentApproveShort: { type: Boolean, default: false },
});
</script>

<style
    scoped
    lang="scss"
>
.heritage {
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;
}
</style>