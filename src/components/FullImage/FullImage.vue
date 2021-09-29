<template>
    <div class="full-image-div">
        <img v-if="picName == 'full1.jpg'" class="border-image" :src="getImageUrl(picName)" alt="">
        <img v-else class="full-image" :src="getImageUrl(picName)" alt="">
    </div>
</template>
<script type='module' src="./FullImage.ts"></script>