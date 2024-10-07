
import { PiShoppingCartFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="flex flex-row justify-between">

            <NavLink to="/">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fcode-logo.html&psig=AOvVaw0hXuyedpukpjmtgjC2ppHY&ust=1728299281977000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjh5tnO-YgDFQAAAAAdAAAAABAEn" alt="pp"></img>
            </NavLink>

            <div>
                <NavLink to="/">
                    <p>Home...</p>
                </NavLink>

                <NavLink to="/Cart">
                    <div>
                    <PiShoppingCartFill />
                    </div>
                </NavLink>    

            </div>
            
        </div>
    )
};

export default Navbar;