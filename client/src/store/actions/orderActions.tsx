import {Dispatch} from "redux";
import { orderActions } from "../slices/orderSlice";
import { api } from '../../api/api';
import { IOrder } from '../../interfaces/IOrder';

//fetch actions
export const fetchCustomers = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCustomers()
            dispatch(orderActions.setCustomers(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchParties = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getParties()
            dispatch(orderActions.setParties(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchModels = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getModels()
            dispatch(orderActions.setModels(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchModelBoxes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getModelBoxes()
            dispatch(orderActions.setModelBoxes(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchOpeningTypes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getOpeningTypes()
            dispatch(orderActions.setOpeningTypes(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchLocks = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getLocks()
            const baseLocks = response.data.filter(lock => lock.installation === "основной" || lock.installation === "нет" || lock.installation === "примечание")
            const optionalLocks = response.data.filter(lock => lock.installation === "дополнительный" || lock.installation === "нет" || lock.installation === "примечание")
            dispatch(orderActions.setBaseLoks(baseLocks))
            dispatch(orderActions.setOptionalLocks(optionalLocks))
        } catch (e) {
            
        }
    }
}

export const fetchSpinners = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getSpinners()
            dispatch(orderActions.setSpinners(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchCylinders = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCyliners()
            dispatch(orderActions.setCylinders(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchCovers = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCovers()
            dispatch(orderActions.setCovers(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchEyes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getEyes()
            dispatch(orderActions.setEyes(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchEyeLocations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getEyeLocations()
            dispatch(orderActions.setEyeLocations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchHandles = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getHandles()
            dispatch(orderActions.setHandles(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeDecorations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeDecorations()
            dispatch(orderActions.setTypeDecorations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchDecorations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getDecorations()
            dispatch(orderActions.setDecorations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchWraps = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getWraps()
            dispatch(orderActions.setWraps(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchPatinas = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getPatinas()
            dispatch(orderActions.setPatinas(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeWindows = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeWindows()
            dispatch(orderActions.setTypeWindows(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchWindows = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getWindows()
            dispatch(orderActions.setWindows(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchColorTints = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getColorTints()
            dispatch(orderActions.setColorTints(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchColorForges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getColorForges()
            dispatch(orderActions.setColorForges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchPatinaForges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getPatinaForges()
            dispatch(orderActions.setPatinaForges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchLocationHinges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getLoacationHinges()
            dispatch(orderActions.setLocationHinges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeHinges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeHinges()
            dispatch(orderActions.setTypeHinges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchThickMetalLeafs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getThickMetalLeafs()
            dispatch(orderActions.setThickMetalLeafs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchThickMetalBoxes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getThickMetalBoxes()
            dispatch(orderActions.setThickMetalBoxes(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchJambs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getJambs()
            dispatch(orderActions.setJambs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchLocationJumbs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getLocationJambs()
            dispatch(orderActions.setLocationJambs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchFittingColors = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getFittingColors()            
            dispatch(orderActions.setFittingColors(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}
export const fetchAll = () => {
    return async (dispatch: Dispatch<any>) => {
        try {            
            dispatch(orderActions.setLoading(true))

            await dispatch(fetchCustomers())
            await dispatch(fetchParties())
            await dispatch(fetchModels())
            await dispatch(fetchModelBoxes())
            await dispatch(fetchOpeningTypes())
            await dispatch(fetchLocationHinges())
            await dispatch(fetchLocks())
            await dispatch(fetchSpinners())
            await dispatch(fetchCylinders())
            await dispatch(fetchCovers())
            await dispatch(fetchEyes())
            await dispatch(fetchEyeLocations())
            await dispatch(fetchHandles())
            await dispatch(fetchTypeDecorations())
            await dispatch(fetchDecorations())
            await dispatch(fetchWraps())
            await dispatch(fetchWraps())
            await dispatch(fetchPatinas())
            await dispatch(fetchTypeWindows())
            await dispatch(fetchWindows())
            await dispatch(fetchColorTints())
            await dispatch(fetchColorForges())
            await dispatch(fetchPatinaForges())
            await dispatch(fetchTypeHinges())
            await dispatch(fetchThickMetalLeafs())
            await dispatch(fetchThickMetalBoxes())
            await dispatch(fetchJambs())         
            await dispatch(fetchLocationJumbs()) 
            await dispatch(fetchFittingColors())       

            dispatch(orderActions.setLoading(false))
        } catch (e) {
            
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