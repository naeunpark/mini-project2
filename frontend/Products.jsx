import { useSyncExternalStore, useState } from 'react';
import { productsStore } from '../backend/productsApi'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import preparingProduct from './assets/preparingProduct.png'

function Products({limit, category=''}) {
    
    let products = useSyncExternalStore(productsStore.subscribe, productsStore.getSnapShot);
    
        if(category != ''){
            products = products.filter(product => product.category.name == category);
        }
        
    return(
        <>
        <Row className="py-4">
            {
                products.length == 0 ? 
                `Sorry, there is no products under category ${category}.` :
                products.slice(0, limit).map((product)=>
                <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                    <Card >
                        <Card.Img variant="top" src={product.image? product.image : preparingProduct} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                            <a href={`/category/${product.id}`}>See More</a>
                            <a >Add to Cart</a>
                        </Card.Body>
                    </Card>
                </Col>
            )
            }
            </Row>
        </>
    )
}

export default Products;