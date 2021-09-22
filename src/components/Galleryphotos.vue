<template>
    <div class="gallery-photo">
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/outdoor-pursuits.jpg" alt="outdoor-pursuits">
            </figure>
            <h1>Outdoor Pursuits</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/golf.jpg" alt="outdoor-pursuits">
            </figure>
            <h1>Golf</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/lifestyle.jpeg" alt="outdoor-pursuits">
            </figure>
            <h1>Lifestyle</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/landscapes.jpg" alt="outdoor-pursuits">
            </figure>
            <h1>Landscapes</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/clubhouses.jpg" alt="outdoor-pursuits">
            </figure>
            <h1>Clubhouses</h1>
        </div>
        <div class="photo-frame">
            <figure class="photos">
                <img src="../assets/wellness.jpg" alt="outdoor-pursuits">
            </figure>
            <h1>Wellness</h1>
        </div>
    </div>
</template>
<style lang="scss">
    .gallery-photo{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
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
        padding: 3rem 1.5rem;
        font-size: 24px;
        line-height: 1.2;
    }
</style>