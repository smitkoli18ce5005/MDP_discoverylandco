import './AboutDLC.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import AboutDlcHeader from '@/components/AboutDlcHeader/AboutDlcHeader.vue';
import OurMission from '@/components/OurMission/OurMission.vue';
import FullImage from '@/components/FullImage/FullImage.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import GridLayoutOne from '@/components/GridLayoutOne/GridLayoutOne.vue';
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue';
import Footer from '@/components/Footer/Footer.vue';
@Options({
  components: {
    Header,
    AboutDlcHeader,
    OurMission,
    FullImage,
    Carousel,
    GridLayoutOne,
    ImageFooter,
    Footer
  }
})
export default class AboutDLC extends Vue {
  readonly picsArray = ['full1.jpg', 'full2.jpg', 'full3.jpg'];
  readonly headings = ['The Discovery Difference'];
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
  readonly gridPicsArray1 = ['g1.jpg', 'g2.jpg'];
  readonly gridHeading1 = ['Discovery Design'];
  private readonly gridPara1: string[] = ['See the beauty in every corner of your new, bespoke', 
    'home away from home. From fabrics and furniture', 
    'pieces to floorplans, our professional designers will', 
    'collaborate closely with you to create an interior living',
    'space which reflects your style and unique tastes as',
    'well as perfectly complementing your lifestyle.'];
  readonly gridPicsArray2 = ['g3.jpg', 'g4.jpg'];
  readonly gridHeading2 = ['Discovery Builders'];
  private readonly gridPara2: string[] = ['Every Discovery property is wonderfully in-tune with its', 
    'natural surroundings - a harmonious blend of the', 
    'architecturally impressive with the environmentally', 
    'sensitive. And your every expectation will be met, with',
    'our meticulous eye for detail matching outstanding',
    'levels of craftsmanship and master building.'];
  private readonly dataForFooter = {
    heading: 'Our Worlds',
    picName: 'footerImage.jpg',
    calledBy: 'AboutDLC'
  }
}