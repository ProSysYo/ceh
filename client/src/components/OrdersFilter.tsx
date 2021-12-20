import React, { useState} from 'react'
import styled from 'styled-components';
import { FunnelPlotOutlined, ClearOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchAll, getOrders } from '../store/actions/orderActions';
import { Button, Collapse, Form, Input, InputNumber } from 'antd';
import Select from './Select';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const {Item} = Form
const { Panel } = Collapse

const doorThicks = [
    {value: 60, name: 60},
    {value: 70, name: 70},
    {value: 80, name: 80},
    {value: 90, name: 90},
    {value: 100, name: 100},
]

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
                            <Item name="number" ><Input placeholder="Номер заказа" /></Item>                    
                            <Item name="customer"><Select items={staticTables.customers} placeholder="Заказчик"/></Item>
                            <Item name="numberCustomer"><Input placeholder="Номер заказчика"/></Item>
                            <Item name="party"><Select items={staticTables.parties} placeholder="Партийность"/></Item>
                        </Panel>
                        
                        <Panel header="Модель" key="2">                        
                            <Item name="model"><Select items={staticTables.models} placeholder="Модель двери"/></Item>
                            <Item name="doorThick"><Select items={doorThicks} placeholder="Толщина двери"/></Item>
                            <Item name="modelBox"><Select items={staticTables.modelBoxes} placeholder="Модель коробки"/></Item>
                            <Item name="locationJumb" ><Select items={staticTables.locationJambs} placeholder="Наличника (внутр. откр.)"/></Item>                            
                            <Item name="height"><InputNumber placeholder="Высота двери" style={{ width: 200 }}/></Item>
                            <Item name="width" ><InputNumber placeholder="Ширина двери" style={{ width: 200 }}/></Item>
                            <Item name="widthDouble"><InputNumber placeholder="Ширина доп. створки" style={{ width: 200 }}/></Item>
                        </Panel>

                        <Panel header="Петли" key="3">                        
                            <Item name="locationHinge"><Select items={staticTables.locationHinges} placeholder="Расположение петель"/></Item>
                            <Item name="typeHinge"><Select items={staticTables.typeHinges} placeholder="Тип петель"/></Item>
                            <Item name="countHinge"><Select items={staticTables.hingeCounts} placeholder="Количество петель"/></Item>
                        </Panel>

                        <Panel header="Толщина металла" key="4">                        
                            <Item name="thickMetalLeaf"><Select items={staticTables.thickMetalLeafs} placeholder="Т металла полотна"/></Item>
                            <Item name="thickMetalBox"><Select items={staticTables.thickMetalBoxes} placeholder="Т металла короба"/></Item>
                        </Panel>

                        <Panel header="Основной замок" key="5">                            
                            <Item name="baseLock"><Select items={staticTables.baseLocks} placeholder="Основной замок"/></Item>
                            <Item name="baseCoverOutside"><Select items={staticTables.covers} placeholder="Накладка снаружи"/></Item>
                            <Item name="baseCoverInside"><Select items={staticTables.covers} placeholder="Накладка внутри"/></Item>
                        </Panel>

                        <Panel header="Дополнительный замок" key="6">                        
                            <Item name="optionalLock"><Select items={staticTables.optionalLocks} placeholder="Доп. замок"/></Item>                            
                            <Item name="optionalCoverOutside"><Select items={staticTables.covers} placeholder="Накладка снаружи"/></Item>
                            <Item name="optionalCoverInside"><Select items={staticTables.covers} placeholder="Накладка внутри"/></Item>
                        </Panel>

                        <Panel header="Другая фурнитура" key="7">
                            <Item name="eye" ><Select items={staticTables.eyes} placeholder="Глазок"/></Item>
                            <Item name="handle" ><Select items={staticTables.handles} placeholder="Ручка"/></Item>
                            <Item name="spinner" ><Select items={staticTables.spinners} placeholder="Вертушок"/></Item>
                        </Panel>

                        <Panel header="Отделка снаружи" key="8">                        
                            <Item name="typeDecorationOutside" ><Select items={staticTables.typeDecorations} placeholder="Отделка / Тип панели"/></Item>
                            <Item name="decorationOutside" ><Select items={staticTables.decorations} placeholder="Эл. отделки / Фрезеровка"/></Item>
                            <Item name="wrapOutside" ><Select items={staticTables.wraps} placeholder="Цвет пленки панели"/></Item>
                            <Item name="patinaOutside" ><Select items={staticTables.patinas} placeholder="Цвет патины панели"/></Item>
                        </Panel>

                        <Panel header="Внутренняя отделка" key="9">                        
                            <Item name="typeDecorationInside" ><Select items={staticTables.typeDecorations} placeholder="Отделка / Тип панели"/></Item>
                            <Item name="decorationInside" ><Select items={staticTables.decorations} placeholder="Эл. отделки / Фрезеровка"/></Item>
                            <Item name="wrapInside" ><Select items={staticTables.wraps} placeholder="Цвет пленки панели"/></Item>
                            <Item name="patinaInside" ><Select items={staticTables.patinas} placeholder="Цвет патины панели"/></Item>
                        </Panel>

                        <Panel header="Наличник" key="10">
                            <Item name="jamb" ><Select items={staticTables.jambs} placeholder="Наличник"/></Item>
                            <Item name="jambWrap" ><Select items={staticTables.wraps} placeholder="Цвет пленки наличника"/></Item>                           
                        </Panel>

                        <Panel header="Окно" key="11">                        
                            <Item name="typeWindow"><Select items={staticTables.typeWindows} placeholder="Тип окна"/></Item>                           
                            <Item name="doorWindow"><Select items={staticTables.windows} placeholder="Окно"/></Item>
                            <Item name="colorTint"><Select items={staticTables.colorTints} placeholder="Цвет тонировки"/></Item>
                            <Item name="colorForge"><Select items={staticTables.colorForges} placeholder="Цвет ковки"/></Item>
                            <Item name="patinaForge"><Select items={staticTables.patinaForges} placeholder="Патина на ковке"/></Item>
                            <Item name="heightWindow"><InputNumber placeholder="Высота стеклопакета" style={{ width: 200 }}/></Item>
                            <Item name="widthWindow" ><InputNumber placeholder="Ширина стеклопакета" style={{ width: 200 }}/></Item>
                            <Item name="thickWindow"><InputNumber placeholder="Толщина стеклопакета" style={{ width: 200 }}/></Item>
                        </Panel>

                        <Panel header="Опции" key="12">
                            <Item name="isStainlessDoorStep" valuePropName="checked"><Checkbox>Порог из нержавейки</Checkbox></Item>
                            <Item name="isStreetDoor" valuePropName="checked"><Checkbox>Уличная дверь</Checkbox></Item>
                            <Item name="isEccentric" valuePropName="checked"><Checkbox>Эксцентрик</Checkbox></Item>
                            <Item name="isBackSheet" valuePropName="checked"><Checkbox>Задний лист</Checkbox></Item>
                            <Item name="isTermoCable" valuePropName="checked"><Checkbox>Термокабель</Checkbox></Item>
                            <Item name="isCloser" valuePropName="checked"><Checkbox>Доводчик</Checkbox></Item>
                            <Item name="isEnhanceCloser" valuePropName="checked"><Checkbox>Усиление под довочик</Checkbox></Item>
                            <Item name="isElectromagnet" valuePropName="checked"><Checkbox>Электромагнит</Checkbox></Item>
                            <Item name="isIllumination" valuePropName="checked"><Checkbox>Подсветка</Checkbox></Item>                                                       
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