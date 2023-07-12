import React, { useEffect ,useState} from 'react'
import { NavLink ,useParams} from 'react-router-dom';
// import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import "./css/reserve.css";

const Edit = () => {
  // const [getuserdata,setUserdata] = useState([]);
  // console.log(getuserdata);


   const history = useNavigate("");

  const [inpval,setINP] = useState({
    name:"",
    email:"",
    nic:"",
    contactnumber:"",
    pweight:"",
    pheight:"",
    pwidth:"",
    pjourney:"",
    pfrom:"",
    startdate:"",
    pto:"",
    gender:""
    
  })

  const setdata = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    setINP((preval)=>{
        return {
          ...preval,
          [name]:value
        }
    })
  }


  const {id}= useParams("");
  console.log(id);

 

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

        setINP(data)
        console.log("Get data");
      }
  
  
  } 
  useEffect(()=>{
    getdata();
  }, []);

  const updateuser= async(e)=>{
  
    e.preventDefault();

    const {name,email,nic,contactnumber,pweight,pheight,pwidth,pjourney,pfrom,startdate,pto,gender} = inpval;

    const res2 = await fetch(`/updateuser/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,nic,contactnumber,pweight,pheight,pwidth,pjourney,pfrom,startdate,pto,gender
      })
    });

    // const data2 = await res2.json();
    // console.log(data2);

    // if(res2.status === 422 || !data2){
    //   alert("fill the data")
    // }
    // else{
    //   alert("data added")
    // }
    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2){
      alert("Data updated");
      console.log("Data updated");
    }else{
      alert("Data updated");
       history.push("/")
      console.log("Data updated");
    }
  

  }


  return (
    <div className="container">
    <div className="add_btn mt-2 mb-2">
      <NavLink to="/" className="btn btn-danger mx-2">
        <i class="fa-solid fa-backward "></i> Back
      </NavLink>
    </div>

    <form>
      <fieldset>
        <br />
        <h3>Spot Reservation Application</h3>
        <p>*Please fill the following form to allocate a spot.</p>

        <hr />

        <legend>Personal Details</legend>
        <div class="mb-3">
          <label for="name" class="form-label">Name :</label>
          <input type="text" value={inpval.name} onChange={setdata} name="name" id="name" class="form-control" placeholder="Name with Initials" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">  Email : </label>
          <input type="text" value={inpval.email} onChange={setdata} name="email" id="email" class="form-control"  placeholder="example@gmail.com" required  />
        </div>

        <div class="mb-3">
          <label for="nic" class="form-label"> NIC : </label>
          <input type="text" value={inpval.nic} onChange={setdata}  name="nic" id="nic" class="form-control" placeholder="xxxx-xxxx-xxxx / xxxx-xxxx-xxx v " required  />
        </div>

        <div class="mb-3">
          <label for="contactnumber" class="form-label"> Contact Number : </label>
          <input type="text" value={inpval.contactnumber} onChange={setdata} name="contactnumber"  id="contactnumber" class="form-control" placeholder="xxx-xxxx-xxx"  maxLength="10" required />
        </div>
        <hr />

        <div className=""></div>

        <div class="mb-3 ">
          <legend>Package Dimensions :</legend>
          <div className="block1 mx-4 mb-2">
            <div class="mb-1" id="id1">
              <label for="weight" class="form-label">  Weight : </label>
              <input type="text" value={inpval.pweight} onChange={setdata} name="pweight" class="form-control"  placeholder="(kilogramm)"  required />
            </div>

            <div class="mb-1" id="id2">
              <label for="height" class="form-label"> Height : </label>
              <input type="text" value={inpval.pheight} onChange={setdata} name="pheight"  class="form-control"  placeholder="(meter)"  required />
            </div>
          </div>

          <div className="block2">
            <div class="mb-1" id="id3">
              <label for="width" class="form-label">  width : </label>
              <input type="text" value={inpval.pwidth} onChange={setdata} name="pwidth" class="form-control" placeholder="(meter)"  required />
            </div>
            <div class="mb-1" id="id4">
              <label for="journey" class="form-label"> Journey : </label>
              <input type="number" value={inpval.pjourney} onChange={setdata} name="pjourney" min="1" max="120" class="form-control"  required />
            </div>
          </div>
        </div>
        <hr />

        <div class="mb-3 ">
          <legend>Trip Details :</legend>
          <div className="block1 mx-4 mb-2">
            <div class="mb-1" id="id1">
              <label for="pfrom" class="form-label ">  From :{" "} </label>
              <input type="text" value={inpval.pfrom} onChange={setdata} name="pfrom" id="pfrom" class="form-group1 form-control  mb-2" />
            </div>

            <div class="mb-1" id="id2">
              <label for="startdate">Starting Date : </label>
              <input  type="date" value={inpval.startdate} onChange={setdata} name="startdate" id="pstartdate" class="form-group1 form-control  mb-2"  required />
            </div>
          </div>

          <div className="block2">
            <div class="mb-1" id="id3">
              <label for="pto" class="form-label "> To :{" "}</label>
              <input type="text" value={inpval.pto} onChange={setdata} name="pto" id="pto" class="form-group1 form-control  mb-2" />
              {/* <select id="state">
                          <option value="" disabled selected>Select a state/province</option>
                          <option value="MD">MD</option>
                          <option value="VA">VA</option>
                          <option value="DC">DC</option>    
                        </select> */}

                <label for="gender" class="form-label "> Gender :</label>
                <select id="gender" value={inpval.gender} onChange={setdata} name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>    
                </select>

              {/* <select
                className="form-input"
                id="endStation"
                onChange={(e) => setEndStation(e.target.value)}
                value={endStation}
              >
                <option value="Matara">Matara</option>
                <option value="Kandy">Kandy</option>
                <option value="Colombo">Colombo</option>
                <option value="Valigama">Valigama</option>
                       
              </select> */}
            </div>
          </div>
        </div>
      </fieldset>

      <div className="row">
        <button type="submit" onClick={updateuser} class="btn btn-primary mb-4"> Save </button>
      </div>
    </form>
  </div>
  )
}

export default Edit;
