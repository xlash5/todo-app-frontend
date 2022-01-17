import React, { useState, useEffect } from 'react';
import myApi from '../../constants/myApi';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import Screen from '../../components/Screen'
import MyContainer from '../../components/MyContainer';
import MyInput from '../../components/MyInput';
import Button from '../../components/Button';
import Task from '../../components/Task';
import Title from '../../components/Title';

const TodoList = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [userData, setUserData] = useState({});
    const [todoList, setTodoList] = useState({})
    const [newTask, setNewTask] = useState('');
    const navigate = useNavigate();

    const onLoad = () => {
        myApi.get(`/user`, {
            headers: {
                'Authorization': `Bearer ${cookies.JWT}`
            }
        }).then((response) => {
            setUserData(response.data)
            myApi.get(`/task`, { headers: { 'Authorization': `Bearer ${cookies.JWT}` } }).then((res) => {
                setTodoList(res.data)
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
            navigate('/');
        })
        // console.log(localStorage.getItem("name"));
        console.log(cookies);
    }
    useEffect(() => {
        onLoad();
    }, [cookies.JWT])

    const deleteTask = (taskId) => {
        myApi.post('/delete_task',
            { "task_id": taskId },
            {
                headers: {
                    'Authorization': `Bearer ${cookies.JWT}`,
                }
            }).then((res) => {
                console.log(res.data);
                onLoad();
            }).catch((error) => {
                console.log(error);
            })

    }

    const addTask = () => {
        myApi.post('/task',
            { "task_text": newTask },
            {
                headers: {
                    'Authorization': `Bearer ${cookies.JWT}`,
                }
            }).then((res) => {
                console.log(res.data);
                onLoad();
            }).catch((error) => {
                console.log(error);
            })

        setNewTask('');
    }

    const logOut = () => {
        removeCookie('JWT');
        navigate('/');
    }

    return (
        <Screen center>
            <MyContainer height="auto" width="60%" >
                {todoList.tasks && todoList.tasks.map((e, index) => {
                    return <Task
                        key={e.id}
                        taskText={e.task_text}
                        deleteAction={() => { deleteTask(e.id) }}
                    />
                })}
                <MyInput value={newTask} placeholder="task" width="60%" type="text" onChange={e => { setNewTask(e.target.value) }} />
                <Button primary onClick={addTask}>ADD</Button>
                <Button primary onClick={logOut}>LOG OUT</Button>
            </MyContainer>
        </Screen>
    );
}

export default TodoList;