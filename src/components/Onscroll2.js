
import downarrow from"../images/Screenshot 2023-09-27 at 11.22.36 PM.png";

export default function Onscroll2()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('ih2')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('ih2').innerText="ENTER  YOUR NUMBER";

    } 
    
    
    return(
        <>
          <button id="b2" onClick={task1}><img id="i1" src={downarrow} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}