<template>
    <div v-if="gradientData.isLeftAligned" class="image-gradient-main-div">
        <div :class="gradientData.imageGradientClass">
            <img :src="getForExperience(gradientData.picName)" alt="">
            <div :class="gradientData.gradientContentClass">
                <h1 v-text="gradientData.heading"></h1>
                <p v-text="gradientData.paraContent"></p>
                <button class="btn1 btn-border-2">Explore</button>
            </div>
            <div :class="gradientData.gradientClass"></div>
        </div>
    </div>
</template>
<script type='module' src='./ImageGradient.ts'></script>