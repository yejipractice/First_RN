import React,{useEffect, useReducer} from 'react';
import axios from "axios";

// useState 대신 useReducer를 사용한 User

const reducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS": 
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return{
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);    
    };
};

const ReducerUsers = () => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async () => {
        dispatch({type: "LOADING"});
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: "SUCCESS", data: response.data});
        }catch (e) {
            dispatch({type: "ERROR", error: e});
        }
    };

    useEffect(() => {
        fetchUsers();
    },[]);

    // state.data를 users 키워드로 조회 
    const {loading, data: users, error} = state;

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
        <button onClick={fetchUsers}>다시 불러오기</button>
      </>
    );
};

export default ReducerUsers;

// useState가 아닌 useReducer를 통해 구현하였을 떄의 장점
// setState 함수를 여러 번 사용하지 않아도 된다는 점과
// reducer로 로직을 분리했으니 다른 곳에서도 쉽게 재사용할 수 있다는 점 