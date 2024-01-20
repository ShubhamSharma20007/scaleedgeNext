
import Image from 'next/image';
import "../../style/HomeCSS/ourproject.css";
import ims from "../../../public/images/ims.webp"
import oneklick from "../../../public/images/2.webp"
import img3 from "../../../public/images/3.webp"
const ourproject = () => { 
  

  return (
    <>
    
      <div className='col-md-12 ourproject-main-container '>
        <div className="project-sub-container col-md-12">
        <div className="row col-md-10 p-0">
            <div className="col-md-6 left-project-section">
                <p className='section-subtitle '>Project Snapshots</p>
                <div className="section-title-div ">
                <h2 className='section-var '>Thorough Project Snapshot Compilation</h2>
                </div>
          
            </div>
            <div className="col-md-6 right-project-section">
            <div className="">
                
                <button className='swipe-btn' data-slide="prev"  href="#carouselExampleIndicators" role="button">
                <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className='swipe-btn' data-slide="next" href="#carouselExampleIndicators" role="button">
                <i className="fa-solid fa-arrow-right"></i>
                </button>
               
            </div>
            </div>
            </div>
            
        </div>

        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner ">
    <div className="carousel-item active" style={{height:'400px'}}>
      
      <Image className="d-block m-auto img-fluid carousel-img-part " width={"60%"} height={'60%'} src={ims} alt="inventory management system" title='inventory management system'   />
    
      
    </div>
    <div className="carousel-item ">
      <Image className="d-block m-auto img-fluid carousel-img-part"  width={"60%"} height={'60%'} src={oneklick} alt="oneklick website" title='oneklick website' />
      
    
    </div>
    <div className="carousel-item ">
      <Image className="d-block m-auto img-fluid carousel-img-part" height={'60%'}  width={"60%"} src={img3} alt="attendance software system" title='attendance software system' />
      
    
    </div>

  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>

</div>
   
      
    </>
  )
}

export default ourproject
