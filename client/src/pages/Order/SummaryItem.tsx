import React from 'react'
import styled from 'styled-components';

interface IProp {
    title: string;
    value: any;
}

const SummaryItem: React.FC<IProp> = ({title, value}) => {
    return (
        <div>
            <Title value={value}>{title}: </Title><Value>{value}</Value>
        </div>
    )
}

export default SummaryItem

const Title = styled.label<{value: any}>`
    font-size: 12px;
    transition: 0.5s linear;
    color: ${props => (props.value ? 'black' : '#6b6d6d45')}; 
`;

const Value = styled.label`
    font-size: 12px;
    margin-left: 5px;    
`;