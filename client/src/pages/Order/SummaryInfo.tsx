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
    const {
        order
    } = useAppSelector(state => state.order)

    return (
        <Container>
            <Column>
                <Group title="Основное">
                    <Row title="Заказчика" value={order.customer} />
                    <Row title="Номер заказа" value={order.number} />
                    <Row title="Партийность" value={order.party} />
                    <Row title="Количество дверей" value={order.countDoors} />
                    <Row title="Стоимость одной двери" value={order.costDoor} />
                    <Row title="Примечание" value={order.note} />
                </Group>
                <Group title="Конфигурация модели">
                    <Row title="Модель двери" value={order.model} />                    
                    <Row title="Толщина полотна" value={order.doorThick} />
                    <Row title="Модель коробки" value={order.modelBox} />
                    <Row title="Высота двери" value={order.height} />
                    <Row title="Ширина двери" value={order.width} />
                    <Row title="Ширина раб. створки" value={order.widthDouble} />
                    <Row title="Уплотнитель" value={order.sealer} />
                    <Row title="Располож. налич. (внутр. откр.)" value={order.locationJumb} />
                </Group>
                <Group title="Петли">
                    <Row title="Расположение петель" value={order.locationHinge} />
                    <Row title="Тип петель" value={order.typeHinge} />
                    <Row title="Количество петель" value={order.countHinge} />
                </Group>
                <Group title="Толщина металла">
                    <Row title="Толщина металла полотна" value={order.thickMetalLeaf} />
                    <Row title="Толщина металла короба" value={order.thickMetalBox} />
                </Group>
                <Group title="Основной замок">
                    <Row title="Основной замок" value={order.baseLock} />
                    <Row title="Цилиндр" value={order.baseCylinder} />
                    <Row title="Вертушок замка"
                        value={order.lockSpinner + ((order.lockSpinnerColor !== "нет") ? " " + order.lockSpinnerColor : "")}
                    />
                    <Row title="Накладка осн. снаружи"
                        value={order.baseCoverOutside + ((order.baseCoverColorOutside !== "нет") ? " " + order.baseCoverColorOutside : "")}
                    />
                    <Row title="Накладка осн. внутри"
                        value={order.baseCoverInside + ((order.baseCoverColorInside !== "нет") ? " " + order.baseCoverColorInside : "")}
                    />
                    <Row title="Накладка осн. снаружи 2"
                        value={order.baseCoverOutside2 + ((order.baseCoverColorOutside2 !== "нет") ? " " + order.baseCoverColorOutside2 : "")}
                    />
                    <Row title="Накладка осн. внутри 2"
                        value={order.baseCoverInside2 + ((order.baseCoverColorInside2 !== "нет") ? " " + order.baseCoverColorInside2 : "")}
                    />
                </Group>
            </Column>
            <Column>
                <Group title="Дополнительный замок">
                    <Row title="Дополнительный замок" value={order.optionalLock} />
                    <Row title="Цилиндр дополнительного замка" value={order.optionalCylinder} />
                    <Row title="Накладка доп. снаружи"
                        value={order.optionalCoverOutside + ((order.optionalCoverColorOutside !== "нет") ? " " + order.optionalCoverColorOutside : "")}
                    />
                    <Row title="Накладка доп. внутри"
                        value={order.optionalCoverInside + ((order.optionalCoverColorInside !== "нет") ? " " + order.optionalCoverColorInside : "")}
                    />
                </Group>
                <Group title="Другая фурнитура">
                    <Row title="Глазок"
                        value={order.eye + ((order.colorEye !== "нет") ? " " + order.colorEye : "")}
                    />
                    <Row title="Ручка"
                        value={order.handle + ((order.handleColor !== "нет") ? " " + order.handleColor : "")}
                    />
                    <Row title="Вертушок"
                        value={order.spinner + ((order.spinnerColor !== "нет") ? " " + order.spinnerColor : "")}
                    />
                </Group>
                <Group title="Наружная отделка">
                    <Row title="Отделка / Тип панели" value={order.typeDecorationOutside} />
                    <Row title="Элемент отделки / Фрезеровка" value={order.decorationOutside} />
                    <Row title="Цвет пленки панели" value={order.wrapOutside} />
                    <Row title="Патина на панели" value={order.patinaOutside} />
                </Group>
                <Group title="Внутренняя отделка">
                    <Row title="Отделка / Тип панели" value={order.typeDecorationInside} />
                    <Row title="Элемент отделки / Фрезеровка" value={order.decorationInside} />
                    <Row title="Цвет пленки панели" value={order.wrapInside} />
                    <Row title="Патина на панели" value={order.patinaInside} />
                </Group>
                <Group title="Наличник">                    
                    <Row title="Наличник" value={order.jamb} />
                    <Row title="Цвет пленки наличника" value={order.jambWrap} />
                </Group>
                <Group title="Окно">
                    <Row title="Тип окна" value={order.typeWindow} />
                    <Row title="Окно" value={order.doorWindow} />
                    <Row title="Цвет тонировки" value={order.colorTint} />
                    <Row title="Цвет ковки" value={order.colorForge} />
                    <Row title="Патина на ковке" value={order.patinaForge} />
                    <Row title="Высота стеклопакета" value={order.heightWindow} />
                    <Row title="Ширина стеклопакета" value={order.widthWindow} />
                    <Row title="Толщина стеклопакета" value={order.thickWindow} />
                </Group>               
            </Column>
            <Column>                
                <Group title="Опции">
                    <Row title="Порог из нержавейки" value={order.isStainlessDoorStep ? "да" : "нет"} />
                    <Row title="Эксцентрик" value={order.isEccentric ? "да" : "нет"} />
                    <Row title="Задний лист" value={order.isBackSheet ? "да" : "нет"} />
                    <Row title="Термокабель" value={order.isTermoCable ? "да" : "нет"} />
                    <Row title="Доводчик" value={order.isCloser ? "да" : "нет"} />
                    <Row title="Усиление под довочик" value={order.isEnhanceCloser ? "да" : "нет"} />
                    <Row title="Электромагнит" value={order.isElectromagnet ? "да" : "нет"} />
                    <Row title="Подсветка" value={order.isIllumination ? "да" : "нет"} />
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