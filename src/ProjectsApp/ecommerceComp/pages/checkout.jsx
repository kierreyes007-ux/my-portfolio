import { 
    MapPin,
    ChevronRight
} from "lucide-react";
import { useAuthContext } from "../context/authContext";
import { useEcommerce } from "../context/ecommerceContext";
import { useOrderContext } from "../context/orderContext";

function Checkout(){

    const { user } = useAuthContext();
    const { cart } = useEcommerce();
    const {order, setOrder} = useOrderContext();
    return(
        <section className="w-full min-h-screen bg-gray-100 flex-col flex gap-2">
            
            <div className="w-full bg-white px-4 py-6 flex items-center justify-between">
                <div>
                <div className="flex gap-2">
                    <MapPin className="text-orange-500"/>
                    <p>{user.name}</p>
                    <p>09482385763</p>
                </div>
                <p className="px-8">Lopez, Quezon Rizal Poblacion</p>
            </div>
            <ChevronRight/>
            </div>

            <div className="w-full bg-white px-4 py-6">
                <p className="text-lg">Shop Name</p>

            </div>
           
        </section>
    )
}
export default Checkout;