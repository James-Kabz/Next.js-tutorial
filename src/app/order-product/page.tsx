"use client";
import { useRouter } from "next/navigation"

export default function OrderProduct(){

    const router = useRouter();
    const handleCLick = () => {
        console.log("Placing your order");
        router.back();
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleCLick}>Place Order</button>
        </>
    )
}