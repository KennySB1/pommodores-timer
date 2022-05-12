
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import React from "react";
import {useAuth} from '../contexts/AuthContext'
import {useContext, useState, useEffect} from "react";
import axios from "../utils/axios";


const Chart = () => {

  const [data, setData] = useState([])
  
  const {account} = useAuth()
  

const fixData = (res) => {
  console.log("in the function res")
  console.log(res)

let out = res[0].reduce((a, o) => (a[o.name] ? a[o.name].pomodoroLength += o.pomodoroLength : a[o.name] = o, a) )


console.log("out below")
console.log(out)

var keys = Object.keys(out);
let filteredOutput = []
for (var i = 0; i < keys.length; i++) {
  console.log("keys stuff below")
    filteredOutput.push(out[keys[i]])
    // use val
}

return(filteredOutput)
}

const FetchPomodoros = async () => {

 await axios
     .get(`/pomodoro/getPomos/${account.username}`)
     .then((res) => {
       console.log("res below")
       console.log(res)
       setData(fixData(res.data))})
     .catch(err => console.error(err))

// res.data
}

useEffect(()=>{
  if (account!== null)
{  FetchPomodoros() }
}, [account])


useEffect(() => {
 console.log("data below")
 console.log(data)
  }, [data])
 




  return (
    
    <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="pomodoroLength"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
  </LineChart>




  );
}





export default Chart

