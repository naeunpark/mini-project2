import { useSyncExternalStore } from "react"
import { categoriesStore } from "../backend/categoriesApi"
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Categories(){
    const categories = useSyncExternalStore(categoriesStore.subscribe, categoriesStore.getSnapShot)
    

    return(
        <>
        <Row className="py-4">
            {categories.map((item) => {
                const linkStyle = {
                    backgroundImage: `url(${item.image})`, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    height: '300px', 
                    backgroundSize: 'cover',
                    alignItems: 'center',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    color: '#fff'
                };

                return (
                <Col xs={6} sm={6} md={3} lg={3} className="mb-4" key={item.id}>
                    <a href={`/category?category=${item.name}`} style={linkStyle}>{item.name}</a>
                </Col>
                )
            })
            }
            </Row>
            
        </>
    )
}

export default Categories