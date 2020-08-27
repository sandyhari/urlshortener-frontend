import React from "react"
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";
import Logo from "../images/mainPageimage.svg"
import ChartsPage from "./Charts";


const Dashboard = () => {

  const history = useHistory()

  return(
    <div className="p-3">
    
      <div className="row">
          <div className="col-6 mx-auto col-md-4 order-md-2">
            <img src={Logo} alt="" />
          </div>
          <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
            <h1 class="mb-3">Hello, wanna try our URL shorten web application</h1>
              <p class="lead mb-4">
                Did you face any problem, while copying and sharing the URLs of your long shopping cart or do you feel insecure in sharing the URL via social media.
              </p>
              <div class="d-flex flex-column flex-md-row">
                <button type="button" className="btn btn-lg btn-primary font-weight-bold mb-3 mr-md-3" onClick={()=>history.push(routes.login)}>Login</button>
                <button type="button" className="btn btn-lg btn-danger font-weight-bold mb-3" onClick={()=>history.push(routes.signup)}>Signup</button>
              </div>
              <h4 class="text-muted mb-0">
                here we have a solution, logon and paste your long-url.
              </h4>
          </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 mx-auto col-md-4 order-md-2">
          <h1 class="mb-3 font-weight-bold"> Check out our customer usage stats</h1>
        </div>
        <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
          <ChartsPage />
        </div>
      </div>
    </div>
  )

}

export default Dashboard;