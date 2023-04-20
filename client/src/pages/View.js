import React,{useState,useEffect} from 'react';
import {useNavigate,useParams,Link } from "react-router-dom"
import axios from "axios";
import {toast} from "react-toastify";
import "./View.css";

const View = () => {
  const [user,setUser] = useState({});
  const {id} = useParams();

  useEffect(()=> {
    axios.get("http://localhost:5000/api/view/"+id+"")
    .then((resp) => setUser({...resp.data[0]}));
  }, [id]);
  return (
    <div style ={{marginTop:"150px"}}>
      <div className="card">
        <div className = "card-header">
            <p>Customer details</p>
        </div>
        <div className="container">
          <strong>Room no: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Customer name: </strong>
          <span>{user["Cust_name"]}</span>
          <br />
          <br />
          <strong>Email </strong>
          <span>{user["Email"]}</span>
          <br />
          <br />
          <strong>Phone number </strong>
          <span>{user["Phone_no"]}</span>
          <br />
          <br />
          <Link to="/">
            <div className='btn btn-edit'>Go back</div>
          </Link>
        </div>
      
      </div>
      
    </div>
  )
}
export default View;