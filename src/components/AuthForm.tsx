import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../interfaces/User";

type Props = {
	isLogin?: boolean;
};

const userSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(255),
});

const AuthForm = ({ isLogin }: Props) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<User>({ resolver: zodResolver(userSchema) });

	const { onSubmit } = useContext(AuthContext);

	return (
		<form onSubmit={handleSubmit((user) => onSubmit(user, isLogin))}>
			<h1>{isLogin ? "Login" : "Register"}</h1>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input type="email" className="form-control" {...register("email", { required: true })} />
				{errors.email && <span className="text-warning">{errors.email.message}</span>}
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					password
				</label>
				<input type="password" className="form-control" {...register("password", { required: true })} />
				{errors.password && <span className="text-warning">{errors.password.message}</span>}
			</div>
			<div className="mb-3">
				<button type="submit" className="btn btn-success w-100">
					{isLogin ? "Login" : "Register"}
				</button>
			</div>
		</form>
	);
};

export default AuthForm;
