<template>
    <div id="nav">
      <img src="../assets/logo.png" alt="logo">
      <div class="navigation">
      <router-link to="/"></router-link>
      <router-link to="/about-dlc">About DLC</router-link>
      <router-link to="/our-worlds">Our Worlds</router-link>
      <router-link to="/experiences">Experiences</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/press">Press</router-link>
      <button>options</button>
      </div>
    </div>
  <router-view/>
</template>

<style lang="scss">
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
  padding: 40px;
  line-height: 0.9rem;
  letter-spacing: 2px;
  a {
    color: #ffffff;
    margin-right: 3rem;
    text-decoration: none;
    &.router-link-exact-active {
      border-bottom: 1px solid #ffffff;
    }
  }
}
#nav > img{
  width: 10%;
  padding-bottom: 1px;
  padding-top: 1px;
}
</style>
