import './OurWorlds.scss'
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import OurWorldGrid from '@/components/OurWorldGrid.vue/OurWorldGrid.vue'
import Footer from '@/components/Footer/Footer.vue';

@Options({
  components: {
    Header,
    OurWorldGrid,
    Footer
  },
})
export default class OurWorlds extends Vue {
}