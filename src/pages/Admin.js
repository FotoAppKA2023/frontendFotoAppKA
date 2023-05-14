import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import usePhoto from '../hooks/usePhoto';
import { useNavigate } from 'react-router';

const Admin = () => {
  const [_,__,dataAdminUser]=usePhoto();
  const navigate = useNavigate();
  useEffect(() => {
    if(dataAdminUser.id){
      console.log('Login successFull AdminUser:..',dataAdminUser.id)
      navigate('/adminHome');
    } 

    
  }, [dataAdminUser.id])
  
  return (
    <div>
      <Navbar/>
      <AdminLogin/>
      <Footer/>
    </div>
  )
}

export default Admin