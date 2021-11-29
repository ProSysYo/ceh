import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { IOrder } from '../../interfaces/IOrder';
import { IParty } from '../../interfaces/IParty';
import { IModel } from '../../interfaces/IModel';
import { IModelBox } from '../../interfaces/IModelBox';
import { IOpeningType } from '../../interfaces/IOpeningType';
import { ILock } from '../../interfaces/ILock';
import { ISpinner } from '../../interfaces/ISpinner';
import { ICylinder } from '../../interfaces/ICylinder';
import { ICover } from '../../interfaces/ICover';
import { IEye } from '../../interfaces/IEye';
import { IHandle } from '../../interfaces/IHandle';
import { ITypeDecoration } from '../../interfaces/ITypeDecoration';
import { IDecoration } from '../../interfaces/IDecoration';
import { IWrap } from '../../interfaces/IWrap';
import { IPatina } from '../../interfaces/IPatina';
import { ITypeWindow } from '../../interfaces/ITypeWindow';
import { IWindow } from '../../interfaces/IWindow';
import { IColorTint } from '../../interfaces/IColorTint';
import { IColorForge } from '../../interfaces/IColorForge';
import { IPatinaForge } from '../../interfaces/IPatinaForge';
import { ILocationHinge } from '../../interfaces/ILoacationHinge';
import { ITypeHinge } from '../../interfaces/ITypeHinge';
import { IThickMetal } from '../../interfaces/IThickMetal';
import { IEyeLocation } from '../../interfaces/IEyeLocation';
import { IJamb } from '../../interfaces/IJamb';
import { ILocationJamb } from '../../interfaces/ILocationJamb';
import { IFittingColor } from '../../interfaces/IFittingColor';
import { IHingeCount } from '../../interfaces/IHingeCount';

interface OrderSate {
    orders: IOrder[];
    customers: ICustomer[];
    parties: IParty[];
    models: IModel[];
    contours: number[];
    doorThicks: number[];
    modelBoxes: IModelBox[]
    openingTypes: IOpeningType[];
    baseLocks: ILock[];
    optionalLocks: ILock[];
    spinners: ISpinner[];
    cylinders: ICylinder[];
    fittingColors: IFittingColor[], 

    covers: ICover[];       
    baseCovers: ICover[];
    baseCovers2: ICover[];

    optionalCovers: ICover[];
    eyes: IEye[];
    eyeLocations: IEyeLocation[];
    handles: IHandle[];
    typeDecorations: ITypeDecoration[];
    typeDecorationsOutside: ITypeDecoration[];
    decorations: IDecoration[];
    decorationsOutside: IDecoration[];
    wraps: IWrap[];
    patinas: IPatina[];
    typeDecorationsInside: ITypeDecoration[];
    decorationsInside: IDecoration[];
    typeWindows: ITypeWindow[];
    windows: IWindow[];
    currentWindows: IWindow[];
    colorTints: IColorTint[];
    colorForges: IColorForge[];
    patinaForges: IPatinaForge[];

    locationHinges: ILocationHinge[];
    hingeCounts: IHingeCount[]

    typeHinges: ITypeHinge[];
    thickMetalLeafs: IThickMetal[],
    thickMetalBoxes: IThickMetal[],
    jambs: IJamb[],
    currentJambs: IJamb[],
    locationJambs: ILocationJamb[],
      

    isLoading: boolean;

    isLockSpinner: boolean;
    isBaseCylinder: boolean;
    isBaseCover: boolean;
    isBaseCover2: boolean;

    isOptionalCylinder: boolean;
    isOptionalCover: boolean;

    isWrapOutside: boolean;
    isWrapInside: boolean;
    isPatinaOutside: boolean;
    isPatinaInside: boolean;
    isColorForge: boolean;
    isPatinaForge: boolean;
    isJambWrap: boolean;
    isLocationJamb: boolean;

    validateErrors: any;

    order: IOrder;
}

const initialState: OrderSate = {
    orders: [],
    customers: [],
    parties: [],
    models: [],
    contours: [],
    doorThicks: [],
    modelBoxes: [],
    openingTypes: [],
    baseLocks: [],
    optionalLocks: [],
    spinners: [],
    cylinders: [],
    covers: [],
    baseCovers: [],
    baseCovers2: [],
    optionalCovers: [],
    eyes: [],
    eyeLocations: [],
    handles: [],
    typeDecorations: [],
    typeDecorationsOutside: [],
    typeDecorationsInside: [],
    decorations: [],
    decorationsOutside: [],
    wraps: [],
    patinas: [],
    decorationsInside: [],
    typeWindows: [],
    windows: [],
    currentWindows: [],
    colorTints: [],
    colorForges: [],
    patinaForges: [],
    locationHinges: [],
    hingeCounts: [],
    typeHinges: [],
    thickMetalLeafs: [],
    thickMetalBoxes: [],
    jambs: [],
    currentJambs: [],
    locationJambs: [],
    fittingColors: [],

    isLoading: false,

    isLockSpinner: false,//Вертушок замка
    isBaseCylinder: false,
    isBaseCover: false,
    isBaseCover2: false,

    isOptionalCylinder: false,
    isOptionalCover: false,

    isWrapOutside: false,
    isWrapInside: false,
    isPatinaOutside: false,
    isPatinaInside: false,
    isColorForge: false,
    isPatinaForge: false,
    isJambWrap: false,
    isLocationJamb: false,

    validateErrors: {},

    order: {
        customer: "",
        number: "",
        numberCustomer: "",
        party: "",
        
        model: "",

        computedModel: "",

        contour: "",
        doorThick: "",
        height: "",
        width: "",
        modelBox: "",
        openingType: "",
        isDouble: false,
        widthDouble: 0,
        
        //Петли
        locationHinge: "",        
        typeHinge: "",
        countHinge: "",

        //Основной замок
        baseLock: "",
        lockSpinner: "нет",
        lockSpinnerColor: "нет",
        baseCylinder: "нет",

        //Накладки основного замка
        baseCoverOutside: "нет",
        baseCoverColorOutside: "нет",
        baseCoverInside: "нет",
        baseCoverColorInside: "нет",

        //Накладки основного замка (если двухсистемный замок)
        baseCoverOutside2: "нет",
        baseCoverColorOutside2: "нет",
        baseCoverInside2: "нет",
        baseCoverColorInside2: "нет",

        //Дополнительный замок
        optionalLock: "",
        optionalCylinder: "нет",

        //Накладки дополнительного замка
        optionalCoverOutside: "нет",
        optionalCoverColorOutside: "нет",
        optionalCoverInside: "нет",
        optionalCoverColorInside: "нет",

        //Глазок
        eye: "",
        colorEye: "",
        eyeLocation: "",

        //Ручка
        handle: "",
        handleColor: "",

        //Вертушок двери(не замка)
        spinner: "",
        spinnerColor: "",

        typeDecorationOutside: "",
        decorationOutside: "",
        wrapOutside: "",
        patinaOutside: "",
        typeDecorationInside: "",
        decorationInside: "",
        wrapInside: "",
        patinaInside: "",
        typeWindow: "",
        doorWindow: "",
        colorTint: "",
        colorForge: "",
        patinaForge: "",
        heightWindow: "",
        widthWindow: "",
        thickWindow: "",
        countDoors: 0,
        costDoor: 0,
        note: "",
        thickMetalLeaf: 0,
        thickMetalBox: 0,
        jamb: "",
        jambWrap: "",
        locationJumb: "",

        isStainlessDoorStep: false,
        isStreetDoor: false,
        isEccentric: false,
        isBackSheet: false,
        isCloser: false,
        isEnhanceCloser: false,
        isTermoCable: false,
        isElectromagnet: false,
        isIllumination: false,
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => { state.isLoading = action.payload },

        setOrders: (state, action: PayloadAction<IOrder[]>) => { state.orders = action.payload },

        setCustomers: (state, action: PayloadAction<ICustomer[]>) => { state.customers = action.payload },
        setParties: (state, action: PayloadAction<IParty[]>) => { state.parties = action.payload },
        setModels: (state, action: PayloadAction<IModel[]>) => { state.models = action.payload },
        setModelBoxes: (state, action: PayloadAction<IModelBox[]>) => { state.modelBoxes = action.payload },
        setOpeningTypes: (state, action: PayloadAction<IOpeningType[]>) => { state.openingTypes = action.payload },
        setBaseLoks: (state, action: PayloadAction<ILock[]>) => { state.baseLocks = action.payload },
        setOptionalLocks: (state, action: PayloadAction<ILock[]>) => { state.optionalLocks = action.payload },
        setSpinners: (state, action: PayloadAction<ISpinner[]>) => { state.spinners = action.payload },
        setCylinders: (state, action: PayloadAction<ICylinder[]>) => { state.cylinders = action.payload },
        setCovers: (state, action: PayloadAction<ICover[]>) => { state.covers = action.payload },
        setBaseCovers: (state, action: PayloadAction<ICover[]>) => { state.baseCovers = action.payload },
        setBaseCovers2: (state, action: PayloadAction<ICover[]>) => { state.baseCovers2 = action.payload },
        setOptionalCovers: (state, action: PayloadAction<ICover[]>) => { state.optionalCovers = action.payload },
        setEyes: (state, action: PayloadAction<IEye[]>) => { state.eyes = action.payload },
        setEyeLocations: (state, action: PayloadAction<IEyeLocation[]>) => { state.eyeLocations = action.payload },
        setHandles: (state, action: PayloadAction<IHandle[]>) => { state.handles = action.payload },
        setTypeDecorations: (state, action: PayloadAction<ITypeDecoration[]>) => { state.typeDecorations = action.payload },
        setTypeDecorationsOutside: (state, action: PayloadAction<ITypeDecoration[]>) => { state.typeDecorationsOutside = action.payload },
        setTypeDecorationsInside: (state, action: PayloadAction<ITypeDecoration[]>) => { state.typeDecorationsInside = action.payload },
        setContours: (state, action: PayloadAction<number[]>) => { state.contours = action.payload },
        setDoorThicks: (state, action: PayloadAction<number[]>) => { state.doorThicks = action.payload },
        setDecorations: (state, action: PayloadAction<IDecoration[]>) => { state.decorations = action.payload },
        setDecorationsOutside: (state, action: PayloadAction<IDecoration[]>) => { state.decorationsOutside = action.payload },
        setDecorationsInside: (state, action: PayloadAction<IDecoration[]>) => { state.decorationsInside = action.payload },
        setWraps: (state, action: PayloadAction<IWrap[]>) => { state.wraps = action.payload },
        setPatinas: (state, action: PayloadAction<IPatina[]>) => { state.patinas = action.payload },
        setTypeWindows: (state, action: PayloadAction<ITypeWindow[]>) => { state.typeWindows = action.payload },
        setWindows: (state, action: PayloadAction<IWindow[]>) => { state.windows = action.payload },
        setCurrentWindows: (state, action: PayloadAction<IWindow[]>) => { state.currentWindows = action.payload },
        setColorTints: (state, action: PayloadAction<IColorTint[]>) => { state.colorTints = action.payload },
        setColorForges: (state, action: PayloadAction<IColorForge[]>) => { state.colorForges = action.payload },
        setPatinaForges: (state, action: PayloadAction<IPatinaForge[]>) => { state.patinaForges = action.payload },
        
        setLocationHinges: (state, action: PayloadAction<ILocationHinge[]>) => { state.locationHinges = action.payload },
        setHingeCounts: (state, action: PayloadAction<IHingeCount[]>) => { state.hingeCounts = action.payload },
        setTypeHinges: (state, action: PayloadAction<ITypeHinge[]>) => { state.typeHinges = action.payload },        

        setThickMetalLeafs: (state, action: PayloadAction<IThickMetal[]>) => { state.thickMetalLeafs = action.payload },
        setThickMetalBoxes: (state, action: PayloadAction<IThickMetal[]>) => { state.thickMetalBoxes = action.payload },
        setJambs: (state, action: PayloadAction<IJamb[]>) => { state.jambs = action.payload },
        setCurrentJambs: (state, action: PayloadAction<IJamb[]>) => { state.currentJambs = action.payload },
        setLocationJambs: (state, action: PayloadAction<ILocationJamb[]>) => { state.locationJambs = action.payload },
        setFittingColors: (state, action: PayloadAction<IFittingColor[]>) => { state.fittingColors = action.payload },

        setNumber: (state, action: PayloadAction<string>) => { state.order.number = action.payload },        
        setCustomer: (state, action: PayloadAction<string>) => { state.order.customer = action.payload },
        setNumberCustomer: (state, action: PayloadAction<string>) => { state.order.numberCustomer = action.payload },
        setParty: (state, action: PayloadAction<string>) => { state.order.party = action.payload },
        setCountDoors: (state, action: PayloadAction<number>) => { state.order.countDoors = action.payload },
        setCostDoor: (state, action: PayloadAction<number>) => { state.order.costDoor = action.payload },
        setNote: (state, action: PayloadAction<string>) => { state.order.note = action.payload }, 
        setModel: (state, action: PayloadAction<string>) => { 
            state.order.model = action.payload            

            const { models, typeDecorations, jambs } = state
            const selectedModel = models.find(item=>item.value === action.payload)!
            
            state.typeDecorationsOutside = typeDecorations.filter(item => item.type === selectedModel.typeOutside || item.type === "нет" || item.type === "примечание")
            state.order.typeDecorationOutside = ""

            state.typeDecorationsInside = typeDecorations.filter(item => item.type === selectedModel.typeInside || item.type === "нет" || item.type === "примечание")
            state.order.typeDecorationInside = ""

            state.currentJambs = jambs.filter(item => item.type === selectedModel.typeOutside || item.type === "все" )
            state.order.jamb = ""            
            if (selectedModel.typeOutside === "панель") {
                state.isJambWrap =  true
                state.order.jambWrap = ""
            } else {
                state.isJambWrap =  false
                state.order.jambWrap = "нет"
            }

            state.contours = selectedModel!.contours
            state.order.contour = ""            

            state.doorThicks = selectedModel!.doorThicks 
            state.order.doorThick = ""

            state.order.decorationOutside = ""

            state.isWrapOutside = false
            state.order.wrapOutside = "" 

            state.isWrapInside = false
            state.order.wrapInside = ""

            state.isPatinaOutside = false
            state.order.patinaOutside = ""

            state.order.typeWindow = ""
            state.order.doorWindow = ""
            state.order.colorTint = ""
            state.isColorForge = false
            state.order.colorForge = ""
            state.isPatinaForge = false
            state.order.patinaForge = ""
            state.order.heightWindow = ""
            state.order.widthWindow = ""
            state.order.thickWindow = ""
        },


        setContour: (state, action: PayloadAction<string | number>) => { state.order.contour = action.payload },
        setDoorThick: (state, action: PayloadAction<string | number>) => { state.order.doorThick = action.payload },        
        setModelBox: (state, action: PayloadAction<string>) => { state.order.modelBox = action.payload },
        setOpeningType: (state, action: PayloadAction<string>) => { 
            state.order.openingType = action.payload
            if (action.payload === "внутреннего") {
                state.isLocationJamb = true
                state.order.locationJumb = ""
            } else {
                state.isLocationJamb = false
                state.order.locationJumb = "нет"
            }
        },
        
        setIsDouble: (state, action: PayloadAction<boolean>) => { 
            state.order.isDouble = action.payload
            if (!action.payload) {
                state.order.widthDouble = 0                
            }
        },

        setHeight: (state, action: PayloadAction<string | number>) => { state.order.height = action.payload },
        setWidth: (state, action: PayloadAction<string | number>) => { state.order.width = action.payload },
        setWidthDouble: (state, action: PayloadAction<number>) => { state.order.widthDouble = action.payload },

        setComputedModel: (state) => {
            let insideOpening: string = ""
            let double: string = ""
            
            if (state.order.openingType === "внутреннего") {
                insideOpening = "В"
            }
            
            if (state.order.isDouble) {
                double = "Д"
            }

            state.order.computedModel = double + state.order.model + insideOpening + state.order.contour 
        },

        loadComputedModel: (state, action: PayloadAction<string>) => { state.order.computedModel = action.payload },

        setLocationHinge: (state, action: PayloadAction<string>) => { state.order.locationHinge = action.payload },
        setTypeHinge: (state, action: PayloadAction<string>) => { state.order.typeHinge = action.payload },
        setCountHinge: (state, action: PayloadAction<number|string>) => { state.order.countHinge = action.payload },
        
        setThickMetalLeaf: (state, action: PayloadAction<number>) => { state.order.thickMetalLeaf = action.payload },
        setThickMetalBox: (state, action: PayloadAction<number>) => { state.order.thickMetalBox = action.payload },

        //Основной замок
        setBaseLock: (state, action: PayloadAction<string>) => { 
            state.order.baseLock = action.payload
            
            const { baseLocks, covers } = state
            const baseLock = baseLocks.find(lock => lock.value === action.payload)
            
            if (baseLock?.isBolt) {
                state.isLockSpinner = true
                state.order.lockSpinner = ""
                state.order.lockSpinnerColor = ""                
            } else {
                state.isLockSpinner = false
                state.order.lockSpinner = "нет"
                state.order.lockSpinnerColor = "нет"                 
            }
            
            switch (baseLock?.type) {
                case "цилиндр":
                    state.baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.isBaseCylinder = true                    
                    state.order.baseCylinder = ""
                    state.isBaseCover = true
                    state.order.baseCoverOutside = ""
                    state.order.baseCoverColorOutside = ""
                    state.order.baseCoverInside= ""
                    state.order.baseCoverColorInside = ""
                    state.isBaseCover2 = false
                    state.order.baseCoverOutside2 = "нет"
                    state.order.baseCoverColorOutside2 = "нет"
                    state.order.baseCoverInside2 = "нет"
                    state.order.baseCoverColorInside2 = "нет"
                    break
                case "двухсистемный":
                    state.baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.baseCovers2 = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    
                    state.isBaseCylinder = true                    
                    state.order.baseCylinder = ""
                    state.isBaseCover = true
                    state.order.baseCoverOutside = ""
                    state.order.baseCoverColorOutside = ""
                    state.order.baseCoverInside= ""
                    state.order.baseCoverColorInside = ""
                    state.isBaseCover2 = true
                    state.order.baseCoverOutside2 = ""
                    state.order.baseCoverColorOutside2 = ""
                    state.order.baseCoverInside2 = ""
                    state.order.baseCoverColorInside2 = ""                    
                    break
                case "сувальда":
                    state.baseCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    state.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.isBaseCylinder = false                    
                    state.order.baseCylinder = "нет"
                    state.isBaseCover = true
                    state.order.baseCoverOutside = ""
                    state.order.baseCoverColorOutside = ""
                    state.order.baseCoverInside= ""
                    state.order.baseCoverColorInside = ""
                    state.isBaseCover2 = false
                    state.order.baseCoverOutside2 = "нет"
                    state.order.baseCoverColorOutside2 = "нет"
                    state.order.baseCoverInside2 = "нет"
                    state.order.baseCoverColorInside2 = "нет"                    
                    break
                case "нет":
                case "другое":
                    state.baseCovers = covers.filter(cover => cover.type === "нет")
                    state.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.isBaseCylinder = false
                    state.order.baseCylinder = "нет"

                    state.isBaseCover = false
                    state.order.baseCoverOutside = "нет"
                    state.order.baseCoverColorOutside = "нет"
                    state.order.baseCoverInside= "нет"
                    state.order.baseCoverColorInside = "нет"

                    state.isBaseCover2 = false
                    state.order.baseCoverOutside2 = "нет"
                    state.order.baseCoverColorOutside2 = "нет"
                    state.order.baseCoverInside2 = "нет"
                    state.order.baseCoverColorInside2 = "нет" 
                    break                
                case "примечание":
                    state.baseCovers = covers
                    state.baseCovers2 = covers

                    state.isBaseCylinder = true
                    state.order.baseCylinder = ""

                    state.isBaseCover = true
                    state.order.baseCoverOutside = ""
                    state.order.baseCoverColorOutside = ""
                    state.order.baseCoverInside= ""
                    state.order.baseCoverColorInside = ""

                    state.isBaseCover2 = true
                    state.order.baseCoverOutside2 = ""
                    state.order.baseCoverColorOutside2 = ""
                    state.order.baseCoverInside2 = ""
                    state.order.baseCoverColorInside2 = ""                    
                    break
                default:
                    state.baseCovers = covers.filter(cover => cover.type === "нет")
                    state.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.isBaseCylinder = false
                    state.order.baseCylinder = "нет"

                    state.isBaseCover = false
                    state.order.baseCoverOutside = "нет"
                    state.order.baseCoverColorOutside = "нет"
                    state.order.baseCoverInside= "нет"
                    state.order.baseCoverColorInside = "нет"

                    state.isBaseCover2 = false
                    state.order.baseCoverOutside2 = "нет"
                    state.order.baseCoverColorOutside2 = "нет"
                    state.order.baseCoverInside2 = "нет"
                    state.order.baseCoverColorInside2 = "нет"
            }
        },
        setBaseCylinder: (state, action: PayloadAction<string>) => { state.order.baseCylinder = action.payload },        
        setLockSpinner: (state, action: PayloadAction<string>) => { state.order.lockSpinner = action.payload },
        setLockSpinnerColor: (state, action: PayloadAction<string>) => { state.order.lockSpinnerColor = action.payload }, 
        
        //Накладки основного замка        
        setBaseCoverOutside: (state, action: PayloadAction<string>) => { state.order.baseCoverOutside = action.payload },        
        setBaseCoverColorOutside: (state, action: PayloadAction<string>) => { state.order.baseCoverColorOutside = action.payload },        
        setBaseCoverInside: (state, action: PayloadAction<string>) => { state.order.baseCoverInside = action.payload },
        setBaseCoverColorInside: (state, action: PayloadAction<string>) => { state.order.baseCoverColorInside = action.payload },

        //Накладки основного замка 2       
        setBaseCoverOutside2: (state, action: PayloadAction<string>) => { state.order.baseCoverOutside2 = action.payload },
        setBaseCoverColorOutside2: (state, action: PayloadAction<string>) => { state.order.baseCoverColorOutside2 = action.payload },        
        setBaseCoverInside2: (state, action: PayloadAction<string>) => { state.order.baseCoverInside2 = action.payload },
        setBaseCoverColorInside2: (state, action: PayloadAction<string>) => { state.order.baseCoverColorInside2 = action.payload },

        //Дополнительный замок
        setOptionalLock: (state, action: PayloadAction<string>) => {             
            state.order.optionalLock = action.payload            

            const { optionalLocks, covers } = state                    
            const optionalLock = optionalLocks.find(lock => lock.value === action.payload)

            switch (optionalLock?.type) {
                case "цилиндр":
                    state.optionalCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.isOptionalCylinder = true
                    state.isOptionalCover = true
                    state.order.optionalCylinder = ""                    
                    state.order.optionalCoverOutside = ""
                    state.order.optionalCoverColorOutside = ""
                    state.order.optionalCoverInside = ""
                    state.order.optionalCoverColorInside = ""
                    break
                case "сувальда":
                    state.optionalCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    state.isOptionalCylinder = false
                    state.isOptionalCover = true
                    state.order.optionalCylinder = "нет"                    
                    state.order.optionalCoverOutside = ""
                    state.order.optionalCoverColorOutside = ""
                    state.order.optionalCoverInside = ""
                    state.order.optionalCoverColorInside = ""
                    break  
                case "примечание":
                    state.optionalCovers = covers
                    state.isOptionalCylinder = true
                    state.isOptionalCover = true
                    state.order.optionalCylinder = ""                    
                    state.order.optionalCoverOutside = ""
                    state.order.optionalCoverColorOutside = ""
                    state.order.optionalCoverInside = ""
                    state.order.optionalCoverColorInside = ""
                    break
                default:
                    state.optionalCovers = covers.filter(cover => cover.type === "нет")
                    state.isOptionalCylinder = false
                    state.isOptionalCover = false
                    state.order.optionalCylinder = "нет"                    
                    state.order.optionalCoverOutside = "нет"
                    state.order.optionalCoverColorOutside = "нет"
                    state.order.optionalCoverInside = "нет"
                    state.order.optionalCoverColorInside = "нет"                  
            } 
        },
        setOptionalCylinder: (state, action: PayloadAction<string>) => { state.order.optionalCylinder = action.payload },        
        
        //Накладки дополнительного замка       
        setOptonalCoverOutside: (state, action: PayloadAction<string>) => { state.order.optionalCoverOutside = action.payload },
        setOptonalCoverColorOutside: (state, action: PayloadAction<string>) => { state.order.optionalCoverColorOutside = action.payload },
        setOptonalCoverInside: (state, action: PayloadAction<string>) => { state.order.optionalCoverInside = action.payload },
        setOptonalCoverColorInside: (state, action: PayloadAction<string>) => { state.order.optionalCoverColorInside = action.payload },

        //Глазок
        setEye: (state, action: PayloadAction<string>) => { 
            const eye: string  = action.payload
            state.order.eye = eye
            if (eye === "нет") {
                state.order.colorEye = "нет"
                state.order.eyeLocation = "нет"
            } else {
                state.order.colorEye = ""
                state.order.eyeLocation = ""
            }
        },        
        setColorEye: (state, action: PayloadAction<string>) => { state.order.colorEye = action.payload },        
        setEyeLocation: (state, action: PayloadAction<string>) => { state.order.eyeLocation = action.payload },

        //Ручка
        setHandle: (state, action: PayloadAction<string>) => { 
            const handle = action.payload
            state.order.handle = handle
            if (handle === "нет") {
                state.order.handleColor = "нет"               
            } else {
                state.order.handleColor = ""  
            }
        },
        setHandleColor: (state, action: PayloadAction<string>) => { state.order.handleColor = action.payload },

        //Вертушок
        setSpinner: (state, action: PayloadAction<string>) => { 
            const spinner: string = action.payload
            state.order.spinner = spinner
            if (spinner === "нет") {
                state.order.spinnerColor = "нет"                              
            } else {
                state.order.spinnerColor = "" 
            }
        },
        setSpinnerColor: (state, action: PayloadAction<string>) => { state.order.spinnerColor = action.payload },

        setTypeDecorationOutside: (state, action: PayloadAction<string>) => { 
            state.order.typeDecorationOutside = action.payload

            const { typeDecorationsOutside, decorations } = state           

            const selectedType = typeDecorationsOutside.find(item => item.value === action.payload)!
            
            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    state.decorationsOutside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    state.decorationsOutside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }                        

            switch (selectedType.type) {
                case "панель":                                                      
                    state.isWrapOutside = true
                    state.isPatinaOutside = true
                    state.order.wrapOutside = ""
                    state.order.patinaOutside = ""
                    break
                case "металл":                                       
                    state.isWrapOutside = false
                    state.isPatinaOutside = false
                    state.order.wrapOutside = "нет"
                    state.order.patinaOutside = "нет"
                    break
                case "нет":
                case "примечание":
                    state.order.decorationOutside = "нет" 
                    state.isWrapOutside = false
                    state.isPatinaOutside = false
                    state.order.wrapOutside = "нет"
                    state.order.patinaOutside = "нет"
                    break                
            }
        },
        setDecorationOutside: (state, action: PayloadAction<string>) => { state.order.decorationOutside = action.payload },        
        setWrapOutside: (state, action: PayloadAction<string>) => { state.order.wrapOutside = action.payload },        
        setPatinaOutside: (state, action: PayloadAction<string>) => { state.order.patinaOutside = action.payload },

        setTypeDecorationInside: (state, action: PayloadAction<string>) => { 
            state.order.typeDecorationInside = action.payload

            const { typeDecorationsInside, decorations } = state            
            
            const selectedType = typeDecorationsInside.find(item => item.value === action.payload)!

            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    state.decorationsInside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    state.decorationsInside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }
            
            switch (selectedType.type) {
                case "панель":                                                      
                    state.isWrapInside = true
                    state.isPatinaInside = true
                    state.order.wrapInside = ""
                    state.order.patinaInside = ""
                    break
                case "металл":                                       
                    state.isWrapInside = false
                    state.isPatinaInside = false
                    state.order.wrapInside = "нет"
                    state.order.patinaInside = "нет"
                    break
                case "нет":
                case "примечание":
                    state.order.decorationInside = "нет" 
                    state.isWrapInside = false
                    state.isPatinaInside = false
                    state.order.wrapInside = "нет"
                    state.order.patinaInside = "нет"
                    break
                default:
                    state.order.decorationInside = "нет" 
                    state.isWrapInside = false
                    state.isPatinaInside = false
                    state.order.wrapInside = "нет"
                    state.order.patinaInside = "нет"              
            }
        },
        setDecorationInside: (state, action: PayloadAction<string>) => { state.order.decorationInside = action.payload },        
        setWrapInside: (state, action: PayloadAction<string>) => { state.order.wrapInside = action.payload }, 
        setPatinaInside: (state, action: PayloadAction<string>) => { state.order.patinaInside = action.payload },        
        
        setLocationJumb: (state, action: PayloadAction<string>) => { state.order.locationJumb = action.payload },        
        setJamb: (state, action: PayloadAction<string>) => { state.order.jamb = action.payload },
        setJambWrap: (state, action: PayloadAction<string>) => { state.order.jambWrap = action.payload }, 

        setTypeWindow: (state, action: PayloadAction<string>) => {
            const { model, doorThick} = state.order           

            if (model === "" || doorThick === "") {                
                return alert("Сначала выберите модель двери и толщину")                
            }

            const { windows, typeWindows } = state

            state.order.typeWindow = action.payload

            const selectedType = typeWindows.find(item => item.value === action.payload)!

            switch (selectedType.type) {
                case "нет":
                case "примечание":    
                    state.order.doorWindow = "нет"
                    state.order.colorTint = "нет"
                    state.isColorForge = false
                    state.order.colorForge = "нет"
                    state.isPatinaForge = false
                    state.order.patinaForge = "нет"
                    state.order.heightWindow = ""
                    state.order.widthWindow = ""
                    state.order.thickWindow= ""  
                    break
                case "КС":
                    state.order.doorWindow = ""
                    state.order.colorTint = ""
                    state.isColorForge = true
                    state.order.colorForge = ""
                    state.isPatinaForge = true
                    state.order.patinaForge = ""
                    state.order.heightWindow = ""
                    state.order.widthWindow = ""
                    state.order.thickWindow= "" 
                    break 
                case "С":
                    state.order.doorWindow = ""
                    state.order.colorTint = ""
                    state.isColorForge = false
                    state.order.colorForge = "нет"
                    state.isPatinaForge = false
                    state.order.patinaForge = "нет"
                    state.order.heightWindow = ""
                    state.order.widthWindow = ""
                    state.order.thickWindow= "" 
                    break
                default:    
                    state.order.doorWindow = "нет"
                    state.order.colorTint = "нет"
                    state.isColorForge = false
                    state.order.colorForge = "нет"
                    state.isPatinaForge = false
                    state.order.patinaForge = "нет"
                    state.order.heightWindow = "нет"
                    state.order.widthWindow = "нет"
                    state.order.thickWindow= "нет" 
            }

            state.currentWindows = windows.filter(item => item.type === selectedType.type || item.type === "нет" || item.type === "примечание")            
        },
        setDoorWindow: (state, action: PayloadAction<string>) => { 
            state.order.doorWindow = action.payload

            const {windows, models} = state
            const { doorThick, model } = state.order

            const selectedModel = models.find(item => item.value === model)!
            const selectedWindow = windows.find(item => item.value === action.payload)!
            
            if (selectedModel.isTermo) {
                state.order.thickWindow = selectedWindow.tTermo
            } else {
                switch (doorThick) {
                    case 60:
                        state.order.thickWindow = selectedWindow.t60
                        break
                    case 70:
                        state.order.thickWindow = selectedWindow.t70
                        break
                    case 80:
                        state.order.thickWindow = selectedWindow.t80
                        break
                    case 90:
                        state.order.thickWindow = selectedWindow.t90
                        break
                    case 100:
                        state.order.thickWindow = selectedWindow.t100
                        break       
                }
            } 
            
            state.order.heightWindow = selectedWindow.height
            state.order.widthWindow = selectedWindow.width            
        },
        setColorTint: (state, action: PayloadAction<string>) => { state.order.colorTint = action.payload },
        setColorForge: (state, action: PayloadAction<string>) => { state.order.colorForge = action.payload },        
        setPatinaForge: (state, action: PayloadAction<string>) => { state.order.patinaForge = action.payload },        
        setHeightWindow: (state, action: PayloadAction<number | string>) => { state.order.heightWindow = action.payload },
        setWidthWindow: (state, action: PayloadAction<number | string>) => { state.order.widthWindow = action.payload },
        setThickWindow: (state, action: PayloadAction<number | string>) => { state.order.thickWindow = action.payload }, 
        
        setIsStainlessDoorStep: (state, action: PayloadAction<boolean>) => { state.order.isStainlessDoorStep = action.payload },
        setIsStreetDoor: (state, action: PayloadAction<boolean>) => { state.order.isStreetDoor = action.payload },
        setIsEccentric: (state, action: PayloadAction<boolean>) => { state.order.isEccentric = action.payload },
        setIsBackSheet: (state, action: PayloadAction<boolean>) => { state.order.isBackSheet = action.payload },
        setIsTermoCable: (state, action: PayloadAction<boolean>) => { state.order.isTermoCable = action.payload },
        setIsCloser: (state, action: PayloadAction<boolean>) => { state.order.isCloser = action.payload },
        setIsEnhanceCloser: (state, action: PayloadAction<boolean>) => { state.order.isEnhanceCloser = action.payload },       
        setIsElectromagnet: (state, action: PayloadAction<boolean>) => { state.order.isElectromagnet = action.payload },
        setIsIllumination: (state, action: PayloadAction<boolean>) => { state.order.isIllumination = action.payload },

        setValidateErrors: (state, action: PayloadAction<object | null>) => { state.validateErrors = action.payload },
        setOrder: (state, action: PayloadAction<IOrder>) => { state.order = action.payload },
        rebootState: state => initialState        
    }
})

export const orderActions = orderSlice.actions

export default orderSlice.reducer