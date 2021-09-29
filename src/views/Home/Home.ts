import './Home.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue';
import WelcomeOurWorlds from '@/components/WelcomeOurWorlds/WelcomeOurWorlds.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import LandsOfDiscovery from '@/components/LandsOfDiscovery/LandsOfDiscovery.vue';
import HomeFooter from '@/components/HomeFooter/HomeFooter.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    HomeHeader,
    WelcomeOurWorlds,
    Carousel,
    LandsOfDiscovery,
    HomeFooter,
    Footer
  },
})
export default class Home extends Vue {
  readonly headings = ['Explore', 'Our Worlds']
  readonly carouselList = [
    {
      pic: "p1.jpg",
      title: "NORTH SHORE PRESERVE",
      location: `Kaua'i, Hawaii`,
    },
    {
      pic: "p2.jpg",
      title: "JAMES ISLAND",
      location: `Southern Gulf Islands, British Columbia, Canada`,
    },
    {
      pic: "p3.jpg",
      title: "COSTATERRA",
      location: `Comporta, Portugal`,
    },
    {
      pic: "p4.jpg",
      title: "BARBUDA OCEAN CLUB",
      location: `Barbuda, West Indies`,
    },
    {
      pic: "p5.jpg",
      title: "DRIFTWOOD",
      location: `Austin, Texas`,
    },
    {
      pic: "p6.jpg",
      title: "TROUBADOUR",
      location: `Nashville, Tennessee`,
    },
    {
      pic: "p7.jpg",
      title: "PLAYA GRANDE",
      location: `Rio San Juan, Dominican Republic`,
    },
    {
      pic: "p8.jpg",
      title: "CHILENO BAY",
      location: `Cabo San Lucas, Mexico`,
    },
    {
      pic: "p9.jpg",
      title: "THE SUMMIT",
      location: `Las Vegas, Nevada`,
    },
    {
      pic: "p10.jpg",
      title: "DUNE DECK",
      location: `Westhamton Beach, NY`,
    },
    {
      pic: "p11.jpg",
      title: "SILO RIDGE",
      location: `Amenia, New York`,
    },
    {
      pic: "p12.jpg",
      title: "MAKENA",
      location: `Maui, Hawaii`,
    },
    {
      pic: "p13.jpg",
      title: "YELLOWSTONE CLUB",
      location: `Big Sky, Montana`,
    },
    {
      pic: "p14.jpg",
      title: "GOZZER RANCH",
      location: `Coeur d'Alene, Idaho`,
    },
    {
      pic: "p15.jpg",
      title: "EL DORADO",
      location: `Los Gabos, Mexico`,
    },
    {
      pic: "p16.jpg",
      title: "MADISON",
      location: `La Quinta, California`,
    },
    {
      pic: "p17.jpg",
      title: `BAKER'S BAY`,
      location: `Great Guana Cay, Behamas`,
    },
    {
      pic: "p18.jpg",
      title: "HIDEAWAY",
      location: `La Quinta California`,
    },
    {
      pic: "p19.jpg",
      title: "MOUNTAINTOP",
      location: `Cashiers North Carolina`,
    },
    {
      pic: "p20.jpeg",
      title: "MIRABEL",
      location: `Scottsdale, Azizona`,
    },
    {
      pic: "p21.jpg",
      title: "KUKIO",
      location: `Kohala, Hawaii`,
    },
    {
      pic: "p22.jpg",
      title: "VAQUERO",
      location: `Westlake, Texas`,
    },
    {
      pic: "p23.jpg",
      title: "IRON HORSE",
      location: `Whitefish, Montana`,
    },
    {
      pic: "p24.jpg",
      title: "CORDEVALLE",
      location: `Silicon Valley, California`,
    },
    {
      pic: "p25.jpg",
      title: "ESTANICIA",
      location: `Scottsdale, Arizona`,
    },
  ];
}