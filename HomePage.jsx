import React, { useState } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, 
  ScatterChart, Scatter, ZAxis,
  PieChart, Pie, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area,
  ComposedChart
} from 'recharts';
import './HomePage.css';

const HomePage = () => {
  // Sample data - replace with your actual data
  const impressionData = [
    { category: 'Total', value: 15000 },
    { category: 'Football', value: 8000 },
    { category: 'Vehicle', value: 7000 },
  ];

  const impressionOverTime = [
    { month: 'Jan', total: 4000, football: 2400, vehicle: 1600 },
    { month: 'Feb', total: 5000, football: 2800, vehicle: 2200 },
    { month: 'Mar', total: 6000, football: 3200, vehicle: 2800 },
    { month: 'Apr', total: 7000, football: 3600, vehicle: 3400 },
    { month: 'May', total: 8000, football: 4200, vehicle: 3800 },
    { month: 'Jun', total: 9000, football: 4800, vehicle: 4200 },
  ];

  const presenceTimeData = [
    { month: 'Jan', average: 15 },
    { month: 'Feb', average: 18 },
    { month: 'Mar', average: 20 },
    { month: 'Apr', average: 22 },
    { month: 'May', average: 25 },
    { month: 'Jun', average: 23 },
  ];

  const populationData = [
    { name: 'Male 18-24', value: 2400 },
    { name: 'Male 25-34', value: 4500 },
    { name: 'Male 35-44', value: 3200 },
    { name: 'Male 45+', value: 2100 },
    { name: 'Female 18-24', value: 2200 },
    { name: 'Female 25-34', value: 4100 },
    { name: 'Female 35-44', value: 3000 },
    { name: 'Female 45+', value: 1900 },
  ];

  const locationData = [
    { location: 'Main Entrance', average: 28 },
    { location: 'Central Hall', average: 35 },
    { location: 'Food Court', average: 42 },
    { location: 'Parking Area', average: 15 },
    { location: 'Exhibition Hall', average: 31 },
  ];

  const attentionTimeData = [
    { range: '0-5s', count: 1200 },
    { range: '6-15s', count: 2800 },
    { range: '16-30s', count: 3500 },
    { range: '31-60s', count: 2200 },
    { range: '61s+', count: 1300 },
  ];

  const radarData = [
    { subject: 'Total', A: 120, B: 110, fullMark: 150 },
    { subject: 'Football', A: 98, B: 130, fullMark: 150 },
    { subject: 'Vehicle', A: 86, B: 130, fullMark: 150 },
    { subject: 'Attention', A: 99, B: 100, fullMark: 150 },
    { subject: 'Presence', A: 85, B: 90, fullMark: 150 },
  ];

  const bubbleData = [
    { hour: 8, visitors: 200, presence: 12, name: 'Morning' },
    { hour: 12, visitors: 600, presence: 18, name: 'Noon' },
    { hour: 16, visitors: 500, presence: 22, name: 'Afternoon' },
    { hour: 20, visitors: 300, presence: 15, name: 'Evening' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A442F1', '#42F1E2', '#F142A1', '#8884d8'];

  return (
    <div className="dashboard-container">
      <h1>Analytics Dashboard</h1>
      
      <div className="chart-grid">
        {/* 1. Bar Chart - TOTAL, FOOTBALL, VEHICLE IMPRESSION */}
        <div className="chart-container">
          <h2>Impression Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impressionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Impressions" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Line Chart - IMPRESSION OVER TIME */}
        <div className="chart-container">
          <h2>Impressions Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impressionOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total" />
              <Line type="monotone" dataKey="football" stroke="#82ca9d" name="Football" />
              <Line type="monotone" dataKey="vehicle" stroke="#ffc658" name="Vehicle" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Area Chart - AVERAGE PRESENCE TIME OVER TIME */}
        <div className="chart-container">
          <h2>Average Presence Time Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={presenceTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="average" fill="#8884d8" stroke="#8884d8" name="Avg Presence (min)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Donut Chart - POPULATION SPLIT BY GENDER AND AGE */}
        <div className="chart-container">
          <h2>Demographics by Gender and Age</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={populationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
                label
              >
                {populationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Bar Chart - AVERAGE PRESENCE TIME PER LOCATION */}
        <div className="chart-container">
          <h2>Average Presence Time Per Location</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#82ca9d" name="Avg Time (min)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Pie Chart - ATTENTION TIME DISTRIBUTION */}
        <div className="chart-container">
          <h2>Attention Time Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attentionTimeData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="count"
                nameKey="range"
                label
              >
                {attentionTimeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Scatter Chart - Any correlation data */}
        <div className="chart-container">
          <h2>Visitor Count vs Presence Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" name="Hour of Day" />
              <YAxis dataKey="visitors" name="Visitor Count" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Time of Day Analysis" data={bubbleData} fill="#8884d8">
                {bubbleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Radar Chart - Metrics Comparison */}
        <div className="chart-container">
          <h2>Metrics Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="This Week" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Last Week" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Bubble Chart - PRESENCE TIME BY HOUR */}
        <div className="chart-container">
          <h2>Presence Time by Time of Day</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" name="Hour of Day" />
              <YAxis dataKey="visitors" name="Visitors" />
              <ZAxis dataKey="presence" range={[60, 400]} name="Avg Presence (min)" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Bubble Size = Presence Time" data={bubbleData} fill="#8884d8">
                {bubbleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* 10. Mixed/Composed Chart */}
        <div className="chart-container">
          <h2>Combined Metrics Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={impressionOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="football" fill="#8884d8" name="Football Impressions" />
              <Bar dataKey="vehicle" fill="#82ca9d" name="Vehicle Impressions" />
              <Line type="monotone" dataKey="total" stroke="#ff7300" name="Total Impressions" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;