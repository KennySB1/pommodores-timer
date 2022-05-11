



//  useEffect(() => {
//    fetchPomodoros();
//  }, []);



//  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

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



// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
// ];

const Chart = () => {

  const mockData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,

    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
  
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    }
  ];
  const {account} = useAuth()
  // const [pomodoros, setPomodoros] = useState([{name: "monday", minutes: 5000}, {}]);
  const [data, setData] = useState([])
    // {name: "monday", minutes: 5000},{name: "tuesday", minutes: 4000}]


const FetchPomodoros = async () => {

 await axios
     .get(`/pomodoro/getPomos/${account.username}`)
     .then((res) => {
       console.log("res below")
       console.log(res.data)
       setData(res.data)})
       console.log("here")
       console.log(data)
     .catch(err => console.error(err))


}
// [{name: "tuesday", minutes: 5000}]

useEffect(() => {
 FetchPomodoros();
  }, [])
 



  
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
      dataKey="pv"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>


  );
}







export default Chart

