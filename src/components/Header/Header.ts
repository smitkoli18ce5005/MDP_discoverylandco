import './Header.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})


export default class Galleryheader extends Vue {
  private readonly loginURL: string = '../assets/logo.png'
  private readonly aboutdlc: string = 'About DLC'
  private readonly routeList: string[] = ['About DLC', 'Our Worlds', 'Experiences', 'Gallery', 'Press']
}