import './ImageFooter.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        footerData: {
            type: Object
        }
    }
})
export default class GridLayoutOne extends Vue {
    private getForAboutDLC(pic: string): string {
        return require("@/assets/AboutDLC/" + pic);
    }  
}