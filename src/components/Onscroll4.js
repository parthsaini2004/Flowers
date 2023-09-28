
import downarrow from"../images/Screenshot 2023-09-27 at 11.22.36 PM.png";

export default function Onscroll4()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('ih4')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('ih4').innerText="ENTER SUITABLE DATE AND TIME";

    } 
    
    
    return(
        <>
          <button id="b4" onClick={task1}><img id="i1" src={downarrow} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}