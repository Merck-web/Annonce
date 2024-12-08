<template>
    <div class="heritage">
        <img
            class="head-logo"
            src="/public/images/nasledie.png"
            alt="Лого наследия"
        >
        
        <h1 class="head-title">Наследие</h1>
        
        <ApproveRow
            v-if="Object.keys(approveData).length"
            class="head-list items-center justify-center"
            :document-approve="approveData.documentApprove"
            :rating="approveData.rating"
            :testimonials="approveData.testimonials"
            :document-approve-short="documentApproveShort"
        />
    </div>
</template>

<script
    setup
>
const { fetchData } = useFetchData();

defineProps({
    documentApproveShort: { type: Boolean, default: false },
});

const approveData = ref({});

onMounted(async () => {
    approveData.value = await fetchData('rating')
})
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