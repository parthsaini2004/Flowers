

import plus from"../images/Screenshot 2023-09-28 at 10.49.03 PM.png";

export default function Plus2()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('emptyplusscroll2')
           e1.innerText=""
          
          
          
        }, 2000);
        document.getElementById('emptyplusscroll2').innerText="yes we give optio to crete custom bouquet";

    } 
    
    
    return(
        <>
          <button id="bb2" onClick={task1}><img id="ii2" src={plus} className="vectorimageplus" alt="vectorimageplus"/></button>
         </>
        
    )
}