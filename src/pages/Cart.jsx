import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
// import {Link} from "react-router-dom"


const Cart=()=>{
    const {cart}=useSelector((state)=>state);
    const [totalAmount, setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc, curr)=>acc+curr.price, 0));
    }, [cart])
    return (
        <div>
            {
                cart.length > 0 ?
                (<div>
                    <div>
                        {

                            cart.map((item, index)=>{
                                return <CartItem key={item.id}  item={item} itemIndex={index}/>
                            })
                        }
                    </div>
                    <div>
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total items: {cart.length}</span>
                            </p>
                        </div>
                        <div>
                            <p>Total Amount : ${totalAmount}</p>
                            <button>
                                Checkout Now
                            </button>
                        </div>
                    </div>

                </div>) :

                (<div>
                    
                    <h2>Your Cart is empty! </h2>
                    <link to={"/"}>
                        <button>Shop Now</button>
                    </link>
                    
                 </div>)
            }
        </div>
    )
}

export default Cart;