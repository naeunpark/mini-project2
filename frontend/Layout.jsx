import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function Layout (){
    return(
        <>
        <Container>
                <Outlet/>
        </Container>
        </>
    )
}

export default Layout;