<template>
    <div class="gallery-photo">
        <div v-for="gallery in galleryObjectList" v-bind:key="gallery.galleryText" class="photo-frame">
            <figure class="photos">
                <img :src="getImgURL(gallery.pic)" alt="outdoor-pursuits">
            </figure>
            <h1 v-text="gallery.galleryText"></h1>
        </div>
    </div> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Galleryphotos extends Vue {
    private readonly galleryObjectList = [
        {
            id: 1,
            pic: 'outdoor-pursuits.jpg', 
            galleryText: 'Outdoor Pursuits'
        },
        {
            id: 2,
            pic: 'golf.jpg', 
            galleryText: 'Golf'
        },
        {
            id: 3,
            pic: 'lifestyle.jpeg', 
            galleryText: 'Lifestyle'
        },
        {
            id: 4,
            pic: 'landscapes.jpg', 
            galleryText: 'Landscapes'
        },
        {
            id: 5,
            pic: 'clubhouses.jpg', 
            galleryText: 'Clubhouses'
        },
        {
            id: 6,
            pic: 'wellness.jpg', 
            galleryText: 'Wellness'
        },
    ]
    private getImgURL(pic: string): string{
        return require('../assets/Gallery/' +pic)
    }
}
</script>

<style lang="scss">
    .gallery-photo{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        position: relative;
        width: 100vw;
        background-color: #111;
    }
    .photos{
        padding-top: 65%;
        position: relative;
        overflow: hidden;
        margin: 0;
    }
    .photos img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1{
        font-family: gt-sectra;
        font-weight: 200;
        text-align: center;
        white-space: nowrap;
        padding: 3rem;
        font-size: 24px;
        line-height: 1.2;
    }


@media screen and (max-width: 1200px) {   
    h1{
        padding: 2.5rem;
    }
}

@media screen and (max-width: 992px) {
   h1{
       font-size: 20px;
        padding: 2rem;
    }
}

@media screen and (max-width: 768px) {
    .gallery-photo{
        grid-template-columns: repeat(2, 1fr);
    }
    h1{
        font-size: 18px;
        padding: 1.5rem;
    }
}


@media screen and (max-width: 576px) {
   .gallery-photo{
        grid-template-columns: repeat(1, 1fr);
    }
    h1{
        font-size: 16px;
        padding: 1rem;
    }
} 

@media screen and (max-width: 480px) {
    h1{
        padding: 0.9rem;
    }
} 

@media screen and (max-width: 320px) {
    h1{
        font-size: 14px;
        padding: 0.9rem;
    }
} 
</style>