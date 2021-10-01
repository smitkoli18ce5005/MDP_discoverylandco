import './Press.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';
import ImageHeader from '@/components/ImageHeader/ImageHeader.vue';

@Options({
  components: {
    Header,
    ImageHeader,
    Footer
  },
})
export default class Press extends Vue {
}