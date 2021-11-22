import {Dispatch} from "redux";
import { orderActions } from "../slices/orderSlice";
import { api } from '../../api/api';
import { IOrder } from '../../interfaces/IOrder';

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

            response = await api.getOpeningTypes()
            dispatch(orderActions.setOpeningTypes(response.data))

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

            dispatch(orderActions.setLoading(false))
        } catch (e) {
            console.log(e);            
        }
    }
}

export const addOrder = (data: IOrder) => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.createOrder(data)
            console.log(response);                       
        } catch (e: any) {            
            if (e.isAxiosError){
                if (!e.response) {
                    console.log("Нет соединения с сервером")                    
                    return 
                }
                
                if (e.response.status === 422) {
                    dispatch(orderActions.setValidateErrors(e.response.data))                                     
                }
                                          
            } else {
                console.log("other error", e);                
            }          
        }
    }
}