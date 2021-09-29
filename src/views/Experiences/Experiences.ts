import './Experiences.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import VideoHeader from '@/components/VideoHeader/VideoHeader.vue';

@Options({
  components: {
    Header,
    VideoHeader,
    Footer
  },
})
export default class Experiences extends Vue {
  private readonly experienceHeaderData = {
    header : 'Unforgettable',
    subHeader: 'experiences',
    videoUrl: 'experiences.mp4',
    calledBy: 'Experience'
  }
}