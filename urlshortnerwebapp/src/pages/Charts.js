import React, { useEffect } from "react";
import Chart from "chart.js";
import { MDBContainer } from "mdbreact";


const ChartsPage = (props) => {

  let array =[];
  var counts = {};
    const modifed = ()=>{
      for(let i=0;i<props.days.length;++i){ 
        array.push(Object.values(props.days[i]).toString().split("T")[0])
      }
      for (let i = 0; i < array.length; i++) {
        let num = array[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
    };

modifed();
console.log(counts);
let dataArray = Object.values(counts);
let dataLabels = Object.keys(counts);
      
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: dataLabels,
            datasets: [
              {
                label: "No. of URLs created",
                fillColor : "rgba(220,220,220,0.2)",
                data: dataArray,
                backgroundColor: "black",
                borderColor: ["Red", "Blue", "Yellow"], //"Green", "Purple", "Orange"],
                borderWidth: 0.3
              }
            ]
          },responsive: true,options:{
            scales:{
                xAxes: [{
                    display: false //this will remove all the x-axis grid lines
                }]
            }
        }
        });
      });

      
      return (
        <MDBContainer>
          <div className="card">
            <div className="card-body">
              <canvas id="myChart" width="400" height="250" />
            </div>
          </div>
        </MDBContainer>
      );
}

export default ChartsPage;