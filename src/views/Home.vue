<template>
  <div class="main-home-div">
    <Header />
    <HomeHeader />
    <WelcomeOurWorlds />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import WelcomeOurWorlds from '@/components/WelcomeOurWorlds.vue';
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Header,
    HomeHeader,
    WelcomeOurWorlds,
    Footer
  },
})
export default class Gallery extends Vue {
}
</script>

<style lang="scss">
.main-home-div{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>