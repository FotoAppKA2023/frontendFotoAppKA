
import Toast from 'react-bootstrap/Toast';
import logo from '../../assets/fotografa1.jpg';


const SuccessToast = ({msg, isShowToast, handleCloseToast}) => {
  return (
    <Toast show={isShowToast} onClose={handleCloseToast}>
      <Toast.Header>
        <img style={{width:'20%'}} src={logo} className=" rounded " alt="logo" />
        <strong className=" ms-auto me-auto text-success">Success!!</strong>
      </Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  )
}

export default SuccessToast