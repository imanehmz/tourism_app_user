import React from "react"
import Carousel from "./../components/Carousel"
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
const cardtitle = "Musée du Bardo"
const adresse = "Boulevard Krim Belkacem"
const linkVR = "https://testpacealgeria.sfo3.digitaloceanspaces.com/virtualtours/Bastion/index.htm"
function LieuDetails () {
    return (
        <div>
            <Navbar/>
           <div className="pl-30 ml-20"> 
                <h5 className="text-gray-900 text-xl font-large mb-2 ">
                    {cardtitle}</h5>
                <p className="text-gray-700 text-base mb-4">
                {adresse}
                </p>
            </div>
          < Carousel/>
         <div className=" py-20 flex flex-row justify-center">
         <button class="bg-lime-300 px-6 py-5 pr-6 font-semibold text-black inline-flex items-center space-x-2 rounded"
                >       
            <Link href= {linkVR}>
            Visite virtuelle
            </Link>
        </button>
         </div>
        </div>
    )
}
export default LieuDetails;