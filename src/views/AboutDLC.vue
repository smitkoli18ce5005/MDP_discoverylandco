<template>
  <div class="aboutdlc">
    <Header />
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
export default class AboutDLC extends Vue {
}
</script>

<style lang="scss">
body{
    background-image: none;
    background-color: #000000;
}
.aboutdlc{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>