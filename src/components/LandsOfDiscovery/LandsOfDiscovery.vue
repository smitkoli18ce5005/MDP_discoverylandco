<template>
    <div class="lands-of-discovery-content">
       <div class="lands-of-discovery-header">
            <h3 v-text="contentTitle[0]"></h3>
            <p v-text="contentTitle[1]"></p>
            <div class="lands-of-discovery-para">
                <div class="para-text" v-for="content in contents" v-bind:key="content.id" v-text="content.description"></div>
            </div>
            <ul class="lands-of-discovery-links">
                <li><a href="#" class="selected">North America &amp; Caribbean</a></li>
                <li><a href="#">Hawaii</a></li>
                <li><a href="#">Europe</a></li>
            </ul>
        </div> 
    </div>
    <div class="lands-of-discovery">
        <div class="main-cards-div">
            <div class="location-info">
                <div class="buttons-pair">
                    <button class="button-first" @click="changeIndex(-1)">&#8592;</button>
                    <button class="button-second" @click="changeIndex(1)">&#8594;</button>
                </div>
                <div class="weather">
                    <div class="weather-chart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-brightness-low" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
                        </svg>
                        <span v-text="globeData[index].sun +' &#8457;'"></span>
                    </div>
                    <div class="weather-chart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <span v-text="globeData[index].wind +' mph'"></span>
                    </div>
                    <div class="weather-chart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                        </svg>
                        <span v-text="globeData[index].compass +' &deg;'"></span>
                    </div>
                </div>
                <div class="place-name">
                    <span v-text="globeData[index].placeLocation"></span>
                    <h3 v-text="globeData[index].placeName"></h3>
                </div>
                <div class="location">
                    <div class="location-tag">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <span style="padding-left:5%;" v-text="globeData[index].location"></span>
                    </div>
                </div>
            </div>
            <div class="location-image">
                <img :src="getImage(globeData[index].picName)" alt="">
            </div>
        </div>
    </div>
</template>

<script type='module' src='./LandsOfDiscovery.ts'></script>