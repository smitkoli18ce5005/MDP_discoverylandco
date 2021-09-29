<template>
    <div class="image-footer-div">
        <img v-if="footerData.calledBy = 'AboutDLC'" :src="getForAboutDLC(footerData.picName)" alt="">
        <div class="image-footer-content">
            <h1 v-text="footerData.heading"></h1>
            <button class="btn btn-border-1">Explore</button>
        </div>
    </div>
</template>

<script type='module' src='./ImageFooter.ts'></script>