import Products from "./Products";
import { useSearchParams } from "react-router-dom";
import { Row } from "react-bootstrap";

function Shop(props){
    let [searchParams, setSearchParams] = useSearchParams();
    let category = searchParams.get("category");

    return (
        <>
                <Row className="my-4">
                <h1>Shop {category}</h1>
                </Row>
                <Products category={category} limit={-1}></Products>
        </>
    )
}

export default Shop;