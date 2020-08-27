import React, { useEffect } from "react";
import Chart from "chart.js";
import { MDBContainer } from "mdbreact";


const ChartsPage = () => {
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                borderWidth: 1
              }
            ]
          }
        });
      });

      useEffect(()=>{

      },[])
      return (
        <MDBContainer>
          <canvas id="myChart" width="400" height="400" />
        </MDBContainer>
      );
}

export default ChartsPage;