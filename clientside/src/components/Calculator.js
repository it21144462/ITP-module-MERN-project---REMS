import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./css/reserve.css";

const Calculator = () => {

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [num3,setNum3] = useState(0);
    const [num4,setNum4] = useState(0);
    const [pResult,setpResult] = useState('');
  
    const calcresult=(event)=>{
  
      event.preventDefault();
      console.log(event);
  
      if(num1 === 0 || num2 === 0 || num3 === 0 || num4 === 0){
        alert("Please Fill the Package dimensions");
      }
  
      let pResult = parseInt(num1)*parseInt(num2)*parseInt(num3)*parseInt(num4)*5.50;
      setpResult(parseInt(pResult));
  
    }
  

  return (
    <div>
            <div className="container">
                <div className="add_btn mt-2 mb-2">

                    <NavLink to="/" className="btn btn-danger mx-2"><i class="fa-solid fa-backward "></i> Back</NavLink>
                    <NavLink to="/reservation" className="btn btn-primary">New Reservation +</NavLink>
                    
                </div>
        
            
            
                <fieldset>
                    <br /><h3>Spot Reservation Application</h3>
                    <p>*Please fill the following form to get estimated cost.</p>
                    
                    <legend>Cost calculator</legend>

                    <form onSubmit= {calcresult} >
                        <div class="mb-3 col-lg-10 col-md-6 col-12">
                            <p>Package dimensions</p>
                                <div class="mb-3">
                                    <label for="weight" class="form-label">Weight :</label>
                                    <input type="text" onChange={(e)=>setNum1(e.target.value)} name="pweight" class="form-control" placeholder="(kilogramm)"  />
                                </div>

                                <div class="mb-3">
                                    <label for="height" class="form-label">Height :</label>
                                    <input type="text" onChange={(e)=>setNum2(e.target.value)} name="pheight" class="form-control" placeholder="(meter)"  />
                                </div>

                                <div class="mb-3">
                                    <label for="width" class="form-label">width :</label>
                                    <input type="text" onChange={(e)=>setNum3(e.target.value)} name="pwidth" class="form-control" placeholder="(meter)" />
                                </div>

                                <div class="mb-3">
                                    <label for="journey" class="form-label">Journey :</label>
                                    <input type="number" onChange={(e)=>setNum4(e.target.value)} name="pjourney" min="1" max= "120" class="form-control" />
                                </div>

                                <button type="submit" value="Calculate"  className="btn btn-success mb-3">Calculate</button>

                                {/* <input type="button">fdfgdjf</input> */}

                                <div class="mb-3">
                                    <label for="Calculate" class="form-label">Estimated Cost : Rs : {pResult}</label>
                                    <input type="text" defaultValue={pResult} name="calculate" class="form-control" />
                                </div>

                        </div>

                        <div className="form-group">
                            <legend>Shipping Policy :</legend>          
                        </div><br />
                            
                        <ul className="accordion">
                            <li>
                                <input type="radio" name="accordian" id="first" checked />
                                <label class="labelid" for="first">Shipping Policy</label>
                                <div class="content">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged.  

                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged.  
                                </p>
                                </div>
                            </li>
                    
                            <li>
                            <input type="radio" name="accordian" id="second" />
                                <label class="labelid" for="second">Terms and Conditions</label>
                                <div class="content">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged.  

                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged.  
                                </p>
                                </div>
                            </li>

                            <li>
                            <input type="radio" name="accordian" id="third" />
                            <label class="labelid" for="third">Cost Estimations</label>
                                <div class="content">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of 
                                    type and scrambled it to make a type specimen book. It has 
                                    survived not only five centuries, but also the leap into 
                                    electronic typesetting, remaining essentially unchanged.  
                                    </p>
                                    </div>
                            </li>
                        </ul><hr />




                    </form>  
                </fieldset>

             </div>
    </div>
  )
}

export default Calculator;