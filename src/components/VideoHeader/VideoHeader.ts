import './VideoHeader.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        headerData: Object
    }
})
export default class VideoHeader extends Vue {
    private getForHome(vid: string): string {
        return require("@/assets/Home/" + vid);
    }
    private getForExperiences(vid: string): string {
        return require("@/assets/Experiences/" + vid);
    }  
}