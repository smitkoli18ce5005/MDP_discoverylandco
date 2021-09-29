import './OurMission.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    props:{
        ourMissionData:{
            type: Object
        }
    }
})

export default class OurMission extends Vue {
   private getForExperiences(pic: string): string {
        return require("@/assets/Experiences/" + pic);
    }
    private getForAboutDLC(pic: string): string {
        return require("@/assets/AboutDLC/" + pic);
    } 
}