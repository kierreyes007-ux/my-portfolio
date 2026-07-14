import straho from "../assets/imgecom/straho.jpg";
import strahob from "../assets/imgecom/straho-banner.jpg";
import usama     from "../assets/imgecom/usama-edited.png"
import hoodie from "../assets/imgecom/hoodie_edited.png";
import hoodiebrown from "../assets/imgecom/hoodiebrown.png";
import hoodiepink from "../assets/imgecom/hoodiepink.png";
import hoodiegray from "../assets/imgecom/hoodiegray.png";
import shirtblack from "../assets/imgecom/shirtblack.png";
import shirtblue from "../assets/imgecom/shirtblue.png";
import watch from "../assets/imgecom/watch.png";
import watchbrown from "../assets/imgecom/watchbrown.jpg";
import backpack from "../assets/imgecom/backpack.png";
import shoeswhite from "../assets/imgecom/shoeswhite.png";


function Hero() {   
  
    return(
        <div className="bg-gray-100 w-full pb-10">
            <div className="w-full py-10 px-3">
                <img className="w-full h-60 object-cover md:hidden object-right rounded-lg"src={straho}></img>
                <img className="hidden md:block rounded-lg object-cover h-full w-full"
                src={strahob}></img>
            </div>


            <div className="flex flex-col px-10 justify-center">
             <p className="text-xl font-bold pl-5 py-4">Categories</p>
          
                
                <div className="w-full px-4 grid gap-10 grid-cols-4 justify-items-center">
                    
                    <div className="text-center font-bold ">
                    <img className="w-full max-w-[160px] aspect-square object-contain "src={usama}></img> <p>Nike Shoe</p>
                    </div>

                    <div className="text-center font-bold">
                    <img className="w-full max-w-[160px] aspect-square object-contain "src={hoodie}></img><p>Essential Hoodie</p>
                    </div>

                    <div className="text-center font-bold">
                    <img className="w-full max-w-[160px] aspect-square object-contain "src={watch}></img><p>Minimal Watches</p>
                    </div>

                    <div className="text-center font-bold">
                    <img className="w-full max-w-[160px] aspect-square object-contain "src={backpack}></img><p>Classic Backpack</p>
                    </div>
                </div>   
             </div>

             
        </div>
    )
}
export default Hero;