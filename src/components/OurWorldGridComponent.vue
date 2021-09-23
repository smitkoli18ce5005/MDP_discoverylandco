<template>
    <div class="our-world-grid">
        <a class="worlds-link" href="" v-for="photos in ourWorldList" v-bind:key="photos.title">
            <div class="photo-grid" v-cloak>
                <img :src="getImgURL(photos.pic)" :alt="photos.title">
                <h1 v-text="photos.title"></h1>
                <p v-text="photos.location"></p>   
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
})
export default class OurWorldGridComponent extends Vue {
    private readonly ourWorldList = [{
        pic: 'p1.jpg',
        title: 'NORTH SHORE PRESERVE',
        location: `Kaua'i, Hawaii`
    },{
        pic: 'p2.jpg',
        title: 'JAMES ISLAND',
        location: `Southern Gulf Islands, British Columbia, Canada`
    },{
        pic: 'p3.jpg',
        title: 'COSTATERRA',
        location: `Comporta, Portugal`
    },{
        pic: 'p4.jpg',
        title: 'BARBUDA OCEAN CLUB',
        location: `Barbuda, West Indies`
    },{
        pic: 'p5.jpg',
        title: 'DRIFTWOOD',
        location: `Austin, Texas`
    },{
        pic: 'p6.jpg',
        title: 'TROUBADOUR',
        location: `Nashville, Tennessee`
    },{
        pic: 'p7.jpg',
        title: 'PLAYA GRANDE',
        location: `Rio San Juan, Dominican Republic`
    },
    {
        pic: 'p8.jpg',
        title: 'CHILENO BAY',
        location: `Cabo San Lucas, Mexico`
    },
    {
        pic: 'p9.jpg',
        title: 'THE SUMMIT',
        location: `Las Vegas, Nevada`
    },
    {
        pic: 'p10.jpg',
        title: 'DUNE DECK',
        location: `Westhamton Beach, NY`
    },{
        pic: 'p11.jpg',
        title: 'SILO RIDGE',
        location: `Amenia, New York`
    },{
        pic: 'p12.jpg',
        title: 'MAKENA',
        location: `Maui, Hawaii`
    },
    {
        pic: 'p13.jpg',
        title: 'YELLOWSTONE CLUB',
        location: `Big Sky, Montana`
    },
    {
        pic: 'p14.jpg',
        title: 'GOZZER RANCH',
        location: `Coeur d'Alene, Idaho`
    },
    {
        pic: 'p15.jpg',
        title: 'EL DORADO',
        location: `Los Gabos, Mexico`
    },
    {
        pic: 'p16.jpg',
        title: 'MADISON',
        location: `La Quinta, California`
    },
    {
        pic: 'p17.jpg',
        title: `BAKER'S BAY`,
        location: `Great Guana Cay, Behamas`
    },
    {
        pic: 'p18.jpg',
        title: 'HIDEAWAY',
        location: `La Quinta California`
    },
    {
        pic: 'p19.jpg',
        title: 'MOUNTAINTOP',
        location: `Cashiers North Carolina`
    },
    {
        pic: 'p20.jpeg',
        title: 'MIRABEL',
        location: `Scottsdale, Azizona`
    },
    {
        pic: 'p21.jpg',
        title: 'KUKIO',
        location: `Kohala, Hawaii`
    },
    {
        pic: 'p22.jpg',
        title: 'VAQUERO',
        location: `Westlake, Texas`
    },
    {
        pic: 'p23.jpg',
        title: 'IRON HORSE',
        location: `Whitefish, Montana`
    },
    {
        pic: 'p24.jpg',
        title: 'CORDEVALLE',
        location: `Silicon Valley, California`
    },
    {
        pic: 'p25.jpg',
        title: 'ESTANICIA',
        location: `Scottsdale, Arizona`
    }]
    private getImgURL(pic: string): string{
        return require('../assets/OurWorlds/' +pic)
    }
}
</script>

<style lang="scss">
.our-world-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem 1rem;
    padding-top: 10%;
    padding-bottom: 5%;
    padding-right: 1%;
    margin-left: 1%;
    margin-right: 1%;
}
.photo-grid{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        padding-bottom: 1%;
    }
    h1{
        font-family: sans-serif;
        font-size: 1rem;
        text-transform: uppercase;
        color: #fff;
        line-height: 1.1;
        margin-top: 1rem;
        padding: 0;
    }
    p{
        font-family: sans-serif;
        line-height: 1.3;
        margin-top: .25rem;
        font-size: 1rem;
        letter-spacing: 1px;
        color: #777;
    }
}
</style>