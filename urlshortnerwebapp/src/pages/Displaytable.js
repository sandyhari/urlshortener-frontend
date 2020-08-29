import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { loggedinUserid,loggedinEmailState } from "../GlobalStates/recoiled";
import { SERVER_URL } from "../APISERVERURL/SERVERURL";
import { useToasts } from 'react-toast-notifications'
import { jwtState } from "../GlobalStates/recoiled";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Displaytable = () => {
  const history = useHistory();
  const { addToast } = useToasts()
  const email = useRecoilValue(loggedinEmailState);
  const userid = useRecoilValue(loggedinUserid);
  const accessToken = useRecoilValue(jwtState);
console.log(accessToken);
  const [content,setContent] = useState([]);


  useEffect(()=>{
    fetch(`${SERVER_URL}/api/url/${userid}`,{headers:{
      'Authorization' : 'Bearer '+ accessToken
    },
      mode:"cors"})
    .then((response) => response.json())
    .then((data) => {
      console.log(data.contents);
      addToast(`hey ,hii ${email}`, {
        appearance: 'success',
        autoDismiss: true,
      })
      setContent(data.contents);
    })
    .catch(()=>{
                console.error();
                addToast("Session expired", {
                  appearance: 'danger',
                  autoDismiss: true,
                });
                history.push(routes.login)
      })},[])

return(
  <div classNameName="container">
    <header className="pb-2 bg-black">
      <h3>Welcome, {email} </h3>
    </header>
    {content.map((each,eachIndex)=>{
      return (
      <div key={eachIndex} className="card hoverable z-depth-2 rounded p-3">
          <div className="card-body">
            <h5 className="card-title text-primary font-weight-bold"><a rel="noopener noreferrer" href={each.shortUrl}>{each.urlCode}</a></h5>
            <p className="card-text">{each.longUrl.substring(0,100)+"...."}</p>
          </div>
        </div>
        )
      
    })}
  </div>
)
      // return(
      //   <div>
      //         <div>
      //         <table classNameName="table text-white">
      //           <thead>
      //             <tr>
      //               <th scope="col">#</th>
      //               <th scope="col">urlCode</th>
      //               <th scope="col">Long URL</th>
      //               <th scope="col">Shortened</th>
      //               <th scope="col">Generated at</th>
      //             </tr>
      //           </thead>
      //           <tbody>
                  
      //             {content.map((each,eachIndex)=>{
      //               return (<tr classNameName="font-weight-bold text-white">
      //               <th scope="row">{eachIndex+1}</th>
      //               <td>{each.urlCode}</td>
      //               <td>{each.longUrl.substring(0,30)+"...."}</td>
      //               <td><a rel="noopener noreferrer" href={each.shortUrl}>{each.shortUrl}</a></td>
      //               <td>{each.datetime}</td>
      //             </tr>)
      //             })}
                  
      //           </tbody>
      //         </table>
      //         </div>
      //       </div>
      // )
}

export default Displaytable;