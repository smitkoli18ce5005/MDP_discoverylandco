import './PressGrid.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    data(){
        return {
            index: 0,
            pressData: [
                [
                    {
                        heading: `10 Fairways to Tee Off on Now`,
                        para: `Vegas Magazine I September 2021`
                    },
                    {
                        heading: `Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic`,
                        para: `Bloomberg I September 2021`
                    },
                    {
                        heading: `Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated`,
                        para: `Telegraph UK | August 20, 2021`
                    },
                    {
                        heading: `This Property Company Ups the Ante with  Luxury and Sustainability`,
                        para: `Sunset Magazine | August 13, 2021`
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
                [
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                    {
                        heading: ``,
                        para: ``
                    },
                ],
            ]
        }
    },
    methods:{
        changeIndex(change: number) {
            if(this.pressData[this.index + change]){
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