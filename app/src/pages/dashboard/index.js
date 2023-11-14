import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MoneyCard from './MoneyCard';
import FinancialTrendChart from './FinancialTrendChart';


const Dashboard = () => {
 
  const totalInvestmentAmount = 50000; // 替換為實際的總投資金額

  return (
    <Container>
      <h3>Investment Dashboard</h3>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 272, height: 128, }, }}>
        <MoneyCard amount={totalInvestmentAmount} currency="TWD" description="總投資金額" />
        <MoneyCard amount={1000} currency="TWD" description="未實現損益" />
        <MoneyCard amount={1000} currency="TWD" description="投資回報率" />
        <MoneyCard amount={1000} currency="TWD" description="現金儲備" />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 1200, height: 300, }, }}>
        <FinancialTrendChart />
      </Box>
    </Container>
  );
}

export default Dashboard;
