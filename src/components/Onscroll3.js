
import downarrow from"../images/Screenshot 2023-09-27 at 11.22.36 PM.png";

export default function Onscroll3()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('ih3')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('ih3').innerText="CHOOSE YOUR BOUQUET";

    }
    
    
    return(
        <>
          <button id="b3" onClick={task1}><img id="i1" src={downarrow} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}