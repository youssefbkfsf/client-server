import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../redux/slices/UserSlices";
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  return (
    <div>
      {isAuth ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={()=>{
            dispatch(logout())
          }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;