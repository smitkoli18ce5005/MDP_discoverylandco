<template>
  <div class="main-press-div">
    <Header />
    <ImageHeader v-bind:flag="false" />
    <LatestNews />
    <PressGrid />
    <Footer />
  </div>
</template>

<script type='module' src="./Press.ts"></script>