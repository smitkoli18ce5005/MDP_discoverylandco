<template>
  <div class="main-aboutdlc-div">
    <Header />
    <AboutDlcHeader />
    <OurMission v-bind:ourMissionData="ourMissionDataObject" />
    <FullImage v-bind:picName="picsArray[0]" />
    <Carousel v-bind:content="headings" v-bind:dataList="carouselList" v-bind:calledBy="'AboutDLC'" />
    <FullImage v-bind:picName="picsArray[1]" />
    <GridLayoutOne v-bind:paraContent="gridPara1" v-bind:headingContent="gridHeading1" v-bind:flag="false" v-bind:picsArray="gridPicsArray1" v-bind:calledBy="'AboutDLC'" />
    <FullImage v-bind:picName="picsArray[2]" />
    <GridLayoutOne v-bind:paraContent="gridPara2" v-bind:headingContent="gridHeading2" v-bind:flag="true" v-bind:picsArray="gridPicsArray2" v-bind:calledBy="'AboutDLC'" />
    <ImageFooter v-bind:footerData="dataForFooter" />
    <Footer />
  </div>
</template>

<script type='module' src="./AboutDLC.ts"></script>