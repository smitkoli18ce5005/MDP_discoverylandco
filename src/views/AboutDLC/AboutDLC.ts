import './AboutDLC.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import AboutDlcHeader from '@/components/AboutDlcHeader/AboutDlcHeader.vue';
import OurMission from '@/components/OurMission/OurMission.vue';
import FullImage from '@/components/FullImage/FullImage.vue';
import Footer from '@/components/Footer/Footer.vue';
@Options({
  components: {
    Header,
    AboutDlcHeader,
    OurMission,
    FullImage,
    Footer
  }
})
export default class AboutDLC extends Vue {
  readonly picsArray = ['full1.jpg', 'full2.jpg', 'full3.jpg'];
}