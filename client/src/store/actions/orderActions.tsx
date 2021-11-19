import {Dispatch} from "redux";
import { orderActions } from "../slices/orderSlice";
import { api } from '../../api/api';
import { RootState } from '../store';
import { IDecoration } from "../../interfaces/IDecoration";
import { IWindow } from '../../interfaces/IWindow';
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

//user handle actions

export const changeTypeDecorationInside = (type: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        let decorationsInside: IDecoration[] = []
        let isWrapInside: boolean = false
        let isPatinaInside: boolean = false
        let wrapInside: string = ""
        let patinaInside: string = ""
        let decorationInside: string = ""

        const { typeDecorationsInside, decorations } = getState().order 

        try {            
            dispatch(orderActions.setTypeDecorationInside(type))
            const selectedType = typeDecorationsInside.find(item => item.value === type)!

            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    decorationsInside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    decorationsInside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }
            
            switch (selectedType.type) {
                case "панель":                                                      
                    isWrapInside = true
                    isPatinaInside = true
                    wrapInside = ""
                    patinaInside = ""
                    break
                case "металл":                                       
                    isWrapInside = false
                    isPatinaInside = false
                    wrapInside = "нет"
                    patinaInside = "нет"
                    break
                case "нет":
                case "примечание":
                    decorationInside = "нет" 
                    isWrapInside = false
                    isPatinaInside = false
                    wrapInside = "нет"
                    patinaInside = "нет"
                    break                
            }

            dispatch(orderActions.setDecorationsInside(decorationsInside))
            dispatch(orderActions.setDecorationInside(decorationInside))            

            dispatch(orderActions.setIsWrapInside(isWrapInside))                       
            dispatch(orderActions.setWrapInside(wrapInside)) 

            dispatch(orderActions.setIsPatinaInside(isPatinaInside))                     
            dispatch(orderActions.setPatinaInside(patinaInside))

        } catch (e) {
            console.log(e);            
        }
    }
}

export const changeTypeWindow = (value: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {        
        let currentWindows: IWindow[] = []
        let isPatinaForge: boolean = false
        let isColorForge: boolean = false
        let patinaForge: string = ""
        let colorForge: string = ""
        let doorWindow: string = ""
        let colorTint: string = ""
        let heightWindow: number | string = ""
        let widthWindow: number | string = ""
        let thickWindow: number | string= ""   

        const state= getState().order

        const { model, doorThick} = state.order

        if (model === "" || doorThick === "") {
            return alert("Сначала выберите модель двери и толщину")
        }

        const { windows, typeWindows } = state                

        try {
            dispatch(orderActions.setTypeWindow(value))

            const selectedType = typeWindows.find(item => item.value === value)!

            switch (selectedType.type) {
                case "нет":
                case "примечание":    
                    doorWindow = "нет"
                    colorTint = "нет"
                    isColorForge = false
                    colorForge = "нет"
                    isPatinaForge = false
                    patinaForge = "нет"
                    heightWindow = ""
                    widthWindow = ""
                    thickWindow= ""  
                    break
                case "КС":
                    doorWindow = ""
                    colorTint = ""
                    isColorForge = true
                    colorForge = ""
                    isPatinaForge = true
                    patinaForge = ""
                    heightWindow = ""
                    widthWindow = ""
                    thickWindow= "" 
                    break 
                case "С":
                    doorWindow = ""
                    colorTint = ""
                    isColorForge = false
                    colorForge = "нет"
                    isPatinaForge = false
                    patinaForge = "нет"
                    heightWindow = ""
                    widthWindow = ""
                    thickWindow= "" 
                    break  
            }

            currentWindows = windows.filter(item => item.type === selectedType.type || item.type === "нет" || item.type === "примечание")

            dispatch(orderActions.setCurrentWindows(currentWindows))
            dispatch(orderActions.setDoorWindow(doorWindow))
            dispatch(orderActions.setColorTint(colorTint))
            dispatch(orderActions.setIsColorForge(isColorForge))
            dispatch(orderActions.setColorForge(colorForge))
            dispatch(orderActions.setIsPatinaForge(isPatinaForge))
            dispatch(orderActions.setPatinaForge(patinaForge))
            dispatch(orderActions.setHeightWindow(heightWindow))
            dispatch(orderActions.setWidthWindow(widthWindow))
            dispatch(orderActions.setThickWindow(thickWindow))
        } catch (e) {
            console.log(e); 
        }
    }
}

export const changeWindow = (doorWindow: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {        
        try {
            let thickWindow: number | string = ""      
            const state= getState().order
            const {windows, models} = state
            const { doorThick, model } = state.order

            const selectedModel = models.find(item => item.value === model)!
            const selectedWindow = windows.find(item => item.value === doorWindow)!
            
            if (selectedModel.isTermo) {
                thickWindow = selectedWindow.tTermo
            } else {
                switch (doorThick) {
                    case 60:
                        thickWindow = selectedWindow.t60
                        break
                    case 70:
                        thickWindow = selectedWindow.t70
                        break
                    case 80:
                        thickWindow = selectedWindow.t80
                        break
                    case 90:
                        thickWindow = selectedWindow.t90
                        break
                    case 100:
                        thickWindow = selectedWindow.t100
                        break       
                }
            }            

            dispatch(orderActions.setDoorWindow(doorWindow))
            dispatch(orderActions.setHeightWindow(selectedWindow.height))
            dispatch(orderActions.setWidthWindow(selectedWindow.width))
            dispatch(orderActions.setThickWindow(thickWindow))
        } catch (e) {
            console.log(e)
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