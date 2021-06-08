import React, {useState} from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import ReactAsyncUser from "./ReactAsyncUser";

async function getUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  }

const ReactAsyncUsers = () => {
    const [userId, setUserId] = useState(null);
    const { data: users, error, isLoading, reload } = useAsync({
      promiseFn: getUsers
    });

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <button onClick={reload}>불러오기</button>;
    return (
        <>
        <ul>
            {users.map(user => (
            <li
                key={user.id}
                onClick={() => setUserId(user.id)}
                style={{ cursor: 'pointer' }}
            >
                {user.username} ({user.name})
            </li>
            ))}
        </ul>
        <button onClick={reload}>다시 불러오기</button>
        {userId && <User id={userId} />}
        </>
    );
};

export default ReactAsyncUsers;

// reload를 사용하면 데이터를 다시 불러올 수 있다(skip 사용과 비슷)
// 렌더링하는 시점이 아닌 사용자의 특정 인터랙션에 따라 API 를 호출하고 싶을 땐 
// promiseFn 대신 deferFn 을 사용하고, reload 대신 run 함수를 사용