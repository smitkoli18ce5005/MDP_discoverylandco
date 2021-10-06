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
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                    {
                        heading: `Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic`,
                        para: `Business Insider |  June 4, 2021`
                    },
                    {
                        heading: `There's a real buy-in for resort communities offering amusement and amenities`,
                        para: `Luxury Magazine | Spring/Summer 2021`
                    },
                    {
                        heading: `This Blue Chip Caribbean Island Hopes to Dethrone St. Barts`,
                        para: `New York Post | April 5, 2021`
                    },
                ],
                [
                    {
                        heading: `No Longer Waiting for Retirement`,
                        para: `New York Times International Homes | March 27-28, 2021`
                    },
                    {
                        heading: `Golf and Pickleball are Having a Love Affair`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `For Many, the Pandemic Has Led to the 'Discovery' of Golf`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `Celebrities Keep Flocking to Discovery Resorts During the Pandemic. Here's Why`,
                        para: `Elle Decor | September 2020`
                    },
                ],
                [
                    {
                        heading: `Green Golf Homes in Five Destinations`,
                        para: `New York Times | September 11, 2020`
                    },
                    {
                        heading: `Bring Your Clubs. And the Kids.`,
                        para: `New York Times | September 11, 2020`
                    },
                    {
                        heading: `Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club`,
                        para: `Forbes | August 2020`
                    },
                    {
                        heading: `How Discovery Land Company's Mike Meldman Develops the World's Most Exclusive Private Clubs and Resort Communities`,
                        para: `CSQ | June 17, 2020`
                    },
                ],
                [
                    {
                        heading: `U.S. Golf Communities for the Love of the Game (Yellowstone Club and Madison Club)`,
                        para: `Mansion Global | April 23, 2020`
                    },
                    {
                        heading: `A Rockwellian Lifestyle at Silo Ridge (Silo Ridge)`,
                        para: `Quest Magazine | April 10, 2020`
                    },
                    {
                        heading: `Thinking of golf in retirement?`,
                        para: `New York Times | March 7, 2020`
                    },
                    {
                        heading: `Most Influential Developers`,
                        para: `Golf Inc. | January/February 2020`
                    },
                ],
                [
                    {
                        heading: `Looking Beyond the Golf Course`,
                        para: `The New York Times | March 9, 2019`
                    },
                    {
                        heading: `Star-Studded Madison Club Golf Invitational Raises Big Money for Charity (The Madison Club)`,
                        para: `Forbes | January 30, 2019`
                    },
                    {
                        heading: `Moveable Feasts (Silo Ridge)`,
                        para: `GOLF Magazine | July 3, 2019`
                    },
                    {
                        heading: `Silo Ridge Field Club Is the Stuff of Dreams (Silo Ridge)`,
                        para: `Hudson Valley Magazine | June 25, 2019`
                    },
                ],
                [
                    {
                        heading: `Work starts on $250M community with 300-plus homes, golf course (Driftwood)`,
                        para: `Austin Business Journal | June 19, 2019`
                    },
                    {
                        heading: `Exclusive Playa Grande Golf & Ocean Club Opens In The Dominican Republic (Playa Grande)`,
                        para: `Forbes | November 14, 2018`
                    },
                    {
                        heading: `The Captain’s Table: Mike Meldman`,
                        para: `Financial Times | June 22, 2018`
                    },
                    {
                        heading: `Shore Thing (Playa Grande)`,
                        para: `Modern Luxury Interiors | Spring 2019`
                    },
                ],
                [
                    {
                        heading: `The Remarkable Accomplishments of “Magic Mike”`,
                        para: `Executive Golfer | March 2019`
                    },
                    {
                        heading: `Best of the Bahamas: Baker’s Bay Golf & Ocean Club (Baker's Bay)`,
                        para: `Ocean Home | April 7, 2019`
                    },
                    {
                        heading: `The Man Behind Some of Golf’s Best Development Projects`,
                        para: `Desert Golf & Tennis | January 2019`
                    },
                    {
                        heading: `Peek Inside the Hudson Valley’s Most Exclusive Live-Work-Play Community (Silo Ridge)`,
                        para: `Hudson Valley Magazine | February 19, 2019`
                    },
                ],
                [
                    {
                        heading: `Golf Life: ‘Pebble Beach-plus site’ reopens in Dominican Republic (Playa Grande)`,
                        para: `Golfweek | November 11, 2018`
                    },
                    {
                        heading: `Beyond the Dunes: The Hamptons Reimagined (Dune Deck)`,
                        para: `Toy’s for Boys | Issue 16, Fall 2018`
                    },
                    {
                        heading: `Discovery Land Company Foundation Teams Up With PGA Pros To Raise Money For Those Who Need It Most`,
                        para: `Forbes | September 7, 2018`
                    },
                    {
                        heading: `Beach Club: A peek inside the Dune Deck Beach Club—the new waterside wellness retreat in Westhampton (Dune Deck)`,
                        para: `Hamptons Purist | Labor Day Issue 2017`
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
                this.index = 9
            }
        },
        getImage(name: string){
            return require('@/assets/Press/' +name);
        }
    }
})

export default class LatestNews extends Vue {
}