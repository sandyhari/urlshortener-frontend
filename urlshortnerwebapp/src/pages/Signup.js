import React,{useState} from "react"
import { useForm } from "react-hook-form";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import { SERVER_URL } from "../APISERVERURL/SERVERURL"
import { Spinner } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import routes from "../routes/routes";
import "../styles/loginStyle.css";

const Signuppage = ()=>{

  
  const history = useHistory();
  const routeSignup = () => { 
    history.push(routes.login);
  }

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const setEmailChange = (event) => setEmail(event.target.value);
  const setFirstnameChange = (event) => setFirstname(event.target.value);
  const setLastnameChange = (event) => setLastname(event.target.value);
  const setPasswordChange = (event) => setPassword(event.target.value);


  const addUser = (event)=>{
    setIsLoading(true);
    event.preventDefault();
    if(email && firstname && lastname && password){
        const requestBody = { email, firstname, lastname,password };
        fetch(`${SERVER_URL}/user/signup`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          mode: "cors",
          body: JSON.stringify(requestBody)
        })
        .then((response) => response.json())
        .then(() => alert("Successfully registered"))
        .then(()=>{history.push(routes.login)})
        .catch(() => {
          alert("Failed to register ,Check EmailAddress");
          console.error();
        })
        .finally(() => {
          setIsLoading(false);
        })
      }
    };
    const { register, handleSubmit } = useForm();
    return (
      <div classNameName="container">
        <div className="align">
          <MDBContainer>
          <form onSubmit={handleSubmit(addUser)}>
              <MDBRow>
              <MDBCol md='6'>
                <MDBCard>
                  <MDBCardBody className='mx-4'>
                    <div className='text-center'>
                      <h3 className='red-text mb-5'>
                        <strong>Sign up</strong>
                      </h3>
                    </div>
                    <MDBInput label='Your email' group type='email' name="email"  ref={register({ required: true })} value={email} onChange={setEmailChange} validate required/>
                    <MDBInput label='first name' group type='text' name="fname" ref={register({ required: true })} value={firstname} onChange={setFirstnameChange} validate required/>
                    <MDBInput label='last name' group type='text' name="lname" ref={register({ required: true })} value={lastname} onChange={setLastnameChange} validate required/>
                    <MDBInput label='Your password' group type='password' name="password"  ref={register({ required: true })} value={password} onChange={setPasswordChange} validate required/>
                    <MDBRow className='d-flex align-items-center mb-4'>
                      <MDBCol md='6' className='text-center'>
                      {isLoading ? (
                              <Spinner style={{ width: "3rem", height: "3rem",color:"black" }} />
                            ) : (
                            <MDBBtn className='z-depth-1' color='pink' onClick={addUser} rounded block>
                            <strong>Sign up</strong> 
                            </MDBBtn>
                            )}
                      </MDBCol>
                      <hr />
                      <MDBCol md='6'>
                        <p className='font-small grey-text d-flex justify-content-end'>
                          Have an account?
                        <MDBBtn rounded color="success" onClick={routeSignup} size="sm">login</MDBBtn> 
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
        </div>
        
      </div>
    )
  }   

export default Signuppage;


// {/* <h2>Registration page here..</h2>
// <div>
//   <form onSubmit={addUser}>
//     <div className="form-row">
//       <div className="form-group col-md-6">
//         <label for="emailregister">Email</label>
//         <input type="email"  className="form-control" id="emailregister" placeholder="Email id.." value={email} onChange={setEmailChange}/>
//       </div>
//       <div className="form-group">
//       <label for="FisrtName">FisrtName</label>
//       <input type="text" className="form-control" id="FisrtName" placeholder="firstname.." value={firstname} onChange={setFirstnameChange}/>
//       </div>
//       <div className="form-group">
//       <label for="LastName">LastName</label>
//       <input type="text" className="form-control" id="LastName" placeholder="lastname.." value={lastname} onChange={setLastnameChange}/>
//       </div>
//       <div className="form-group col-md-6">
//         <label for="passwordregister">Password</label>
//         <input type="password" className="form-control" id="passwordregister" placeholder="password.." value={password} onChange={setPasswordChange}/>
//       </div>
//     </div>
//     {isLoading ? (
//      <Spinner style={{ width: "3rem", height: "3rem" }} />
//     ) : (
//       <button type="submit" onClick={addUser} className="btn btn-primary text-uppercase font-weight-bold">Register</button>
//     )}
    
//   </form>
// </div> 
// </div> */}