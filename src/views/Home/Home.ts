import './Home.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue';
import WelcomeOurWorlds from '@/components/WelcomeOurWorlds/WelcomeOurWorlds.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    HomeHeader,
    WelcomeOurWorlds,
    Footer
  },
})
export default class Home extends Vue {
}