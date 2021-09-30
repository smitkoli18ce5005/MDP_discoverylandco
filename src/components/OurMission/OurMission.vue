<template>
    <div class="our-mission-div">
        <div class="our-mission-header">
            <div class="our-mission-header-contents" v-for="items in ourMissionData.ourMissionHeaderPara[0]" v-bind:key="items" v-text="items"></div>
            <p class="small-heading-para" v-text="ourMissionData.ourMissionHeaderPara[1]"></p>
        </div>
        <div class="our-mission-grid">
            <div class="our-mission-grid-contents">
                <h3 v-text="ourMissionData.heading[0]"></h3>
                <h3 v-if="ourMissionData.heading[1]" v-text="ourMissionData.heading[1]"></h3>
                <div class="welcome-para">
                    <div class="para-text" v-for="paratext in ourMissionData.ourMissionPara[0]" v-bind:key="paratext" v-text="paratext"></div>
                </div>
                <div v-if="ourMissionData.ourMissionPara[1]" class="welcome-para">
                    <div class="para-text" v-for="paratext in ourMissionData.ourMissionPara[1]" v-bind:key="paratext" v-text="paratext"></div>
                </div>
            </div>
            <div class="our-mission-grid-image">
                <img v-if="ourMissionData.calledBy == 'AboutDLC'" :src="getForAboutDLC(ourMissionData.imageName)" alt="our-mission-grid-image">
                <img v-if="ourMissionData.calledBy == 'Experiences'" :src="getForExperiences(ourMissionData.imageName)" alt="our-mission-grid-image">
            </div>
        </div>
    </div>
</template>

<script type='module' src="./OurMission.ts"></script>