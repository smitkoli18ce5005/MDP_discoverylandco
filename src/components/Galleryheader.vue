<template>
    <div class="gallery-header">
        <img src='../assets/Gallery/Galleryheader.jpg' alt="Gallery Header Image">
        <div class="gallery-header-text">
            <h1 v-text="gallery"></h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Galleryheader extends Vue {
    private readonly gallery: string = 'Gallery'
}
</script>

<style lang="scss">
@mixin position($pos){
    position: $pos;
    top: 0;
    left: 0;
}

.gallery-header{
    @include position(relative);
    height: 65vh;
    width: 100%;
    display: flex;
    align-items: center;
}
.gallery-header img{
    @include position(absolute);
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gallery-header-text h1{
    position: relative;
    z-index: 3;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 82px;
    font-family: gt-sectra;
    font-weight: 200;
}
.gallery-header-text{
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>
