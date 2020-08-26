import React,{useState} from "react"

import { SERVER_URL } from "../APISERVERURL/SERVERURL"
import { Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Signuppage = ()=>{

  
  const history = useHistory();

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

    return (
      <div classNameName="container">
        <h2>Registration page here..</h2>
        <div>
          <form onSubmit={addUser}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="emailregister">Email</label>
                <input type="email"  className="form-control" id="emailregister" placeholder="Email id.." value={email} onChange={setEmailChange}/>
              </div>
              <div className="form-group">
              <label for="FisrtName">FisrtName</label>
              <input type="text" className="form-control" id="FisrtName" placeholder="firstname.." value={firstname} onChange={setFirstnameChange}/>
              </div>
              <div className="form-group">
              <label for="LastName">LastName</label>
              <input type="text" className="form-control" id="LastName" placeholder="lastname.." value={lastname} onChange={setLastnameChange}/>
              </div>
              <div className="form-group col-md-6">
                <label for="passwordregister">Password</label>
                <input type="password" className="form-control" id="passwordregister" placeholder="password.." value={password} onChange={setPasswordChange}/>
              </div>
            </div>
            {isLoading ? (
             <Spinner style={{ width: "3rem", height: "3rem" }} />
            ) : (
              <button type="submit" onClick={addUser} className="btn btn-primary text-uppercase font-weight-bold">Register</button>
            )}
            
          </form>
        </div> 
      </div>
    )
  }   

export default Signuppage;