import menu from "../images/Screenshot 2023-09-29 at 3.54.11 PM.png";

export default function Navbar(){
    const Menu =() =>{
        document.querySelector('.menubutton').addEventListener('click', ()=>{
            document.querySelector('.orignalcontents').classList.toggle('flipcontents');
         } )
    }
    return(
<>
<div className="navbar">
    <div id ="cont1" className="contents ">
    <ul className="  flipcontents orignalcontents ">
        <li id="bloom">BLOOM&BOOM</li>
        <li>About us</li>
        <li>Catalog</li>
        <li>Delivery</li>
        <li>Reviews</li>
        <li>Contacts</li>
    </ul>
    </div>
    <div className="hiddendiv"></div>
    <div className="formenu">
        <div className="eng"><p>ENG</p></div>
        <div className="menubar"><button className="menubutton" onClick={Menu} ><img id="menuphoto" src={menu} alt="" /></button></div>
    </div>
</div>








</>
    );
}