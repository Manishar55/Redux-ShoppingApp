
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"
import {toast} from "react-hot-toast"

const CartItem=({item, itemIndex})=>{

    const dispatch=useDispatch();

    dispatch(remove(item.id));
    toast.success("Item removed ");
    return (
        <div>
            <div>
                <div>
                    <img src={item.image} alt="ppp"></img>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div>
                            <RiDeleteBin5Fill />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default CartItem;