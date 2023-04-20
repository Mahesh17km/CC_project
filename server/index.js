const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host:"database-1.cwkrtl8mxldn.ap-southeast-2.rds.amazonaws.com",
    user:"admin",
    password:"rootuser",
    database:"hotel_rooms",
    port:3306
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req,res)  =>{
    const sqlGet ="SELECT * FROM rooms";
    db.query(sqlGet,(error,result)=> {
        res.send(result);
    });
});

app.post("/api/post", (req,res) => {
    let data = {Room_no : req.body.roomno,Cust_name : req.body.name,
        Email : req.body.email, Phone_no: req.body.phno};
    let sqlInsert ="INSERT INTO rooms SET ?";
    db.query(sqlInsert, data,(error,result) =>{
        if (error){ res.send(JSON.stringify("error")); throw error;}
		res.send(JSON.stringify({ status: 200, error: null, response: "New Record is Added successfully"}));
    });
});

app.delete("/api/remove/:id", (req, res) => {
	let sql = "DELETE FROM rooms WHERE Room_no=" + req.params.id + "";
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Record deleted successfully" }));
	});
});

app.get("/api/view/:id", (req, res) => {
	let sql = "SELECT * FROM rooms WHERE Room_no=" + req.params.id;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

// update the Record
app.put("/api/update/", (req, res) => {
    
	let sql = "UPDATE rooms SET Cust_name='" + req.body.name + "', Email='" + req.body.email +"',Phone_no='"+req.body.phno+"' WHERE Room_no=" + req.body.roomno;
	let query = db.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Record updated SuccessFully" }));
	});
});


app.get("/",(req,res)=> {
//     const sqlInsert = "INSERT INTO rooms VALUES (101,'k','k@m.com','12345');";
//     db.query(sqlInsert,(err,result) => {
//         console.log("error",err);
//         console.log("result",result);
//         res.send("Hello Express");
//     })
 })

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});

