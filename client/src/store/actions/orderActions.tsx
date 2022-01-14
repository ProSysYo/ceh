import {Dispatch} from "redux";
import { fetchTables, orderActions } from "../slices/orderSlice";
import { api } from '../../api/api';
import { openNotification } from "../../commons/notification";
import { IOrder } from "../../../../interfaces/IOrder";

export const fetchAll = () => {
    return async (dispatch: Dispatch<any>) => {                          
        dispatch(orderActions.setLoading(true))
        await dispatch(fetchTables("customers"))
        await dispatch(fetchTables("parties"))
        await dispatch(fetchTables("models"))
        await dispatch(fetchTables("modelBoxes"))
        await dispatch(fetchTables("spinners"))
        await dispatch(fetchTables("locks"))
        await dispatch(fetchTables("cylinders"))
        await dispatch(fetchTables("covers"))                       
        await dispatch(fetchTables("eyes"))                       
        await dispatch(fetchTables("eyeLocations"))                       
        await dispatch(fetchTables("handles"))                       
        await dispatch(fetchTables("typeDecorations"))                       
        await dispatch(fetchTables("decorations"))                       
        await dispatch(fetchTables("wraps"))                       
        await dispatch(fetchTables("patinas"))                       
        await dispatch(fetchTables("typeWindows"))                      
        await dispatch(fetchTables("windows"))                      
        await dispatch(fetchTables("colorTints"))                      
        await dispatch(fetchTables("colorForges"))                      
        await dispatch(fetchTables("patinaForges"))                      
        await dispatch(fetchTables("locationHinges"))                      
        await dispatch(fetchTables("hingeCounts"))                   
        await dispatch(fetchTables("typeHinges"))                   
        await dispatch(fetchTables("thickMetalLeafs"))                   
        await dispatch(fetchTables("thickMetalBoxes"))                  
        await dispatch(fetchTables("jambs"))                  
        await dispatch(fetchTables("locationJambs"))                  
        await dispatch(fetchTables("fittingColors"))                  
        await dispatch(fetchTables("sealers"))
        await dispatch(fetchTables("ears"))
        await dispatch(fetchTables("holeInBoxes"))
        await dispatch(fetchTables("colorDoors"))
        await dispatch(fetchTables("packagings"))
        await dispatch(fetchTables("typePolkas"))
        await dispatch(fetchTables("executionFramugas"))
        await dispatch(fetchTables("typeFramugas"))
        dispatch(orderActions.setLoading(false))
    }
}

export const addOrder = (data: IOrder) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(orderActions.setFetching(true))
            await api.createOrder(data)
            openNotification("success", "Заказ был создан")
            dispatch(orderActions.setFetching(false))
            dispatch(orderActions.setSuccess(true))                                  
        } catch (e: any) { 
            dispatch(orderActions.setFetching(false))  
                       
            if (e.isAxiosError){
                if (!e.response) {
                    openNotification("error", "Нет соединения с сервером") 
                    console.log("Нет соединения с сервером")                    
                    return 
                }
                
                if (e.response.status === 422) {
                    openNotification("error", "Ошибка валидации, проверьте все поля") 
                    dispatch(orderActions.setValidateErrors(e.response.data.errors))                                     
                } else {
                    console.log(e.response);
                    
                    openNotification("error", e.response.data.errors)
                }
                                          
            } else {
                openNotification("error", "Не известная ошибка") 
                console.log("other error", e);                
            }          
        }
    }
}

export const updateOrder = (data: IOrder) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(orderActions.setFetching(true))
            await api.updateOrder(data)
            openNotification("success", "Заказ был изменен")
            dispatch(orderActions.setFetching(false))
            dispatch(orderActions.setSuccess(true))                                  
        } catch (e: any) { 
            dispatch(orderActions.setFetching(false))  
                       
            if (e.isAxiosError){
                if (!e.response) {
                    openNotification("error", "Нет соединения с сервером") 
                    console.log("Нет соединения с сервером")                    
                    return 
                }
                
                if (e.response.status === 422) {
                    openNotification("error", "Ошибка валидации, проверьте все поля") 
                    dispatch(orderActions.setValidateErrors(e.response.data))                                     
                } else {
                    console.log(e.response);
                    
                    openNotification("error", e.response.data.errors)
                }
                                          
            } else {
                openNotification("error", "Не известная ошибка") 
                console.log("other error", e);                
            }          
        }
    }
}

export const getOrders = (filters: {}) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(orderActions.setLoading(true))
            const response = await api.getOrders(filters)
            dispatch(orderActions.setOrders(response.data))
            openNotification("success", "Список заказов сформирован")
            dispatch(orderActions.setLoading(false))                 
        } catch (e: any) {    
            dispatch(orderActions.setLoading(false))        
            if (e.isAxiosError){
                if (!e.response) {                    
                    openNotification("error", "Нет соединения с сервером") 
                    console.log("Нет соединения с сервером")                    
                    return 
                }                         
            } else {
                openNotification("error", "Не известная ошибка") 
                console.log("other error", e);                
            }          
        }
    }
}

export const loadOrder = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(orderActions.setLoading(true))      
            const response = await api.getOrder(id)
            const data = response.data
            if (data) {
                //Порядок вызова важен, т.к. нижестоящий action может зависет от вышестоящего
                dispatch(orderActions.setOrderFieldNum({fieldName: "id", value: data.id}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "number", value: data.number}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "customer", value: data.customer}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "numberCustomer", value: data.numberCustomer}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "party", value: data.party}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "countDoors", value: data.countDoors}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "costDoor", value: data.costDoor}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "note", value: data.note}))
                dispatch(orderActions.setModel(data.model))                
                dispatch(orderActions.setOrderFieldNum({fieldName: "doorThick", value: data.doorThick}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "modelBox", value: data.modelBox}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "height", value: data.height}))                
                dispatch(orderActions.setOrderFieldNum({fieldName: "width", value: data.width}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "widthDouble", value: data.widthDouble}))                
                dispatch(orderActions.setOrderFieldStr({fieldName: "locationHinge", value: data.locationHinge}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "typeHinge", value: data.typeHinge}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "countHinge", value: data.countHinge}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "thickMetalLeaf", value: data.thickMetalLeaf}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "thickMetalBox", value: data.thickMetalBox}))
                dispatch(orderActions.setBaseLock(data.baseLock))                
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCylinder", value: data.baseCylinder}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "lockSpinner", value: data.lockSpinner}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "lockSpinnerColor", value: data.lockSpinnerColor}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverOutside", value: data.baseCoverOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorOutside", value: data.baseCoverColorOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverInside", value: data.baseCoverInside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorInside", value: data.baseCoverColorInside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverOutside2", value: data.baseCoverOutside2}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorOutside2", value: data.baseCoverColorOutside2}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverInside2", value: data.baseCoverInside2}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "baseCoverColorInside2", value: data.baseCoverColorInside2}))
                dispatch(orderActions.setOptionalLock(data.optionalLock))
                dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCylinder", value: data.optionalCylinder}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverOutside", value: data.optionalCoverOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverColorOutside", value: data.optionalCoverColorOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverInside", value: data.optionalCoverInside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "optionalCoverColorInside", value: data.optionalCoverColorInside}))
                dispatch(orderActions.setEye(data.eye))
                dispatch(orderActions.setOrderFieldStr({fieldName: "colorEye", value: data.colorEye}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "eyeLocation", value: data.eyeLocation}))
                dispatch(orderActions.setHandle(data.handle))
                dispatch(orderActions.setOrderFieldStr({fieldName: "handleColor", value: data.handleColor}))
                dispatch(orderActions.setSpinner(data.spinner))
                dispatch(orderActions.setOrderFieldStr({fieldName: "spinnerColor", value: data.spinnerColor}))
                dispatch(orderActions.setTypeDecorationOutside(data.typeDecorationOutside))
                dispatch(orderActions.setOrderFieldStr({fieldName: "decorationOutside", value: data.decorationOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "wrapOutside", value: data.wrapOutside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "patinaOutside", value: data.patinaOutside}))             
                dispatch(orderActions.setTypeDecorationInside(data.typeDecorationInside))        
                dispatch(orderActions.setOrderFieldStr({fieldName: "decorationInside", value: data.decorationInside}))      
                dispatch(orderActions.setOrderFieldStr({fieldName: "wrapInside", value: data.wrapInside}))  
                dispatch(orderActions.setOrderFieldStr({fieldName: "patinaInside", value: data.patinaInside}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "locationJumb", value: data.locationJumb}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "jamb", value: data.jamb}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "jambWrap", value: data.jambWrap}))
                dispatch(orderActions.setTypeWindow(data.typeWindow))
                dispatch(orderActions.setDoorWindow(data.doorWindow))
                dispatch(orderActions.setOrderFieldStr({fieldName: "colorTint", value: data.colorTint}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "colorForge", value: data.colorForge}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "patinaForge", value: data.patinaForge}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "heightWindow", value: data.heightWindow}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "widthWindow", value: data.widthWindow}))
                dispatch(orderActions.setOrderFieldNum({fieldName: "thickWindow", value: data.thickWindow}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isStainlessDoorStep", value: data.isStainlessDoorStep}))                
                dispatch(orderActions.setOrderFieldBool({fieldName: "isEccentric", value: data.isEccentric}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isBackSheet", value: data.isBackSheet}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isTermoCable", value: data.isTermoCable}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isCloser", value: data.isCloser}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isEnhanceCloser", value: data.isEnhanceCloser}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isElectromagnet", value: data.isElectromagnet}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isIllumination", value: data.isIllumination}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isNoise", value: data.isNoise}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "sealer", value: data.sealer}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "ear", value: data.ear}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "holeInBox", value: data.holeInBox}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "colorDoor", value: data.colorDoor}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "packaging", value: data.packaging}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "typePolkaLeft", value: data.typePolkaLeft}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isForgePolkaLeft", value: data.isForgePolkaLeft}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassPolkaLeft", value: data.isGlassPolkaLeft}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "typePolkaRight", value: data.typePolkaRight}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isForgePolkaRight", value: data.isForgePolkaRight}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassPolkaRight", value: data.isGlassPolkaRight}))

                dispatch(orderActions.setOrderFieldStr({fieldName: "executionFramuga", value: data.executionFramuga}))
                dispatch(orderActions.setOrderFieldStr({fieldName: "typeFramuga", value: data.typeFramuga}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isForgeFramuga", value: data.isForgeFramuga}))
                dispatch(orderActions.setOrderFieldBool({fieldName: "isGlassFramuga", value: data.isGlassFramuga}))

                openNotification("success", "Заказ загружен")
            }
            
            dispatch(orderActions.setLoading(false))                      
        } catch (e: any) { 
            dispatch(orderActions.setLoading(false))            
            if (e.isAxiosError){
                if (!e.response) {
                    openNotification("error", "Нет соединения с сервером") 
                    console.log("Нет соединения с сервером")                    
                    return 
                }                                          
            } else {
                openNotification("error", "Не известная ошибка") 
                console.log("other error", e);                
            }          
        }
    }
}

export const getOrder = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getOrder(id)
            dispatch(orderActions.setOrder(response.data))                                        
        } catch (e: any) {                      
            if (e.isAxiosError){
                if (!e.response) {                    
                    openNotification("error", "Нет соединения с сервером") 
                    console.log("Нет соединения с сервером")                    
                    return 
                }                         
            } else {
                openNotification("error", "Не известная ошибка") 
                console.log("other error", e);                
            }          
        }
    }
}