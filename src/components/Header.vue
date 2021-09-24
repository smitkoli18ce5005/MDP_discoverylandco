<template>
<div class="header-div">
  <div id="nav">
      <a href="/"><img src='../assets/logo.png' alt="Logo Image"></a>
      <div class="navigation">
      <router-link class="routes" to="/about-dlc" v-text="routeList[0]"></router-link>
      <router-link class="routes" to="/our-worlds" v-text="routeList[1]"></router-link>
      <router-link class="routes" to="/experiences" v-text="routeList[2]"></router-link>
      <router-link class="routes" to="/gallery" v-text="routeList[3]"></router-link>
      <router-link class="routes" to="/press" v-text="routeList[4]"></router-link>
      <a href="/" style="margin-left:3rem;margin-right:0">&#x2630;</a>
      <!--<button>options</button>-->
      </div>
    </div>
  <router-view/>
</div>
    
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
.header-div{
  width: 100vw;
  position: absolute;
  z-index: 1000;
  
}
#nav {
  @include flexRow();
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 55px;
  padding-bottom: 55px;
  line-height: 1.2rem;
  letter-spacing: 1px;
  font-size: 1rem;

  img {
    width: 140px;
    padding-bottom: 1px;
    padding-top: 1px;
  }
  a{
    width: max-content
  }
}
.navigation{
  @include flexRow();
  align-items: flex-end;
  padding-right: 5%;
}
.navigation a{
  margin-right: 3rem;
  color: $whiteColor;
  text-decoration: none;
  font-family: sans-serif;
  &.router-link-exact-active {
      border-bottom: 1px solid $whiteColor;
  }
}

  @media (max-width: 1200px) {   
    .routes{
      display: none;
    }
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    #nav{
      width: 100vw;
      a{
        padding-left: 5%;
      }
    }
  }
  @media (max-width: 576px) {
  }
</style>
