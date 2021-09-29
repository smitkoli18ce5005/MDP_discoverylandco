<template>
    <div :class="'welcome-our-worlds ' +addBackground">
        <div v-if="flag" class="welcome-grid-left">
            <div class="welcome-text-left">
                <h3 v-text="headingContent[0]"></h3>
                <p v-if="headingContent[1]" v-text="headingContent[1]"></p>
                <div class="welcome-para">
                    <div class="para-text" v-for="paratext in paraContent" v-bind:key="paratext" v-text="paratext"></div>
                </div>
            </div>
            <img v-if="calledBy == 'Home'" class="div-image1-left" :src="getForHome(picsArray[1])" alt="Image 1">
            <img v-if="calledBy == 'Home'" class="div-image2-left" :src="getForHome(picsArray[0])" alt="Image 2">
            <img v-if="calledBy == 'AboutDLC'" class="div-image1-left" :src="getForAboutDLC(picsArray[0])" alt="Image 1">
            <img v-if="calledBy == 'AboutDLC'" class="div-image2-left" :src="getForAboutDLC(picsArray[1])" alt="Image 2">
        </div>
        <div v-else class="welcome-grid-right">
            <div class="welcome-text-right">
                <h3 v-text="headingContent[0]"></h3>
                <p v-if="headingContent[1]" v-text="headingContent[1]"></p>
                <div class="welcome-para">
                    <div class="para-text" v-for="paratext in paraContent" v-bind:key="paratext" v-text="paratext"></div>
                </div>
            </div>
            <img v-if="calledBy == 'Home'" class="div-image1-right" :src="getForHome(picsArray[0])" alt="Image 1">
            <img v-if="calledBy == 'Home'" class="div-image2-right" :src="getForHome(picsArray[1])" alt="Image 2">
            <img v-if="calledBy == 'AboutDLC'" class="div-image1-right" :src="getForAboutDLC(picsArray[0])" alt="Image 1">
            <img v-if="calledBy == 'AboutDLC'" class="div-image2-right" :src="getForAboutDLC(picsArray[1])" alt="Image 2">
        </div>
    </div>
</template>

<script type='module' src='./GridLayoutOne.ts'></script>