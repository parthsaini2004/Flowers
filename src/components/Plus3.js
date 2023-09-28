

import plus from"../images/Screenshot 2023-09-28 at 10.49.03 PM.png";

export default function Plus3()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('emptyplusscroll3')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('emptyplusscroll3').innerText="At 25deg celcius ,medium sunlight";

    } 
    
    
    return(
        <>
          <button id="bb3" onClick={task1}><img id="ii3" src={plus} className="vectorimageplus" alt="vectorimage"/></button>
         </>
        
    )
}