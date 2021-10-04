<template>
    <div class="latest-news-main-div">
        <h1 class="latest-news-header">Latest News</h1>
        <div class="latest-news-div">
            <img :src="getImage(latestNewsData[index].picName)" alt="">
            <div class="latest-news-content">
                <span>News</span>
                <h1 v-for="items in latestNewsData[index].heading" v-bind:key="items" v-text="items"></h1>
                <p v-text="latestNewsData[index].paraContent"></p>
                <button class="btn1 btn-border-2">Read Article</button>
            </div>
        </div>
        <div class="pagination">
            <button class="arrow-buttons" @click="changeIndex(-1)">&#8592;</button> 
            {{index+1}} - 4
            <button class="arrow-buttons" @click="changeIndex(1)">&#8594;</button> 
        </div>
    </div>
</template>

<script type='module' src='./LatestNews.ts'></script>