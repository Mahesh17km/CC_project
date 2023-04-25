import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import {toast} from 'react-toastify';
import axios from "axios";

const Home = () => {
    const [data,setData]= useState([]);
    const loadData = async() => {
        const response = await axios.get ("http://13.238.182.148:5000/api/get");
        setData(response.data);
    };

    useEffect(()=> {
        loadData();
    },[]);
    
    const deleteRecord = (roomno) => {
        if(window.confirm("Are you sure you want to delete this record?")){
            axios.delete('http://13.238.182.148:5000/api/remove/'+ roomno);
            toast.success("Contact Deleted Successfully");
            setTimeout(()=> loadData(), 500);
        }
    }
    return (
        <div style ={{marginTop:"150px"}}>
            <Link to="/addContact">
                <button className="btn btn-contact">Add Contact</button>
            </Link>
            
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style ={{textAlign:'center'}}>S. No.</th>
                        <th style ={{textAlign:'center'}}>Room number</th>
                        <th style ={{textAlign:'center'}}>Name</th>
                        <th style ={{textAlign:'center'}}>Email</th>
                        <th style ={{textAlign:'center'}}>Phone number</th>
                        <th style ={{textAlign:'center'}}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) => {
                        return (
                            <tr key = {item["Room_no"]}>
                                <th scope="row">{index+1}</th>
                                <td>{item["Room_no"]}</td>
                                <td>{item['Cust_name']}</td>
                                <td>{item['Email']}</td>
                                <td>{item['Phone_no']}</td>
                                <td>
                                        <Link to={'/update/'+item['Room_no']}>
                                            <button className='btn btn-edit'>Edit</button>
                                        </Link>
                                        <button className='btn btn-delete' onClick={()=> deleteRecord(item['Room_no'])}>Delete</button>
                                        <Link to={'/view/' +item['Room_no']}>
                                            <button className='btn btn-view'>View</button>
                                        </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
