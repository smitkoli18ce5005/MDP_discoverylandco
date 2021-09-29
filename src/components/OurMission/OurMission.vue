<template>
    <div class="our-vission-div">
        <div class="our-vission-header">
            <div class="our-vission-header-contents" v-for="items in ourMissionHeaderPara" v-bind:key="items" v-text="items"></div>
        </div>
        <div class="our-vission-grid">
            <div class="our-vission-grid-contents">
                <h3 v-text="heading"></h3>
                <div class="welcome-para">
                    <div class="para-text" v-for="paratext in ourMissionPara1" v-bind:key="paratext" v-text="paratext"></div>
                </div>
                <div class="welcome-para">
                    <div class="para-text" v-for="paratext in ourMissionPara2" v-bind:key="paratext" v-text="paratext"></div>
                </div>
            </div>
            <div class="our-vission-grid-image">
                <img :src="getImageUrl(imageName)" alt="our-vission-grid-image">
            </div>
        </div>
    </div>
</template>

<script type='module' src="./OurMission.ts"></script>