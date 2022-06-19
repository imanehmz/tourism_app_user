import react from "react";
import Image from 'next/image'
import StarRating from "./StarRating";
import ButtonSet from "./ButtonSet";
import DescriptionText from "./DescriptionText";
import Events from "./Events";
import Link from "next/link";
const cardtitle = "Musée du Bardo"
const adresse = "Boulevard Krim Belkacem, Alger-centre"
const link = "http://www.w3.org/2000/svg"

function Card(){
    return(
        <div className="flex justify-end margin pr-20 ">
        <div className="rounded-lg shadow-lg bg-white ">
          <a href="#!">
            <img className="rounded-t-lg justify-center " 
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
             alt=""
  height={300}
  width = {500}
             />
          </a>
          <div className="p-6">
           <div className="flex flex-row ">
          <div className=" pr-40">
          <h5 className="text-gray-900 text-xl font-large mb-2 ">
                {cardtitle}</h5>
          </div>
                <button class="bg-lime-300 px-4 py-2 pr-6 font-semibold text-black inline-flex items-center space-x-2 rounded"
                >       
                 <Link href="/LieuDetails">
                 Visite guidée
                </Link>
                </button>
           </div>
            <p className="text-gray-700 text-base mb-4">
              {adresse}
            </p>
    
            <StarRating/>
           <ButtonSet/>
           <DescriptionText/>
           <p className="text-gray-700 text-base mb-4">
              Evenements
            </p>
            <Events/>
            <div class="flex items-center justify-center space-x-3">
                <button class="bg-lime-300 px-4 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
                    <Image src="/tips.svg" height={30} width={30} />
                    <span>Avis</span>
                </button>
                <button class="bg-lime-300 px-4 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded">
                    <Image src="/lightBulb.svg" height={30} width={30} />
                    <span>Tips</span>
                </button>
                </div>
            </div>
        </div>
      </div> 
);

}
export default Card;