import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginAdminUser } from '../../api/apiAdminUser';
import usePhoto from '../../hooks/usePhoto';

const initDataLogin={
  email:'',
  password:''
}

const AdminLogin = () => {
  const [dataLogin, setDataLogin] = useState(initDataLogin);
  const [_,__,dataAdminUser,setDataAdminUser]= usePhoto();

  const handleChange = (e)=>{
    //console.log(e.target.name,e.target.value);
    setDataLogin({
      ...dataLogin,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log('Enviando dataLogin:..',dataLogin);
    const resultLogin = await loginAdminUser(dataLogin);
    console.log('resultLogin:..',resultLogin);
    const dataUser = resultLogin?.data?.dataUser;
    if(dataUser?._id){
      setDataAdminUser({
        ...dataAdminUser,
        id: dataUser._id,
        nombre: dataUser.nombre,
        email: dataUser.email,
        isLogged: true
      })
    }
  }

  return (    
      <Form className='container mb-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={dataLogin.email} onChange={handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={dataLogin.password} onChange={handleChange} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AdminLogin