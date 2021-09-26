import './AboutDLC.scss'
import { Options, Vue } from 'vue-class-component';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';

@Options({
  components: {
    Header,
    Footer
  },
})
export default class AboutDLC extends Vue {
}