import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const CharLine = () => {
	const [chart, setChart] = useChart();
	return (
		<div>
			<LineChart
            width={500}
            height={200}
            data={chart}
            syncId="anyId"
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
            <Tooltip/>
            <Line type="monotone" dataKey={'investment'} stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey={'month'} stroke="#8884d8" fill="#8884d8" />
          </LineChart>
		</div>
	);
};

export default CharLine;