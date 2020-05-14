import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import { MDBSimpleChart } from "mdbreact";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

class Content extends Component {
    async componentDidMount() {
        try {
          const response = await fetch('https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test');
          const data = await response.json();
          this.setState(
              {
                  total_revenue : data.dataForTopFourBoxes.totalRevenue,
                  todaysSales: data.dataForTopFourBoxes.todaysSales,
                  conversion: data.dataForTopFourBoxes.conversion,
                  todaysVisits : data.dataForTopFourBoxes.todaysVisits,
                  recent_orders : data.dataForBottomRightTable 
            });
    
        } catch (error) {
          console.log("error");
        }
      }     
    state = {
        dataLine: {
          labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014","2015"],
          datasets: [
            {
              label: "mobiles",
              fill: false,
              lineTension: 0.3,
              borderColor: "rgb(205, 130, 158,1)",
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,0)",
              pointHoverBorderWidth: 2,
              pointRadius: 0,
              data: [50, 75, 28, 50, 75, 50, 75 ,100]

            },
            {
              label: "Tablets",
              fill: false,
              lineTension: 0.3,
              borderColor: "#4ec0ed",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 0,
              data: [0, 50, 78, 50, 15, 45,50, 70]
            }
          ]
        },
        data: [
            {
              year: '2005', mobile: 100, tablet:70, desktop:70
            }, {
              year: '2006', mobile: 125, tablet: 60, desktop: 50
            }, {
                year: '2007', mobile: 190, tablet: 70, desktop: 100
            }, {
                year: '2008 ', mobile: 180, tablet: 50, desktop: 70
            }, {
                year: '2009', mobile: 130, tablet: 50, desktop: 150
            }, {
                year: '2010 ', mobile: 130, tablet: 40, desktop: 90
            }, {
                year: '2011', mobile: 100, tablet: 80, desktop: 30
              }, {
                  year: '2012', mobile: 150, tablet: 70, desktop: 130
              }, {
                  year: '2013', mobile: 80, tablet: 80, desktop: 150
              }, {
                  year: '2014', mobile: 150, tablet: 50, desktop: 90
              }, {
                  year: '2015', mobile: 180, tablet: 90, desktop: 130
              }
        ],
        primaryxAxis : { minimum: 2005, maximum: 2015, interval: 2 },
        primaryyAxis : { minimum: 0, maximum: 400, interval: 100 },
        legendSettings : { position: 'Top' },
        total_revenue : null,
        todaysSales: null,
        conversion : null,
        todaysVisits : null,
        recent_orders : []
      };

      renderTableData() {
        return this.state.recent_orders.map((order, index) => {
           const { product, orderDate, orderNumber, amount,customerName } = order 
           return (
              <tr>
              <td scope="row"><img src={"assets/images/"+product+".jfif"} height="20px" width="20px"/></td>
              <td >{orderDate}</td>
              <td><a href="#">{orderNumber}</a></td>
              <td>{amount}</td>
              <td><span className="fa fa-edit fa-lg"></span>&nbsp;<span className="fa fa-times fa-lg"></span></td>
              </tr>
           )
        })
     }

  render(){ 

    const { data: chartData } = this.state;

    return (
        <div>

        <div>
        <h5 style={{marginTop:"5px",marginBottom:"0px"}}>Dashboard</h5>
        <p style={{color:"grey",marginTop:"0px"}}> Welcome to Ublod admin panel</p>
        </div>

        <div className="row">
        <div className="col-xs-12 col-md-3 box">
            <div  style={{backgroundColor:"white",padding:"15px",height:"80px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
            <div style={{float:"left",backgroundColor:"#9feafc",height:"50px",width:"50px",border:"2px solid #80bfcf",borderRadius:"50%"}}>
                <span className="fa fa-dollar fa-lg" style={{padding:"16px",color:"#7094b5"}}></span>
            </div>
            <div style={{float:"right"}}>
    <b style={{float:"right"}}>{this.state.total_revenue}</b>
                <p style={{color:"grey"}}> Total_Revenue</p>
            </div>
            </div>
        </div>
        <div className="col-xs-12 col-md-3 box">
        <div  style={{backgroundColor:"white",padding:"15px",height:"80px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
            <div style={{float:"left",backgroundColor:"#c1b3fc",height:"50px",width:"50px",border:"2px solid #8c80ba",borderRadius:"50%"}}>
                <span className="fa fa-cart-plus fa-lg" style={{padding:"14px",color:"#7d70b5"}}></span>
            </div>
            <div style={{float:"right"}}>
    <b style={{float:"right"}}>{this.state.todaysSales}</b>
                <p style={{color:"grey"}}>Today's_Sales</p>
            </div>
            </div>              
        </div>
        <div className="col-xs-12 col-md-3 box">
        <div  style={{backgroundColor:"white",padding:"15px",height:"80px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
            <div style={{float:"left",backgroundColor:"#9feafc",height:"50px",width:"50px",border:"2px solid #80bfcf",borderRadius:"50%"}}>
            <span className="fa fa-barcode fa-lg" style={{padding:"14px",color:"#7094b5"}}></span>
            </div>
            <div style={{float:"right"}}>
                 <b style={{float:"right"}}>{this.state.conversion}</b>
                <p style={{color:"grey"}}>Conversion</p>
            </div>
            </div>                  
        </div>
        <div className="col-xs-12 col-md-3 box">
        <div  style={{backgroundColor:"white",padding:"15px",height:"80px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
            <div style={{float:"left",backgroundColor:"#c1b3fc",height:"50px",width:"50px",border:"2px solid #8c80ba",borderRadius:"50%"}}>
                <span className="fa fa-eye fa-lg" style={{padding:"14px",color:"#7d70b5"}}></span>
            </div>
            <div style={{float:"right"}}>
            <b style={{float:"right"}}>{this.state.todaysVisits}</b>
                <p style={{color:"grey"}}>Today's Visits</p>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4 box">
            <div style={{backgroundColor:"white",padding:"15px",height:"350px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
                <h6 style={{color:"#6f6d78"}}>TOTAL REVENUE</h6>
                <div className="row justify-content-center" style={{margin:"25px"}}>
                    <MDBSimpleChart
                    width={110}
                    height={110}
                    strokeWidth={8}
                    percent={80}
                    strokeColor="#4ec0ed"
                    labelFontWeight="2000"
                    labelColor="#4ec0ed"   
                    /> 
                </div>
                <div  className="row justify-content-center" style={{marginBottom:"0px",marginTop:"20px"}}>
                    <p style={{color:"grey",margin:"1px"}}>Total sales made today</p>
                </div>
                <div  className="row justify-content-center" style={{marginTop:"0px",marginBottom:"20px"}}>
                    <h4>$75</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 "style={{textAlign:"center"}}>
                    <p style={{color:"grey",fontSize:"14px",margin:"2px"}}> Target </p>
                            <h6>$1000</h6>
                    </div>
                    <div className="col-4" style={{textAlign:"center"}}>   
                    <p style={{color:"grey",fontSize:"14px",margin:"2px"}}> Last week </p>
                        <h6>$523</h6>
                    </div>
                    <div className="col-4"style={{textAlign:"center"}}>
                    <p style={{color:"grey",fontSize:"14px",margin:"2px"}}> Last Month </p>
                        <h6>$965</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-8 box">
            <div style={{backgroundColor:"white",padding:"15px",height:"350px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
                <h6 style={{color:"#6f6d78"}}>TOTAL SALES</h6>
                <div className="table-responsive-sm">
                <Line data={this.state.dataLine} height={"280px"}  options={{responsive:true,maintainAspectRatio:false}}/>
           </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col-md-6 box">
            <div style={{backgroundColor:"white",padding:"15px",height:"380px",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
                <h6 style={{color:"#6f6d78"}}>SALES ANALYTICS</h6>
                <div className="h-auto">
                <Chart data={chartData} primaryXAxis={this.state.primaryxAxis} primaryYAxis={this.state.primaryyAxis} legendSettings={this.state.legendSettings}  height={300}>
                <ArgumentAxis />
                <ValueAxis    max={400}/>   
                <BarSeries
                    name="desktops"
                    valueField="desktop"
                    argumentField="year"
                    color="#7d25cf"
                    legendShape='Circle'
                />
                <BarSeries
                    name="Tablets"
                    valueField="tablet"
                    argumentField="year"
                    color="#9e63d6"
                    legendShape='Circle'
                />
                <BarSeries
                    name="mobiles"
                    valueField="mobile"
                    argumentField="year"
                    color="#d0a9f5"
                    legendShape='Circle'
                />
                <Animation />
                <Stack
                    stacks={[
                    { series: ['desktops', 'Tablets', 'mobiles'] }
                    ]}
                />
                </Chart>
                </div>
            
            </div>
        </div>
        <div className="col-md-6 box">
            <div style={{backgroundColor:"white",padding:"15px",paddingBottom:"0px",height:"100%",borderRadius:"5px",border:"1px solid #e1e5e6"}}>
                
            <div className="left">
                <h6 style={{color:"#6f6d78",marginBottom:"0px"}}>RECENT ORDERS</h6>
                <p style={{color:"grey",marginTop:"0px"}}>Your awesome text goes here</p>
            </div>   
            <button class="btn btn-primary">View All</button>
            <div className="table-responsive-sm">
            <table class="table">
                <tr >
                <th scope="col">Product</th>
                <th scope="col">Order Date</th>
                <th scope="col">Order Number</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
                </tr>
                {this.renderTableData()}
            </table>
            </div>
            </div>
        </div>
        </div>

        <div className="row" id="footer">
        <p >2015 &copy; Unbold</p>
        </div>
        </div>

);
}
}


export default Content;
