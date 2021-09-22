<template>
    <div class="gallery-header">
        <img src='../assets/Galleryheader.jpg' alt="">
        <div class="gallery-header-text">
            <h1>Gallery</h1>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Galleryheader extends Vue {
}
</script>
<style lang="scss">
.gallery-header{
    height: 65vh;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.gallery-header img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    font-family: gt-sectra;
    font-weight: 200;
}
.gallery-header h1{
    position: relative;
    z-index: 3;
    font-weight: 200;
    font-size: 82px;
    text-align: left;
    margin: 0;
    padding: 0;
}
.gallery-header-text{
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>
