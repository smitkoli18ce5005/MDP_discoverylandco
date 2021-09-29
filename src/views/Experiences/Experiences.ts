import './Experiences.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import VideoHeader from '@/components/VideoHeader/VideoHeader.vue';
import OurMission from '@/components/OurMission/OurMission.vue';
import ImageFooter from '@/components/ImageFooter/ImageFooter.vue';

@Options({
  components: {
    Header,
    VideoHeader,
    OurMission,
    ImageFooter,
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
    ourMissionHeaderPara: [
        'Memorable days. Exceptional nights. We believe it’s our mission to',
        'make every minute matter. So you can live your life to the fullest,',
        'with the people closest to you.'
    ],
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
}