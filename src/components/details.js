import React from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';

export default function Details() {
  const bloodReportData = {
    labels: ['Hemoglobin', 'WBC', 'RBC', 'Platelets', 'Plasma'],
    values: [13.8, 5.5, 4.7, 250, 55],
    type: 'pie'
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const medicalHistoryData = {
    x: ['2023-01-01', '2023-02-15', '2023-03-30', '2023-05-10'].map(formatDate),
    y: [1, 2, 3, 4],
    text: ['Check-up', 'Blood Test', 'MRI Scan', 'Consultation'],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'red' }
  };

  const sugarLevelsData = {
    x: ['January', 'February', 'March', 'April', 'May'],
    y: [120, 130, 125, 140, 135],
    type: 'bar'
  };

  const bloodPressureData = {
    x: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01'].map(formatDate),
    y: [120, 115, 118, 122, 119],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'blue' }
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Patient Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Blood Report</h2>
            <Plot
              data={[bloodReportData]}
              layout={{ title: 'Blood Report', height: 400, width: 500 }}
            />
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Medical History</h2>
            <Plot
              data={[medicalHistoryData]}
              layout={{ title: 'Medical History Timeline', height: 400, width: 500 }}
            />
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Sugar Levels</h2>
            <Plot
              data={[sugarLevelsData]}
              layout={{ title: 'Sugar Levels Over Time', height: 400, width: 500 }}
            />
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Blood Pressure</h2>
            <Plot
              data={[bloodPressureData]}
              layout={{ title: 'Blood Pressure Over Time', height: 400, width: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
