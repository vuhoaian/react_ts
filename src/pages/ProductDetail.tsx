import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/Product";
import { CartItem } from "../interfaces/Cart";

const ProductDetail = () => {
	const { id } = useParams();
	// const user = JSON.parse(localStorage.getItem("user") || "{}");
	// const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	const { getDetail, state } = useContext(ProductContext);

	if (id) {
		useEffect(() => {
			getDetail(id);
		}, [id]);
	}
	
	// const addToCart = (product: Product) => {
	// 	const index = cart.findIndex((item: CartItem) => item.product.id === product.id);
	// 	if (index === -1) {
	// 		// Khi sản phẩm chưa có trong giỏ hàng, thì thêm sản phẩm vào giỏ hàng với quantity = 1
	// 		cart.push({ product, quantity: 1 });
	// 	} else {
	// 		// Khi sản phẩm định mua đã có trong giỏ hàng, thì tìm sản phẩm đó và cập nhật quantity lên 1
	// 		cart[index].quantity++;
	// 	}
	// 	localStorage.setItem("cart", JSON.stringify(cart));
	// 	alert("Add to cart successfully");
	// };

	return (
		
		<div className='container mx-auto w-[1300px] flex mt-[40px]'>
			
			{state.selectedProduct && (
				<div className='container mx-auto w-[1300px] flex' >
				
				<div className=''>
				
					<img className='mb-[20px] w-[150px]' src={state.selectedProduct.images} alt="" />
					<img className='mb-[20px] w-[150px]' src={state.selectedProduct.images} alt="" />
					<img className='mt-[10px] w-[150px]' src={state.selectedProduct.images} alt="" />
					<img className='mt-[10px] w-[150px]' src={state.selectedProduct.images} alt="" />
				</div>
				<div className='ml-[40px]'>
					<img className='w-[650px] object-cover' src={state.selectedProduct.images} alt="" />
				</div>
				<div className='ml-[70px]'>
					<h1 className='text-3xl font-bold pb-[20px]'>{state.selectedProduct.title}</h1>
					
					<p className='pt-[20px] text-[30px] pb-[20px]'>{state.selectedProduct.price}</p>
					<p className='pb-[30px]'>PlayStation 5 Controller Skin High quality vinyl with air<br/> channel adhesive for easy bubble free install & mess<br/> free removal Pressure sensitive.</p>
					<div className='foot pt-[100px] mb-[10px] border-t-2 border-black justify-between flex'>
					{/* <form
						className='mt-[1px]'
						style={{
						  border: "1px solid grey",
						  width: "max-content",
						  borderRadius: "9px",
						}}>
						<div className='relative flex items-center max-w-[8rem] '>
						  <button
							type='button'
							id='decrement-button'
							data-input-counter-decrement='quantity-input'
							className='bg-white-100 dark:bg-white-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'>
							<svg
							  className='w-3 h-3 text-gray-900 dark:text-black'
							  aria-hidden='true'
							  xmlns='http://www.w3.org/2000/svg'
							  fill='none'
							  viewBox='0 0 18 2'>
							  <path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M1 1h16'
							  />
							</svg>
						  </button>
						  <input
							value={1}
							type='text'
							id='quantity-input'
							data-input-counter=''
							aria-describedby='helper-text-explanation'
							className='bg-white-50 border-x-0 border-gray-300 h-11 text-center text-black-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
						  />
						  <button
							type='button'
							id='increment-button'
							data-input-counter-increment='quantity-input'
							className='bg-[#DB4444] dark:bg-red-700 dark:hover:bg-gray-600 dark:border-red-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'>
							<svg
							  className='w-3 h-3 text-white dark:text-white'
							  aria-hidden='true'
							  xmlns='http://www.w3.org/2000/svg'
							  fill='none'
							  viewBox='0 0 18 18'>
							  <path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 1v16M1 9h16'
							  />
							</svg>
						  </button>
						</div>
					  </form> */}
					  <button className="border-2 border-black rounded-lg py-[5px] px-[115px] mt-[10px] ml-[5px]"
						// onClick={
						// 	user.email
						// 		? () => addToCart(item)
						// 		: () => {
						// 				alert("ban phai dang nhap de thuc hien tinh nang nay!");
						// 		  }
						// }
					>
						Add to cart
					</button>
       
					
					</div>
				
				</div>
		
			
		</div>
			)};
	</div>
	);
};

export default ProductDetail;
