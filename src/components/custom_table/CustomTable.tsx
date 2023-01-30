import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getUserData} from '../../redux/reducers/usersSlice'
import { useSelector } from "react-redux";



type FilterType = 'dropdown' | 'checkbox' | 'multiselect' | 'textField';


   const options = {
    filterType: 'checkbox' as FilterType
  };

  type UsersProps = {
    // [key: string]: any
    data: [],
    isSuccess: boolean,
    isFailure: boolean,
    message: string,
    loading: boolean
  }


const CustomTable = () => {
    // const [data, setData] = useState<any[]>([]);
    const dispatch = useDispatch<any>();
    const usersData = useSelector((state: { users: { data: any; }; }) => state.users.data);
    const data = usersData;
    console.log(data);

    const columns = [
        {
            name: "id",
            label: "id",
            options: {
                display: false
            }
        },
        {
         name: "orgName",
         label: "Organization",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "userName",
         label: "UserName",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "email",
         label: "Email",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "phoneNumber",
         label: "Phone Number",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
        name: "createdAt",
        label: "Date Joined",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "",
            label: 'actions',
            options: {
              filter: true,
              customBodyRender: (value: any, tableMeta: any) => {
                return (
                  <Link to={`/user/${tableMeta.rowData[0]}`} 
                  style={{textDecoration : 'none', border: '1px solid #ddd', 
                  padding: '5px 10px', borderRadius: '3px', color: 'rgba(0, 0, 0, 0.87)'}}>
                    view user
                  {value}
                  </Link>
                );
    
              }
            }
          }
        
       ];
    
    
    //fetch users data from API
    // const fetchTableData = async () => {
    //     try{
    //         const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users   ')
    //         setData(res.data);
    //         console.log(res.data);
    //     }catch(err){}
    // }



    useEffect(() => {
        dispatch(getUserData())
    },[])

  

  return (
    <div>
        <MUIDataTable
        title={undefined}
        data={data}
        columns={columns}
        options={options} /> 
    </div>
  )
}

export default CustomTable
