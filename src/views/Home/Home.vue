<template>
  <div class="main-home-div">
    <Header />
    <HomeHeader />
    <WelcomeOurWorlds />
    <Carousel v-bind:content="headings" v-bind:dataList="carouselList" v-bind:calledBy="'Home'" />
    <LandsOfDiscovery />
    <HomeFooter />
    <Footer />
  </div>
</template>

<script type='module' src="./Home.ts"></script>