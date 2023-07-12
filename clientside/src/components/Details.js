import React, { useEffect ,useState} from 'react'
// import React, { useRef,tableRef} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./css/reserve.css";

// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const handleDownload = () => {
//   // Create a new PDF instance
//   const pdf = new jsPDF();

//   // Add the table to the PDF
//   pdf.autoTable({
//     html: tableRef.Card,
//     startY: 20,
//     margin: {horizontal: 10},
//   });

//   // Save the PDF
//   pdf.save("All_tickets.pdf");
// };



const Details = () => {

    const {id}= useParams("");
    console.log(id);

    const [getuserdata,setUserdata] = useState([]);
    console.log(getuserdata); 

    const history = useNavigate("");

    const getdata = async()=>{

        const res = await fetch(`/getuser/${id}`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data);
    
        if(res.status === 422 || !data){
          alert("Error");
        }else{

          setUserdata(data)
          console.log("Get data");
        }
    
    
    } 

    useEffect(()=>{
        getdata();
    },[])

    const deleteuser =async (id)=>{

        const res2 = await fetch(`/deleteuser/${id}`,{
            method:"DELETE",
            headers:{
              "Content-Type":"application/json"
            } 
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if(res2.status === 422 || !deletedata){
            console.log("error");
        }else{
            console.log("Data Deleted successfully");
            // getdata();
            history.push("/");
        }

    }

  // const tableRef = useRef(null);

  return (
    <div className="container mt-3">

        <div className="add_btn mt-1 mb-2">

            <NavLink to="/" className="btn btn-danger mx-2"><i class="fa-solid fa-backward "></i> Back</NavLink>


        </div>
        <h1 style={{fontWeight:400}}>Welcome {getuserdata.name}</h1>

        <Card sx={{ minWidth:275}}>
            <CardContent>
                <div className="left_side">
                    <div class="mb-2 my-2 mx-5">
                        <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" 
                        style={{width :250}} alt="profile.jpg" />
                    </div>
                    <div className="add_btn">
                      <NavLink to = {`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-3"><i class="fa-sharp fa-solid fa-pen mx-3 my-3 mt-3 mb-3"></i></button></NavLink>
                      <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}><i class="fa-sharp fa-solid fa-trash mx-3 my-3 mt-3 mb-3"></i></button>
                      
                    </div>
                    <h2> Personal details </h2><br></br>
                    <h3><i class="mt-2"></i>Reservation ID : <span>200220205225</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-file-signature mt-3"></i> Name : <span>{getuserdata.name}</span></h3>
                    <h3><i class="fa-solid fa-envelope mt-3"></i> Email : <span>{getuserdata.email}</span></h3>
                    <h3><i class="fa-solid fa-id-card mt-3"></i> NIC : <span>{getuserdata.nic}</span></h3>
                    <h3><i class="fa-solid fa-phone mt-3"></i> Contact Number : <span>{getuserdata.contactnumber}</span></h3>
                    <h3><i class="fa-solid fa-hourglass-end mt-3"></i> From : <span>{getuserdata.pfrom}</span></h3>
                    <h3><i class="fa-solid fa-hourglass-end mt-3"></i> To : <span>{getuserdata.pto}</span></h3>
                    <h3><i class="fa-solid fa-calendar-days mt-3"></i> Date : <span>{getuserdata.startdate}</span></h3>
                    <h3>* Gender : <span>{getuserdata.gender}</span></h3>

                    <br></br><h2> Trip details </h2><br></br>

                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Weight : <span>{getuserdata.pweight} kg</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Height : <span>{getuserdata.pheight} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Width : <span>{getuserdata.pwidth} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Journey : <span>{getuserdata.pjourney} km</span></h3>
                    {/* <h3><i class="fa-solid fa-comments-dollar mt-3"></i> Cost : <span >
                        {getuserdata.pweight} * {getuserdata.pheight} * {getuserdata.pwidth} * {getuserdata.pjourney} * {5.50}</span></h3> */}
                    
                </div>
                 
                 {/* <form ref={tableRef}>
                    <div>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Weight : <span>{getuserdata.pweight} kg</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Height : <span>{getuserdata.pheight} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Width : <span>{getuserdata.pwidth} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Journey : <span>{getuserdata.pjourney} km</span></h3>
                    </div>
                  </form>
                  <button className="formbold-btn1" onClick={handleDownload}>Download All Details PDF</button> */}
                  <NavLink to = {`/download/${getuserdata._id}`}>
                  <button className="btn btn-success mt-3 px-2 "><i class="fa-sharp fa-solid fa-download"></i> <b>Download Report  </b></button>
                  </NavLink>
                
            </CardContent>
        </Card>

    </div>
  )
}

export default Details