import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Update() {

    
        const[book,setBook] = useState({
            title:"",
            desc:"",
            price:"",
            cover:""
        });

        const navigate = useNavigate();
        const location = useLocation();

        const bookId =location.pathname.split("/")[2]


        console.log(location.pathname.split("/"))
    

    const handleChange = (e) =>{
        setBook(prev=>({...prev,[e.target.name]: e.target.value}))
    };

    const handleClick = async e =>{
        try{
            await axios.put("http://localhost:8800/books/"+bookId, book);
            navigate("/")
        }catch(err){
            console.log(err)
        }
        e.preventDefault()
    }

    console.log(book);

    return(
        <>
        <div className="form">
            <h1>Update the book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
        </>
    )
}