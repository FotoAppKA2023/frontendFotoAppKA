import React from 'react'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AdminHome = () => {
  return (
    <div>
        <Navbar />
        <AdminDashboard/>
        <Footer/>
    </div>
  )
}

export default AdminHome