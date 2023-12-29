
import { useEffect, useState } from 'react';
import './App.css';
import Barchart from './component/Barchart';
import { datas } from './Data/Data';
import Linechart from './component/Linechart';
import Piechart from './component/Piechart';

import { Myaxios } from './Data/services/Myaxios';
import DataFetching from './Data/DataFetching';
import BarchartApi from './component/BarchartApi';

function App() {
  const [userdata,setuserdata]=useState({
    labels:datas.map((data)=>data.year),
    datasets:[{
      label:"User Gained",
      data:datas.map((data)=>data.userGain)
    }]
  });
  
  const [chartdata,setchartdata]=useState([])
  const setdatatoapp=(data)=>{
    setchartdata(data);
  }
  const [showchartdata,setshowchartdata]=useState({
    labels : [],
    datasets:[{
      label:"Intensity of user",
      data: []
    }]
  });
 useEffect(()=>{
 

setshowchartdata({
  labels : chartdata.map((data)=>data.endyear),
  datasets:[{
    label:"Intensity of user",
    data: chartdata.map((data)=>data.intensity)
  }]
});
 },[chartdata])

  return (
    <div className="App">
     <DataFetching setdatatoapp={setdatatoapp}></DataFetching>
     <Barchart userdata={userdata}></Barchart>
     <Linechart userdata={userdata}></Linechart>
     <Piechart userdata={userdata}></Piechart>
     <BarchartApi showchartdata={showchartdata}></BarchartApi>
    </div>
  );
}

export default App;
