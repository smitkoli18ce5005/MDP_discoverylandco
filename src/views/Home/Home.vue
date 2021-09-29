<template>
  <div class="main-home-div">
    <Header />
    <VideoHeader v-bind:headerData="homeHeaderData" />
    <GridLayoutOne v-bind:paraContent="para" v-bind:headingContent="heading1" v-bind:flag="true" v-bind:addBackground="background" v-bind:picsArray="gridPicsArray" v-bind:calledBy="'Home'" />
    <Carousel v-bind:content="headings" v-bind:dataList="carouselList" v-bind:calledBy="'Home'" />
    <LandsOfDiscovery />
    <HomeFooter />
    <Footer />
  </div>
</template>

<script type='module' src="./Home.ts"></script>