<template>
  <div class="main-aboutdlc-div">
    <Header />
    <AboutDlcHeader />
    <OurMission />
    <FullImage v-bind:picName="picsArray[0]" />
    <Carousel v-bind:content="headings" v-bind:dataList="carouselList" v-bind:calledBy="'AboutDLC'" />
    <Footer />
  </div>
</template>

<script type='module' src="./AboutDLC.ts"></script>