import "./LandsOfDiscovery.scss";
import { Options, Vue } from "vue-class-component";

@Options({
    data(){
        return {
            index: 0,
            globeData: [
                {
                  picName: "h1.jpg",
                  placeName: "James Island",
                  placeLocation: `Southern Gulf Islands, British Columbia, Canada`,
                  location: `
                  48.602830922° N / -123.342998628° W
                `,
                  sun: "55",
                  wind: "5.01",
                  compass: "156",
                },
                {
                  picName: "h2.jpg",
                  placeName: "Barbuda Ocean Club",
                  placeLocation: `Barbuda, West Indies`,
                  location: `
                  17.549884° N / -61.765587° W
                `,
                  sun: "73",
                  wind: "7.49",
                  compass: "175",
                },
                {
                  picName: "h3.jpg",
                  placeName: "Driftwood",
                  placeLocation: `
                  Austin, Texas
                `,
                  location: `
                  30.139339° N / -98.022342° W
                `,
                  sun: "72",
                  wind: "4.38",
                  compass: "171",
                },
                {
                  picName: "h4.jpg",
                  placeName: "Troubadour",
                  placeLocation: `
                  Nashville, Tennessee
                `,
                  location: `
                  35.828904° N / -86.679158° W
                `,
                  sun: "61",
                  wind: "2.59",
                  compass: "91",
                },
                {
                  picName: "h5.jpg",
                  placeName: "Playa Grande",
                  placeLocation: `
                  Rio San Juan, Dominican Republic 
                `,
                  location: `
                  19.3830° N / 70.0407° W
                `,
                  sun: "82",
                  wind: "19.37",
                  compass: "227",
                },
                {
                  picName: "h6.jpg",
                  placeName: "Chileno Bay",
                  placeLocation: `
                  Cabo San Lucas, Mexico
                `,
                  location: `
                  22.954708° N / -109.816218° W
                `,
                  sun: "70",
                  wind: "7.94",
                  compass: "331",
                },
                {
                  picName: "h7.jpg",
                  placeName: "The Summit",
                  placeLocation: `
                  Las Vegas, Nevada
                `,
                  location: `
                  36.1094° N / 115.3287° W
                `,
                  sun: "71",
                  wind: "8.90",
                  compass: "181",
                },
                {
                  picName: "h8.jpg",
                  placeName: "Dune Deck",
                  placeLocation: `
                  Westhampton Beach, NY
                `,
                  location: `
                  40.8093799° N / -72.6458277° W
                `,
                  sun: "55",
                  wind: "1.01",
                  compass: "63",
                },
                {
                  picName: "h9.jpg",
                  placeName: "Silo Ridge",
                  placeLocation: `
                  Amenia, New York
                `,
                  location: `
                  41.834259° N / -73.571259° W
                `,
                  sun: "47",
                  wind: "4.41",
                  compass: "353",
                },
                {
                  picName: "h10.jpg",
                  placeName: "Yellowstone Club",
                  placeLocation: `
                  Big Sky, Montana
                `,
                  location: `
                  45.2660° N / 111.2531° W
                `,
                  sun: "49",
                  wind: "4.18",
                  compass: "283",
                },
                {
                  picName: "h11.jpg",
                  placeName: "Gozzer Ranch",
                  placeLocation: `
                  Coeur d’Alene, Idaho
                `,
                  location: `
                  47.617997° N / -116.766169° W
                `,
                  sun: "39",
                  wind: "4.61",
                  compass: "60",
                },
                {
                  picName: "h12.jpg",
                  placeName: "El Dorado",
                  placeLocation: `
                  Los Cabos, Mexico
                `,
                  location: `
                  26.047947° N / -109.799287° W
                `,
                  sun: "84",
                  wind: "4.03",
                  compass: "180",
                },
                {
                  picName: "h13.jpg",
                  placeName: "Madison",
                  placeLocation: `
                  La Quinta, California
                `,
                  location: `
                  33.660962° N / -116.244456° W
                `,
                  sun: "72",
                  wind: "5.01",
                  compass: "288",
                },
                {
                  picName: "h14.jpg",
                  placeName: "Baker's Bay",
                  placeLocation: `
                  Great Guana Cay, Bahamas
                `,
                  location: `
                  26.686966° N / -77.146015° W 
                `,
                  sun: "80",
                  wind: "14.36",
                  compass: "74",
                },
                {
                  picName: "h15.jpg",
                  placeName: "Hideaway",
                  placeLocation: `
                  La Quinta, California
                `,
                  location: `
                  33.667059° N / -116.260879° W
                `,
                  sun: "72",
                  wind: "5.01",
                  compass: "288",
                },
                {
                  picName: "h16.jpg",
                  placeName: "Mountaintop",
                  placeLocation: `
                  Cashiers, North Carolina
                `,
                  location: `
                  35.106704° N / -83.097106° W
                `,
                  sun: "53",
                  wind: "3.56",
                  compass: "1",
                },
                {
                  picName: "h17.jpeg",
                  placeName: "Mirabel",
                  placeLocation: `
                  Scottsdale, Arizona
                `,
                  location: `
                  33.823760° N / -111.851592° W
                `,
                  sun: "65",
                  wind: "5.99",
                  compass: "135",
                },
                {
                  picName: "h18.jpg",
                  placeName: "Vaquero",
                  placeLocation: `
                  Westlake, Texas
                `,
                  location: `
                  32.965190° N / -97.194715° W
                `,
                  sun: "70",
                  wind: "1.01",
                  compass: "156",
                },
                {
                  picName: "h19.jpg",
                  placeName: "Iron Horse",
                  placeLocation: `
                  Whitefish, Montana
                `,
                  location: `
                  48.449344° N / -114.347434° W
                `,
                  sun: "33",
                  wind: "3.44",
                  compass: "290",
                },
                {
                  picName: "h20.jpg",
                  placeName: "CordeValle",
                  placeLocation: `
                  Silicon Valley, California
                `,
                  location: `
                  37.067811° N / -121.632827° W
                `,
                  sun: "55",
                  wind: "0.00",
                  compass: "0",
                },
                {
                  picName: "h21.jpg",
                  placeName: "Estancia",
                  placeLocation: `
                  Scottsdale, Arizona
                `,
                  location: `
                  33.738105° N / -111.865240° W
                `,
                  sun: "66",
                  wind: "5.99",
                  compass: "135",
                },
                {
                  picName: "h22.jpg",
                  placeName: "North Shore Preserve",
                  placeLocation: `
                  Kaua'i, Hawaii
                `,
                  location: `
                  22.193420° N / -159.361620° W
                `,
                  sun: "72",
                  wind: "13.06",
                  compass: "82",
                },
                {
                  picName: "h23.jpg",
                  placeName: "Mākena",
                  placeLocation: `
                  Maui, Hawaii
                `,
                  location: `
                  20.690308° N / -156.440582° W
                `,
                  sun: "74",
                  wind: "5.88",
                  compass: "48",
                },
                {
                  picName: "h24.jpg",
                  placeName: "Kūki'o",
                  placeLocation: `
                  Kohala, Hawaii
                `,
                  location: `
                  19.817312° N / -155.998547° W
                `,
                  sun: "75",
                  wind: "5.76",
                  compass: "120",
                },{
                    picName: "h25.jpg",
                    placeName: `
                    Comporta, Portugal
                  `,
                    placeLocation: `
                    CostaTerra
                  `,
                    location: `
                    38.198750° N / -8.764298° W
                  `,
                    sun: "19",
                    wind: "9.13",
                    compass: "3",
                  }
              ]
        }
    },
    methods:{
        changeIndex(change: number) {
            if(this.globeData[this.index + change]){
                this.index += change
            } else if (change == 1){
                this.index = 0;
            } else {
                this.index = 24
            }
        },
        getImage(name: string){
            return require('@/assets/Home/' +name);
        }
    }
})
export default class LandsOfDiscovery extends Vue {
  private readonly contentTitle: string[] = ["Lands of", "Discovery"];
  private readonly contents = [
    {
      id: 1,
      description:
        "A world away from the day-to-day. Your escape. Your haven. Your world. ",
    },
    {
      id: 2,
      description:
        "Explore the map below and take a journey to our communities. ",
    },
  ];
  private readonly heading: string[] = ["Welcome to", "our world"];
  private readonly imageUrls: string[] = [
    "image1.jpg",
    "image2.jpg",
    "background_image.jpg",
  ];
}
