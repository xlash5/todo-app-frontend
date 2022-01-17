import React from 'react';
import Title from './Title';
import Button from './Button';
import styled from 'styled-components';

const Task = ({ taskText, deleteAction }) => {
    const Row = styled.div`
    display: flex;
    /* flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center; */
    justify-content: space-between;
    width: 100%;
    `;
    return (
        <Row>
            <Title>{taskText}</Title>
            <Button primary onClick={deleteAction}>DELETE</Button>
        </Row>
    );
}

export default Task;
