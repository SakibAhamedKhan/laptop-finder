import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';
import ChartArea from '../ChartArea/ChartArea';
import ChartBar from '../ChartBar/ChartBar';
import CharLine from '../ChartLine/CharLine';
import ChartPie from '../ChartPie/ChartPie';
import './Dashboard.css'

const Dashboard = () => {
	
	return (
		<div className='dashboard'>
			<CharLine></CharLine>
			<ChartBar></ChartBar>
			<ChartPie></ChartPie>
			<ChartArea></ChartArea>
		</div>
	);
};

export default Dashboard;