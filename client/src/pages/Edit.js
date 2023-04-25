import React,{useState,useEffect} from 'react';
import {useNavigate,useParams,Link } from "react-router-dom"
import "./AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";
const initialState = {
    Room_no:0,
    Name:"",
    Email:"",
    Phone_no:""
}


export const Edit = () => {
    const [state,setState] = useState(initialState);
    let {roomno,name,email,phno}=state;
    const history  = useNavigate();
    const {id} = useParams();
    
    const handleSubmit=(e) => {
        roomno = id;
        e.preventDefault();
        if(!name || !email || !phno){
            toast.error("Please provide value into each input field");
        }
        else {
            axios.put("http://13.238.182.148:5000/api/update",{
                roomno,name,email,phno
            })
            .catch((err)=> toast.error(err.response.data));
            toast.success("Record updated succesfully");
            setTimeout(()=>{
                history(("/"),500);

            })
        
        }
    };
        

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]:value});
    };

    // function axiosTest() {
    //     // create a promise for the axios request
    //     const promise = axios.get("http://localhost:5000/api/view/"+id+"")
    
    //     // using .then, create a new promise which extracts the data
    //     const dataPromise = promise.then((response) => response.data)
    
    //     // return it
    //     return dataPromise
    // }

    // axiosTest()
    // .then(data => {
    //     console.log(data);
    //     let a = data;
    //     console.log(a.response[0]);
    //     setState( a.response)
    // })
    // .catch(err => console.log(err))
    // console.log(axios.get("http://localhost:5000/api/view/"+id+""));
    // console.log(state);
  return (
    <div style={{marginTop:'100px'}}>
    <form style={{
        margin:'auto',
        padding:'15px',
        maxWidth:'400px',
        alignContent:'content'
    }} onSubmit={handleSubmit}
    >
        <label htmlform="roomno">Room No.</label>
        <input type="number" id="roomno" name="roomno" value={id}
        onChange={handleInputChange}/>
        <label htmlform="name">Name</label>
        <input type="text" id="name" name="name" placeholder ="Your Name ..." value={name|| ""}
        onChange={handleInputChange}/>
        <label htmlform="email">Email</label>
        <input type="text" id="email" name="email"  value={email || ""}
        onChange={handleInputChange}/>
        <label htmlform="phno">Phone number</label>
        <input type="text" id="phno" name="phno"  value={phno || ""}
        onChange={handleInputChange}/>

        <input type="submit" value="Update"/>
        <Link to="/">
            <input type="button" value="Go Back" />
        </Link>
    </form>
    </div>
  )
}
export default Edit;
