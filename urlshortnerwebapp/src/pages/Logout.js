import React from "react"
import { MDBBox, MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";
import { useResetRecoilState } from "recoil";
import {loggedinUserid,jwtState,loggedinEmailState } from "../GlobalStates/recoiled"

const Logout = () => {

    const history = useHistory();

    const resetUserid =    useResetRecoilState(loggedinUserid);
    const resetJwt =    useResetRecoilState(jwtState);
    const resetEmail =   useResetRecoilState(loggedinEmailState);
    const btnClick = ( ) => {

        resetUserid();
        resetJwt();
        resetEmail();
        history.push(routes.login);

    }
return(
    <div className="container">
            <MDBBox display="flex" justifyContent="center" >
                    <h1>Successfully Logged Out ... !</h1>
            <MDBBtn gradient="aqua" onClick={btnClick}>Login Again..!</MDBBtn>
        </MDBBox>
    </div>
)
}

export default Logout;