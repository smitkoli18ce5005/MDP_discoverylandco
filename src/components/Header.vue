<template>
    <div id="nav">
      <a href="/"><img src='../assets/logo.png' alt="Logo Image"></a>
      <div class="navigation">
      <router-link to="/about-dlc" v-text="routeList[0]"></router-link>
      <router-link to="/our-worlds" v-text="routeList[1]"></router-link>
      <router-link to="/experiences" v-text="routeList[2]"></router-link>
      <router-link to="/gallery" v-text="routeList[3]"></router-link>
      <router-link to="/press" v-text="routeList[4]"></router-link>
      <a href="/">&#x2630;</a>
      <!--<button>options</button>-->
      </div>
    </div>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})


export default class Galleryheader extends Vue {
  private readonly loginURL: string = '../assets/logo.png'
  private readonly aboutdlc: string = 'About DLC'
  private readonly routeList: string[] = ['About DLC', 'Our Worlds', 'Experiences', 'Gallery', 'Press']
}
</script>

<style lang="scss">
$whiteColor: #ffffff;

@mixin flexRow(){
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
}

#nav {
  @include flexRow();
  position: absolute;
  z-index: 1000;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 55px;
  line-height: 1.2rem;
  letter-spacing: 1px;
  font-size: 1.2rem;

  img {
    width: 25%;
    padding-bottom: 1px;
    padding-top: 1px;
  }
}
.navigation{
  @include flexRow();
  flex-basis: 80%;
}
.navigation a{
color: $whiteColor;
    text-decoration: none;
    &.router-link-exact-active {
      border-bottom: 1px solid $whiteColor;
    }
}
</style>
