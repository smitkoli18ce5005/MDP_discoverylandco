<template>
    <div class="home-header">
        <video v-if="headerData.calledBy == 'Home'" :src="getForHome(headerData.videoUrl)" data-length="" muted="" loop="" autoplay="" playsinline=""></video>
        <video v-if="headerData.calledBy == 'Experience'" :src="getForExperiences(headerData.videoUrl)" data-length="" muted="" loop="" autoplay="" playsinline=""></video>
        <div class="home-header-text">
            <div class="home-header-title">
              <div class="home-header-text"><h1 v-text="headerData.header"></h1>
              <p v-text="headerData.subHeader"></p></div>
            </div>
            <div class="home-banner">
              <div class="banner-text">
                <h3 v-if="headerData.calledBy == 'Home'">North Shore Preserve</h3>
                <p>Scroll to explore</p>
              </div>
              <button type="button" class="round-button">&#8595;</button>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./VideoHeader.ts'></script>