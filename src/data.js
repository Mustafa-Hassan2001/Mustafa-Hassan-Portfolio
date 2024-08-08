import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { AiFillMediumCircle  } from "react-icons/ai";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { FaStackOverflow } from 'react-icons/fa';
import { project1, project2, project3, project4, project5  } from '../src/images/';

export const menu = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Services' },
  { name: 'Awards' },
  { name: 'Projects' },
  { name: 'Contact' }
];



export const projects = [
    { 
      id:1,
      title: 'VisionGlyco',
      image: project1,
      category:"UI/UX",
      data:{
         description: `VisionGlyco is an innovative, cloud-powered blood glucose monitoring solution designed to address the challenges faced by diabetic patients. Utilizing non-invasive techniques, our platform leverages high-resolution images of the eye, analyzed through a deep learning computer vision framework. This allows for continuous and cost-effective monitoring of blood glucose levels, providing a user-friendly alternative to invasive methods.`,
         demoLink: "https://www.youtube.com/watch?v=NVzd-JaRIKE",
         githubLink: "https://www.figma.com/design/iewWYqlv6UAEJRliw5Gi4D/VisionGlyco?node-id=0-1&t=T63HPpSm6Df1c9vm-1",
         
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
        },
      ]
    },
    {
      id:2,
      title: 'FootPlot',
      image: project2,
      category:"Web",
      data:{
        description:`Enhance your online shopping experience with our E-Commerce Application 
        UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
        interface offers easy navigation, personalized recommendations, and secure 
        transactions. Elevate your digital storefront and captivate customers with a visually 
        stunning design tailored to your brand`,
        demoLink: "https://footlpot.netlify.app/",
        githubLink: "https://github.com/Mustafa-Hassan2001/Footplot",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
      ]
    },
    {
      id:3,
      title: 'FitPhysique',
      image: project3,
      category:"Web",
      data:{
        description: `Transform your fitness journey with FitPhysique, a dynamic and responsive gym website crafted using HTML, CSS, and JavaScript. Our platform offers a sleek, user-friendly interface that adapts seamlessly across all devices. FitPhysique empowers users to explore fitness programs, track their progress, and engage with a vibrant community. Experience the perfect blend of functionality and design as we elevate your gym experience to new heights.`,
        demoLink: "https://mustafa-hassan2001.github.io/FitPhysique/",
        githubLink: "https://github.com/Mustafa-Hassan2001/FitPhysique"
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
      ]
    },
    {
      id:4,
      title: 'Fitness App',
      image: project5,
      category:"Apps",
      data:{
        description: `Transform your fitness journey with FitPhysique, a dynamic and responsive gym website crafted using React Native Our platform offers a sleek, user-friendly interface that adapts seamlessly across all devices. FitPhysique empowers users to explore fitness programs, track their progress, and engage with a vibrant community. Experience the perfect blend of functionality and design as we elevate your gym experience to new heights.`,
        demoLink: "https://www.youtube.com/watch?v=1Sdo4yzOphY",
        githubLink: "https://github.com/Mustafa-Hassan2001/React-Native-Fitness-App",
        
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:5,
      title: 'Machlog',
      image: project4,
      category:"UI/UX",
      data:{
        description: `Experience ride at your fingertips with our sleek Rider App Design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
        demoLink: "https://www.youtube.com/watch?v=CRp9DRT6EPc",
        githubLink: "https://www.figma.com/design/ofMsWcunDhCMxHsMnXSxlg/Machlog?node-id=0-1&t=z594io1iDrlgVDVt-1",
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
        },
      ]
    },
    {
      id:6,
      title: 'VisionGlyco',
      image: project1,
      category:"Apps",
      data:{
        description: `VisionGlyco is an innovative, cloud-powered blood glucose monitoring solution designed to address the challenges faced by diabetic patients. Utilizing non-invasive techniques, our platform leverages high-resolution images of the eye, analyzed through a deep learning computer vision framework. This allows for continuous and cost-effective monitoring of blood glucose levels, providing a user-friendly alternative to invasive methods.`,
        demoLink: "https://www.youtube.com/watch?v=NVzd-JaRIKE",
        githubLink: "https://github.com/Mustafa-Hassan2001/VisionGlyco-App",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
  ]
  


export const experience = [
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Experienced",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"React Native",
                level:"Experienced",
            },
            {
              skill:"Android Studio",
              level:"Experienced",
          },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
              skill:"Firebase",
              level:"Experienced",
            },
            {
                skill:"Java",
                level:"Experienced",
            },
            {
                skill:"Python",
                level:"Experienced",
            },
            {
                skill:"Microsoft SQL",
                level:"Experienced",
            },
        ]
    },
    {
      title:"Miscellaneous",
      data:[
          {
              skill:"Microsoft Azure",
              level:"Intermediate",
          },
          {
              skill:"AWS",
              level:"Intermediate",
          },
          {
              skill:"Meachine Learning",
              level:"Intermediate",
          },
          {
            skill:"Linux",
            level:"Experienced",
          },
          {
            skill:"GitHub",
            level:"Experienced",
          },
          
      ]
  }
]


export const socialHandles = [
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Mustafa-Hassan2001",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/mustafahassan2001/",
  },
  {
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"https://www.youtube.com/@syedmustafahassan2001",
  },
  {
    name:"Medium",
    icon:<AiFillMediumCircle/>,
    link:"https://medium.com/@fa21bscs0030",
  },
  {
    name:"Medium",
    icon:<FaStackOverflow/>,
    link:"https://stackoverflow.com/users/17993061/syed-mustafa-hassan",
  },
  
];