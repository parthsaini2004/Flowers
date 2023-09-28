import Onscroll1 from "../components/Onscroll1";
import Onscroll2 from "../components/Onscroll2";
import Onscroll3 from "../components/Onscroll3";
import Onscroll4 from "../components/Onscroll4";
import Onscroll5 from "../components/Onscroll5";
import Plus1 from "../components/Plus1";
import Plus2 from "../components/Plus2";
import Plus3 from "../components/Plus3";



export default function Order(){
    return(<>
    <div className="order">
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6EFE7" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className="orders">


        <div className="order1">
            <div className="order1_1">
                <p>Order</p>
            </div>
            <div className="order1_2">
                    <div className="name">
                    <div className="sub_name">
                        <div className="para">
                     <p>Name</p>
                     </div>
                     <Onscroll1 />
                     </div>
                    <h2 id="ih1"></h2>
                    
                    </div>

                    <div className="name"> 
                    <div className="sub_name">
                    <div className="para">
                     <p>Number</p></div>
                     <Onscroll2 />
                     </div>
                    <h2 id="ih2"></h2>
                    
                    </div>

                    <div className="name"> 
                    <div className="sub_name">
                    <div className="para">
                     <p>Choose a bouquet</p></div>
                     <Onscroll3 />
                     </div>
                    <h2 id="ih3"></h2>
                    
                    </div>

                    <div className="name"> 
                    <div className="sub_name">
                    <div className="para">
                     <p>Date and time</p></div>
                     <Onscroll4 />
                     </div>
                    <h2 id="ih4"></h2>
                    
                    </div>

                    <div className="name"> 
                    <div className="sub_name">
                    <div className="para">
                     <p>Adress</p></div>
                     <Onscroll5 />
                     </div>
                    <h2 id="ih5"></h2>
                    
                    </div> 
            </div>

            <div className="order1_3"><button className="button1">Order</button></div>
        </div>



        <div className="order2">
            <div className="qanda"><p>Q/A</p></div>
            <div className="policies">
                <div className="subpolices">
                <div className="policies1">
                <p>What are your policies for returns or<br></br>exchanges if a customer is not satisfied <br></br>with the flowers?
                </p> </div>
                <div className="policies2 plus">
                    <Plus1 />
                </div>
                </div>
                <div id="emptyplusscroll1">
                </div>
                </div>

                <div className="optiontocreate">
                <div className="suboptiontocreate">
                <div className="option1">
                <p>What are your policies for returns or<br></br>exchanges if a customer is not satisfied <br></br>with the flowers?
                </p> </div>
                <div className="option2 plus">
                    <Plus2 />
                </div>
                </div>
                <div id="emptyplusscroll2">
                </div>
                </div>


                <div className="temp">
                <div className="subtemp">
                <div className="temp1">
                <p>What are the ideal temperatures and <br></br>lightning conditions for different type of <br></br>flowers? 
                </p> </div>
                <div className="temp2 plus">
                    <Plus3 />
                </div>
                </div>
                
                <div id="emptyplusscroll3">
                </div>
                </div>

            
        </div>
    </div>
    
    </div>
    
    
    
    </>
    );}