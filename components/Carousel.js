import React from "react";
function Carousel (){
    
    return(
       <div className="flex flex-row justify-around ">
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="/Mask group(1).png" alt=""/>
                </a>
            </div>
            </div>
            <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="/Mask group(1).png" alt=""/>
            </a>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="/Mask group(1).png" alt=""/>
            </a>
        </div>
        </div>
      
       </div>
    )
}
export default Carousel;