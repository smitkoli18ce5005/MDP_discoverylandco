import './OurMission.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})

export default class OurMission extends Vue {
    private readonly ourMissionHeaderPara: string[] = [
        'Founded in 1994 by Mike Meldman, Discovery Land Company is a',
        'US-based real estate developer and operator of private residential',
        'club communities and resorts with a world-renowned portfolio of',
        'domestic and international properties.'
    ];
    private readonly ourMissionPara1: string[] = [
        'We don’t build buildings, but rather we build settings',
        'where families can create intergenerational memories',
        'and enrich their lives in exquisite and untouched',
        'sanctuaries. Everything we do is driven by the',
        'fundamental desire to create spaces where families can',
        'be together.'
    ];
    private readonly ourMissionPara2: string[] = [
        'These settings offer a relaxed and comfortable sense of',
        'community featuring outstanding clubhouses,',
        'incredible residential offerings, premier golf courses,',
        'welcoming staff, world-class culinary offerings and our',
        'custom Outdoor Pursuits program; all offering the',
        'highest of service standards to enrich your experience.'
    ];
    private readonly heading: string = 'Our Mission';
    private readonly imageName: string = 'image1.jpg';
    private getImageUrl(pic: string){
        return require('@/assets/AboutDLC/' +pic);
    }
}