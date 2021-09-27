import './WelcomeOurWorlds.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class WelcomeOurWorlds extends Vue {
    private readonly heading: string[] = ['Welcome to', 'our world'];
    private readonly imageUrls: string[] = ['image1.jpg', 'image2.jpg', 'background_image.jpg'];
    private getImageUrl(pic: string){
        return require('@/assets/Home/' +pic);
    }
    private readonly para: string[] = ['Discover the unique atmosphere of our private', 'residential club communities. Once experienced. Never', 
    'forgotten. This is classic, comfortable, modern living in', 
    'nature’s most spectacular settings worldwide.', 
    'Reassuringly exclusive. Generously welcoming. Find',
    'your unique world – a place where families love to be;',
    'creating unforgettable moments, together.']
}