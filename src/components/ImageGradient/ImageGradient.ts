import './ImageGradient.scss'
import { Options, Vue } from 'vue-class-component';
@Options({
    props:{
        gradientData:{
            type: Object
        }
    }
})


export default class ImageGradient extends Vue {
    private getForExperience(pic: string): string {
        return require("@/assets/Experiences/" + pic);
    }
}