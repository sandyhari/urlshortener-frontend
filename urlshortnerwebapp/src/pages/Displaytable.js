import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { loggedinEmailState } from "../GlobalStates/recoiled";
import { SERVER_URL } from "../APISERVERURL/SERVERURL";


const Displaytable = () => {

  const userEmail = useRecoilValue(loggedinEmailState);

  const [content,setContent] = useState([]);

  useEffect(()=>{
    fetch(`${SERVER_URL}/api/url/getuserdetails`,{mode:"cors"})
    .then((response) => response.json())
    .then((data) => {
      console.log(data.contents);
      setContent(data.contents);
    })
    .catch(console.error);
  },[]);

      return(
        <div>
              <h3>Display table page. - Logged in As : {userEmail}</h3>
              <div>
              <table className="table">
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
                    return (<tr>
                    <th scope="row">{eachIndex+1}</th>
                    <td>{each.urlCode}</td>
                    <td>{each.longUrl}</td>
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