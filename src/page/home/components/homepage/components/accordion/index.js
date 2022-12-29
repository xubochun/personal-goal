import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function SimpleAccordion() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:5000/member")
            const jsonResult = await result.json()
            const newMemberList = await jsonResult['all_members']
            console.log('名單:', newMemberList)

            setMembers(jsonResult['all_members'])
        }

        fetchData()
    }, [])

    return (
        <div>
            {members.map((name, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs="auto">
                            <AssignmentIndIcon />
                        </Grid>
                        <Grid item xs="auto">
                            <ListItemText primary={name} />
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        任務內容
                    </Typography>
                </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
