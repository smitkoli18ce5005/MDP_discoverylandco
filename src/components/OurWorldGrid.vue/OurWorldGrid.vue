<template>
  <div class="our-world-grid">
    <a
      class="worlds-link"
      href=""
      v-for="photos in ourWorldList"
      v-bind:key="photos.title"
    >
      <div class="photo-grid" v-cloak>
        <img :src="getImgURL(photos.pic)" :alt="photos.title" />
        <h1 v-text="photos.title"></h1>
        <p v-text="photos.location"></p>
      </div>
    </a>
  </div>
</template>
<script type='module' src='./OurWorldGrid.ts'></script>