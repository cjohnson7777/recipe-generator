import React from "react";
import './Typebar.css'

function Typebar(){
return (
    <div className="typebar">
        <form className="form">
        <input type="text" id="ingredient" placeholder="ingredients"></input>
        <button type="submit" className="add">ADD</button>
        </form>
    </div>
    )
}
export default Typebar;