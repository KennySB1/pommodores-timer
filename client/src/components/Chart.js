import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import {useAuth} from '../contexts/AuthContext';
import {useContext, useState, useEffect} from "react";
import axios from "../utils/axios";




const getCompletedPomodoros = () => {

  axios
  .get('/pomodoro/getPomos')
  .then((res) => {
    console.log(res);
    // setGetData(res.data)
  })
    .catch(err => console.error(err))
}


// useEffect(()=> {
//   getCompletedPomodoros()
//   console.log(getData)
// })

const data = [
  {
    name: "Monday",
    uv: 4000,
    amt: 2400
  },
  {
    name: "Tuesday",
    uv: 3000,
    amt: 2210
  },
];




function Chart() {
  const {account} = useAuth()
  const [getData, setGetData] = useState([])

return (
  <AreaChart
    width={500}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }}
  >
        {getCompletedPomodoros()}

    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
  );
}


export default Chart