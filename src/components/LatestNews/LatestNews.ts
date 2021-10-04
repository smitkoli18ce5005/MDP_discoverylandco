import './LatestNews.scss'
import { Options, Vue } from 'vue-class-component';
@Options({
    data(){
        return {
            index: 0,
            latestNewsData: [
                {
                    id: 1,
                    picName: 'l1.jpg',
                    heading: ['Discovery’s newest', 'property in Kaua’i North', 'Shore Preserve'],
                    paraContent: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.`
                },
                {
                    id: 2,
                    picName: 'l2.jpg',
                    heading: ['James Island',`Discovery's Newest`, `Property`],
                    paraContent: `
                    Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.
                  `
                },
                {
                    id: 3,
                    picName: 'l3.jpg',
                    heading: ['CostaTerra', `Discovery's 23rd property`],
                    paraContent: `
                    Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.
                  `
                },
                {
                    id: 4,
                    picName: 'l4.jpg',
                    heading: ['Troubadour To Open', 'Golf Course Fall 2019'],
                    paraContent: `
                    Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.
                  `
                }
            ]
        }
    },
    methods:{
        changeIndex(change: number) {
            if(this.latestNewsData[this.index + change]){
                this.index += change
            } else if (change == 1){
                this.index = 0;
            } else {
                this.index = 3
            }
        },
        getImage(name: string){
            return require('@/assets/Press/' +name);
        }
    }
})


export default class LatestNews extends Vue {
}