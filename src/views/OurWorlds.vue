<template>
    <div class="main-our-worlds">
        <Header />
        <OurWorldGridComponent />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';
import OurWorldGridComponent from '@/components/OurWorldGridComponent.vue'
import Footer from '@/components/Footer.vue';

@Options({
  components: {
    Header,
    OurWorldGridComponent,
    Footer
  },
})
export default class Gallery extends Vue {
}
</script>

<style lang="scss">
.main-our-worlds{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>