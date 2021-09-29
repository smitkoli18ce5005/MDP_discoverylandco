<template>
    <div>
    </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@200&family=Work+Sans:wght@100;200&display=swap');
html{
  scroll-behavior: smooth;
}
body{
  overflow-x: hidden;
  background-image: none;
  background-color: #111;
}
#app {
  color: #ffffff;
  width: 100vw;
  padding: 0;
  margin: 0;
}
h1, h2, h3, h4{
  font-family: 'Spectral', serif;
  font-weight: 200;
}
p{
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
}
</style>
