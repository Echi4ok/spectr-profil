<script setup>
import { onMounted } from 'vue';
import BodyBackgroundVideo from './BodyBackgroundVideo.vue';
import BodyProducts from './BodyProducts.vue' 
import BodyPartners from './BodyPartners.vue';
import BodyServices from './BodyServices.vue'


onMounted(() => {
    // video
})
</script>

<template>

    <div class="">
        <BodyBackgroundVideo/>
    
        <BodyProducts/>
        <BodyPartners/>
        <BodyServices/>
    </div>

</template>