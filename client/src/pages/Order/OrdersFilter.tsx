import React, { useState} from 'react'
import styled from 'styled-components';
import { FunnelPlotOutlined, ClearOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchAll, getOrders } from '../../store/actions/orderActions';
import { Button, Collapse, Form, Input, InputNumber } from 'antd';
import Select from '../../components/Select';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { IOrder } from '../../../../server/dist/interfaces/IOrder';
const {Item} = Form
const { Panel } = Collapse

const doorThicks = [
    {value: 60, name: 60},
    {value: 70, name: 70},
    {value: 80, name: 80},
    {value: 90, name: 90},
    {value: 100, name: 100},
]

const MyItem: React.FC<{ fieldName: keyof IOrder, valuePropName?: string}> = ({fieldName, valuePropName, children}) => {
    return <Item name={fieldName} valuePropName={valuePropName} >{ children }</Item>
}

const OrdersFilter: React.FC = () => {
    const [filters, setFilters] = useState({})
    const [form] = Form.useForm();

    const dispatch = useAppDispatch()
    const { staticTables } = useAppSelector(state => state.order)

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    const handleInputChange = (value: any) => {       
        for ( var prop in value ) {
            if (value[prop] === "") {
                value[prop] = null
            }
        }        
         setFilters((prev) => ({ ...prev, ...value })) 
    }
    
    const loadByFilter  = () => {
        console.log(filters);
        
        dispatch(getOrders(filters))        
    }

    const resetFilters = () => {        
        form.resetFields()
        setFilters({})
    }  

    return (
        <Container>
            <Filters>
                <Form form={form} onValuesChange={(val) => handleInputChange(val)}>
                    <Collapse  bordered={false} accordion ghost>                        
                        <Panel header="Заказ" key="1">
                            <MyItem fieldName="number" ><Input placeholder="Номер заказа" /></MyItem>                            
                            <MyItem fieldName="customer"><Select items={staticTables.customers} placeholder="Заказчик"/></MyItem>                            
                            <MyItem fieldName="numberCustomer"><Input placeholder="Номер заказчика"/></MyItem>
                            <MyItem fieldName="party"><Select items={staticTables.parties} placeholder="Партийность"/></MyItem>
                            <MyItem fieldName="packaging"><Select items={staticTables.packagings} placeholder="Упаковка"/></MyItem>
                        </Panel>
                        
                        <Panel header="Модель" key="2">                        
                            <MyItem fieldName="model"><Select items={staticTables.models} placeholder="Модель двери"/></MyItem>
                            <MyItem fieldName="doorThick"><Select items={doorThicks} placeholder="Толщина двери"/></MyItem>
                            <MyItem fieldName="modelBox"><Select items={staticTables.modelBoxes} placeholder="Модель коробки"/></MyItem>
                            <MyItem fieldName="locationJumb" ><Select items={staticTables.locationJambs} placeholder="Наличник (внутр. откр.)"/></MyItem>                            
                            <MyItem fieldName="sealer" ><Select items={staticTables.sealers} placeholder="Уплотнитель"/></MyItem>                            
                            <MyItem fieldName="colorDoor" ><Select items={staticTables.colorDoors} placeholder="Цвет покраски"/></MyItem>                            
                            <MyItem fieldName="height"><InputNumber placeholder="Высота двери" style={{ width: 200 }}/></MyItem>
                            <MyItem fieldName="width" ><InputNumber placeholder="Ширина двери" style={{ width: 200 }}/></MyItem>
                            <MyItem fieldName="widthDouble"><InputNumber placeholder="Ширина доп. створки" style={{ width: 200 }}/></MyItem>
                        </Panel>

                        <Panel header="Петли" key="3">                        
                            <MyItem fieldName="locationHinge"><Select items={staticTables.locationHinges} placeholder="Расположение петель"/></MyItem>
                            <MyItem fieldName="typeHinge"><Select items={staticTables.typeHinges} placeholder="Тип петель"/></MyItem>
                            <MyItem fieldName="countHinge"><Select items={staticTables.hingeCounts} placeholder="Количество петель"/></MyItem>
                        </Panel>

                        <Panel header="Толщина металла" key="4">                        
                            <MyItem fieldName="thickMetalLeaf"><Select items={staticTables.thickMetalLeafs} placeholder="Т металла полотна"/></MyItem>
                            <MyItem fieldName="thickMetalBox"><Select items={staticTables.thickMetalBoxes} placeholder="Т металла короба"/></MyItem>
                        </Panel>

                        <Panel header="Крепление" key="5">                        
                            <MyItem fieldName="ear"><Select items={staticTables.ears} placeholder="Уши"/></MyItem>
                            <MyItem fieldName="holeInBox"><Select items={staticTables.holeInBoxes} placeholder="Отверстия в коробе"/></MyItem>
                        </Panel>

                        <Panel header="Основной замок" key="6">                            
                            <MyItem fieldName="baseLock"><Select items={staticTables.baseLocks} placeholder="Основной замок"/></MyItem>
                            <MyItem fieldName="baseCoverOutside"><Select items={staticTables.covers} placeholder="Накладка снаружи"/></MyItem>
                            <MyItem fieldName="baseCoverInside"><Select items={staticTables.covers} placeholder="Накладка внутри"/></MyItem>
                        </Panel>

                        <Panel header="Дополнительный замок" key="7">                        
                            <MyItem fieldName="optionalLock"><Select items={staticTables.optionalLocks} placeholder="Доп. замок"/></MyItem>                            
                            <MyItem fieldName="optionalCoverOutside"><Select items={staticTables.covers} placeholder="Накладка снаружи"/></MyItem>
                            <MyItem fieldName="optionalCoverInside"><Select items={staticTables.covers} placeholder="Накладка внутри"/></MyItem>
                        </Panel>

                        <Panel header="Другая фурнитура" key="8">
                            <MyItem fieldName="eye" ><Select items={staticTables.eyes} placeholder="Глазок"/></MyItem>
                            <MyItem fieldName="handle" ><Select items={staticTables.handles} placeholder="Ручка"/></MyItem>
                            <MyItem fieldName="spinner" ><Select items={staticTables.spinners} placeholder="Вертушок"/></MyItem>
                        </Panel>

                        <Panel header="Отделка снаружи" key="9">                        
                            <MyItem fieldName="typeDecorationOutside" ><Select items={staticTables.typeDecorations} placeholder="Отделка / Тип панели"/></MyItem>
                            <MyItem fieldName="decorationOutside" ><Select items={staticTables.decorations} placeholder="Эл. отделки / Фрезеровка"/></MyItem>
                            <MyItem fieldName="wrapOutside" ><Select items={staticTables.wraps} placeholder="Цвет пленки панели"/></MyItem>
                            <MyItem fieldName="patinaOutside" ><Select items={staticTables.patinas} placeholder="Цвет патины панели"/></MyItem>
                        </Panel>

                        <Panel header="Внутренняя отделка" key="10">                        
                            <MyItem fieldName="typeDecorationInside" ><Select items={staticTables.typeDecorations} placeholder="Отделка / Тип панели"/></MyItem>
                            <MyItem fieldName="decorationInside" ><Select items={staticTables.decorations} placeholder="Эл. отделки / Фрезеровка"/></MyItem>
                            <MyItem fieldName="wrapInside" ><Select items={staticTables.wraps} placeholder="Цвет пленки панели"/></MyItem>
                            <MyItem fieldName="patinaInside" ><Select items={staticTables.patinas} placeholder="Цвет патины панели"/></MyItem>
                        </Panel>

                        <Panel header="Наличник" key="11">
                            <MyItem fieldName="jamb" ><Select items={staticTables.jambs} placeholder="Наличник"/></MyItem>
                            <MyItem fieldName="jambWrap" ><Select items={staticTables.wraps} placeholder="Цвет пленки наличника"/></MyItem>                           
                        </Panel>

                        <Panel header="Окно" key="12">                        
                            <MyItem fieldName="typeWindow"><Select items={staticTables.typeWindows} placeholder="Тип окна"/></MyItem>                           
                            <MyItem fieldName="doorWindow"><Select items={staticTables.windows} placeholder="Окно"/></MyItem>
                            <MyItem fieldName="colorTint"><Select items={staticTables.colorTints} placeholder="Цвет тонировки"/></MyItem>
                            <MyItem fieldName="colorForge"><Select items={staticTables.colorForges} placeholder="Цвет ковки"/></MyItem>
                            <MyItem fieldName="patinaForge"><Select items={staticTables.patinaForges} placeholder="Патина на ковке"/></MyItem>
                            <MyItem fieldName="heightWindow"><InputNumber placeholder="Высота стеклопакета" style={{ width: 200 }}/></MyItem>
                            <MyItem fieldName="widthWindow" ><InputNumber placeholder="Ширина стеклопакета" style={{ width: 200 }}/></MyItem>
                            <MyItem fieldName="thickWindow"><InputNumber placeholder="Толщина стеклопакета" style={{ width: 200 }}/></MyItem>
                        </Panel>

                        <Panel header="Опции" key="13">
                            <MyItem fieldName="isStainlessDoorStep" valuePropName="checked"><Checkbox>Порог из нержавейки</Checkbox></MyItem>                            
                            <MyItem fieldName="isEccentric" valuePropName="checked"><Checkbox>Эксцентрик</Checkbox></MyItem>
                            <MyItem fieldName="isBackSheet" valuePropName="checked"><Checkbox>Задний лист</Checkbox></MyItem>
                            <MyItem fieldName="isTermoCable" valuePropName="checked"><Checkbox>Термокабель</Checkbox></MyItem>
                            <MyItem fieldName="isCloser" valuePropName="checked"><Checkbox>Доводчик</Checkbox></MyItem>
                            <MyItem fieldName="isEnhanceCloser" valuePropName="checked"><Checkbox>Усиление под довочик</Checkbox></MyItem>
                            <MyItem fieldName="isElectromagnet" valuePropName="checked"><Checkbox>Электромагнит</Checkbox></MyItem>
                            <MyItem fieldName="isIllumination" valuePropName="checked"><Checkbox>Подсветка</Checkbox></MyItem>                                                       
                            <MyItem fieldName="isNoise" valuePropName="checked"><Checkbox>Шумоизоляция</Checkbox></MyItem>                                                       
                        </Panel>
                    </Collapse>
                </Form>  
            </Filters>
            
            <div>
                <Button icon={<FunnelPlotOutlined />}  onClick={loadByFilter}>Загрузить</Button>
                <Button icon={<ClearOutlined />} onClick={resetFilters}>Сброс</Button>
            </div>
        </Container>

    )
}

export default OrdersFilter

const Filters = styled.div`
    height: 92%;        
    overflow-x: hidden;    
`;

const Container = styled.div`
    height: 85vh;   
`;