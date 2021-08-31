import {Dispatch} from "redux";
import { 
    checkSelectedContour, checkSelectedDoorThick, setContours, 
    setCustomers, setDoorThicks, setModel, setModels, setParties, 
    setModelBoxes
} from "../slices/orderSlice";
import { api } from '../../api/api';

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
