import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import usePhoto from '../hooks/usePhoto';

const Admin = () => {
  const [_,__,dataAdminUser]=usePhoto();
  useEffect(() => {
    if(dataAdminUser.id) console.log('Login successFull AdminUser:..')
    return
  }, [dataAdminUser.id])
  
  return (
    <div>
      <Navbar sectionAdmin={true}/>
      {dataAdminUser.id?<AdminDashboard/>:<AdminLogin/>}
      <Footer/>
    </div>
  )
}

export default Admin