import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const data = [
  { date: '2023-11-01', amount: 4000 },
  { date: '2023-11-02', amount: 3000 },
  { date: '2023-11-03', amount: 2000 },
  { date: '2023-11-04', amount: null },
  { date: '2023-11-05', amount: 1890 },
  { date: '2023-11-06', amount: 2390 },
  { date: '2023-11-07', amount: 3490 },
  { date: '2023-11-08', amount: 5000 }
];

const xLabels = data.map((entry) => entry.date);

export default function FinancialTrendChart() {
  return (
    <Paper elevation={3}>
      <Container>
        <LineChart
          xAxis={[{ data: xLabels, scaleType: 'point' }]}
          series={[{ data: data.map((entry) => entry.amount), connectNulls: true, color: '#00b900' }]}
          height={300}
        />
      </Container>
    </Paper>
  );
}
