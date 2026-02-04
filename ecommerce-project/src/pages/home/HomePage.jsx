
import { Header } from '../../components/Header'
import './HomePage.css'
import { ProductsGrid } from './ProductsGrid'

export function HomePage({ cart, loadCart }){
 

       
  



return (
    <>
     <title>Ecommerce Project</title>
     <Header cart={cart}/>
    
    <div className="home-page">
     <ProductsGrid loadCart={loadCart}/>
    </div>


</>

);



}