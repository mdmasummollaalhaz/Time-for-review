import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <div>
            <div className="inner-hero">
                <h2>Dashborad</h2>
            </div>
            <div className="charts container">
                <div className="line-chart">
                <h2 className='title'>Month Wise Sell</h2>
                    <LineChart width={400} height={400} data={chartData}>
                        <Line type="monotone" dataKey="revenue" stroke="#ff814c" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey='revenue' />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className="area-chart">
                <h2 className='title'>Investment vs Revenue</h2>
                    <AreaChart
                        width={500}
                        height={400}
                        data={chartData}
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
                        <Area type="monotone" dataKey="revenue" stroke="#ff814c" fill="#ff814c" />
                    </AreaChart>
                </div>

                <div className='chart'>
                    <h2 className='title'>Investment vs Revenue</h2>
                    <BarChart height={400} width={450} data={chartData} margin={{
                        top: 20,
                        right: 0,
                        left: 20,
                        bottom: 5,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#ff814c" />
                        <Bar dataKey="revenue" stackId="a" fill="#9f57ad" />
                    </BarChart>                    
                </div>

                <div className='chart'>
                    <h2 className='title'>Investment vs Revenue</h2>
                    <PieChart width={450} height={400} margin={{top: -50, left: 50}}>
                        <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#9f57ad" />
                        <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#ff814c" label />
                        <Tooltip />
                        <Legend />
                    </PieChart>         
                </div>

            </div>

        </div>
    );
};

export default Dashboard;