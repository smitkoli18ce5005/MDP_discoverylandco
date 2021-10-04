<template>
<div class="header-div">
  <div id="nav">
      <a href="/"><img src='@/assets/logo.png' alt="Logo Image"></a>
      <div class="navigation">
        <router-link class="routes" to="/about-dlc" v-text="routeList[0]"></router-link>
        <router-link class="routes" to="/our-worlds" v-text="routeList[1]"></router-link>
        <router-link class="routes" to="/experiences" v-text="routeList[2]"></router-link>
        <router-link class="routes" to="/gallery" v-text="routeList[3]"></router-link>
        <router-link class="routes" to="/press" v-text="routeList[4]"></router-link>
        <a href="/" style="margin-left:3rem;margin-right:0">&#x2630;</a>
      </div>
  </div>
  <router-view/>
</div>
    
</template>
<script type='module' src='./Header.ts'></script>