<template>
  <div class="footer-div">
    <footer>
      <div class="footer-content">
        <img src="@/assets/onlylogo.png" alt="Footer Logo" />
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

<script type='module' src="./Footer.ts"></script>