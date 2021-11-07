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
                    <SummaryItem title="Накладка осн. замка снаружи" value={order.baseCoverOutside}/>              
                    <SummaryItem title="Накладка осн. замка внутри" value={order.baseCoverInside}/>             
                    <SummaryItem title="Накладка осн. замка 2 (сув.) снаружи" value={order.baseCoverOutside2}/>            
                    <SummaryItem title="Накладка осн. замка 2 (сув.) внутри" value={order.baseCoverInside2}/>
                </Group>
                
                <Group>
                    <TitileGroup>Дополнительный замок</TitileGroup>
                    <SummaryItem title="Дополнительный замок" value={order.optionalLock}/> 
                    <SummaryItem title="Цилиндр дополнительного замка" value={order.optionalCylinder}/> 
                    <SummaryItem title="Накладка доп. замка снаружи" value={order.optionalCoverOutside}/>              
                    <SummaryItem title="Накладка доп. замка внутри" value={order.optionalCoverInside}/>   
                </Group>

                <Group>
                    <TitileGroup>Другая фурнитура</TitileGroup>
                    <SummaryItem title="Глазок" value={order.eye}/> 
                    <SummaryItem title="Расположение глазка" value={order.eyeLocation}/> 
                    <SummaryItem title="Ручка" value={order.handle}/>              
                    <SummaryItem title="Вертушок" value={order.spinner}/>
                </Group>
                
                <Group>
                    <TitileGroup>Наружная отделка</TitileGroup>
                    <SummaryItem title="Отделка / Тип панели" value={order.typeDecorationOutside}/>
                    <SummaryItem title="Элемент отделки / Фрезеровка" value={order.decorationOutside}/>                  
                    <SummaryItem title="Цвет пленки панели" value={order.wrapOutside}/>                  
                    <SummaryItem title="Патина на панели" value={order.patinaOutside}/>
                </Group> 

                <Group>
                    <TitileGroup>Внутренняя отделка</TitileGroup>
                    <SummaryItem title="Отделка / Тип панели" value={order.typeDecorationInside}/>                    
                    <SummaryItem title="Элемент отделки / Фрезеровка" value={order.decorationInside}/>                    
                    <SummaryItem title="Цвет пленки панели" value={order.wrapInside}/>                    
                    <SummaryItem title="Патина на панели" value={order.patinaInside}/>                    
                </Group>

                <Group>
                    <TitileGroup>Наличник</TitileGroup>
                    <SummaryItem title="Расположение наличника (внутр. откр.)" value={order.locationJumb}/>                     
                    <SummaryItem title="ШаблНаличникон" value={order.jamb}/>                     
                    <SummaryItem title="Цвет пленки наличника" value={order.jambWrap}/>                     
                </Group> 

                <Group>
                    <TitileGroup>Окно</TitileGroup>
                    <SummaryItem title="Тип окна" value={order.typeWindow}/>                     
                    <SummaryItem title="Окно" value={order.doorWindow}/>                     
                    <SummaryItem title="Цвет тонировки" value={order.colorTint}/>                     
                    <SummaryItem title="Цвет ковки" value={order.colorForge}/>                     
                    <SummaryItem title="Патина на ковке" value={order.patinaForge}/>                     
                    <SummaryItem title="Высота стеклопакета" value={order.heightWindow}/>                     
                    <SummaryItem title="Ширина стеклопакета" value={order.widthWindow}/>                     
                    <SummaryItem title="Толщина стеклопакета" value={order.thickWindow}/>                     
                </Group>

                <Group>
                    <TitileGroup>Опции</TitileGroup>
                    <SummaryItem title="Порог из нержавейки" value={order.isStainlessDoorStep ? "да" : "нет"}/>                     
                    <SummaryItem title="Уличная дверь" value={order.isStreetDoor ? "да" : "нет"}/>                     
                    <SummaryItem title="Эксцентрик" value={order.isEccentric ? "да" : "нет"}/>                     
                    <SummaryItem title="Задний лист" value={order.isBackSheet ? "да" : "нет"}/>                     
                    <SummaryItem title="Термокабель?" value={order.isDouble ? "да" : "нет"}/>                     
                    <SummaryItem title="Доводчик" value={order.isCloser ? "да" : "нет"}/>                     
                    <SummaryItem title="Усиление под довочик" value={order.isEnhanceCloser ? "да" : "нет"}/>                     
                    <SummaryItem title="Электромагнит?" value={order.isDouble ? "да" : "нет"}/>                     
                    <SummaryItem title="Подсветка?" value={order.isDouble ? "да" : "нет"}/>                     
                    <SummaryItem title="Уплотнитель?" value={order.isDouble ? "да" : "нет"}/>
                </Group>                                         
            </Items>
        </Container>
    )
}

export default SummaryInfo

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Items = styled.div`
    height: 75vh;
    overflow-x: hidden;
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