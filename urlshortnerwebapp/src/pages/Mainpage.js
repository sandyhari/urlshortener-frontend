import React,{useState} from "react"
import { Spinner } from "reactstrap";
import { SERVER_URL } from "../APISERVERURL/SERVERURL";
import { useRecoilValue } from "recoil";
import {loggedinEmailState}  from "../GlobalStates/recoiled"


const Mainpage = ()=>{

  const email = useRecoilValue(loggedinEmailState);
  const [longUrl,setLongUrlinput ] = useState("");
  const [shortUrl,setShortURLfromAPI] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const setenteredUrlChange = (event) => setLongUrlinput(event.target.value);

  const getConversion = (event)=>{
    setIsLoading(true);
        event.preventDefault();
        if(longUrl){
            const requestBody = { longUrl};
            fetch(`${SERVER_URL}/api/url/shorten`, {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              mode: "cors",
              body: JSON.stringify(requestBody)
            })
            .then((response) => response.json())
            .then(()=>alert("hurray! Succesfully generated"))
            .then((data) => {
              console.log(data);
              setShortURLfromAPI(data.shortUrl);
            })
            .catch(() => {
              alert("Not Valid URL provided!");
              console.error();
            })
            .finally(() => {
              setIsLoading(false);
            })
          }
  }
  return  (
  <div>
    <h3>URL shortner page</h3>
    <div>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">shorten your url</h5>
          </div>
          <div class="card-body">
              <div class="card-text">
                <form onSubmit={getConversion}>
                <div class="form-group">
                  <label for="inputurl">Drop your url here..</label>
                  <input type="text" class="form-control" id="inputurl" aria-describedby="longurl" value={longUrl} onChange={setenteredUrlChange}/>
                  <small id="longurl" class="form-text text-muted">Paste entire url, you wish to make shorten</small>
                </div>
                <div className="text-center">
                {isLoading ? (
                  <Spinner style={{ width: "3rem", height: "3rem" }} />
                  ) : (
                    <div className="p-1">
                      <button type="button" onClick={getConversion} className="btn btn-danger text-uppercase font-weight-bold">Convert</button>
                    </div>
                  )}
                </div>
                </form>
              </div>
              <div>
                  <h4>Resultant : {shortUrl}</h4>
              </div>
          </div>  
      </div>

    </div>
  </div>
  )
}

export default Mainpage;