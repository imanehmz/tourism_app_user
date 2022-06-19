import './../../styles/Rechercher.module.css'
 import react from 'react';
import { useRouter } from 'next/dist/client/router';
const  Rechercher = () => {
    const router = useRouter();
    return(
        <div className='d-flex justify-content-center '>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
            <div>
                <form class="d-flex my-2 my-lg-0 ">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button class="btn bg-black" type="button">
                    <i class="fa fa-search"></i>
                 </button>
                </form>
            </div>
            <div>
                <form class="d-flex my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button class="btn bg-black" type="button">
                    <i class="fa fa-search "></i>
                </button>                </form>
            </div>
        </div>
    )

}
export default Rechercher;