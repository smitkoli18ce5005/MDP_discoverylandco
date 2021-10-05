<template>
<div class="header-div">
  <div v-if="flag" id="nav">
      <a href="/"><img src='@/assets/logo.png' alt="Logo Image"></a>
      <div class="navigation">
        <router-link class="routes" to="/about-dlc" v-text="routeList[0]"></router-link>
        <router-link class="routes" to="/our-worlds" v-text="routeList[1]"></router-link>
        <router-link class="routes" to="/experiences" v-text="routeList[2]"></router-link>
        <router-link class="routes" to="/gallery" v-text="routeList[3]"></router-link>
        <router-link class="routes" to="/press" v-text="routeList[4]"></router-link>
        <button class="nav-button" @click="changeFlag()" style="margin-left:3rem;margin-right:0">&#x2630;</button>
      </div>
      <router-view/>
  </div>
  <div v-else id="nav2">
      <a href="/"><img src='@/assets/logo.png' alt="Logo Image"></a>
      <div class="navigation">
        <button class="nav-button" @click="changeFlag()" style="margin-left:3rem;margin-right:0">&#10006;</button>
      </div>
  </div>
</div>
    
</template>
<script type='module' src='./Header.ts'></script>