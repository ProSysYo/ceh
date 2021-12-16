import React, { FC } from 'react';
import styled from 'styled-components';
import SummaryInfo from './SummaryInfo';



const Step7: FC = () => {
    return (
        <Container>
            <SummaryInfo/>            
        </Container>
    )
}

export default Step7

const Container = styled.div`   
    display: flex;        
`;

