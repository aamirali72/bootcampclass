import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase   '
    }
}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const responce = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await responce.json();
            setGlobalData((Object.values(Object.values(data.countryitems)[0])));
        }
        getData();
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Total Cases</th>
                    <th>Active Cases</th>
                </tr>
                {globalData.map((key, ind) => {
                    return (
                        <tr>
                            <td>{globalData[ind].title}</td>
                            <td>{globalData[ind].total_cases}</td>
                            <td>{globalData[ind].total_active_cases}</td>
                        </tr>
                    )
                })}
            </table>
        </div >
    );
}


    // return (
    //     <div className={classes.root}>
    //         <Grid container spacing={3}>
    //             {Object.keys(globalData[0]).map((key, ind) => {
    //                 return (
    //                     <Grid item xs={12} sm={4} key={ind}>
    //                         <Paper
    //                             className={classes.paper}
    //                             elevation={3}>
    //                             <h3 className={classes.title}>
    //                                 {key.replace(/_/g, ' ')}
    //                             </h3>
    //                             <h3>{globalData[0][key]}</h3>
    //                         </Paper>
    //                     </Grid>
    //                 )
    //             })}
    //         </Grid>
    //     </div >
    // );
