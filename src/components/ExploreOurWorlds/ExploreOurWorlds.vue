<template>
    <div class="explore-our-worlds">
         <div class="explore-our-worlds-banner">
                <div>
                    <h3>Explore</h3>
                    <p>Our Worlds</p>
                </div>
                <div class="button-pair">
                    <button class="first-button">&#8592;</button>
                    <button>&#8594;</button>
                </div>
         </div>
        <div class="slider">
            <div class="slider-track" v-for="items in ourWorldList" :key="items.title">
                <div class="slide">
                    <div class="image-holder">
                        <img :src="getImgURL(items.pic)">
                    </div>
                    <div class="img-description">
                        <span class = "img-title" v-text="items.title"></span>
                        <span class = "img-location" v-text="items.location"></span> 
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>

<script type='module' src='./ExploreOurWorlds.ts'></script>