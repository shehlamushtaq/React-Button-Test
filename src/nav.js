import React, {useState} from 'react';

const Nav = () => {
    
    //let txt = "Test2";

    const [txt, setTxt] = useState("Test3");
    const [txt2, setTxt2] = useState("Test312");

    const ChangeText = (newText) => {
        //txt = newText;
        setTxt(newText);
    }


    return (
    <>
        <button onClick={() => ChangeText("Home")}> Home </button> 
        <button onClick={() => ChangeText("About")}> About </button> 
        <button onClick={() => setTxt("Links")}> Links </button> 
        <button onClick={() => ChangeText("Portfolio")}> PortFolio </button> 

        <div>
            <h1>Asim</h1>
            <h2>{txt}</h2>
            <h2>{txt2}</h2>
        </div>
    </> 
    );
}
 export default Nav;