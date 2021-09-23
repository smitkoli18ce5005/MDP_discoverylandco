<template>
  <div class="main-aboutdlc-div">
    <Header />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Options({
  components: {
    Header,
    Footer
  },
})
export default class Experiences extends Vue {
}
</script>

<style lang="scss">
.main-aboutdlc-div{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>