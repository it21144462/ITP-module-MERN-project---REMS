import React, { useContext, useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom';
// import { adddata } from './context/ContextProvider';
import "./css/reserve.css";


const Home = () => {

    const [getuserdata,setUserdata] = useState([]);
    console.log(getuserdata);

    // const {udata,setUdata} = useContext(adddata);

    const getdata = async(e)=>{

        const res = await fetch("/getdata",{
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
            getdata();
        }

    }




  return (

    <>
    {/* {
        udata ? 
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> User added successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
         
    } */}
    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> User added successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    


    <div className="mt-5">
    <h3 ><center>Welcome to the Spot Reservation Application</center></h3>
    <p ><center>Easy || Reliable || Safe || Convenient</center></p>
         <div className="container">
            <div className="add_btn mt-2 mb-2">
                <NavLink to="/calculator" className="btn btn-primary">New Reservation Application +</NavLink>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr className="table-dark">
                        
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        getuserdata.map((Element,id)=>{
                            return (
                                <>

                                    <tr>
                                        <th scope="row">{id + 1}</th>
                                        <td>{Element.name}</td>
                                        <td>{Element.email}</td>
                                        <td>{Element.startdate}</td>
                                        <td>{Element.contactnumber}</td>
                                        <td>{Element.gender}</td>
                                        <td className="d-flex justify-content-between">

                                            <NavLink to={`view/${Element._id}`}><button className="btn btn-success"><i class="fa-regular fa-file"></i></button></NavLink>
                                            <NavLink to={`edit/${Element._id}`}><button className="btn btn-primary"><i class="fa-sharp fa-solid fa-pen"></i></button></NavLink>
                                            
                                            <button className="btn btn-danger" onClick={()=>deleteuser(Element._id)} ><i class="fa-sharp fa-solid fa-trash"></i></button>

                                        </td>
                                    </tr>

                                </>
                            )
                        })
                    }
                    
                    
                </tbody>

            </table>

         </div>
        
    </div>
    <br /><br /><br />
    </>
  )
}

export default Home


            