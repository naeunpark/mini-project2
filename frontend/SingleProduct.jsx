import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import preparingProduct from './assets/preparingProduct.png'
import ControlledCarousel from "./ControlledCarousel";

function SingleProduct(){
    let { productId } = useParams();
    const [ item, setItem ] = useState('');

    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then(response=>response.json())
        .then(json=>{
            setItem(json);
        })
    },[])

    return (
      <>
        <Row className="my-4"></Row>
        <Row>
          <Col>
            {item.images && <ControlledCarousel images={item.images} />}
          </Col>
          <Col>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <h3>Products Description: </h3>
            <p>{item.description}</p>
          </Col>
        </Row>
      </>
    );
}

export default SingleProduct;