import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'
const BarchartApi=({showchartdata})=>{
return(<div style={{width:"700"}}>
    <Bar data={showchartdata}></Bar>
</div>)
}
export default BarchartApi;