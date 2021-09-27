<template>
    <div class="welcome-our-worlds" style="Background-image: url('@/assets/Home/background_image.jpg')">
        <div class="welcome-grid">
            <div class="div-image1">
                <div class="welcome-text">
                    <h3 v-text="heading[0]"></h3>
                    <p v-text="heading[1]"></p>
                    <div class="welcome-para">
                        <div class="para-text" v-for="paratext in para" v-bind:key="paratext" v-text="paratext"></div>
                    </div>
                </div>
                <img :src="getImageUrl(imageUrls[0])" alt="Image 1">
            </div>
            <div class="div-image2" ><img :src="getImageUrl(imageUrls[1])" alt="Image 2"></div>
        </div>
    </div>
</template>

<script type='module' src='./WelcomeOurWorlds.ts'></script>