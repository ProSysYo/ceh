import React, { FC } from 'react';
import styled from 'styled-components';
import SummaryInfo from './SummaryInfo';



const Step9: FC = () => {
    return (
        <Container>
            <SummaryInfo/>            
        </Container>
    )
}

export default Step9

const Container = styled.div`   
    display: flex;        
`;

