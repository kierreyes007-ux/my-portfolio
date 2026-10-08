import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { 
    CircleUserRound,
    WalletCards,
    Package,
    Truck,
    CircleCheck,
    UserRound,
    MapPin,
    CreditCard,
    ShieldCheck,
    Heart,
    Bell,
    CircleHelp,
ChevronRight } from "lucide-react";

function Profile(){
    const { user } = useAuthContext();
    return(
        <section className="min-h-screen w-full bg-[#f7f7f5] md:px-4 pb-16 pt-4 text-neutral-950 sm:px-6 lg:px-10 flex flex-col gap-2   ">
            <div className="w-full flex justify-between items-center px-2 ">
                <div className="flex gap-3 items-center px-2">
                    <CircleUserRound className="md:h-20 md:w-20 w-15 h-15" />
                    <div className="grid">
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                        <p className="inline-flex items-center gap-1 rounded-full bg-green-50 py-0.5 text-xs font-medium text-green-600"> <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500 text-[9px] text-white"> ✓ </span> Verified </p>
                    </div>
                </div>

                <div>
                    <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"> Edit Profile </button>
                </div>
            </div>

            <div className="px-4 bg-white rounded-lg py-4 grid px-2">
                <div className="flex items-center w-full justify-between pb-4">
                    <p >My Orders</p>
                    <button className="text-sm md:text-base">View all {">"}</button>
                </div>

                <div className="grid grid-cols-4 items-center w-full pb-4">
                    <div className="grid gap-2">
                     <div className="md:flex gap-2"><WalletCards className="md:h-10 md:w-10 h-7 w-7 text-orange-500"/><p className="text-base md:text-lg">To Pay</p></div>   
                        <p className="mx-6 text-xl md:text-2xl">0</p>
                    </div>
                    
                    <div className="grid gap-2">
                     <div className="md:flex gap-2"><Package className="md:h-10 md:w-10 h-7 w-7 text-blue-500"/><p>To Pay</p></div>   
                        <p className="mx-6 text-xl md:text-2xl">0</p>
                    </div>

                    <div className="grid gap-2">
                     <div className="md:flex gap-2"><Truck className="md:h-10 md:w-10 h-7 w-7 text-green-500"/><p>To Pay</p></div>   
                        <p className="mx-6 text-xl md:text-2xl">0</p>
                    </div>

                    <div className="grid gap-2">
                     <div className="md:flex gap-2"><CircleCheck className="md:h-10 md:w-10 h-7 w-7 text-violet-500"/><p>To Pay</p></div>   
                        <p className="mx-6 text-xl md:text-2xl">0</p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4 px-6">
                <p className="text-lg font-bold pb-2">Account</p>
                <div className="grid gap-4">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <UserRound/>
                        <div>
                            <p className="text-md">Personal Information</p>
                            <p className="text-sm text-neutral-500">View and edit your personal information</p>
                        </div>
                        </div>
                        <ChevronRight/>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <MapPin/>
                        <div>
                            <p className="text-md">My Addresses</p>
                            <p className="text-sm text-neutral-500">Manage your shipping addresses</p>
                        </div>
                        </div>
                        <ChevronRight/>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <CreditCard/>
                        <div>
                            <p className="text-md">Payment Methods</p>
                            <p className="text-sm text-neutral-500">Manage your card and payment options</p>
                        </div>
                        </div>
                        <ChevronRight/>
                    </div>

                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                        <ShieldCheck/>
                        <div>
                            <p className="text-md">Password & Security</p>
                            <p className="text-sm text-neutral-500">Update your password and security settings</p>
                        </div>
                        </div>
                        <ChevronRight/>
                    </div>
                </div>

            </div>

            <div className="grid bg-white py-4 px-6">
                <p className="font-bold text-lg pb-2">More</p>
                <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Heart />
                            <div>
                                <p className="text-md">Wishlist</p>
                                <p className="text-neutral-500 text-sm">Saved item for later</p>
                            </div>
                        </div>
                        <ChevronRight/>
                    </div>

                   <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bell />
                            <div>
                                <p className="text-md">Notifications</p>
                                <p className="text-neutral-500 text-sm">Order updates and promotions</p>
                            </div>
                        </div>
                        <ChevronRight/>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <CircleHelp />
                            <div>
                                <p className="text-md">Help Center</p>
                                <p className="text-neutral-500 text-sm">FAQs, guides and support</p>
                            </div>
                        </div>
                            <ChevronRight/>
                    </div>
                       
                    </div>
            </div>
        </section>
    )
}
export default Profile;