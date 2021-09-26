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

<script type='module' src='./GalleryPhotos.ts'></script>