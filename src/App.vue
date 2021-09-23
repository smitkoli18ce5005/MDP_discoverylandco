<template>
    <div>
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
html{
  scroll-behavior: smooth;
}
body{
  overflow-x: hidden;
  background-image: none;
  background-color: #111;
}
#app {
  font-family: gt-sectra;
  color: #ffffff;
}
#nav {
  @include flexRow();
  position: fixed;
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
