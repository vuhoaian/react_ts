export interface User {
	id?: string | number;
	email: string;
	password: string;
	confirmPass?: string;
	role: "admin" | "member";
	status: 'active' | 'inactive';
}

// type literal
