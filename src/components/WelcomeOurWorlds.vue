<template>
    <div class="welcome-our-worlds">
        <div class="welcome-grid">
            <div class="div-image1">
                <div class="welcome-text">
                    <h3>Welcome to</h3>
                    <p>our world</p>
                    <div class="welcome-para">
                        <div class="para-text">Discover the unique atmosphere of our private</div>
                        <div class="para-text">residential club communities. Once experienced. Never</div>
                        <div class="para-text">forgotten. This is classic, comfortable, modern living in</div>
                        <div class="para-text">nature’s most spectacular settings worldwide.</div>
                        <div class="para-text">Reassuringly exclusive. Generously welcoming. Find</div>
                        <div class="para-text">your unique world – a place where families love to be;</div>
                        <div class="para-text">creating unforgettable moments, together.</div>
                    </div>
                </div>
                <img src="../assets/Home/image1.jpg" alt="Image 1">
            </div>
            <div class="div-image2" ><img src="../assets/Home/image2.jpg" alt="Image 2"></div>
        </div>
    </div>
</template>


<style lang="scss">
.welcome-our-worlds{
    height: 100vh;
    background-image: url("../assets/Home/background_image.jpg");
    background-color: #ffffff;
    object-fit: cover;
    background-size: contain;
    background-position: 100%;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
}
.welcome-grid{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.div-image1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        padding-top: 5%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
}
.welcome-text{
    position: relative;
    color: black;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;

    h3, p{
        font-size: 3rem;
        font-weight: 50;
        padding-top: 0;
        margin: 0;
        line-height: 1;
        letter-spacing: 1px;
    }
}
.welcome-para{
    padding-top: 10%;
    .para-text{
        font-size: 1.1rem;
        letter-spacing: 0.5px;
        line-height: 2;
        opacity: 1;
        color: #777;
    }
}
.div-image2{
    img{
        padding-top: 15%;
        padding-bottom: 10%;
        width: 80%;
        object-fit: cover;
    }
}
</style>