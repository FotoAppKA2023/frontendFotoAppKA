import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import logo from '../../assets/fotografa1.jpg';


const ErrorToast = ({msg, isShowToast, handleCloseToast}) => {
  return (
    <Toast show={isShowToast} onClose={handleCloseToast}>
      <Toast.Header>
        <img style={{width:'50px'}} src={logo} className="rounded me-2" alt="logo" />
        <strong className="me-auto text-danger">Error!!</strong>
      </Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  )
}

export default ErrorToast