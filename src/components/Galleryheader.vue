<template>
    <div class="gallery-header">
        <img src='../assets/Galleryheader.jpg' alt="">
        <h1>Gallery</h1>
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
}
.gallery-header h1{
    position: relative;
    z-index: 3;
    margin-left: 10%;
    font-weight: 200;
    font-size: 66px;
}
</style>
