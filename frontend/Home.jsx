import Categories from "./Categories"
import Products from './Products';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpeg';


function Home() {
  return (
    <>
      <img
        src={banner}
        className="w-100"
      />
      <Container>
        <Categories></Categories>
        <h1 style={{textAlign: "center"}}>Shops</h1>
        <Products limit={8}></Products>
      </Container>
    </>
  );
}

export default Home
