import './AboutDLC.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import AboutDlcHeader from '@/components/AboutDlcHeader/AboutDlcHeader.vue';
import Footer from '@/components/Footer/Footer.vue';
@Options({
  components: {
    Header,
    AboutDlcHeader,
    Footer
  },
})
export default class AboutDLC extends Vue {
}