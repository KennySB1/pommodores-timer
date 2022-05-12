
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
  useEffect(()=>{
    if (account!== null)
  {  FetchPomodoros() }
  }, [account])


const FetchPomodoros = async () => {

 await axios
     .get(`/pomodoro/getPomos/${account.username}`)
     .then((res) => {
       console.log("res below")
       console.log(res)
       setData(res.data)})
     .catch(err => console.error(err))


}

useEffect(() => {
 console.log("data below")
 console.log(data)
  }, [data])
 




  return (
    
    <LineChart
    width={500}
    height={300}
    data={data[0]}
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
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>




  );
}





export default Chart

