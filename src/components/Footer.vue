<template>
  <div class="footer-div">
    <footer>
      <div class="footer-content">
        <img src="../assets/onlylogo.png" alt="Footer Logo" />
        <div class="footer-navigation">
          <ul>
            <li class="lighter-font" v-text="contacts[0]"></li>
            <li>
              <a href=""><b v-text="contacts[1]"></b></a>
            </li>
            <li>
              <a href=""><u v-text="contacts[2]"></u></a>
            </li>
          </ul>
          <div class="footer-routes">
            <ul>
            <li v-for="routes in routesArray" v-bind:key="routes.routeText">
              <router-link
                :to="routes.to"
                v-text="routes.routeText"
              ></router-link>
            </li>
            <router-view />
          </ul>
          <ul>
            <li
              v-for="otherRoutes in otherRoutesArray"
              v-bind:key="otherRoutes.otherRoutesText"
            >
              <a
                :href="otherRoutes.link"
                v-text="otherRoutes.otherRoutesText"
              ></a>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <p class="copy" v-text="copyrightText"></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {
  private readonly contacts = [
    "GET IN TOUCH",
    "(480) 624-5200",
    "mail@discoverylandco.com",
  ];
  private readonly routesArray = [
    {
      to: "/about-dlc",
      routeText: "About DLC",
    },
    {
      to: "/our-worlds",
      routeText: "Our Worlds",
    },
    {
      to: "/experiences",
      routeText: "Experiences",
    },
    {
      to: "/gallery",
      routeText: "Gallery",
    },
    {
      to: "/press",
      routeText: "Press",
    },
  ];
  private readonly otherRoutesArray = [
    {
      link: "",
      otherRoutesText: "Magazine",
    },
    {
      link: "",
      otherRoutesText: "Careers",
    },
    {
      link: "",
      otherRoutesText: "Foundation",
    },
    {
      link: "",
      otherRoutesText: "Company",
    },
    {
      link: "",
      otherRoutesText: "Contact",
    },
    {
      link: "",
      otherRoutesText: "Privacy",
    },
  ];
  private readonly copyrightText: string =
    "© Discovery Land Company. All rights reserved.";
}
</script>

<style lang="scss">
@mixin flexProperty($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: space-between;
}
.footer-div {
  background-color: #161f1e;
  z-index: -1;
  padding: 5%;
  font-family: sans-serif;
}
footer {
  @include flexProperty(column);
  max-width: 100rem;
  padding-top: 1%;
  margin-left: auto;
  margin-right: auto
}
.footer-content {
  @include flexProperty(row);
}
footer .footer-content img {
  width: 60px;
  height: 5%;
  padding: 1%;
  margin-top: 1%;
}
.footer-navigation {
  @include flexProperty(row);
  flex-basis: 50%;
  align-items: flex-start;
  a:after {
    transition: all ease-in-out .3s;
    background: none repeat scroll 0 0 #ffffff;
    content: "";
    display: block;
    height: 2px;
    width: 0;
}
a:hover:after{
  width: 100%;
}
}
ul {
  list-style-type: none;
}
li {
  padding: 0.9rem;
  line-height: 0.9;
  letter-spacing: 2px;
  max-width: max-content;
}
footer p, .lighter-font {
  padding: 1%;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.75rem;
  opacity: 0.75;
  color: #777;
  padding-left: 5%;
}
a {
  color: #ffffff;
  text-decoration: none;
  &.router-link-exact-active {
    border-bottom: 1px solid #ffffff;
  }
}
.footer-routes{
  display: flex;
}
@media screen and (max-width: 1200px) {   
    h1{
        padding: 2.5rem;
    }
    footer a {
      font-size: 0.75rem;
    }
}

@media (max-width: 992px) {
    .footer-content {
      @include flexProperty(column);
    }
    li{
      padding-left: 0;
    }
    footer .footer-content img{
      padding-left: 5%;
      padding-bottom: 5%;
    }
    .copy{
      padding-left: 5%;
    }
    footer a {
      letter-spacing: 1px;
    }
    li{
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    footer a {
      letter-spacing: 0;
    }
  }

  @media (max-width: 576px) {
    .footer-navigation {
      @include flexProperty(column);
    }
    footer .footer-content img {
      width: 40px;
    }
  }

  @media (max-width: 320px) {
    ul{
      text-align: left;
      margin-left: 0;
      padding-left: 0;
    }
    footer a {
      font-size: 0.6rem;
    }
    footer p, .lighter-font {
      font-size: 0.6rem;
    }
  }
</style>