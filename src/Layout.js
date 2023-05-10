import { Outlet,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from "react-bootstrap";
import { ImHome3,ImPhone ,ImPaste} from "react-icons/im";
const Layout = () => {
  return (
    <>
      <center >
        <header >
        Flower.in
        </header>      
        <center >
          <Navbar bg="light"  variant="success">
           
              <Navbar.Brand as={Link} to="/">Flower.in</Navbar.Brand>
              <Nav className="">    
                <Nav.Link as={Link} to="/" > <ImHome3/>Home</Nav.Link>   
                <Nav.Link as={Link} to="/blogs" ><ImPaste/>Blogs</Nav.Link>
                <Nav.Link as={Link} to="/contact" ><ImPhone/>Contact</Nav.Link>  
                <input  type="text" placeholder="Search"></input>
                <button class="btn btn-success"  type="submit">Search</button>
              </Nav>    
          
          </Navbar>  
        </center>  
      </center>      
      <Outlet />     
    </>
  )
};

export default Layout;