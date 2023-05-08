import React from "react";
import CustomerInput from "../components/CustomerInput";
import {Link} from "react-router-dom";
const Login =() =>{
return (
<div  className="py-5" style={{background:"#FBE7D7",minHeight:"100vh"}}>
<br/>
<br/>
<br/>
<br/>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center ">Login to your account to continue .</p>
        < form action="">
        <CustomerInput  type="text"  placeholder="Email Address" id="email"/>
        <CustomerInput   type="password"  placeholder="Password" id="password"/>
        <div className="mb-3 text-end"><Link to="/forgot-password" className="">Forgot password ?</Link></div>
        <Link to="/admin"  id="login" className="border-0 px-5 py-2 text-white  fw-bold w-100 text-center text-decoration-none fs-5" style={{background:"#FBE7D7"}} type="submit">Login</Link>
        </form>
    </div>
</div>);

};
export default Login;