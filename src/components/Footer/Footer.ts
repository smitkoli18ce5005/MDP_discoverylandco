import './Footer.scss'
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {
  private readonly contacts = [
    "GET IN TOUCH",
    "(480) 624-5200",
    "mail@discoverylandco.com",
  ];
  private readonly routesArray = [
    {
      to: "/about-dlc",
      routeText: "About DLC",
    },
    {
      to: "/our-worlds",
      routeText: "Our Worlds",
    },
    {
      to: "/experiences",
      routeText: "Experiences",
    },
    {
      to: "/gallery",
      routeText: "Gallery",
    },
    {
      to: "/press",
      routeText: "Press",
    },
  ];
  private readonly otherRoutesArray = [
    {
      link: "",
      otherRoutesText: "Magazine",
    },
    {
      link: "",
      otherRoutesText: "Careers",
    },
    {
      link: "",
      otherRoutesText: "Foundation",
    },
    {
      link: "",
      otherRoutesText: "Company",
    },
    {
      link: "",
      otherRoutesText: "Contact",
    },
    {
      link: "",
      otherRoutesText: "Privacy",
    },
  ];
  private readonly copyrightText: string =
    "© Discovery Land Company. All rights reserved.";
}