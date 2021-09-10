import {Dispatch} from "redux";
import { 
    checkSelectedContour, checkSelectedDoorThick, setContours, 
    setCustomers, setDoorThicks, setModel, setModels, setParties, 
    setModelBoxes,
    setOpeningTypes,
    setIsDouble,
    setWidthDouble,
    setLoading,
    setBaseLoks,
    setOptionalLocks,
    setSpinners,
    setBaseLock,   
    // checkSelectedLockSpinner,
    setLockSpinner,
    setIsLockSpinner,
    setCylinders,
    setIsBaseCylinder,
    setBaseCylinder,
    setCovers,
    setBaseCovers,
    setBaseCoverOutside,
    setBaseCoverInside,
    setBaseCovers2,
    setIsBaseCover2,
    setBaseCoverOutside2,
    setBaseCoverInside2,
    setOptionalLock
} from "../slices/orderSlice";
import { api } from '../../api/api';
import { RootState } from '../store';
import { ICover } from "../../interfaces/ICover";

export const fetchCustomers = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCustomers()
            dispatch(setCustomers(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchParties = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getParties()
            dispatch(setParties(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchModels = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getModels()
            dispatch(setModels(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchModelBoxes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getModelBoxes()
            dispatch(setModelBoxes(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchOpeningTypes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getOpeningTypes()
            dispatch(setOpeningTypes(response.data))
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
            dispatch(setBaseLoks(baseLocks))
            dispatch(setOptionalLocks(optionalLocks))
        } catch (e) {
            
        }
    }
}

export const fetchSpinners = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getSpinners()
            dispatch(setSpinners(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchCylinders = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCyliners()
            dispatch(setCylinders(response.data))
        } catch (e) {
            
        }
    }
}

export const fetchCovers = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getCovers()
            dispatch(setCovers(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchAll = () => {
    return async (dispatch: Dispatch<any>) => {
        try {            
            dispatch(setLoading(true))

            await dispatch(fetchCustomers())
            await dispatch(fetchParties())
            await dispatch(fetchModels())
            await dispatch(fetchModelBoxes())
            await dispatch(fetchOpeningTypes())
            await dispatch(fetchLocks())
            await dispatch(fetchSpinners())
            await dispatch(fetchCylinders())
            await dispatch(fetchCovers())

            dispatch(setLoading(false))
        } catch (e) {
            
        }
    }
}

export const changeModel = (model: string) => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setModel(model))
            dispatch(setContours(model))
            dispatch(setDoorThicks(model))
            dispatch(checkSelectedContour())            
            dispatch(checkSelectedDoorThick())
        } catch (e) {
            
        }
    }
}

export const changeIsDouble = (value: boolean) => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(setIsDouble(value))
            if (!value) {
                dispatch(setWidthDouble(""))
            }
        } catch (e) {
            
        }
    }
}

export const changeBaseLock = (value: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        try {
            dispatch(setBaseLock(value))

            const { baseLocks, covers } = getState().order
            const baseLock = baseLocks.find(lock => lock.value === value)
            if (baseLock?.isBolt) {
                dispatch(setIsLockSpinner(true))
                dispatch(setLockSpinner(""))                
            } else {
                dispatch(setIsLockSpinner(false))
                dispatch(setLockSpinner("нет"))                
            }

            let baseCovers: ICover[] = []
            let baseCovers2: ICover[] = []

            let isBaseCylinder: boolean = false
            let baseCylinder: string = "" 

            let baseCoverOutside: string = ""
            let baseCoverInside: string = ""

            let isBaseCover2: boolean = false
            let baseCoverOutside2: string = "нет"
            let baseCoverInside2: string = "нет"          
            
            switch (baseLock?.type) {
                case "цилиндр":                
                    isBaseCylinder = true                    
                    baseCylinder = ""
                    baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    break
                case "двухсистемный":
                    isBaseCylinder = true                    
                    baseCylinder = ""
                    isBaseCover2 = true
                    baseCoverOutside2 = ""
                    baseCoverInside2 = ""
                    baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    baseCovers2 = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    break
                case "сувальда":
                    isBaseCylinder = false                    
                    baseCylinder = "нет"
                    baseCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    break
                case "нет":
                case "другое":
                    isBaseCylinder = false
                    baseCylinder = "нет"
                    baseCoverOutside = "нет"
                    baseCoverInside = "нет"
                    baseCovers = covers.filter(cover => cover.type === "нет")
                    break
                case "примечание":
                    isBaseCylinder = true
                    baseCylinder = ""
                    baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    isBaseCover2 = true
                    baseCoverOutside2 = ""
                    baseCoverInside2 = ""
                    baseCovers2 = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    break 
            }

            dispatch(setIsBaseCylinder(isBaseCylinder))
            dispatch(setBaseCylinder(baseCylinder))
            dispatch(setBaseCovers(baseCovers))
            dispatch(setBaseCoverOutside(baseCoverOutside))
            dispatch(setBaseCoverInside(baseCoverInside)) 
            dispatch(setBaseCovers2(baseCovers2))            
            dispatch(setIsBaseCover2(isBaseCover2))
            dispatch(setBaseCoverOutside2(baseCoverOutside2))
            dispatch(setBaseCoverInside2(baseCoverInside2))            
                
        } catch (e) {
            console.log(e);            
        }
    }
}

export const changeOptionalLock = (lock: string) => {
    return (dispatch: Dispatch) => {
        try {                        
            dispatch(setOptionalLock(lock))
        } catch (e) {
            console.log(e);            
        }
    }
}