import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartPie = () => {
	const [chart, setChart] = useChart();
	return (
		<div>
			<PieChart width={400} height={400}>
          		<Pie data={chart} dataKey={'revenue'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          		<Pie data={chart} dataKey={'investment'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        	</PieChart>
		</div>
	);
};

export default ChartPie;