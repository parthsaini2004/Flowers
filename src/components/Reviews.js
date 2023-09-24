
import reviewphoto from "../images/Screenshot 2023-09-23 at 4.46.30 PM.png";
import stars from "../images/Screenshot 2023-09-23 at 4.48.48 PM.png"; 
import arrowleft from "../images/Screenshot 2023-09-24 at 12.30.24 AM.png";
import rightarrow from "../images/Screenshot 2023-09-24 at 12.30.24 AM 2.png";
import carousel2 from "../images/carousel_image2.png";
import carousel3 from "../images/carousel3.png"

export default function ReviewS(){
    return(
        
    <>
    
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#728EA8" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="reviews">
            <p  className="reviewwhite">Reviews</p>
            <div className="subelement">
              
              <div className="element1">
                <img src={reviewphoto} />
              </div>
              <div className="elem2_elem3">
              <div className="element2">
                <div className="subelement1"><p>Jacob Jones</p></div>
                <div className="subelement2"><img src={stars} /></div>
              </div>
              
              <div className="element3">
                <p>
                I wanted to take a moment to express my utmost <br></br>satisfaction with Bloom & Boom, I highly recommend <br></br>Bloom & Boom for their exceptional quality and<br></br> unwavering commitment to customer satisfaction..
                </p>
              </div>
              </div>
              </div>
              
          </div>
    
        </div>

        <div className="carousel-item">
        <div className="reviews">
            <p  className="reviewwhite">Reviews</p>
            <div className="subelement">
              
              <div className="element1">
                <img src={carousel2} />
              </div>
              <div className="elem2_elem3">
              <div className="element2">
                <div className="subelement1"><p>Serina Williams</p></div>
                <div className="subelement2"><img src={stars} /></div>
              </div>
              
              <div className="element3">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Repellendus omnis reiciendis obcaecati repellat porro<br></br> soluta officiis illo sunt hic doloribus dolorum sed dignis<br></br>simos, unde alias nostrum sapiente totam, quos provid
                </p>
              </div>
              </div>
              </div>
              
          </div>
        </div>


        <div className="carousel-item">
        <div className="reviews">
            <p  className="reviewwhite">Reviews</p>
            <div className="subelement">
              
              <div className="element1">
                <img src={carousel3} />
              </div>
              <div className="elem2_elem3">
              <div className="element2">
                <div className="subelement1"><p>Arthur Adams</p></div>
                <div className="subelement2"><img src={stars} /></div>
              </div>
              
              <div className="element3">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Repellendus omnis reiciendis obcaecati repellat porro<br></br> soluta officiis illo sunt hic doloribus dolorum sed dignis<br></br>simos, unde alias nostrum sapiente totam, quos provid
                </p>
              </div>
              </div>
              </div>
              
          </div>
        </div>







      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span aria-hidden="true"><img className="leftarrow" src={arrowleft} alt="" /></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span aria-hidden="true"><img className="rightarrow" src={rightarrow} alt="" /></span>
        <span className="visually-hidden">Next</span>
      </button>
      <svg className="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#728EA8" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

    
        </>
    );
}