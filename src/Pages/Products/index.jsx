import CardProducts from "../../components/CardProducts"
import Container from "../../components/Container"
import Header from "../../components/Header"
import Cart from "../../components/Cart"
import data from "../../data/data.json"
import "../../sass/Pages/Products.scss"


function Products() {
  
  return (
    <>
      <Header/>
      <Container>
          {
            data.length >= 0 ? (
              <main className="content">
                  {
                    data.map((data, id) => (
                      <CardProducts
                        name={data.name}
                        category={data.category}
                        price={data.price}
                        imgs={data.image}
                        key={id}
                        idB={id}
                      />
                    ))
                  }
              </main>
            ) : (
              <p>error</p>
            )
          }

          <Cart/>
      </Container>
    </>
  )
}

export default Products;
