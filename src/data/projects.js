 import circleCropper from '../assets/projects-pics/circleCropper-desktop-preview.png';
 import snippitkit from '../assets/projects-pics/snippetkit-preview.png'
 import dotoNotes from '../assets/projects-pics/doto-notes-preview.png'
 import pixelkit from '../assets/projects-pics/pixelkit.png'
 import moviio from '../assets/projects-pics/moviio-preview.png'
 import retroCalc from '../assets/projects-pics/retroCalc-preview.png'


 const projects = [
  { id: 1, title: "Snippit-Kit", category: "tool" , img : snippitkit , desc: 'SnippitKit creates clean, shareable code screenshots.' , tech : 'Html , css , js , prism ' , },
  { id: 2, title: "Doto Notes", category: "web" , img : dotoNotes ,   desc: 'Doto Notes organizes ideas with color-coded, favorite, searchable notes.', tech : "JavaScript , Html , css , responsive , local storage , colorfull notes"},
  { id: 3, title: "Moviio", category: "web" , img: moviio ,  desc: 'Moviio discovers movies instantly with smooth motion.' , tech : 'JavaScript , CSS3 , html5 , TMdb API , youtube api , responsive '},
  { id: 4, title: "Circle Cropper", desc:"CircleCropper instantly crops images into perfect circles." , category: "tool" , img : circleCropper , tech : 'Javascript , css3 , html5 , responsive' },
  { id: 4, title: "PixelKit Icons", category: "web" , img : pixelkit ,    desc: 'PixelKit searches, resizes, recolors, and copies icons.' , tech : 'Html5 ,css3 , javascript , responsive , pixel icon package' },
  { id: 4, title: "Retro Calculator", category: "web" , img : retroCalc ,   desc: 'RetroCalc is a retro calculator with history and sounds.', tech : "css3 , html5 , local storage , javascript , sounds" },
];

export default projects;
