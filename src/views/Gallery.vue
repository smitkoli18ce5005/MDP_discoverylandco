<template>
  <div class="main-gallery-div">
    <Header />
    <Galleryheader />
    <Galleryphotos />
    <Footer />
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Galleryheader from '@/components/Galleryheader.vue';
import Galleryphotos from '@/components/Galleryphotos.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Options({
  components: {
    Header,
    Galleryheader,
    Galleryphotos,
    Footer
  },
})
export default class Gallery extends Vue {
}
</script>

<style lang="scss">
  .main-gallery-div{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
  }
</style>