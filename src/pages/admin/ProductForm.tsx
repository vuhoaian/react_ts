import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import instance from "../../apis";
import { Product } from "../../interfaces/Product";
import { ProductContext } from "../../contexts/ProductContext";

const productSchema = z.object({
	title: z.string().min(6),
	price: z.number().min(100),
	description: z.string().optional(),
});

const ProductForm = () => {
	const { id } = useParams();

	const { onSubmitProduct, getDetail, state } = useContext(ProductContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Product>({
		resolver: zodResolver(productSchema),
	});

	if (id) {
		useEffect(() => {
			(async () => {
				const data = await getDetail(id);
				reset(data);
			})();
		}, [id]);
	}

	return (
		<div>
			<form onSubmit={handleSubmit((data) => onSubmitProduct({ ...data, id }))}>
				<h1>{id ? "Edit Product" : "Add product"}</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						title
					</label>
					<input type="text" className="form-control" {...register("title", { required: true })} />
					{errors.title && <span className="text-danger">{errors.title.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						price
					</label>
					<input
						type="number"
						className="form-control"
						{...register("price", { required: true, valueAsNumber: true })}
					/>
					{errors.price && <span className="text-danger">{errors.price.message}</span>}
				</div>

				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						description
					</label>
					<textarea rows={4} className="form-control" {...register("description")} />
				</div>
				<div className="mb-3">
					<button className="btn btn-primary w-100">{id ? "Edit Product" : "Add product"}</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
