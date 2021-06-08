import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

// react-async 라이브러리의 useAsync 함수를 이용한 경우 
const getUser = async ({ id }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
};

const ReactAsyncUser = ({id}) => {
    const { data: user, error, isLoading } = useAsync({
        promiseFn: getUser,
        id,
        watch: id
      });

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null; 

    return (
        <div>
          <h2>{user.username}</h2>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </div>
      );
};

export default ReactAsyncUser;

// 함수의 파라미터를 객체 형태로 설정해줘야 한다.
// watch 파라미터에 넣어준 값이 바뀔 때마다 promiseFn에 설정한 함수가 다시 호출된다. 
 
