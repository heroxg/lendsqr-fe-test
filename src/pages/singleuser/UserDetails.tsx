import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UserDetailsTab from '../../components/tabs/UserDetailsTab'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Star from '../../assets/icons/np_star.png'
import Star2 from '../../assets/icons/np_star2.png'
import Star3 from '../../assets/icons/np_star2.png'

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




const UserDetails = () => {
    const [value, setValue] = React.useState(0);
    const location = useLocation();
    const userid = location.pathname.split('/')[2];
    const [userInfo, setUserInfo] = useState<userProps>();
    const profile = userInfo?.profile;

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
    <div>
      <Header />
      <div className='main__wrapper'>
        <Sidebar />
        <div className='main__content'>
            <div className='main__content__inner'>
                <div className='top__wrap'>
                    <Link to="/users">
                    <p><span><i className="fa fa-long-arrow-left"></i></span>Back to Users</p>
                    </Link>
                </div>
                <div className='top__wrap_second_row'>
                    <h1>Users Details</h1>
                    <div className='user__action__btn'>
                        <button className='blacklist_btn'>Blacklist user</button>
                        <button className='activate_btn'>activate user</button>
                    </div>
                </div>
                <div className='users__card__wrapper_details'>
                    <div className='user__wrappper__heading__info'>
                        <div className="user_information">
                            <img src={profile?.avatar} alt="user avarta" />
                            <div className='user_contact_info'>
                                <h3>{profile?.firstName} {profile?.lastName}</h3>
                                <p>{userInfo?.accountNumber}</p>
                            </div>
                        </div>
                        <div className="user_star_rating">
                            <p>User's Tier</p>
                            <div className='rating-star'>
                                <img src={Star} alt="star" />
                                <img src={Star2} alt="star" />
                                <img src={Star3} alt="star" />
                            </div>
                        </div>
                        <div className="user_amount">
                            <h3>N{userInfo?.accountBalance}</h3>
                            <p>9912345678/Providus Bank</p>
                        </div>
                    </div>

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
            <h3>Socials</h3>
            <div className='personal__info'>
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
        </div>

        <div className='personal__info__row'>
            <h3>Guarantor</h3>
            <div className='personal__info'>
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
                    <p>example@email.com</p>
                </div>
                <div className='personal__info__wrap'>
                    <p>relationship</p>
                    <p>sister</p>
                </div>
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
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
