import { useEffect, useState } from "react";
import { CartItem } from "../interfaces/Cart";

const CartPage = () => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	const [totalPrice, setTotalPrice] = useState(0);
	const [showQRCode, setShowQRCode] = useState(true);
	useEffect(() => {
		if (cart.length > 0) {
			const total = cart.reduce((acc: number, item: CartItem) => {
				return acc + item.product.price * item.quantity;
			}, 0);
			setTotalPrice(Math.round(total * 100) / 100);
		}
	}, []);

	console.log(totalPrice);

	const handlePayment = () => {
		localStorage.removeItem("cart");
		setShowQRCode(false);
		alert("Thanh toan thanh cong!");

	};
	return (
		<div>
			<h1 className="text-center text-orange-400 text-[60px] mt-[20px] mb-[30px]">Giỏ Hàng</h1>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Ten san pham</th>
						<th>Gia</th>
						<th>So luong</th>
						<th>Thanh tien</th>
					</tr>
				</thead>
				<tbody>
					{cart.length > 0 ? (
						cart.map((item: CartItem, index: number) => (
							<tr key={index}>
								<td>{item.product.title}</td>
								<td>{item.product.price}</td>
								<td>{item.quantity}</td>
								<td>{item.product.price * item.quantity}</td>
							</tr>
						))
					) : (
						<h1>Gio hang trong!</h1>
					)}
				</tbody>
			</table>
			<h3 className=" text-orange-400 text-2xl">Thanh tien: {totalPrice || ""}</h3>
			<span>
				<button className="border-2 rounded-md py-[5px] px-[5px]" onClick={() => handlePayment()}>Thanh toan</button>
				{showQRCode && <img src="qr.png" width={100} />}
			</span>
		</div>
	);
};

export default CartPage;
