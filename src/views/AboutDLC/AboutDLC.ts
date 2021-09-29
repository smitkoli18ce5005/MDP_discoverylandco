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
  private readonly picsArray = ['full1.jpg', 'full2.jpg', 'full3.jpg'];
  private readonly headings = ['The Discovery Difference'];
  private readonly carouselList = [
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
  private readonly gridPicsArray1 = ['g1.jpg', 'g2.jpg'];
  private readonly gridHeading1 = ['Discovery Design'];
  private readonly gridPara1: string[] = ['See the beauty in every corner of your new, bespoke', 
    'home away from home. From fabrics and furniture', 
    'pieces to floorplans, our professional designers will', 
    'collaborate closely with you to create an interior living',
    'space which reflects your style and unique tastes as',
    'well as perfectly complementing your lifestyle.'];
  private readonly gridPicsArray2 = ['g3.jpg', 'g4.jpg'];
  private readonly gridHeading2 = ['Discovery Builders'];
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
  private readonly ourMissionDataObject = {
    heading: ['Our Mission'],
    imageName: 'image1.jpg',
    ourMissionHeaderPara: [
        'Founded in 1994 by Mike Meldman, Discovery Land Company is a',
        'US-based real estate developer and operator of private residential',
        'club communities and resorts with a world-renowned portfolio of',
        'domestic and international properties.'
    ],
    ourMissionPara: [[
      'We don’t build buildings, but rather we build settings',
      'where families can create intergenerational memories',
      'and enrich their lives in exquisite and untouched',
      'sanctuaries. Everything we do is driven by the',
      'fundamental desire to create spaces where families can',
      'be together.'
    ],[
        'These settings offer a relaxed and comfortable sense of',
        'community featuring outstanding clubhouses,',
        'incredible residential offerings, premier golf courses,',
        'welcoming staff, world-class culinary offerings and our',
        'custom Outdoor Pursuits program; all offering the',
        'highest of service standards to enrich your experience.'
    ]],
    calledBy: 'AboutDLC'
  }
}