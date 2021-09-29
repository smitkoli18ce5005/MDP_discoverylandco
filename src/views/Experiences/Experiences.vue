<template>
  <div class="main-experiences-div">
    <Header />
    <VideoHeader v-bind:headerData="experienceHeaderData" />
    <OurMission v-bind:ourMissionData="ourMissionDataObject" />
    <ImageFooter v-bind:footerData="dataForFooter" />
    <Footer />
  </div>
</template>

<script type='module' src="./Experiences.ts"></script>