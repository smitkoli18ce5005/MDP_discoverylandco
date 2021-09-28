import './LandsOfDiscovery.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})

export default class LandsOfDiscovery extends Vue {
    private readonly contentTitle: string[] = ['Lands of', 'Discovery'];
    private readonly contents = [{
        id: 1,
        description: 'A world away from the day-to-day. Your escape. Your haven. Your world. '
    },{
        id: 2,
        description: 'Explore the map below and take a journey to our communities. '
    }];
    private readonly heading: string[] = ['Welcome to', 'our world'];
    private readonly imageUrls: string[] = ['image1.jpg', 'image2.jpg', 'background_image.jpg'];
    private getImageUrl(pic: string){
        return require('@/assets/Home/' +pic);
    }
}