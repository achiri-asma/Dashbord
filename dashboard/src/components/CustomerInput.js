import React from "react";
const CustomerInput=(props)=>{
    const{type,label,i_id,i_class}=props;
return (<div class="form-floating mb-3">
<input type={type} class={i_class} id={i_id} placeholder={label}/>
<label htmLFor={label}>{label}</label>
</div> );

};
export default CustomerInput;