import './AboutDLC.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import AboutDlcHeader from '@/components/AboutDlcHeader/AboutDlcHeader.vue';
import OurMission from '@/components/OurMission/OurMission.vue';
import FullImage from '@/components/FullImage/FullImage.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import Footer from '@/components/Footer/Footer.vue';
@Options({
  components: {
    Header,
    AboutDlcHeader,
    OurMission,
    FullImage,
    Carousel,
    Footer
  }
})
export default class AboutDLC extends Vue {
  readonly picsArray = ['full1.jpg', 'full2.jpg', 'full3.jpg'];
  readonly headings = ['The Discovery Difference']
  readonly carouselList = [
    {
      pic: "p1.jpg",
      title: "Focus on family",
      location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
    },
    {
      pic: "p2.jpg",
      title: "Incomparable experiences",
      location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
    },
    {
      pic: "p3.jpg",
      title: "Inspired by land",
      location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
    },
    {
      pic: "p4.jpg",
      title: "Sustainable future",
      location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
    },
    {
      pic: "p5.jpg",
      title: "Luxury bespoke homes",
      location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
    },
    {
      pic: "p1.jpg",
      title: "Focus on family",
      location: `Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.`,
    },
    {
      pic: "p2.jpg",
      title: "Incomparable experiences",
      location: `World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.`,
    },
    {
      pic: "p3.jpg",
      title: "Inspired by land",
      location: `Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.`,
    },
    {
      pic: "p4.jpg",
      title: "Sustainable future",
      location: `Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.`,
    },
    {
      pic: "p5.jpg",
      title: "Luxury bespoke homes",
      location: `Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.`,
    }
  ];
}