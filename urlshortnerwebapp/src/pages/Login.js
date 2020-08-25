import React,{useState} from "react"
import routes from "../routes/routes";
import { useHistory } from 'react-router-dom';
import { SERVER_URL } from "../APISERVERURL/SERVERURL"
import { Spinner } from "reactstrap";
import { useRecoilState, useSetRecoilState } from "recoil";
import {loggedinEmailState,jwtState} from "../GlobalStates/recoiled";

const Loginpage = ()=>{

  const [email, setEmail] = useRecoilState(loggedinEmailState);
  const setAccessKey = useSetRecoilState(jwtState);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setEmailChange = (event) => setEmail(event.target.value);
  const setPasswordChange = (event) => setPassword(event.target.value);

    const history = useHistory();

    const routeSignup = () => { 
        history.push(routes.signup);
      }
  
      const addUser = (event)=>{
        setIsLoading(true);
        event.preventDefault();
        if(email && password){
            const requestBody = { email, password };
            fetch(`${SERVER_URL}/user/login`, {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              mode: "cors",
              body: JSON.stringify(requestBody)
            })
            .then((response) => response.json())
            .then((data)=>{ 
              console.log(data);
              setAccessKey(data.jwtToken);
            })
            .then(() => alert("Successfully Logged In"))
            .then(() => history.push(routes.displaytable))
            .catch(() => {
              alert("Invalid Credentials");
              console.error();
            })
            .finally(() => {
              setIsLoading(false);
            })
          }
        };
return (
<div>
    <h2>Logon page here..</h2>
    <form onSubmit={addUser}>
      <div className="form-group">
        <label for="InputEmail1">Email address</label>
        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter registered Email address" value={email} onChange={setEmailChange}/>
      </div>
      <div className="form-group">
        <label for="InputPassword1">Password</label>
        <input type="password" className="form-control" id="InputPassword1" placeholder="Enter password" value={password} onChange={setPasswordChange}/>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        {isLoading ? (
             <Spinner style={{ width: "3rem", height: "3rem" }} />
            ) : (
              <div className="p-1">
                  <button type="button" onClick={addUser} className="btn btn-primary text-uppercase font-weight-bold">Login</button>
              </div>
            )}
          <div className="p-1">
              <button type="button" onClick={routeSignup} className="btn btn-danger text-uppercase font-weight-bold">Register</button>
          </div>
      </div>
    </form>
  </div>
)
}

export default Loginpage;