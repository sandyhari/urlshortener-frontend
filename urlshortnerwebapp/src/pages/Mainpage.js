import React,{useState} from "react"
import { Spinner } from "reactstrap";
import { SERVER_URL } from "../APISERVERURL/SERVERURL";
import { useRecoilValue } from "recoil";
import {loggedinUserid}  from "../GlobalStates/recoiled"
import routes from "../routes/routes";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Mainpage = () => {
 
  const history = useHistory();
  const emailid = useRecoilValue(loggedinUserid);
  const [longUrl,setLongUrlinput ] = useState("");
  const [shortUrl,setShortURLfromAPI] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const setenteredUrlChange = (event) => setLongUrlinput(event.target.value);

  const getConversion = (event) => {
    setIsLoading(true);
        // event.preventDefault();
        if(longUrl){
            const requestBody = { longUrl,emailid};
            fetch(`${SERVER_URL}/api/url/shorten`, {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              mode: "cors",
              body: JSON.stringify(requestBody)
            })
            .then((response) => response.json())
            .then((data) => {
              console.log(data.resultant.shortUrl);
              setShortURLfromAPI(data.resultant.shortUrl);
            })
            .then(()=>alert("hurray! Succesfully generated"))
            .catch(() => {
              console.error();
              alert("Not Valid URL provided!");
              history.push(routes.login)
            })
            .finally(() => {
              setIsLoading(false);
            })
          }
  }
  const { register, handleSubmit,  errors } = useForm();

  return  (
  <div className="pt-3">
          <MDBRow>
                <MDBCol>
                  <MDBCard reverse>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle className="indigo-text">custom shorten</MDBCardTitle>
                      <h5 ><strong></strong></h5>
                      <MDBCardText>
                      <div>
                          <form onSubmit={handleSubmit(getConversion)}>
                            <input type="text" name="inputurl" className="form-control" ref={register({ required: true })} aria-describedby="longurl" value={longUrl} onChange={setenteredUrlChange}/>
                              {errors.email && errors.email.message}
                                <div className="text-center">
                                  {isLoading ? (
                                    <Spinner style={{ width: "3rem", height: "3rem" }} />
                                    ) : (
                                      <div className="p-1">
                                        <button type="submit" className="btn btn-danger text-uppercase font-weight-bold">Convert</button>
                                      </div>
                                    )}
                                </div>
                            </form>
                            {(shortUrl === ""||null||"undefined")?
                                <div className="text-success">
                                  <div>
                                    <h4 style={{color:"hotpink"}}>Convert your URL here </h4>
                                  </div>
                                  <div>
                                    <h3>
                                      <a rel="noopener noreferrer" href ={shortUrl}>{shortUrl}</a>
                                    </h3>
                                  </div>
                                </div>
                                :
                                <h6>.</h6>
                            }      
                          </div>
                        </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
          </div>  
          )
}

export default Mainpage;

    // {/* <h3>URL shortner page</h3>
    //     <div className="card card-cascade wider reverse">
    //       <div className="card-header">
    //         <h5 className="card-title">shorten your url</h5>
    //       </div>
    //       <div className="card-body">
    //           <div className="card-text">
    //             <form onSubmit={handleSubmit(getConversion)}>
    //             <div className="form-group">
    //               <label htmlFor="inputurl">Drop your url here..</label>
    //               <input type="text" name="inputurl" className="form-control" ref={register({ required: true })} aria-describedby="longurl" value={longUrl} onChange={setenteredUrlChange}/>
    //               <small id="longurl" className="form-text text-muted">Paste entire url, you wish to make shorten</small>
    //               {errors.inputurl && <span>This field is required</span>}
    //             </div>
    //             <div className="text-center">
    //             {isLoading ? (
    //               <Spinner style={{ width: "3rem", height: "3rem" }} />
    //               ) : (
    //                 <div className="p-1">
    //                   <button type="button" onClick={getConversion} className="btn btn-danger text-uppercase font-weight-bold">Convert</button>
    //                 </div>
    //               )}
    //             </div>
    //             </form>
    //           </div>
    //           {(shortUrl === ""||null||"undefined") ?(
    //             <div>
    //               <h4>Oops! there is a problem in shortening this URL.</h4>
    //             </div>
    //           ):
    //           (
    //             <div>
    //               <h4 style={{color:"hotpink"}}>hey buddy! ,here is your shortened URL: <a rel="noopener noreferrer" href ={shortUrl}>{shortUrl}</a></h4>
    //             </div>
    //           )

    //           }
              
    //       </div>  
    //   </div> */}



