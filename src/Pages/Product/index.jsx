import { useState, useRef, useContext, useEffect } from 'react'
import axios from 'axios';
import './style.css'
import DefaultLayout from '../../Layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Context';

const Product = () => {
    let [count, setCount] = useState(1)
    const {cart, setCart} = useContext(ThemeContext)

    const data = useRef(null);
    const { uid } = useParams()
    const [single, setSingle] = useState({})
    const [singleCrt, setSingleCrt] = useState([])
    let ignore = false


    useEffect(() => {
        const Post = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${uid}`)
                setSingle(response.data)
                setSingleCrt(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        if (!ignore) Post()
        return () => {
            ignore = true
        }
    }, [])


    //   const { cart, setCart } = useContext([]);

    const toCart = () => {
        cart.push(singleCrt)
        setCart([...cart])
        // localStorage.setItem("cartArr", JSON.stringify(singleCrt))
    }
    //   const removeCart = (index) => {
    //     cart.splice(index, 1)
    //     setCart([...cart])
    //   }

    const handleChange = (index) => {
        data.current.src = single.images[index]
    }

    return (

        <DefaultLayout>
            <main className='px-5 w-100 d-flex t-justify-evenly t-items-center pmain mt-4'>
                <div className=" d-flex flex-column t-justify-center t-items-center ps-2 py-2 pfirst">
                    <div style={{ width: "25rem", height: "50vh" }} className="d-flex t-justify-center t-items-center">
                        <img src={single.thumbnail} ref={data} className='t-w-[80%] t-h-[80%]' alt="" />
                    </div>

                    <div className='d-flex t-justify-between mt-4' style={{ width: "23rem" }}>
                        {
                            single?.images?.map((image, index) =>
                                <span style={{ width: "4rem", height: "4rem" }} className='tiny' key={index} onClick={() => handleChange(index)}>
                                    <img src={image} className='w-100 h-100  rounded' alt="" />
                                </span>

                            )
                        }
                    </div>

                </div>


                <div className="py-2 d-flex flex-column gap-2  px-2 psec">
                    <span className='fw-bold txt anim'> {single.brand}</span>

                    <h2>{single.title}</h2>

                    <p className='text-muted anim txt2'> {single.description}</p>
                    <strong className='anim txt2'>RATING: {single.rating}</strong>

                    <div className='d-flex gap-2 align-items-center'>
                        <del className='fw-bold  text-muted'>$ {single.price || 0}</del>

                        <span className='fw-bold fs-5 txt bg-light p-1 shadow-sm d-flex justify-content-center align-items-center'>-{single.discountPercentage || 0}</span>
                    </div>
            
                    <span className='fw-bold fs-4'>$ {((single.price || 0) - (single.discountPercentage || 0)).toFixed(2) || 0}</span>
                    <div className='d-flex t-flex-wrap gap-4 align-items-center w-100 anim txt3'>
                        <div>
                            <button className='btn btn-light shadow  btn-sm t-py-4' onClick={() => setCount(count < 1 ? count = 0 : count - 1)}><img src="/icon-minus.svg" alt="" /></button>
                            <button className='btn fw-bold fs-5'>{count}</button>
                            <button className='btn btn-light shadow btn-sm t-py-4' onClick={() => setCount(count + 1)}><img src="/icon-plus.svg" alt="" /></button>
                        </div>
                        {/* {cart.length < 1 ?  */}

                        <button className='btn btn-danger d-flex gap-4 cart' disabled={count < 1 ? true : false} onClick={toCart}>
                            <img src="/icon-cart.svg" alt="" />
                            Add to cart</button>

                        {/* <button className='btn btn-danger d-flex gap-4 cart' onClick={() => removeCart(index)}>
                            ❌  Remove from cart</button> */}
                    </div>
                </div>
            </main>
        </DefaultLayout>
    )
}



export default Product;