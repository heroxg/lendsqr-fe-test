import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useLocation } from 'react-router-dom';
import { PanoramaSharp } from '@material-ui/icons';
import { parseAsync } from '@babel/core';
import './UserTables.css'

const actions = [
    {
        field: "removeUser",
        headerName: "Actions",
        width: 200,
        editable: false,
        renderCell:(params: any) => {
            return (
                <div className='action__wrap'>
                    <div className='view_user'>
                        <Link to={'/user/' + params.row.id}>view user</Link>
                    </div>
                    <div className='blacklist'>blacklist users</div>
                    <div className='activate'>activate users</div>
                </div>
            )
        }
    }
]
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'orgName',
      headerName: 'Organization',
      width: 150,
      editable: true,
    },
    {
      field: 'userName',
      headerName: 'Username',
      width: 150,
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Date Joined',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
  ];

const UsersTables = () => {
    const [data, setData] = useState([]);

    //fetch users data from API
    const fetchTableData = async () => {
        const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        setData(res.data);
        console.log(res.data);
    }

    console.log(data)
    
    useEffect(() => {
        fetchTableData();
    },[])

  return (
    <div>
      <h1>Users Table</h1>
      <Box sx={{ height: 400, width: '100%', overflowX: 'scroll' }}>
      <DataGrid
      {...data}
      initialState={{
        pagination: {
          pageSize: 10,
        },
      }}
        rows={data}
        columns={columns.concat(actions)}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  )
}

export default UsersTables
