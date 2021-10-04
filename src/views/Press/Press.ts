import './Press.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import ImageHeader from '@/components/ImageHeader/ImageHeader.vue';
import LatestNews from '@/components/LatestNews/LatestNews.vue';

@Options({
  components: {
    Header,
    ImageHeader,
    LatestNews,
    Footer
  },
})
export default class Press extends Vue {
}