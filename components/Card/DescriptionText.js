
import React from "react";
import Image from "next/image";
const description = "Descriptif du lieu sur deux à trois lignes Descriptif du lieu sur deux à trois lignes ..."
const tempsOuverture = "09:00 - 17:00, Ouvert"
function DescriptionText (){
    return(<div>
<p className="text-gray-700 text-base mb-4 text-truncate py-2">
           {description} 
            </p>
            <p className="text-gray-700 text-base mb-4 text-truncate">
           {description} 
            </p>
            <p className="text-gray-700 text-base mb-4 text-truncate">
           {description} 
            </p>
            <div className="flex flex-row justify-start">
           <Image src="/time1.svg" height={30} width={30} />
           <p className="text-black-700 ml-6 font-large text-xl">
              {tempsOuverture}
            </p>
           </div>
    </div>)
}
export default DescriptionText;