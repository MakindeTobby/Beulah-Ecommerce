import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import DefaultLayout from "../../Layout/DefaultLayout";


const Home = () => {
    const [allProduct, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let isMounted = true;

        async function Fetch() {
            try {
                const response = await axios.get('https://dummyjson.com/products')
                const first = await response.data.products;
                setAllProducts(first)
                setProducts(first)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (isMounted) Fetch()
        return () => {
            isMounted = false
        }

    }, []);

    const handleCategory = (value) => {
        let filtered = allProduct.filter((item) => item.category === value);
        setProducts(filtered)
    }

    return (
        <DefaultLayout>
            <main className="mt-4 w-100 h-auto px-5">
                <div className="w-100 t-h-[60vh] t-bg-slate-200 d-flex t-rounded">
                    <img src={products[1]?.thumbnail} alt="" className="w-100 h-100" />
                </div>
                <div className="d-flex justify-content-evenly align-items-center mt-4">
                    <button className="btn" onClick={() => setProducts(allProduct)}>All</button>
                    <button className="btn" onClick={() => handleCategory('smartphones')}>Smartphones</button>
                    <button className="btn" onClick={() => handleCategory('laptops')}>Laptops</button>
                    {/* <button className="btn">Home Decor</button> */}
                    {/* <button className="btn">Fragrances</button> */}
                    {/* <button className="btn">Skin care</button> */}
                    <button className="btn" onClick={() => handleCategory('groceries')}>Groceries</button>
                </div>
                <div className="d-flex t-flex-wrap t-gap-5 w-100 t-items-center mt-4 mb-4">
                    {products.map((item) =>
                        <ProductCard
                            key={item.id}
                            item={item}
                        />
                    )}




                </div>
            </main>
        </DefaultLayout>
    );
}

export default Home;