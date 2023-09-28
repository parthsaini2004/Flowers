

import plus from"../images/Screenshot 2023-09-28 at 10.49.03 PM.png";

export default function Plus1()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('emptyplusscroll1')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('emptyplusscroll1').innerText="we refund the money";

    } 
    
    
    return(
        <>
          <button id="bb1" onClick={task1}><img id="ii1" src={plus} className="vectorimageplus" alt="vectorimage"/></button>
         </>
        
    )
}