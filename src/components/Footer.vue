<template>
    <div class="footer-div">
        <footer>
            <div class="footer-content">
                <img src="../assets/onlylogo.png" alt="">
                <div class="footer-navigation">
                    <ul>
                        <li><p>GET IN TOUCH</p></li>
                        <li>(480) 624-5200</li>
                        <li><u>mail@discoverylandco.com</u></li>
                    </ul>
                    <ul>
                        <li><router-link to="/about-dlc">About DLC</router-link></li>
                        <li><router-link to="/our-worlds">Our Worlds</router-link></li>
                        <li><router-link to="/experiences">Experiences</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/press">Press</router-link></li>
                        <router-view/>
                    </ul>
                    <ul>
                        <li>Magazine</li>
                        <li>Careers</li>
                        <li>Foundation</li>
                        <li>Company</li>
                        <li>Contact</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
        <p>© Discovery Land Company. All rights reserved.</p>
        </footer>
    </div>
</template>

<style lang="scss">
    .footer-div{
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #161f1e;
        z-index: -1;
        padding: 5%;
    }
    footer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        padding: 1%;
    }
    .footer-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    footer .footer-content img {
        width: 5%;
        height: 5%;
        padding: 1%;
        margin-top: 1%;
    }
    .footer-navigation{
        display: flex;
        flex-direction: row;
        flex-basis: 50%;
        justify-content: space-between; 
        align-items: flex-start;
    }
    ul{
        list-style-type: none;
    }
    li{
        padding: 0.9rem;
        line-height: 0.9;
    }
    footer p {
        padding: 1%;
        margin-bottom: 0;
        margin-top: 0;
        font-size: .75rem;
        opacity: .75;
        color: #777;
    }
    a {
    color: #ffffff;
    margin-right: 3rem;
    text-decoration: none;
    &.router-link-exact-active {
      border-bottom: 1px solid #ffffff;
    }
  }
</style>