import React from "react";
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav} from "react-bootstrap";
const Head = () => {
    return(
       <div>
           <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to ='/' >Aboutme</Nav.Link>
      <Nav.Link as={Link} to ='/skills' >Skills</Nav.Link>
      <Nav.Link as={Link} to ='/hobbies' >Hobbies</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
           
               

         
     </div>

    )
}
export default Head;