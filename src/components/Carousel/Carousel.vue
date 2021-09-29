<template>
    <div class="Carousel">
         <div class="Carousel-banner">
                <div>
                    <h3 v-text="content[0]"></h3>
                    <p v-if="content[1]" v-text="content[1]"></p>
                </div>
                <div class="button-pair">
                    <button class="first-button">&#8592;</button>
                    <button>&#8594;</button>
                </div>
         </div>
        <div class="slider">
            <div class="slider-track" v-for="items in dataList" :key="items.title">
                <div class="slide">
                    <div class="image-holder">
                        <img v-if="calledBy == 'Home'" :src="getForHome(items.pic)">
                        <img v-else-if="calledBy == 'AboutDLC'" :src="getForAboutDLC(items.pic)">
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

<script type='module' src='./Carousel.ts'></script>