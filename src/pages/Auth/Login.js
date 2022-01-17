import React, { useState, useEffect } from 'react'
import Button from '../../components/Button';
import Screen from '../../components/Screen'
import Title from '../../components/Title';
import SmallText from '../../components/SmallText';
import MyContainer from '../../components/MyContainer';
import MyInput from '../../components/MyInput';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import myApi from '../../constants/myApi';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const onLoad = () => {
        myApi.get(`/user`, {
            headers: {
                'Authorization': `Bearer ${cookies.JWT}`
            }
        }).then((response) => {
            if (response.data) {
                navigate('/todolist');
            }
        }).catch((error) => {
            console.log(error);
        })
        // console.log(localStorage.getItem("name"));
        console.log(cookies);
    }
    useEffect(() => {
        onLoad();
    }, [cookies.JWT])

    const onLogin = () => {
        myApi.post(`/login`,
            {
                "username": username,
                "password": password
            }, {
            headers: {}
        }).then((response) => {
            setCookie('JWT', response.data.access_token, { path: '/', sameSite: 'strict' });
        }).catch((error) => {
            console.log(error)
            setError(true);
        })
        // console.log(localStorage.getItem("name"));
        console.log(cookies);
    }

    return (
        <Screen center>
            <MyContainer>
                <Title>Log In</Title>
                <MyInput placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
                <MyInput placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                <div styles={{ flexDirection: 'row', width: '100%' }}>
                    <Button primary onClick={onLogin}>Login</Button>
                    <Button onClick={() => { navigate('/signup') }}>Go to Sign Up</Button>
                </div>
                {error && <SmallText>Wrong username or password</SmallText>}
            </MyContainer>
        </Screen>
    );
}

export default Login;