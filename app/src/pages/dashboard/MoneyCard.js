import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const MoneyCard = ({ amount, currency, description }) => {

    const formattedAmount = amount.toLocaleString();

    return (
        <Paper elevation={3}>
            <Container>
                <p>{description}</p>
                <Box sx={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}>
                    {formattedAmount} {currency}
                </Box>
            </Container>
        </Paper>
    );
};
  
export default MoneyCard;