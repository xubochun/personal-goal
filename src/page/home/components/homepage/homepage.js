import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import List from '@mui/material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SimpleAccordion from "./components/accordion";

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
        if (addName in newMemberList) {
            console.log(addName)
            setMembers(oldMemberList => [...oldMemberList, addName])
        } else {
            setMembers(newMemberList)
        }
    }


    return (
        <div>
            <Grid item xs="auto">
                <h1>新增成員</h1>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs="auto">
                    <TextField id="outlined-basic" label="輸入名稱" variant="outlined" size="small" onChange={(e) => { setAddName(e.target.value) }} />
                </Grid>
                <Grid item xs="auto">
                    <Button variant="contained" endIcon={<PersonAddIcon />} onClick={submitAddMember}>
                        加入新成員
                    </Button>
                </Grid>
            </Grid>
            <List>
                <Grid>
                    <h3>目前名單</h3>
                </Grid>

                <SimpleAccordion />
            </List>
        </div>
    );
};

export default HomePage;
