import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartArea = () => {
	const [chart, setChart] = useChart();
	return (
		<div>
			<AreaChart
			width={500}
			height={400}
			data={chart}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop  stopColor="green" stopOpacity={1} />
              
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey={'sell'} stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
		</div>
	);
};

export default ChartArea;