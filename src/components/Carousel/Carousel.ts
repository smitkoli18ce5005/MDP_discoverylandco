import './Carousel.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    content:{
      type: Array
    },
    dataList:{
      type: Array
    },
    calledBy:{
      type: String
    }
  }
})
export default class Carousel extends Vue {
      private getForHome(pic: string): string {
        return require("@/assets/OurWorlds/" + pic);
      }
      private getForAboutDLC(pic: string): string {
        return require("@/assets/AboutDLC/" + pic);
      }  
}