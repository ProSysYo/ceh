import React, {FC} from 'react'
import styled from 'styled-components';

import { useAppSelector } from '../../hooks/useAppSelector';

const Group: FC<{ title: string }> = ({ title, children }) => {
    return (
        <Rows>
            <Title>{title}</Title>
            {children}
        </Rows>
    )
}

const Rows = styled.div`    
    width: 450px;    
    display: flex;
    flex-direction: column;     
`;
const Title = styled.div`
    font-size: 16px;
    padding-left: 10px;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    font-weight: 700;        
`;

const Row: FC<{ title: string, value: any }> = ({ title, value }) => {
    return (
        <RowGroup>
            <RowTitle>{title}</RowTitle>
            <RowValue>{value}</RowValue>
        </RowGroup>
    )

}
const RowGroup = styled.div`
    display: flex;
    width: 100%;         
`;

const RowTitle = styled.div`
    font-size: 12px;
    width: 50%;
    padding: 1px 10px;    
    border-left: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;       
    border-right: 1px solid #f0f0f0;       
`;

const RowValue = styled.div`
    font-size: 12px;
    width: 50%;
    padding: 1px 10px; 
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    background-color: #fcfafa;      
`;
const SummaryInfo: React.FC = () => {
    const { currentOrder } = useAppSelector(state => state.order)

    return (
        <Container>
            <Column>
                <Group title="Основное">
                    <Row title="Заказчика" value={currentOrder.customer} />
                    <Row title="Номер заказчика" value={currentOrder.numberCustomer} />
                    <Row title="Номер заказа" value={currentOrder.number} />
                    <Row title="Партийность" value={currentOrder.party} />
                    <Row title="Упаковка" value={currentOrder.packaging} />
                    <Row title="Количество дверей" value={currentOrder.countDoors} />
                    <Row title="Стоимость одной двери" value={currentOrder.costDoor} />
                    <Row title="Примечание" value={currentOrder.note} />
                </Group>
                <Group title="Конфигурация модели">
                    <Row title="Модель двери" value={currentOrder.model} />                    
                    <Row title="Толщина полотна" value={currentOrder.doorThick} />
                    <Row title="Модель коробки" value={currentOrder.modelBox} />
                    <Row title="Высота двери" value={currentOrder.height} />
                    <Row title="Ширина двери" value={currentOrder.width} />
                    <Row title="Ширина раб. створки" value={currentOrder.widthDouble} />
                    <Row title="Уплотнитель" value={currentOrder.sealer} />
                    <Row title="Цвет покраски двери" value={currentOrder.colorDoor} />
                    <Row title="Располож. налич. (внутр. откр.)" value={currentOrder.locationJumb} />
                </Group>
                <Group title="Петли">
                    <Row title="Расположение петель" value={currentOrder.locationHinge} />
                    <Row title="Тип петель" value={currentOrder.typeHinge} />
                    <Row title="Количество петель" value={currentOrder.countHinge} />
                </Group>
                <Group title="Толщина металла">
                    <Row title="Толщина металла полотна" value={currentOrder.thickMetalLeaf} />
                    <Row title="Толщина металла короба" value={currentOrder.thickMetalBox} />
                </Group>
                <Group title="Крепление">
                    <Row title="Уши" value={currentOrder.ear} />
                    <Row title="Отверстия в коробе" value={currentOrder.holeInBox} />
                </Group>                
            </Column>
            <Column>
                <Group title="Основной замок">
                    <Row title="Основной замок" value={currentOrder.baseLock} />
                    <Row title="Цилиндр" value={currentOrder.baseCylinder} />
                    <Row title="Вертушок замка"
                        value={currentOrder.lockSpinner + ((currentOrder.lockSpinnerColor !== "нет") ? " " + currentOrder.lockSpinnerColor : "")}
                    />
                    <Row title="Накладка осн. снаружи"
                        value={currentOrder.baseCoverOutside + ((currentOrder.baseCoverColorOutside !== "нет") ? " " + currentOrder.baseCoverColorOutside : "")}
                    />
                    <Row title="Накладка осн. внутри"
                        value={currentOrder.baseCoverInside + ((currentOrder.baseCoverColorInside !== "нет") ? " " + currentOrder.baseCoverColorInside : "")}
                    />
                    <Row title="Накладка осн. снаружи 2"
                        value={currentOrder.baseCoverOutside2 + ((currentOrder.baseCoverColorOutside2 !== "нет") ? " " + currentOrder.baseCoverColorOutside2 : "")}
                    />
                    <Row title="Накладка осн. внутри 2"
                        value={currentOrder.baseCoverInside2 + ((currentOrder.baseCoverColorInside2 !== "нет") ? " " + currentOrder.baseCoverColorInside2 : "")}
                    />
                </Group>
                <Group title="Дополнительный замок">
                    <Row title="Дополнительный замок" value={currentOrder.optionalLock} />
                    <Row title="Цилиндр дополнительного замка" value={currentOrder.optionalCylinder} />
                    <Row title="Накладка доп. снаружи"
                        value={currentOrder.optionalCoverOutside + ((currentOrder.optionalCoverColorOutside !== "нет") ? " " + currentOrder.optionalCoverColorOutside : "")}
                    />
                    <Row title="Накладка доп. внутри"
                        value={currentOrder.optionalCoverInside + ((currentOrder.optionalCoverColorInside !== "нет") ? " " + currentOrder.optionalCoverColorInside : "")}
                    />
                </Group>
                <Group title="Другая фурнитура">
                    <Row title="Глазок"
                        value={currentOrder.eye + ((currentOrder.colorEye !== "нет") ? " " + currentOrder.colorEye : "")}
                    />
                    <Row title="Ручка"
                        value={currentOrder.handle + ((currentOrder.handleColor !== "нет") ? " " + currentOrder.handleColor : "")}
                    />
                    <Row title="Вертушок"
                        value={currentOrder.spinner + ((currentOrder.spinnerColor !== "нет") ? " " + currentOrder.spinnerColor : "")}
                    />
                </Group>
                <Group title="Наружная отделка">
                    <Row title="Отделка / Тип панели" value={currentOrder.typeDecorationOutside} />
                    <Row title="Элемент отделки / Фрезеровка" value={currentOrder.decorationOutside} />
                    <Row title="Цвет пленки панели" value={currentOrder.wrapOutside} />
                    <Row title="Патина на панели" value={currentOrder.patinaOutside} />
                </Group>
                <Group title="Внутренняя отделка">
                    <Row title="Отделка / Тип панели" value={currentOrder.typeDecorationInside} />
                    <Row title="Элемент отделки / Фрезеровка" value={currentOrder.decorationInside} />
                    <Row title="Цвет пленки панели" value={currentOrder.wrapInside} />
                    <Row title="Патина на панели" value={currentOrder.patinaInside} />
                </Group>
                <Group title="Наличник">                    
                    <Row title="Наличник" value={currentOrder.jamb} />
                    <Row title="Цвет пленки наличника" value={currentOrder.jambWrap} />
                </Group>                               
            </Column>
            <Column>
                <Group title="Окно">
                    <Row title="Тип окна" value={currentOrder.typeWindow} />
                    <Row title="Окно" value={currentOrder.doorWindow} />
                    <Row title="Цвет тонировки" value={currentOrder.colorTint} />
                    <Row title="Цвет ковки" value={currentOrder.colorForge} />
                    <Row title="Патина на ковке" value={currentOrder.patinaForge} />
                    <Row title="Высота стеклопакета" value={currentOrder.heightWindow} />
                    <Row title="Ширина стеклопакета" value={currentOrder.widthWindow} />
                    <Row title="Толщина стеклопакета" value={currentOrder.thickWindow} />
                </Group>                
                <Group title="Опции">
                    <Row title="Порог из нержавейки" value={currentOrder.isStainlessDoorStep ? "да" : "нет"} />
                    <Row title="Эксцентрик" value={currentOrder.isEccentric ? "да" : "нет"} />
                    <Row title="Задний лист" value={currentOrder.isBackSheet ? "да" : "нет"} />
                    <Row title="Термокабель" value={currentOrder.isTermoCable ? "да" : "нет"} />
                    <Row title="Доводчик" value={currentOrder.isCloser ? "да" : "нет"} />
                    <Row title="Усиление под довочик" value={currentOrder.isEnhanceCloser ? "да" : "нет"} />
                    <Row title="Электромагнит" value={currentOrder.isElectromagnet ? "да" : "нет"} />
                    <Row title="Подсветка" value={currentOrder.isIllumination ? "да" : "нет"} />
                    <Row title="Шумоизоляция" value={currentOrder.isNoise ? "да" : "нет"} />
                </Group>
            </Column>
        </Container>

    )
}

export default SummaryInfo

const Container = styled.div`   
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;    
`;

const Column = styled.div`   
    display: flex;
    flex-direction: column;
    margin: 5px;     
`;