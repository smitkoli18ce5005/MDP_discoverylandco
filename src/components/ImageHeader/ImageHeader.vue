<template>
    <div class="Image-header-header">
        <img v-if="flag" src="@/assets/AboutDLC/header.jpg" alt="">
        <img v-else src="@/assets/Press/header.jpg" alt="">
        <div class="home-header-text">
            <div class="home-header-title">
                <div class="home-header-text">
                  <h1 v-if="flag">Creating your</h1>
                  <h1 v-else>News</h1>
                  <p v-if="flag">perfect world</p>
                  <p v-else>and Press</p>
                </div>
            </div>
            <div class="home-banner">
              <div class="banner-text">
                <h3>&nbsp;</h3>
                <p>Scroll to explore</p>
              </div>
              <button type="button" class="round-button">&#8595;</button>
            </div>
        </div>
    </div>
</template>
<script type='module' src='./ImageHeader.ts'></script>