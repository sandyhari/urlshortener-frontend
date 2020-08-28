import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { loggedinUserid } from "../GlobalStates/recoiled";
import { SERVER_URL } from "../APISERVERURL/SERVERURL";

import { jwtState } from "../GlobalStates/recoiled";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Displaytable = () => {
  const history = useHistory();
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
      setContent(data.contents);
    })
    .catch(()=>{
                console.error()
                alert("Session has expired!")
                history.push(routes.login)
      })},[])


      return(
        <div>
              <div>
              <table className="table text-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">urlCode</th>
                    <th scope="col">Long URL</th>
                    <th scope="col">Shortened</th>
                    <th scope="col">Generated at</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {content.map((each,eachIndex)=>{
                    return (<tr className="font-weight-bold text-white">
                    <th scope="row">{eachIndex+1}</th>
                    <td>{each.urlCode}</td>
                    <td>{each.longUrl.substring(0,30)+"...."}</td>
                    <td><a rel="noopener noreferrer" href={each.shortUrl}>{each.shortUrl}</a></td>
                    <td>{each.datetime}</td>
                  </tr>)
                  })}
                  
                </tbody>
              </table>
              </div>
            </div>
      )
}

export default Displaytable;