<template>
  <div class="about">
    <Galleryheader />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Galleryheader from '@/components/Galleryheader.vue';

@Options({
  components: {
    Galleryheader
  },
})
export default class Gallery extends Vue {}
</script>
<style lang="scss">
</style>