import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router';
import axios from 'axios';


type userProps = {
  [key: string]: any;
  orgName: string,
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserDetailsTab = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const userid = location.pathname.split('/')[2];
  const [userInfo, setUserInfo] = useState<userProps>();
  const profile = userInfo?.profile;
  console.log(profile);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const fetchUsersDetails = async () => {
    const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userid}`)
    setUserInfo(res.data);
  }

  console.log(userInfo)

  useEffect(() => {
    fetchUsersDetails();
  }, [userid])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General Details" {...a11yProps(0)} />
          <Tab label="Documents" {...a11yProps(1)} />
          <Tab label="Bank Details" {...a11yProps(2)} />
          <Tab label="Loans" {...a11yProps(3)} />
          <Tab label="Savings" {...a11yProps(4)} />
          <Tab label="App and Systems" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='personal__info__row'>
          <h3>Personal Information</h3>
          <div className='personal__info'>
            <div className='personal__info__wrap'>
                <p>Full name</p>
                <p>{profile?.firstName} {profile?.lastName}</p>
            </div>
            <div className='personal__info__wrap'>
                <p>phone number</p>
                <p>{profile?.phoneNumber}</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Email Address</p>
                <p>{userInfo?.email}</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Bvn</p>
                <p>{profile?.bvn}</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Gender</p>
                <p>{profile?.gender}</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Marital Status</p>
                <p>single</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Children</p>
                <p>none</p>
            </div>
            <div className='personal__info__wrap'>
                <p>Type of residence</p>
                <p>parent's apartment</p>
            </div>
          </div>
        </div>
        <div className='personal__info__row'>
        <h3>Education and Employment</h3>
        <div className='personal__info'>
          <div className='personal__info__wrap'>
              <p>Leve of Education</p>
              <p>{userInfo?.education.level} {profile?.lastName}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>Employment Status</p>
              <p>{userInfo?.education.employmentStatus}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>sector of employment</p>
              <p>{userInfo?.education.sector}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>duration of employment</p>
              <p>{userInfo?.education.duration}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>office mail</p>
              <p>{userInfo?.education.officeEmail}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>Monthly income</p>
              <p>N{userInfo?.education.monthlyIncome[0] +" " + "-" + " " + "N"+ userInfo?.education.monthlyIncome[1]}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>loan repayment</p>
              <p>N{userInfo?.education.loanRepayment}</p>
          </div>
        </div>
        </div>
        
        <div className='personal__info__row'>
            <h3>socials</h3>
            <div className='personal__info__wrap'>
              <p>twitter</p>
              <p>{userInfo?.socials.twitter}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>facebook</p>
              <p>{userInfo?.socials.facebook}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>instagram</p>
              <p>{userInfo?.socials.instagram}</p>
          </div>
        </div>

        <div className='personal__info__row'>
            <h3>Guarantor</h3>
            <div className='personal__info__wrap'>
              <p>full name</p>
              <p>{userInfo?.guarantor.firstName} {userInfo?.guarantor.lastName}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>phone number</p>
              <p>{userInfo?.guarantor.phoneNumber}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>email address</p>
              <p>{userInfo?.guarantor.address}</p>
          </div>
          <div className='personal__info__wrap'>
              <p>relationship</p>
              <p>sister</p>
          </div>
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      item two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item six
      </TabPanel>
    </Box>
  );
}

export default UserDetailsTab
