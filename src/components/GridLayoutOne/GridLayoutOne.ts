import './GridLayoutOne.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        paraContent: {
            type: Array
        },
        headingContent: {
            type: Array
        },
        flag: {
            type: Boolean
        },
        addBackground:{
            type: String
        },
        picsArray:{
            type: Array
        },
        calledBy:{
          type: String
        }
    }
})
export default class GridLayoutOne extends Vue {
    private getForHome(pic: string): string {
        return require("@/assets/Home/" + pic);
      }
    private getForAboutDLC(pic: string): string {
        return require("@/assets/AboutDLC/" + pic);
    }  
}