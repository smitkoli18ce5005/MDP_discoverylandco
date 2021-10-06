<template>
<div class="header-div">
  <div class="nav-div">
    <div id="nav">
        <a href="/"><img src='@/assets/logo.png' alt="Logo Image"></a>
        <div class="navigation">
          <router-link v-show="flag" class="routes" to="/about-dlc" v-text="routeList[0]"></router-link>
          <router-link v-show="flag" class="routes" to="/our-worlds" v-text="routeList[1]"></router-link>
          <router-link v-show="flag" class="routes" to="/experiences" v-text="routeList[2]"></router-link>
          <router-link v-show="flag" class="routes" to="/gallery" v-text="routeList[3]"></router-link>
          <router-link v-show="flag" class="routes" to="/press" v-text="routeList[4]"></router-link>
          <button v-if="flag" class="nav-button" @click="changeFlag()" style="margin-left:3rem;margin-right:0">&#x2630;</button>
          <button v-else class="nav-button" @click="changeFlag()" style="margin-left:3rem;margin-right:0">&#10006;</button>
        </div>
        <router-view/>
    </div>
    <div v-show="!flag" id="nav2">
        <div class="navigation2">
          <router-link class="routes1" to="/about-dlc" v-text="routeList[0]"></router-link>
          <router-link class="routes1" to="/our-worlds" v-text="routeList[1]"></router-link>
          <router-link class="routes1" to="/experiences" v-text="routeList[2]"></router-link>
          <router-link class="routes1" to="/gallery" v-text="routeList[3]"></router-link>
          <router-link class="routes1" to="/press" v-text="routeList[4]"></router-link>
        </div>
    </div>
  </div>
  
</div>
    
</template>
<script type='module' src='./Header.ts'></script>