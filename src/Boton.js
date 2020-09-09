import React, { useState } from "react"
import axios from 'axios';
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { render } from "react-dom";
import Listt from "./Listt.js";
let itemValue;

function valid(item) {
    console.warn("value", item.target.value)
    itemValue=item.target.value;
}
function Boton(){

    const [isloaded, setisloaded] = useState(false);
    const [item, setitem] = useState([])

    const submit=async()=>{
        await axios.get(`https://api.github.com/users/${itemValue}`)
        .then(data => {
                console.log(data);
                setisloaded(true);
                setitem([...item,data.data]);
        })
        
    }
        return(
            <div style={{  
                backgroundImage: "url(" + "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701471302-1200x700.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}} className="App" >
                <h1 style={{color:"white"}}>Welcome to Github Compare</h1>
                <Input type="text" placeholder="Enter GitName" onChange={(item)=>valid(item)}/>
                <Button type="primary" style={{ marginLeft: 20 }} onClick={()=>submit()}>
                Github Compare
                </Button>
            </div>
            <Listt item={item.sort((a,b)=>{                     //Sorting the 
                return b.followers - a.followers;
            })}/>
            </div>
        )
}
export default Boton