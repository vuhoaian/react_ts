import React, { useState, useEffect } from "react";
import instance from "../apis";
import { User } from "../interfaces/User";




const ActiveUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await instance.get('/users'); 
        const data: User[] = response.data; 

        // Lọc người dùng đang hoạt động
        const activeUsers = data.filter((user: User) => user.status === 'active');
        setUsers(activeUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Không thể tải danh sách người dùng. Vui lòng kiểm tra lại.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="active-users-container">
      <h1>Danh sách người dùng đang hoạt động</h1>
      {error && <p className="error">{error}</p>}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.status === 'active' ? 'Đang hoạt động' : 'Không hoạt động'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveUsers;