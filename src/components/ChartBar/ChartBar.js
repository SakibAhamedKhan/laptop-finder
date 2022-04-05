import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartBar = () => {
	const [chart, setChart] = useChart();
	return (
		<div>
			
			<BarChart
			width={500}
			height={300}
			data={chart}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  dataKey="month"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={'sell'} fill="#8884d8" />
          <Bar dataKey={'revenue'} fill="#82ca9d" />
        </BarChart>
      		
		</div>
	);
};

export default ChartBar;