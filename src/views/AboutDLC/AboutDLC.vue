<template>
  <div class="main-aboutdlc-div">
    <Header />
    <AboutDlcHeader />
    <OurMission />
    <FullImage v-bind:picName="picsArray[0]" />
    <Footer />
  </div>
</template>

<script type='module' src="./AboutDLC.ts"></script>