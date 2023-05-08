import React from "react";
import CustomerInput from "../components/CustomerInput";
const Resetpassword =() =>{
return(<div  className="py-5" style={{background:"#FBE7D7",minHeight:"100vh"}}>
<br/>
<br/>
<br/>
<br/>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Reset password</h3>
        <p className="text-center ">Please enter your new password .</p>
        < form action="">
        <label> Password</label>
        <CustomerInput  type="password"  placeholder="password" id="pass"/>"#FBE7D7"
        <label>  Confirm password</label>
        <CustomerInput  type="password" placeholder="confirm password" id="confirmpass"/>
        <button  className="border-0 px-3 py-2 text-white  fw-bold w-100 text-center text-decoration-none"  type="submit">Reset password</button>
        </form>
    </div>
</div>);
;
};
export default Resetpassword;