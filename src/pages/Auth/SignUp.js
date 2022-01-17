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

import Palette from '../../constants/Palette';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
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

    const onSignup = () => {
        if (password !== repeatPassword) {
            setError(true);
            return
        }
        myApi.post(`/register`,
            {
                "username": username,
                "password": password,
                "mail": mail,
                "full_name": fullName
            }, {
            headers: {}
        }).then((response) => {
            if (response.data.message) {
                myApi.post(`/login`,
                    {
                        "username": username,
                        "password": password
                    }, {
                    headers: {}
                }).then((res) => {
                    setCookie('JWT', res.data.access_token, { path: '/', sameSite: 'strict' });
                }).catch((error) => {
                    console.log(error)
                    setError(true);
                })
            }
        }).catch((error) => {
            console.log(error)
            setError(true);
        })
        // console.log(localStorage.getItem("name"));
        console.log(cookies);
    }

    return (
        <Screen center>
            <MyContainer height="52%">
                <Title>Sign Up</Title>
                <MyInput placeholder="full name" type="text" onChange={e => setFullName(e.target.value)} />
                <MyInput placeholder="name@mail.com" type="text" onChange={e => setMail(e.target.value)} />
                <MyInput placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
                <MyInput placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                <MyInput placeholder="password repeat" type="password" onChange={e => setRepeatPassword(e.target.value)} />
                <div styles={{ flexDirection: 'row', width: '100%' }}>
                    <Button primary onClick={onSignup}>Sign Up</Button>
                    <Button onClick={() => { navigate('/') }}>Go to Log In</Button>
                </div>
                {error && <SmallText>Something went wrong</SmallText>}
            </MyContainer>
        </Screen>
    );
}

export default SignUp;
