import React, { useEffect, useState } from 'react';

// Определяем интерфейс для пользователя
interface User {
    id: number;
    name: string;
    tel: number;
    email: string;
}

const UserList: React.FC = () => {
    // Состояние для хранения пользователей и состояния загрузки
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Функция для получения данных
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: User[] = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    // Используем useEffect для загрузки данных при монтировании компонента
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.tel} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;