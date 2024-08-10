// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import axios from 'axios';
// import { User } from '../interfaces/User';


// interface UserContextType {
//   users: User[];
//   loading: boolean;
// }

// interface UserProviderProps {
//   children: ReactNode; // Định nghĩa kiểu cho children
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users: ', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <UserContext.Provider value={{ users, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Hook để sử dụng UserContext
// export const useUserContext = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error('useUserContext must be used within a UserProvider');
//   }
//   return context;
// };
