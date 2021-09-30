<template>
    <div>
    </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@200&family=Work+Sans:wght@100;200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@200;400&display=swap');
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
  font-size: 2.5rem;
}
p{
  font-family: 'Work Sans', sans-serif;
  font-weight: 200;
  font-size: 2.5rem;
}


@media screen and (max-width: 1200px) {   
}

@media screen and (max-width: 992px) {
  h3, p{
            font-size: 2.3rem;
        }
        .para-text{
            font-size: 0.9rem;
            line-height: 1.5;
        }
}

@media screen and (max-width: 768px) {
  h3, p{
            font-size: 2rem;
        }
        .para-text{
            font-size: 0.8rem;
            line-height: 1.4;
        }
}


@media screen and (max-width: 576px) {
  h3, p{
            font-size: 1.8rem;
        }
} 

@media screen and (max-width: 480px) {
  h3, p{
            font-size: 1.3rem;
        }
        .para-text{
            font-size: 0.55rem;
        }
} 

@media screen and (max-width: 320px) {
} 
</style>
