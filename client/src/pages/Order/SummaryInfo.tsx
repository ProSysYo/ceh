import React from 'react'
import styled from 'styled-components';
import SummaryItem from './SummaryItem';
import { useAppSelector } from '../../hooks/useAppSelector';

const SummaryInfo: React.FC = () => {
    const {
        order
    } = useAppSelector(state => state.order)

    return (
        <Container>
            <Title>Сводка</Title>
            <Items>
                <Group>
                    <TitileGroup>Основное</TitileGroup>
                    <SummaryItem title="Номер заказа" value={order.number}/>
                    <SummaryItem title="Заказчик" value={order.customer}/>
                    <SummaryItem title="Номер заказчика" value={order.numberCustomer}/>
                    <SummaryItem title="Партийность" value={order.party}/>               
                    <SummaryItem title="Количество дверей" value={order.countDoors}/>               
                    <SummaryItem title="Стоимость одной двери" value={order.costDoor}/>
                </Group>

                <Group>
                    <TitileGroup>Модель</TitileGroup>               
                    <SummaryItem title="Модель двери" value={order.model}/>               
                    <SummaryItem title="Количество контуров" value={order.contour}/>               
                    <SummaryItem title="Толщина двери" value={order.doorThick}/>               
                    <SummaryItem title="Высота двери" value={order.height}/>               
                    <SummaryItem title="Ширина двери" value={order.width}/>               
                    <SummaryItem title="Модель коробки" value={order.modelBox}/>               
                    <SummaryItem title="Тип открывания" value={order.openingType}/>               
                    <SummaryItem title="Двустворчатая" value={order.isDouble ? "да" : "нет"}/>               
                    <SummaryItem title="Ширина раб. створки" value={order.widthDouble}/>               
                    <SummaryItem title="Расположение петель" value={order.locationHinge}/>
                    <SummaryItem title="3 петли" value={order.isThreeHinge ? "да" : "нет"}/>
                    <SummaryItem title="Тип петель" value={order.typeHinge}/>              
                    <SummaryItem title="Толщина металла полотна" value={order.thickMetalLeaf}/>              
                    <SummaryItem title="Толщина металла короба" value={order.thickMetalBox}/>
                </Group>

                <Group>
                <TitileGroup>Основной замок</TitileGroup>
                    <SummaryItem title="Основной замок" value={order.baseLock}/>              
                    <SummaryItem title="Вертушок основного замка" value={order.lockSpinner}/>              
                    <SummaryItem title="Цилиндр основного замка" value={order.baseCylinder}/>              
                    <SummaryItem title="Накладка основного замка снаружи" value={order.baseCoverOutside}/>              
                    <SummaryItem title="Накладка основного замка внутри" value={order.baseCoverInside}/>             
                    <SummaryItem title="Накладка осн. замка 2 (сув.) снаружи" value={order.baseCoverOutside2}/>            
                    <SummaryItem title="Накладка осн. замка 2 (сув.) внутри" value={order.baseCoverInside2}/>
                </Group>           
            </Items>
        </Container>
    )
}

export default SummaryInfo

const Container = styled.div`
    
`;

const Title = styled.p`
    
`;

const Items = styled.div`

`;

const TitileGroup = styled.span`
    display: block;
    font-weight: bold;
    width: 100%;
    text-align:center;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    width: 100%;
    font-size: 11px;
    margin-bottom:10px;
    border: 1px solid #acafaf45;
    border-radius:3px;
    > * {
        margin-left: 5px;
    }    
`