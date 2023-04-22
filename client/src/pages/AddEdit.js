import React,{useState,useEffect} from 'react';
import {useNavigate,useParams,Link } from "react-router-dom"
import "./AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
    roomno:0,
    name:"",
    email:"",
    phno:""
}
const AddEdit = () => {
    const [state,setState] = useState(initialState);
    const {roomno,name,email,phno}=state;
    const history  = useNavigate();
    
    const handleSubmit=(e) => {
        e.preventDefault();
        if(!roomno || !name || !email || !phno){
            toast.error("Please provide value into each input field");
        }
        else {
            axios.post("http://3.27.6.182:5000/api/post",{
                roomno,name,email,phno
            }).then(() => {
                setState({roomno:0,name:"",email:"",phno:""});
            })
            .catch((err)=> toast.error(err.response.data));
            toast.success("Record added succesfully");
            setTimeout(()=>{
                history(("/"),500);

            })
        
        }
    };
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]:value});
    };
  return (
    <div style={{marginTop:'100px'}}>
    <form style={{
        margin:'auto',
        padding:'15px',
        maxWidth:'400px',
        alignContent:'content'
    }}
    onSubmit={handleSubmit}>
        <label htmlform="roomno">Room No.</label>
        <input type="number" id="roomno" name="roomno" value={roomno || ""}
        onChange={handleInputChange}/>
        <label htmlform="name">Name</label>
        <input type="text" id="name" name="name" placeholder ="Your Name ..." value={name|| ""}
        onChange={handleInputChange}/>
        <label htmlform="email">Email</label>
        <input type="text" id="email" name="email" placeholder ="Your email" value={email || ""}
        onChange={handleInputChange}/>
        <label htmlform="phno">Phone number</label>
        <input type="text" id="phno" name="phno"  value={phno || ""}
        onChange={handleInputChange}/>

        <input type="submit" value="Save"/>
        <Link to="/">
            <input type="button" value="Go Back" />
        </Link>
    </form>
    </div>
  )
}

export default AddEdit
