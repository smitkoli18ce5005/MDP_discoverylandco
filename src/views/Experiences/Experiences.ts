import './Experiences.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import VideoHeader from '@/components/VideoHeader/VideoHeader.vue';
import OurMission from '@/components/OurMission/OurMission.vue';
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue';
import ImageGradient from '@/components/ImageGradient/ImageGradient.vue';

@Options({
  components: {
    Header,
    VideoHeader,
    OurMission,
    ImageFooter,
    ImageGradient,
    Footer
  },
})
export default class Experiences extends Vue {
  private readonly experienceHeaderData = {
    header : 'Unforgettable',
    subHeader: 'experiences',
    videoUrl: 'experiences.mp4',
    calledBy: 'Experience'
  };
  private readonly ourMissionDataObject = {
    heading: ['Exclusive to', 'your world'],
    imageName: 'image1.jpg',
    ourMissionHeaderPara: [[
        'Memorable days. Exceptional nights. We believe it’s our mission to',
        'make every minute matter. So you can live your life to the fullest,',
        'with the people closest to you.'
    ], `
    Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you.
  `],
    ourMissionPara: [[
      'Our worlds are designed to offer you endless ',
      'opportunities to share incredible once-in-a-lifetime ',
      'experiences and adventures every single minute of the ',
      'day. Each of our settings offers a relaxed sense of ',
      'community through exceptional clubhouses, ',
      'world-class golf courses, welcoming staff and an ',
      'extensive Outdoor Pursuits program. Create moments ',
      'of joy and wonder, unforgettable memories and ',
      'cherished times, together with those who matter most.'
    ]],
    calledBy: 'Experiences'
  }
  private readonly dataForFooter = {
    heading: 'Our Worlds',
    picName: 'footerImage.jpg',
    calledBy: 'Experiences'
  }
  private readonly gradientComponentData = [{
    gradientClass: 'gradient gradient1 gradient-left',
    imageGradientClass: 'image-gradient-div image-gradient-div-left',
    gradientContentClass: 'gradient-content gradient-content-left',
    picName: 'gradient1.jpg',
    heading: 'Golf',
    paraContent: 'We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.',
    isLeftAligned: true
  },{
    gradientClass: 'gradient gradient2 gradient-right',
    imageGradientClass: 'image-gradient-div image-gradient-div-right',
    gradientContentClass: 'gradient-content gradient-content-right',
    picName: 'gradient2.jpg',
    heading: 'Outdoor Pursuits',
    paraContent: `Our signature Outdoor Pursuits program is designed for families to create memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.`,
    isLeftAligned: true
  },{
    gradientClass: 'gradient gradient3 gradient-left',
    imageGradientClass: 'image-gradient-div image-gradient-div-left',
    gradientContentClass: 'gradient-content gradient-content-left',
    picName: 'gradient3.jpg',
    heading: 'Wellness',
    paraContent: `Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.`,
    isLeftAligned: true
  }]
}