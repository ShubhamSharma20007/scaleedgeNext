"use client"
import Image from 'next/image'
// import AOS from "aos";
// import "aos/dist/aos.css";
import "@/app/style/HomeCSS/mainpage.css";
import Companyserver from "./components/MainpageComponent/companyserver";
import dotline from "../public/images/dottedline.webp";
import ladybulb from "../public/images/home.webp";
import rightyellow from "../public/images/rightyellowwing.webp?v=1.1";
import pinktringle from "../public/images/pinktriangle.webp";
import Categories from "../app/components/MainpageComponent/categories";
import Ourabout from "./components/MainpageComponent/ourabout";
import Ourservices from "./components/MainpageComponent/ourservices";
import Ourproject from "../app/components/MainpageComponent/ourproject";
import Socialmedia from "../app/components/MainpageComponent/socialmedia";
import Oursolution from "./components/MainpageComponent/oursolution";
import Progress from "../app/components/MainpageComponent/progess";
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
export default function Home() {
  return (
   <>
     <Navbar />
      {/* <div id="loader" ref={item}  >
          <p ref={itemvalue1}>Simple</p>
          <p ref={itemvalue2} >Smarter</p>
          <p ref={itemvalue3}>Faster</p>
      </div> */}
      <div className="col-md-12 main-page-container" >
        <div className="row col-md-10">
          <div className="col-md-5 mainpage-left-container m-auto " data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false">
            <p className="section-subtitle">
          
            Welcome to ScaleEdge Solutions
            </p>
            <div
              className="mainpage-headline-container"
              
            > 
              <h1 className="main-page-container-header">
              Simpler.Smarter.Faster
              </h1>
              
             
            </div>
            <div className="section-about col-md-11">
           <ul className='p-0'>
           <li className="text-start"><strong>Simplified Technology :</strong> We simplify complex technology.</li>
           <li className="text-start"><strong>Smarter Solutions:</strong> Delivering solutions that work seamlessly for your business.</li>
           <li className="text-start"><strong>Commitment to Speed:</strong> Staying ahead in the fast-paced digital landscape.</li>
           <li className="text-start"><strong>Efficiency:</strong> Achieving your goals efficiently..</li>
           <li className="text-start"><strong>Streamlined Approach:</strong>Partner with us for a streamlined, intelligent approach.</li>
           <li className="text-start"><strong>Accelerated Success:</strong>Your journey in the digital world made smoother and faster.</li>
           </ul>

            </div>
            <Image
                src={dotline}
                title="dotline"
                width={'100%'}
                height={'100%'}
                alt="dotline"
                className="img-fluid dotted"
                
              />
            {/* <div className="slider-btn">
              <Link className="text-dark fw-bold"  >
                <span className="main-btn magnetic startedbtn"> get started </span>
              </Link>
            </div> */}
            <Image
            width={'100%'}
            height={'100%'}
              src={pinktringle}
              alt="pinktringle"
              className="img-fluid pinktringle"
              title="pinktringle"
              
              
            />
          </div>
          <div className="col-md-6 mainpage-right-container d-flex start-content-center">
          <div className="m-auto">
          <Image
              src={ladybulb}
              height={'100%'}
              width={'100%'}
              className="ladybulb img-fluid  m-auto  "
              title="software service"
              alt="software service"
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              
            />
          </div>
            
            <Image
            height={'100%'}
            width={'100%'}
              src={rightyellow}
              alt="curve-img"
              className="img-fluid curve-img"
              title="curve-img"
              
            />
          </div>
        </div>
      </div>
      <Ourservices />
        <Ourabout />
        <Companyserver />
        <Categories/>
        <Ourproject />
        <Progress/>
        {/* <Socialmedia /> */}
        <Oursolution />
        <Footer />
   </>
  )
}
