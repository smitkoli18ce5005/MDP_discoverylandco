import './GalleryMain.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class GalleryMain extends Vue {
    private readonly gallery: string = 'Gallery'
}