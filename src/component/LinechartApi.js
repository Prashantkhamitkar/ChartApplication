import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
const LinechartApi=({showchartdata})=>{
    
    return <div style={{width:"1000px"}}>
        <Line data={showchartdata}/>
    </div>
}
export default LinechartApi;