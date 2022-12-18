import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
    return (
        <div className="t-w-[13rem] t-h-[17rem] t-flex t-flex-col">
            <Link to={`/product/${item.id}`} className="w-100 t-h-[14rem] t-bg-slate-200 t-rounded hover:t-shadow-lg">
                <img src={item.thumbnail} alt="" className="w-100 h-100 t-rounded" />
            </Link>
            <div className="t-flex t-flex-col">
                <small>{item.title}</small>

                <span className="t-flex t-items-center gap-5">
                    <strong className="text-primary">${(item.price - item.discountPercentage).toFixed(2) || 0}</strong>
                    <del className='fw-bold  text-muted'>${item.price}</del></span>
            </div>
        </div>
    );
}

export default ProductCard;