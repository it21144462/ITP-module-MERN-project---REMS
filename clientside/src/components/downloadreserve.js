import React, {useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';
import "./css/reserve.css";
// import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from 'react-router-dom';


const Download = () => {

    const {id}= useParams("");
    console.log(id);

    const [getuserdata,setUserdata] = useState([]);
    console.log(getuserdata); 


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


  const handleDownload = () => {
    // Create a new PDF instance
    const pdf = new jsPDF();

    // Add the table to the PDF
    pdf.autoTable({
      html: tableRef.current,
      startY: 20,
      margin: {horizontal: 10},
    });

    // Save the PDF
    pdf.save("Reservation_info.pdf");
  };
  const tableRef = useRef(null);

  return (
  <>
       
    <div className="background"><br /><br />
        <div className="add_btn mt-1 mb-2">

          <NavLink to="/" className="btn btn-danger mx-2"><i class="fa-solid fa-backward "></i> Back</NavLink>
          

        </div>
      <div className="container">
        <div className="panel pricing-table">
          <div className="pricing-plan">
          
       
       
            <img
              src="https://img.freepik.com/premium-vector/train-logo_10250-3372.jpg?w=740"
              alt="imgxhxhctgjg"
              className="pricing-img"
            />
            <h2 className="pricing-header">Download the Spot application form</h2><hr />
            <br></br>

            

            
            
            <table className="pricing-features" ref={tableRef}>
              <thead className="pricing">
                <tr>
                  
                </tr>
              </thead>
              <br></br>
              <tbody>
              <h2> Personal details :</h2><hr /><br></br>
                    <h3><i class="mt-2"></i>Reservation ID : <span>200220205225</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-file-signature mt-3"></i> Name : <span>{getuserdata.name}</span></h3>
                    <h3><i class="fa-solid fa-envelope mt-3"></i> Email : <span>{getuserdata.email}</span></h3>
                    <h3><i class="fa-solid fa-id-card mt-3"></i> NIC : <span>{getuserdata.nic}</span></h3>
                    <h3><i class="fa-solid fa-phone mt-3"></i> Contact Number : <span>{getuserdata.contactnumber}</span></h3>
                    <h3><i class="fa-solid fa-hourglass-end mt-3"></i> From : <span>{getuserdata.pfrom}</span></h3>
                    <h3><i class="fa-solid fa-hourglass-end mt-3"></i> To : <span>{getuserdata.pto}</span></h3>
                    <h3><i class="fa-solid fa-calendar-days mt-3"></i> Date : <span>{getuserdata.startdate}</span></h3>

                    <br></br><h2> Trip details :</h2><hr /><br></br>

                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Weight : <span>{getuserdata.pweight} kg</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Height : <span>{getuserdata.pheight} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Width : <span>{getuserdata.pwidth} m</span></h3>
                    <h3><i class="fa-sharp fa-solid fa-tape mb-2"></i> Journey : <span>{getuserdata.pjourney} km</span></h3>
              </tbody>
            </table>
            <button className="btn btn-success mt-3 px-2 " onClick={handleDownload}><i class="fa-sharp fa-solid fa-download"></i> <b>Download PDF  </b></button>
            <br /><br /><br />
            
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Download;