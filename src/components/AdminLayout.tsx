import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	if (!user || user?.role !== "admin") {
		return <h1>Ban khong co quyen vao trang nay</h1>;
	}
	return (
		<div>
			<h1 className="text-[40px] text-center mt-[20px] mb-[30px]">Hello admin</h1>
			<div className="row ">
				<div className="col-3 sideBar bg-black">
					<ul>
						<li className="text-2xl  text-white mb-[5px]  ">
							<Link to="/">Home</Link>
						</li>
						<li className="text-2xl  text-white mb-[5px]  ">
							<Link to="/admin">Dashboard</Link>
						</li>
						<li className="text-2xl  text-white mb-[5px]  ">
							<Link to="/admin">Products</Link>
						</li>
						<li className="text-2xl text-white mb-[5px]  ">
							<Link to="/admin/user">User khách hàng</Link>
						</li>
						<li className="text-2xl text-white mb-[5px]  ">
							<Link to="/admin">Dashboard</Link>
						</li>
					</ul>
				</div>
				<div className="col-9 context ">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
