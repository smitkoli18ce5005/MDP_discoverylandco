<template>
  <div class="main-experiences-div">
    <Header />
    <VideoHeader v-bind:headerData="experienceHeaderData" />
    <OurMission v-bind:ourMissionData="ourMissionDataObject" />
    <ImageGradient v-bind:gradientData="gradientComponentData[0]" />
    <ImageGradient v-bind:gradientData="gradientComponentData[1]" />
    <ImageGradient v-bind:gradientData="gradientComponentData[2]" />
    <ImageFooter v-bind:footerData="dataForFooter" />
    <Footer />
  </div>
</template>

<script type='module' src="./Experiences.ts"></script>