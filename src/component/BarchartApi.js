import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
const BarchartApi=({showchartdata})=>{
return(<div style={{width:"1000px"}}>
    <Bar data={showchartdata}></Bar>
</div>)
}
export default BarchartApi;