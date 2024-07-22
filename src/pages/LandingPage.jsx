import React, { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import photo from "../image/aastu.png"
import codeac from "../image/codeac.png"
import national from "../image/national.png"
import adobe from "../image/adobe.png"
import subway from "../image/subway.png"
import coca from "../image/coca.png"
import handshake from "../image/handshake.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const LandingPage = () => {
    const [buttonText, setButtonText] = useState('Copy');

    function handleClick() {
         navigator.clipboard.writeText('Kawsarvdesign@gmail.com')
         setButtonText('Copied!');

      }

    return (
        
    <div className=" font-roboto">
        <div className=" bg-[#FFFAFA] h-[1400px] md:h-[1200px] lg:h-[1050px] mx-auto rounded-b-[100px]  ">
        <div className="h-[800px] bg-[#F0EEE4] opacity-90 mx-1 rounded-b-[100px]"> 
    <div className="flex  justify-between">
    <div className="top z-120 text-black stick flex  gap-4 mx-12 text-sm items-right justify-between">
    <h1 className="mt-12 text-black hidden sm:flex  ">Kawsarvdesign@gmail.com</h1>
    <button onClick={handleClick} className="bg-white mt-10 py-3 text-center px-7 w-[90px] h-[45px] rounded-[60px] font-bold hidden sm:flex">{buttonText}</button>
    <button onClick={() => window.location = 'mailto:akinahomgetahun@gmail.com'} className="bg-black text-white mt-10 py-3 px-7 text-center w-[90px] h-[43px] rounded-[60px] flex sm:hidden font-bold">Email</button>
    <a href="https://drive.google.com/file/d/1LEIBVvRSeccx_PpIbikuPA6wfLapJsHD/view?usp=sharing"><button className="bg-white mt-10 py-3 text-center  w-[90px] h-[45px] rounded-[60px] font-bold">CV</button></a>
    </div>
    <div className=" top z-120 text-black stick flex justify-end space-x-3 mx-12">
        <a href="https://www.linkedin.com" className="hidden md:flex mt-12">Linkedin / </a>
        <a href="https://www.dribble.com" className="hidden md:flex mt-12">Dribble / </a>
        <a href="https://www.instagram.com" className="hidden md:flex mt-12">Instagram </a>
    <div className="mt-10 flex  justify-between gap-5 md:hidden">
    <a href="https://www.linkedin.com"><FaLinkedin size={28}/></a>
    <a href="https://www.dribble.com"><FaDribbble size={28}/></a>
    <a href="https://www.instagram.com"><FaInstagram size={28}/></a>
    </div> 
    </div>
    </div>
    <div className="grid grid-col w-[500px] mx-auto mt-12  justify-center items-center">
    <img src={photo} alt="" className="w-[200px] mx-auto" />
    <h1 className="text-center mt-9 w-[400px] font-bold text-[45px]">Building digital products, brands and experience.</h1>
    <button className="bg-black text-white mx-auto mt-12 text-[14px] rounded-[60px] w-[190px] h-[60px]">Latest Shots</button>
    </div>
    </div>
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:flex  justify-center  gap-[120px] mt-[90px] rounded-lg">
    <img src={national} alt="" className="w-[140px]  h-[50px] mx-auto"></img>
    <img src={coca} alt=""   className="w-[140px] h-[60px] mx-auto"></img>
    <img src={adobe} alt=""  className="w-[140px] h-[70px] mx-auto"></img>
    <img src={subway} alt="" className="w-[100px] h-[50px] mx-auto"></img>
    <img src={codeac} alt="" className="w-[100px] h-[50px] mx-auto"></img>
    </div>
    </div>
    <div className="grid grid-col">
    <h1 className="text-center mx-auto mt-[190px] w-[450px] lg:w-[800px] font-bold text-[40px] lg:text-[50px]">
        Collaborate with brand and agencies to create impactful results.
    </h1>
    <div className="inline-flex items-center justify-center w-full mt-12">
    <hr className="w-[400px] md:w-[700px] lg:w-[1000px] h-px my-8 bg-black border-0 opacity-30"></hr>
    <button className="absolute px-3 w-[150px] h-[50px] rounded-[90px] text-sm font-medium rotate-[-12deg] -translate-x-1/2 bg-white left-1/2 text-black">Services</button>
   </div>
   <div className=" grid grid-cols-2 lg:flex  justify-center mx-auto gap-12 md:gap-[90px] mt-[90px]">
        <div className="grid grid-col">
            <CgWebsite size={30}/>
            <div className="font-bold mt-4">UX & UI</div>
            <p className="w-[200px] mt-4"> Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
        </div>
        <div className="grid grid-col">
            <FaMobileScreenButton size={30} />
            <h1 className="font-bold mt-4">Web & Mobile App</h1>
            <p className="w-[200px] mt-4"> Transforming ideas into exceptional web and mobile app experiences.</p>
        </div>
        <div className="grid grid-col">
            <FaLaptopCode size={30}/>
            <h1 className="font-bold mt-4">Design & Creative</h1>
            <p className="w-[200px] mt-3"> Crafting visually stunning designs that connect with your audience.</p>
        </div>
        <div className="grid grid-col">
        <FaCode size={30}/>
        <h1 className="font-bold mt-4">Development</h1>
        <p className="w-[200px] mt-4"> Bringing your vision to life with the latest technology and design trends.</p>
        </div>

    </div>
   
   </div>                
      
    <div className="bg-[#FFFAFA] rounded-t-[100px] h-[800px] mt-[120px]">
    <div className="grid grid-col w-[500px] mx-auto  justify-center items-center">
    <img src={handshake} alt="" className="w-[150px] mt-[90px] mx-auto rounded-full opacity-60" />
    <h1 className="text-center mt-9 font-bold  text-[50px]">Tell me about your next project</h1>
    <button onClick={() => window.location = 'mailto:akinahomgetahun@gmail.com'}     
    className="bg-black text-white flex mx-auto mt-12 text-[14px] py-5 hover:underline rounded-[60px] w-[170px] h-[60px]"><MdEmail size={20} className="mx-6 "/> Email Me</button>
    </div>
    <div className="inline-flex items-center justify-center w-full mt-[90px]">
    <hr className=" w-[800px] lg:w-[1500px] h-px my-8 bg-black border-0 opacity-30"></hr>
    </div>
    <div className="flex  justify-center mx-auto gap-[180px] md:gap-[390px] lg:gap-[600px] mt-[90px]">
        <div className="">© 2024 All rights reserved.</div>
    <div className="hidden md:flex ">
        <a href="https://www.linkedin.com" >Linkedin / </a>
        <a href="https://www.dribble.com">Dribble / </a>
        <a href="https://www.instagram.com" >Instagram </a>
    </div>
    <div className=" flex md:hidden justify-between gap-5 ">
    <a href="https://www.linkedin.com"><FaLinkedin size={28}/></a>
    <a href="https://www.dribble.com"><FaDribbble size={28}/></a>
    <a href="https://www.instagram.com"><FaInstagram size={28}/></a>
    </div> 
     </div>
    </div>
 </div>
    )
};
export default LandingPage
