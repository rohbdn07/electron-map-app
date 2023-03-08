import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import React from 'react'
import Form from './form/Form'
import DataTable from './table/DataTable';

export default function Layout() {
    const classes = useStyles(); 
  return (
    <div className={classes.root}>
        <Form/>
        <Divider flexItem={true} orientation={'vertical'}/>
        <DataTable/>
    </div>
  )
}

const useStyles = makeStyles({
    root: {
      display: 'flex',
      height:'100vh'
    },
  });
