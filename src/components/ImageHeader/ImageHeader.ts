import './ImageHeader.scss'
import { Options, Vue } from 'vue-class-component';
@Options({
    props:{
        flag:{
            type: Boolean
        }
    }
})
export default class ImageHeader extends Vue {
}