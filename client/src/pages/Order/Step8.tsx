import React, { FC } from 'react';
import styled from 'styled-components';
import SummaryInfo from './SummaryInfo';



const Step8: FC = () => {
    return (
        <Container>
            <SummaryInfo/>            
        </Container>
    )
}

export default Step8

const Container = styled.div`   
    display: flex;        
`;

