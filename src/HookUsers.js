import React from 'react';
import axios from 'axios';
import {userAsync} from "./Hooks";

// 커스텀 Hook을 생성하여 적용한 경우  
async function getUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  }
  
  function Users() {
    const [state, refetch] = useAsync(getUsers, []);
  
    const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
      </>
    );
  }
  
  export default Users;