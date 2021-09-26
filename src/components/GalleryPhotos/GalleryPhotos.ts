import './GalleryPhotos.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class GalleryPhotos extends Vue {
    private readonly galleryObjectList = [
        {
            id: 1,
            pic: 'outdoor-pursuits.jpg', 
            galleryText: 'Outdoor Pursuits'
        },
        {
            id: 2,
            pic: 'golf.jpg', 
            galleryText: 'Golf'
        },
        {
            id: 3,
            pic: 'lifestyle.jpeg', 
            galleryText: 'Lifestyle'
        },
        {
            id: 4,
            pic: 'landscapes.jpg', 
            galleryText: 'Landscapes'
        },
        {
            id: 5,
            pic: 'clubhouses.jpg', 
            galleryText: 'Clubhouses'
        },
        {
            id: 6,
            pic: 'wellness.jpg', 
            galleryText: 'Wellness'
        },
    ]
    private getImgURL(pic: string): string{
        return require('@/assets/Gallery/' +pic)
    }
}