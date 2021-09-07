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
    setIsLockSpinner
} from "../slices/orderSlice";
import { api } from '../../api/api';
import { RootState } from '../store';

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
            const baseLocks = response.data.filter(lock => lock.installation === "основной")
            const optionalLocks = response.data.filter(lock => lock.installation === "дополнительный")
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

            const { baseLocks } = getState().order
            const baseLock = baseLocks.find(lock => lock.value === value)
            if (baseLock?.isBolt) {
                dispatch(setIsLockSpinner(true))
                dispatch(setLockSpinner(""))                
            } else {
                dispatch(setIsLockSpinner(false))
                dispatch(setLockSpinner("нет"))                
            }
                
        } catch (e) {
            
        }
    }
}