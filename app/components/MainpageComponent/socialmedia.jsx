import Image from "next/image"
import martOnline from "../../../public/images/martonline.png"
import oneklick from "../../../public/images/oneklick-black-logo.png"
import "../../style/HomeCSS/socialmedia.css"

const socialmedia = () => {

  return (
    <>

        <div className='socialmedia-main-container col-md-12 '  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true'>
        <div className="row">
        <div className="social-sub-container col-md-12">
            <div className="col-md-10">
                <div className='d-flex justify-content-center'>
                <p className='section-subtitle '>Our Best Service</p>
                </div>
                <div className="section-title-div ">
                <h3 className='section-title'>Perfect Contact This Software <br /> Company Manage</h3>
                </div>
            </div>
            </div>
            <div className="d-flex justify-content-center w-100 ">
            <div className="col-md-3 col-12 p-0 d-flex justify-content-center small-logos">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8 ">
                        <div className="social-i ">
                       
                        <Image src={martOnline} title='martonline logo'  width={'90px'} height={90}  alt="martonline logo" />

                           
                        </div>
                        {/* <div className="social-t">
                            <p className='social-t'>
                            Mart Online
                            </p>
                            <span>Our Client</span>
                        </div> */}
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i ">
                        <Image   src={oneklick} title='oneklick logo'  width={'90px'} height={90}     alt="oneklick logo" />
                        </div>
                       
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>

            </div>
            {/* <div className="col-md-3 col-12 p-0">
                <div className='social-media-card'>
                    <div className="social-content-box col-md-8">
                        <div className="social-i ">
                        <Image   src={oneklick} title='oneklick logo'  width={'90px'} height={90}     alt="oneklick logo" />
                        </div>
                       
                    </div>
                    <div className="social-content-link">
                    <span>
                    <button className='swipe-btn'  role="button">
                <i class="fa-solid fa-arrow-right"></i>
                </button>
                </span>
                        </div>

                </div>

            </div> */}
         
           
            </div>
        </div>
        </div>

      
    </>
  )
}

export default socialmedia
