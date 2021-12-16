import {Dispatch} from "redux";
import { orderActions } from "../slices/orderSlice";
import { api } from '../../api/api';
import { IOrder } from '../../interfaces/IOrder';
import { openNotification } from "../../commons/notification";

export const fetchAll = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            let response          
            dispatch(orderActions.setLoading(true))

            response = await api.getCustomers()
            dispatch(orderActions.setCustomers(response.data))

            response = await api.getParties()
            dispatch(orderActions.setParties(response.data))

            response = await api.getModels()
            dispatch(orderActions.setModels(response.data))

            response = await api.getModelBoxes()
            dispatch(orderActions.setModelBoxes(response.data))            

            response = await api.getLocks()
            const baseLocks = response.data.filter(lock => lock.installation === "основной" || lock.installation === "нет" || lock.installation === "примечание")
            const optionalLocks = response.data.filter(lock => lock.installation === "дополнительный" || lock.installation === "нет" || lock.installation === "примечание")
            dispatch(orderActions.setBaseLoks(baseLocks))
            dispatch(orderActions.setOptionalLocks(optionalLocks))

            response = await api.getSpinners()
            dispatch(orderActions.setSpinners(response.data))

            response = await api.getSpinners()
            dispatch(orderActions.setSpinners(response.data))

            response = await api.getCyliners()
            dispatch(orderActions.setCylinders(response.data))

            response = await api.getCovers()
            dispatch(orderActions.setCovers(response.data))

            response = await api.getEyes()
            dispatch(orderActions.setEyes(response.data))

            response = await api.getEyeLocations()
            dispatch(orderActions.setEyeLocations(response.data))

            response = await api.getHandles()
            dispatch(orderActions.setHandles(response.data))

            response = await api.getTypeDecorations()
            dispatch(orderActions.setTypeDecorations(response.data))

            response = await api.getTypeDecorations()
            dispatch(orderActions.setTypeDecorations(response.data))

            response = await api.getDecorations()
            dispatch(orderActions.setDecorations(response.data))

            response = await api.getWraps()
            dispatch(orderActions.setWraps(response.data))

            response = await api.getPatinas()
            dispatch(orderActions.setPatinas(response.data))

            response = await api.getTypeWindows()
            dispatch(orderActions.setTypeWindows(response.data))

            response = await api.getWindows()
            dispatch(orderActions.setWindows(response.data))

            response = await api.getColorTints()
            dispatch(orderActions.setColorTints(response.data))

            response = await api.getColorForges()
            dispatch(orderActions.setColorForges(response.data))

            response = await api.getPatinaForges()
            dispatch(orderActions.setPatinaForges(response.data))

            response = await api.getLoacationHinges()
            dispatch(orderActions.setLocationHinges(response.data))
            response = await api.getHingeCounts()
            dispatch(orderActions.setHingeCounts(response.data))

            response = await api.getTypeHinges()
            dispatch(orderActions.setTypeHinges(response.data))

            response = await api.getThickMetalLeafs()
            dispatch(orderActions.setThickMetalLeafs(response.data))

            response = await api.getThickMetalBoxes()
            dispatch(orderActions.setThickMetalBoxes(response.data))

            response = await api.getJambs()
            dispatch(orderActions.setJambs(response.data))

            response = await api.getLocationJambs()
            dispatch(orderActions.setLocationJambs(response.data))

            response = await api.getFittingColors()            
            dispatch(orderActions.setFittingColors(response.data))
            
            response = await api.getSealers()            
            dispatch(orderActions.setSealers(response.data))

            dispatch(orderActions.setLoading(false))            
        } catch (e: any) {            
            if (e.isAxiosError){
                if (!e.response) {
                    console.log("Нет соединения с сервером")                    
                    return 
                }                         
            } else {
                console.log("other error", e);                
            }          
        }
    }
}

export const addOrder = (data: IOrder) => {
    return async (dispatch: Dispatch) => {
        try {            
            await api.createOrder(data)
            openNotification("success", "Заказ был создан")                                  
        } catch (e: any) { 
            console.log(e);
                       
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

export const loadOrder = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(orderActions.setLoading(true))      
            const response = await api.getOrder(id)
            const data = response.data
            if (data) {
                //Порядок вызова важен, т.к. нижестоящий action может зависет от вышестоящего
                dispatch(orderActions.setNumber(data.number))
                dispatch(orderActions.setCustomer(data.customer))
                dispatch(orderActions.setNumberCustomer(data.numberCustomer))
                dispatch(orderActions.setParty(data.party))
                dispatch(orderActions.setCountDoors(data.countDoors))
                dispatch(orderActions.setCostDoor(data.costDoor))
                dispatch(orderActions.setNote(data.note))
                dispatch(orderActions.setModel(data.model))                
                dispatch(orderActions.setDoorThick(data.doorThick))
                dispatch(orderActions.setModelBox(data.modelBox))
                dispatch(orderActions.setHeight(data.height))
                dispatch(orderActions.setHeight(data.height))
                dispatch(orderActions.setWidth(data.width))
                dispatch(orderActions.setWidthDouble(data.widthDouble))                
                dispatch(orderActions.setLocationHinge(data.locationHinge))
                dispatch(orderActions.setTypeHinge(data.typeHinge))
                dispatch(orderActions.setCountHinge(data.countHinge))
                dispatch(orderActions.setThickMetalLeaf(data.thickMetalLeaf))
                dispatch(orderActions.setThickMetalBox(data.thickMetalBox))
                dispatch(orderActions.setBaseLock(data.baseLock))
                dispatch(orderActions.setBaseLock(data.baseLock))
                dispatch(orderActions.setBaseCylinder(data.baseCylinder))
                dispatch(orderActions.setLockSpinner(data.lockSpinner))
                dispatch(orderActions.setLockSpinnerColor(data.lockSpinnerColor))
                dispatch(orderActions.setBaseCoverOutside(data.baseCoverOutside))
                dispatch(orderActions.setBaseCoverColorOutside(data.baseCoverColorOutside))
                dispatch(orderActions.setBaseCoverInside(data.baseCoverInside))
                dispatch(orderActions.setBaseCoverColorInside(data.baseCoverColorInside))
                dispatch(orderActions.setBaseCoverOutside2(data.baseCoverOutside2))
                dispatch(orderActions.setBaseCoverColorOutside2(data.baseCoverColorOutside2))
                dispatch(orderActions.setBaseCoverInside2(data.baseCoverInside2))
                dispatch(orderActions.setBaseCoverColorInside2(data.baseCoverColorInside2))
                dispatch(orderActions.setOptionalLock(data.optionalLock))
                dispatch(orderActions.setOptionalCylinder(data.optionalCylinder))
                dispatch(orderActions.setOptonalCoverOutside(data.optionalCoverOutside))
                dispatch(orderActions.setOptonalCoverColorOutside(data.optionalCoverColorOutside))
                dispatch(orderActions.setOptonalCoverInside(data.optionalCoverInside))
                dispatch(orderActions.setOptonalCoverColorInside(data.optionalCoverColorInside))
                dispatch(orderActions.setEye(data.eye))
                dispatch(orderActions.setColorEye(data.colorEye))
                dispatch(orderActions.setEyeLocation(data.eyeLocation))
                dispatch(orderActions.setHandle(data.handle))
                dispatch(orderActions.setHandleColor(data.handleColor))
                dispatch(orderActions.setSpinner(data.spinner))
                dispatch(orderActions.setSpinnerColor(data.spinnerColor))
                dispatch(orderActions.setTypeDecorationOutside(data.typeDecorationOutside))
                dispatch(orderActions.setDecorationOutside(data.decorationOutside))
                dispatch(orderActions.setWrapOutside(data.wrapOutside))
                dispatch(orderActions.setPatinaOutside(data.patinaOutside))             
                dispatch(orderActions.setTypeDecorationInside(data.typeDecorationInside))        
                dispatch(orderActions.setDecorationInside(data.decorationInside))      
                dispatch(orderActions.setWrapInside(data.wrapInside))  
                dispatch(orderActions.setPatinaInside(data.patinaInside))
                dispatch(orderActions.setLocationJumb(data.locationJumb))
                dispatch(orderActions.setJamb(data.jamb))
                dispatch(orderActions.setJambWrap(data.jambWrap))
                dispatch(orderActions.setTypeWindow(data.typeWindow))
                dispatch(orderActions.setDoorWindow(data.doorWindow))
                dispatch(orderActions.setColorTint(data.colorTint))
                dispatch(orderActions.setColorForge(data.colorForge))
                dispatch(orderActions.setPatinaForge(data.patinaForge))
                dispatch(orderActions.setHeightWindow(data.heightWindow))
                dispatch(orderActions.setWidthWindow(data.widthWindow))
                dispatch(orderActions.setThickWindow(data.thickWindow))
                dispatch(orderActions.setIsStainlessDoorStep(data.isStainlessDoorStep))
                dispatch(orderActions.setIsStreetDoor(data.isStreetDoor))
                dispatch(orderActions.setIsEccentric(data.isEccentric))
                dispatch(orderActions.setIsBackSheet(data.isBackSheet))
                dispatch(orderActions.setIsTermoCable(data.isTermoCable))
                dispatch(orderActions.setIsCloser(data.isCloser))
                dispatch(orderActions.setIsEnhanceCloser(data.isEnhanceCloser))
                dispatch(orderActions.setIsElectromagnet(data.isElectromagnet))
                dispatch(orderActions.setIsIllumination(data.isIllumination))
                dispatch(orderActions.setSealer(data.sealer))

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

