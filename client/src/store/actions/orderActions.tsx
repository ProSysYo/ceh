import {Dispatch} from "redux";
import { 
    setContours, 
    setCustomers, 
    setDoorThicks, 
    setModel, 
    setModels, 
    setParties, 
    setModelBoxes,
    setOpeningTypes,
    setIsDouble,
    setWidthDouble,
    setLoading,
    setBaseLoks,
    setOptionalLocks,
    setSpinners,
    setBaseLock,
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
    setOptionalLock,
    setIsOptonalCylinder,
    setOptionalCylinder,
    setOptionalCovers,
    setIsOptonalCoverOutside,
    setIsOptonalCoverInside,
    setEyes,
    setHandles,
    setTypeDecorations,
    setContour,
    setDoorThick,
    setTypeDecorationsInside,
    setTypeDecorationsOutside,
    setTypeDecorationOutside,
    setTypeDecorationInside,
    setDecorations,
    setDecorationsOutside,
    setDecorationOutside,
    setWraps,
    setWrapOutside,
    setWrapInside,
    setIsWrapOutside,
    setPatinas,
    setPatinaOutside,
    setIsPatinaOutside,
    setIsWrapInside,
    setDecorationsInside,
    setDecorationInside,
    setIsPatinaInside,
    setPatinaInside,
    setTypeWindows,
    setTypeWindow,
    setWindows,
    setCurrentWindows,
    setDoorWindow,
    setColorTints,
    setColorTint,
    setColorForges,
    setColorForge,
    setPatinaForges,
    setPatinaForge,
    setHeightWindow,
    setWidthWindow,
    setThickWindow,
    setIsColorForge,
    setIsPatinaForge,
    setLocationHinges,
    setTypeHinges,
    setThickMetalLeafs,
    setThickMetalBoxes,
    setEyeLocations,
    setJambs,
    setCurrentJambs,
    setJamb,
    setIsJambWrap,
    setJambWrap,
    setLocationJambs,
    setOpeningType,
    setIsLocationJumb,
    setLocationJumb,
    setValidateErrors,
    setFittingColors
} from "../slices/orderSlice";
import { api } from '../../api/api';
import { RootState } from '../store';
import { ICover } from "../../interfaces/ICover";
import { ITypeDecoration } from "../../interfaces/ITypeDecoration";
import { IDecoration } from "../../interfaces/IDecoration";
import { IWindow } from '../../interfaces/IWindow';
import { IJamb } from "../../interfaces/IJamb";
import { IOrder } from '../../interfaces/IOrder';

//fetch actions
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

export const fetchEyes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getEyes()
            dispatch(setEyes(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchEyeLocations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getEyeLocations()
            dispatch(setEyeLocations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchHandles = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getHandles()
            dispatch(setHandles(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeDecorations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeDecorations()
            dispatch(setTypeDecorations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchDecorations = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getDecorations()
            dispatch(setDecorations(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchWraps = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getWraps()
            dispatch(setWraps(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchPatinas = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getPatinas()
            dispatch(setPatinas(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeWindows = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeWindows()
            dispatch(setTypeWindows(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchWindows = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getWindows()
            dispatch(setWindows(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchColorTints = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getColorTints()
            dispatch(setColorTints(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchColorForges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getColorForges()
            dispatch(setColorForges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchPatinaForges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getPatinaForges()
            dispatch(setPatinaForges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchLocationHinges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getLoacationHinges()
            dispatch(setLocationHinges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchTypeHinges = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getTypeHinges()
            dispatch(setTypeHinges(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchThickMetalLeafs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getThickMetalLeafs()
            dispatch(setThickMetalLeafs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchThickMetalBoxes = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getThickMetalBoxes()
            dispatch(setThickMetalBoxes(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchJambs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getJambs()
            dispatch(setJambs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchLocationJumbs = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getLocationJambs()
            dispatch(setLocationJambs(response.data))
        } catch (e) {
            console.log(e)            
        }
    }
}

export const fetchFittingColors = () => {
    return async (dispatch: Dispatch) => {
        try {            
            const response = await api.getFittingColors()            
            dispatch(setFittingColors(response.data))
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

            dispatch(setLoading(false))
        } catch (e) {
            
        }
    }
}

//user handle actions

export const changeModel = (model: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        try {
            let typeDecorationsOutside: ITypeDecoration[]
            let typeDecorationsInside: ITypeDecoration[]
            let currentJumbs: IJamb[]
            let isJambWrap: boolean = false
            let jambWrap: string = "нет"

            const { models, typeDecorations, jambs } = getState().order
            const selectedModel = models.find(item=>item.value === model)!
            
            typeDecorationsOutside = typeDecorations.filter(item => item.type === selectedModel.typeOutside || item.type === "нет" || item.type === "примечание")            
            typeDecorationsInside = typeDecorations.filter(item => item.type === selectedModel.typeInside || item.type === "нет" || item.type === "примечание")

            currentJumbs = jambs.filter(item => item.type === selectedModel.typeOutside || item.type === "все" )
            
            if (selectedModel.typeOutside === "панель") {
                isJambWrap =  true
                jambWrap = ""
            }
            

            dispatch(setModel(model))

            dispatch(setContours(selectedModel!.contours))
            dispatch(setContour("")) 

            dispatch(setDoorThicks(selectedModel!.doorThicks))
            dispatch(setDoorThick(""))           
            
            dispatch(setTypeDecorationsOutside(typeDecorationsOutside))
            dispatch(setTypeDecorationOutside(""))

            dispatch(setTypeDecorationsInside(typeDecorationsInside))            
            dispatch(setTypeDecorationInside(""))

            dispatch(setCurrentJambs(currentJumbs))
            dispatch(setJamb(""))            
            dispatch(setIsJambWrap(isJambWrap))
            dispatch(setJambWrap(jambWrap))
            
            dispatch(setDecorationOutside(""))

            dispatch(setIsWrapOutside(false))
            dispatch(setWrapOutside(""))

            dispatch(setIsWrapInside(false))
            dispatch(setWrapInside(""))

            dispatch(setIsPatinaOutside(false))
            dispatch(setPatinaOutside(""))

            dispatch(setTypeWindow(""))

            dispatch(setDoorWindow(""))

            dispatch(setColorTint(""))

            dispatch(setIsColorForge(false))
            dispatch(setColorForge(""))

            dispatch(setIsPatinaForge(false))
            dispatch(setPatinaForge(""))
            
            dispatch(setHeightWindow(""))
            dispatch(setWidthWindow(""))
            dispatch(setThickWindow(""))
        } catch (e) {
            
        }
    }
}

export const changeTypeDecorationOutside = (type: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        let decorationsOutside: IDecoration[] = []
        let isWrapOutside: boolean = false
        let isPatinaOutside: boolean = false
        let wrapOutside: string = ""
        let patinaOutside: string = ""
        let decorationOutside: string = ""

        try {            
            dispatch(setTypeDecorationOutside(type))

            const { typeDecorationsOutside, decorations } = getState().order           

            const selectedType = typeDecorationsOutside.find(item => item.value === type)!
            
            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    decorationsOutside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    decorationsOutside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }                        

            switch (selectedType.type) {
                case "панель":                                                      
                    isWrapOutside = true
                    isPatinaOutside = true
                    wrapOutside = ""
                    patinaOutside = ""
                    break
                case "металл":                                       
                    isWrapOutside = false
                    isPatinaOutside = false
                    wrapOutside = "нет"
                    patinaOutside = "нет"
                    break
                case "нет":
                case "примечание":
                    decorationOutside = "нет" 
                    isWrapOutside = false
                    isPatinaOutside = false
                    wrapOutside = "нет"
                    patinaOutside = "нет"
                    break                
            }
            

            dispatch(setDecorationsOutside(decorationsOutside))            
            dispatch(setDecorationOutside(decorationOutside))            

            dispatch(setIsWrapOutside(isWrapOutside))                       
            dispatch(setWrapOutside(wrapOutside)) 

            dispatch(setIsPatinaOutside(isPatinaOutside))                     
            dispatch(setPatinaOutside(patinaOutside))          
        } catch (e) {
            console.log(e);            
        }
    }
}

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
            dispatch(setTypeDecorationInside(type))
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

            dispatch(setDecorationsInside(decorationsInside))
            dispatch(setDecorationInside(decorationInside))            

            dispatch(setIsWrapInside(isWrapInside))                       
            dispatch(setWrapInside(wrapInside)) 

            dispatch(setIsPatinaInside(isPatinaInside))                     
            dispatch(setPatinaInside(patinaInside))

        } catch (e) {
            console.log(e);            
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

export const changeOptionalLock = (value: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        try {
            dispatch(setOptionalLock(value))

            let isOptionalCylinder: boolean
            let optionalCylinder: string
            let optionalCovers: ICover[]
            let optionalCoverOutside: string
            let optionalCoverInside: string

            const { optionalLocks, covers } = getState().order                     
            const optionalLock = optionalLocks.find(lock => lock.value === value)

            switch (optionalLock?.type) {
                case "цилиндр":
                    isOptionalCylinder = true
                    optionalCylinder = ""
                    optionalCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    optionalCoverOutside = ""
                    optionalCoverInside = ""
                    break
                case "сувальда":
                    isOptionalCylinder = false
                    optionalCylinder = "нет"
                    optionalCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    optionalCoverOutside = ""
                    optionalCoverInside = ""
                    break  
                case "примечание":
                    isOptionalCylinder = true
                    optionalCylinder = ""
                    optionalCovers = covers
                    optionalCoverOutside = ""
                    optionalCoverInside = ""
                    break
                default: 
                    isOptionalCylinder = false
                    optionalCylinder = "нет"
                    optionalCovers = covers.filter(cover => cover.type === "нет")
                    optionalCoverOutside = "нет"
                    optionalCoverInside = "нет"                   
            }           
            
            dispatch(setIsOptonalCylinder(isOptionalCylinder))
            dispatch(setOptionalCylinder(optionalCylinder)) 
            dispatch(setOptionalCovers(optionalCovers)) 
            dispatch(setIsOptonalCoverOutside(optionalCoverOutside)) 
            dispatch(setIsOptonalCoverInside(optionalCoverInside)) 

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
            dispatch(setTypeWindow(value))

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

            dispatch(setCurrentWindows(currentWindows))
            dispatch(setDoorWindow(doorWindow))
            dispatch(setColorTint(colorTint))
            dispatch(setIsColorForge(isColorForge))
            dispatch(setColorForge(colorForge))
            dispatch(setIsPatinaForge(isPatinaForge))
            dispatch(setPatinaForge(patinaForge))
            dispatch(setHeightWindow(heightWindow))
            dispatch(setWidthWindow(widthWindow))
            dispatch(setThickWindow(thickWindow))
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

            

            dispatch(setDoorWindow(doorWindow))
            dispatch(setHeightWindow(selectedWindow.height))
            dispatch(setWidthWindow(selectedWindow.width))
            dispatch(setThickWindow(thickWindow))
        } catch (e) {
            console.log(e)
        }
    }
}

export const changeOpeningType = (openingType: string) => {
    return (dispatch: Dispatch) => {        
        let isLocationJamb: boolean = false
        let locationJumb: string = "нет"
        try {
            if (openingType === "внутреннего") {
                isLocationJamb = true
                locationJumb = ""
            }
            dispatch(setOpeningType(openingType))
            dispatch(setIsLocationJumb(isLocationJamb))
            dispatch(setLocationJumb(locationJumb))
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
                    dispatch(setValidateErrors(e.response.data))                                     
                }
                                          
            } else {
                console.log("other error", e);                
            }          
        }
    }
}