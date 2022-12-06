// home page - indes.js
import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const HomePage = () => {
    const [members, setMembers] = useState([]);
    const [addName, setAddName] = useState("")


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

    const submitAddMember = async () => {
        const result = await fetch("http://localhost:5000/add_people/" + addName, {
            method: 'POST'
        })
        const jsonResult = await result.json()
        const newMemberList = await jsonResult['all_members']
        if(addName in newMemberList){
            console.log(addName)
            setMembers(oldMemberList => [...oldMemberList, addName])
        } else {
            setMembers(newMemberList)
        }
    }


    return (
        <div>
            <h1>Home Page</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="輸入名稱" variant="outlined" onChange={(e) => { setAddName(e.target.value) }} />
                <Button variant="contained" endIcon={<PersonAddIcon />} onClick={submitAddMember}>
                    加入新成員
                </Button>
            </Box>
            <List>
                {members.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* index % 2 === 0 ? <AssignmentIndIcon /> : <AssignmentIndIcon /> */}
                                <AssignmentIndIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default HomePage;
