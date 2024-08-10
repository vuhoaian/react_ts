import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/Product";
import { CartItem } from "../interfaces/Cart";

const Home = () => {
	const { state } = useContext(ProductContext);
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	const addToCart = (product: Product) => {
		const index = cart.findIndex((item: CartItem) => item.product.id === product.id);
		if (index === -1) {
			// Khi sản phẩm chưa có trong giỏ hàng, thì thêm sản phẩm vào giỏ hàng với quantity = 1
			cart.push({ product, quantity: 1 });
		} else {
			// Khi sản phẩm định mua đã có trong giỏ hàng, thì tìm sản phẩm đó và cập nhật quantity lên 1
			cart[index].quantity++;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Add to cart successfully");
	};
	return (
		<div>
			<div className="container mx-auto w-[1400px]">   
    <h1 className="text-4xl font-bold mb-[10px]">Featured Products</h1>
   <div className="flex justify-between">
   <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <button className="border-2 border-black rounded-lg p-[4px]">View all</button>
   </div>

    <div className="pt-[40px] grid grid-cols-4 gap-4 ">
    {state.products.map((item) => (
		<div key={item.id}>
      <div className="pt-[40px] border">
        <img className="w-[100%] border-b" src={item.images} alt="" />
        <div className="  ">
          <h2 className="text-[18px] font-bold text-center mt-[15px]"><Link to={`/product-detail/${item.id}`}><h1>{item.title}</h1></Link></h2>
          <p className="text-[20px] font-bold pl-[110px] ml-[30px] ">{item.price}</p>
        </div>
		<button className="border-2 border-black rounded-lg py-[5px] px-[115px] mt-[10px] ml-[5px]"
						onClick={
							user.email
								? () => addToCart(item)
								: () => {
										alert("ban phai dang nhap de thuc hien tinh nang nay!");
								  }
						}
					>
						Add to cart
					</button>
       
      </div>
	  </div>
        ))}
      </div>
    </div>
		</div>
		// <div>
		// 	{state.products.map((item) => (
		// 		<div key={item.id}>
		// 			<Link to={`/product-detail/${item.id}`}>
		// 				<h1>{item.title}</h1>
		// 			</Link>
		// 			<p>{item.price}</p>
		// 			<button
		// 				onClick={
		// 					user.email
		// 						? () => addToCart(item)
		// 						: () => {
		// 								alert("ban phai dang nhap de thuc hien tinh nang nay!");
		// 						  }
		// 				}
		// 			>
		// 				Add to cart
		// 			</button>
		// 		</div>
		// 	))}
		// </div>
	);
};

export default Home;
