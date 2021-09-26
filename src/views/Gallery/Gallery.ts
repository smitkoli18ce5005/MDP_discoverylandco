import './Gallery.scss'
import { Options, Vue } from 'vue-class-component';
import Galleryheader from '@/components/GalleryMain/GalleryMain.vue';
import Galleryphotos from '@/components/GalleryPhotos/GalleryPhotos.vue';
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';

@Options({
  components: {
    Header,
    Galleryheader,
    Galleryphotos,
    Footer
  },
})
export default class Gallery extends Vue {
}