<template>
  <div class="main-gallery-div">
    <Galleryheader />
    <Galleryphotos />
  </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Galleryheader from '@/components/Galleryheader.vue';
import Galleryphotos from '@/components/Galleryphotos.vue';

@Options({
  components: {
    Galleryheader,
    Galleryphotos
  },
})
export default class Gallery extends Vue {
}
</script>