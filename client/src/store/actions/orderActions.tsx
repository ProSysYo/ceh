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
    setPatinaInside
} from "../slices/orderSlice";
import { api } from '../../api/api';
import { RootState } from '../store';
import { ICover } from "../../interfaces/ICover";
import { ITypeDecoration } from "../../interfaces/ITypeDecoration";
import { IDecoration } from "../../interfaces/IDecoration";

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
            await dispatch(fetchEyes())
            await dispatch(fetchHandles())
            await dispatch(fetchTypeDecorations())
            await dispatch(fetchDecorations())
            await dispatch(fetchWraps())
            await dispatch(fetchWraps())
            await dispatch(fetchPatinas())

            dispatch(setLoading(false))
        } catch (e) {
            
        }
    }
}

export const changeModel = (model: string) => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        try {
            let typeDecorationsOutside: ITypeDecoration[]
            let typeDecorationsInside: ITypeDecoration[]

            const { models, typeDecorations } = getState().order
            const selectedModel = models.find(item=>item.value === model)
            
            typeDecorationsOutside = typeDecorations.filter(item => item.type === selectedModel?.typeOutside || item.type === "нет" || item.type === "примечание")            
            typeDecorationsInside = typeDecorations.filter(item => item.type === selectedModel?.typeInside || item.type === "нет" || item.type === "примечание")

            dispatch(setModel(model))

            dispatch(setContours(selectedModel!.contours))
            dispatch(setContour("")) 

            dispatch(setDoorThicks(selectedModel!.doorThicks))
            dispatch(setDoorThick(""))           
            
            dispatch(setTypeDecorationsOutside(typeDecorationsOutside))
            dispatch(setTypeDecorationOutside(""))

            dispatch(setTypeDecorationsInside(typeDecorationsInside))            
            dispatch(setTypeDecorationInside(""))

            dispatch(setDecorationOutside(""))

            dispatch(setIsWrapOutside(false))
            dispatch(setWrapOutside(""))

            dispatch(setIsWrapInside(false))
            dispatch(setWrapInside(""))

            dispatch(setIsPatinaOutside(false))
            dispatch(setPatinaOutside(""))
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