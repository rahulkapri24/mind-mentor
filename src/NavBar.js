import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { useSelector } from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import LoginScreen from './Screens/LoginScreen'
import { NavItem } from 'react-bootstrap';

function NavBar() {
  const user = useSelector(selectUser);
    //const [show, handleShow] = useState(false);
  // if show==true { nav will have transparent background}
  // if show==flase { nav will have black background}

  // const history = useHistory();
  //const navigate = useNavigate();

//   const navbarChangeListener = () => {
//     if (window.scrollY > 100) {
//       handleShow(true);
//     } else {
//       handleShow(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", navbarChangeListener);
//     return () => window.removeEventListener("scroll", navbarChangeListener);
//   }, []);
const email=user.email;
const name=user.email.substring(0, email.lastIndexOf("@"));;
  return (
    <>
    
       <Navbar className='nav' bg="light"  sticky="top" data-bs-theme="light">
        <Container>
          <Navbar.Brand  href="#home">Mind Mentor</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
           
            <NavItem className='name' >{user?(name):<LoginScreen/>}</NavItem>
            <button onClick={()=>auth.signOut()} className='nav_button' >Sign Out</button>
          </Nav>
        </Container>
      </Navbar>
      
    
    </>



    // <div className={`nav ${show && "nav__black"}`}>
     

    // </div>
  )
}


export default NavBar
