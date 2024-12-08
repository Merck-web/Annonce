<template>
    <div class="card-agency">
        <img
            :src="`/agency/${item.photo}`"
            :alt="`Отзыв ${item.name}`"
            class="card-agency__photo pc"
        />
        
        <div class="card-agency__content">
            <div class="card-agency__header d-flex">
                <img
                    :src="`/agency/${item.photo}`"
                    :alt="`Отзыв ${item.name}`"
                    class="card-agency__photo mobile"
                />
                
                <div
                    class="card-agency__name"
                >
                    <p>{{ item.name }}</p>
                    
                    <ApproveRow
                        class="card-agency__approve"
                        :document-approve="item.documentApprove"
                        :testimonials="item.testimonials"
                        :rating="item.rating"
                        document-approve-short
                    />
                </div>
            </div>
            
            <p
                class="card-agency__text splice-3"
            >
                {{ truncatedText(item.text, 21) }}
            </p>
        </div>
    </div>
</template>

<script
    setup
>

const { truncatedText } = useHelpers();

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
>
@import "@/assets/css/variables";

.card-agency {
    border-radius: 20px;
    padding:       20px;
    max-width:     560px;
    width:         100%;
    max-height:    180px;
    background:    #f5f5f5;
    
    display:       flex;
    
    
    @media (max-width: $miniTablet) {
        
        border-radius: 16px;
        padding:       16px;
        max-width:     360px;
        max-height:    210px;
    }
    
    &__photo {
        width:         140px;
        height:        140px;
        border-radius: 20px;
        margin-right:  20px;
        
        &.pc {
            @media (max-width: $miniTablet) {
                display: none;
            }
        }
        
        &.mobile {
            display: none;
            
            @media (max-width: $miniTablet) {
                display: block;
            }
        }
        
        @media (max-width: $miniTablet) {
            border-radius: 10px;
            width:         48px;
            height:        48px;
            margin-right:  12px;
            margin-bottom: 0;
        }
    }
    
    &__name {
        
        > p {
            font-weight:   600;
            font-size:     24px;
            line-height:   117%;
            margin-bottom: 4px;
            
            @media (max-width: $miniTablet) {
                font-size:   20px;
                line-height: 120%;
            }
        }
        
        
    }
    
    &__approve {
        margin-bottom: 12px;
        @media (max-width: $miniTablet) {
            height:        20px;
            margin-bottom: 0;
        }
    }
    
    &__text {
        font-weight: 400;
        font-size:   15px;
        line-height: 160%;
        max-height:  72px;
        grid-area:   text;
        
        @media (max-width: $miniTablet) {
            margin-top:         8px;
            max-height:         96px;
            -webkit-line-clamp: 4;
        }
    }
}
</style>