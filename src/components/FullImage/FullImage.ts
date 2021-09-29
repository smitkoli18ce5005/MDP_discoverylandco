import './FullImage.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        picName: {
            type: String
        }
    }
})

export default class AboutDLC extends Vue {
    private getImageUrl(pic: string){
        return require('@/assets/AboutDLC/' +pic);
    }
}