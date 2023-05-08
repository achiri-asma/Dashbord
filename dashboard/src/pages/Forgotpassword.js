import React from "react";
import CustomerInput from "../components/CustomerInput";
const Forgotpassword =() =>{
return(<div  className="py-5" style={{background:"#FBE7D7",minHeight:"100vh"}}>
<br/>
<br/>
<br/>
<br/>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot password</h3>
        <p className="text-center ">Please enter your register email  to get  reset password .</p>
        < form action="">
            <label> Email Address</label>
        <CustomerInput  type="text"  placeholder="Email Address" id="email"/>
        <button  className="border-0 px-3 py-2 text-white  fw-bold w-100 text-center text-decoration-none" style={{background:"#FBE7D7"}} type="submit">Send Link</button>
        </form>
    </div>
</div>);
;
};
export default Forgotpassword;