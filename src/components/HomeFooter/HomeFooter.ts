import './HomeFooter.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})

export default class HomeFooter extends Vue {
    private readonly imageUrls: string[] = ['f1.jpg', 'f2.jpg', 'f3.jpg'];
    private getImageUrl(pic: string){
        return require('@/assets/Home/' +pic);
    }
}