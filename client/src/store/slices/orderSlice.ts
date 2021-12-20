import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { IOrder } from '../../interfaces/IOrder';
import { IParty } from '../../interfaces/IParty';
import { IModel } from '../../interfaces/IModel';
import { IModelBox } from '../../interfaces/IModelBox';
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
import { ISealer } from '../../interfaces/ISealer';


interface IStaticTables {   
    customers: ICustomer[];
    parties: IParty[];
    models: IModel[];
    modelBoxes: IModelBox[]    
    baseLocks: ILock[];
    optionalLocks: ILock[];
    spinners: ISpinner[];
    cylinders: ICylinder[];
    fittingColors: IFittingColor[];
    covers: ICover[];
    eyes: IEye[];
    eyeLocations: IEyeLocation[];
    handles: IHandle[];
    wraps: IWrap[];
    patinas: IPatina[];
    typeDecorations: ITypeDecoration[];
    decorations: IDecoration[];
    typeWindows: ITypeWindow[];
    windows: IWindow[];
    locationHinges: ILocationHinge[];
    hingeCounts: IHingeCount[];
    typeHinges: ITypeHinge[];
    thickMetalLeafs: IThickMetal[],
    thickMetalBoxes: IThickMetal[],
    jambs: IJamb[],
    locationJambs: ILocationJamb[],
    sealers: ISealer[],
    colorTints: IColorTint[];
    colorForges: IColorForge[];
    patinaForges: IPatinaForge[];    
}

interface IComputedTables {
    doorThicks: number[];
    baseCovers: ICover[];
    baseCovers2: ICover[];
    optionalCovers: ICover[]; 
    typeDecorationsOutside: ITypeDecoration[];
    typeDecorationsInside: ITypeDecoration[];
    decorationsOutside: IDecoration[];
    decorationsInside: IDecoration[];    
    currentWindows: IWindow[];    
    currentJambs: IJamb[],
}

interface IBlock {
    isDouble: boolean;
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
}

export interface OrderSate {
    isLoading: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isCancel: boolean;
    validateErrors: any;    
    orders: IOrder[];
    staticTables: IStaticTables;
    computedTables: IComputedTables;
    block: IBlock 
    currentOrder: IOrder;
}

const initialStaticTables: IStaticTables = {
    customers: [],
    parties: [],
    models: [], 
    modelBoxes: [],   
    baseLocks: [],
    optionalLocks: [],
    spinners: [],
    cylinders: [],
    covers: [],
    eyes: [],
    eyeLocations: [],
    handles: [],
    typeDecorations: [],
    decorations: [],

    wraps: [],
    patinas: [],
    typeWindows: [],
    windows: [],
    colorTints: [],
    colorForges: [],
    patinaForges: [],
    locationHinges: [],
    hingeCounts: [],
    typeHinges: [],
    thickMetalLeafs: [],
    thickMetalBoxes: [],
    jambs: [],
    locationJambs: [],
    fittingColors: [],
    sealers: []       
}

const initialComputedTables: IComputedTables = {
    doorThicks: [],
    baseCovers: [],
    baseCovers2: [],
    optionalCovers: [],    
    typeDecorationsOutside: [],
    typeDecorationsInside: [],    
    decorationsOutside: [],    
    decorationsInside: [],    
    currentWindows: [],
    currentJambs: [],
}

const initialBlock: IBlock = {
    isDouble: false,
    isLockSpinner: false,
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
    isLocationJamb: false
}

const initialCurrentOrder: IOrder = {        
    customer: "",
    number: "",
    numberCustomer: "",
    party: "",
    
    model: "",         
    doorThick: undefined,
    height: undefined,
    width: undefined,
    modelBox: "",
    widthDouble: undefined,
    
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
    heightWindow: undefined,
    widthWindow: undefined,
    thickWindow: undefined,
    countDoors: "",
    costDoor: "",
    note: "",
    thickMetalLeaf: undefined,
    thickMetalBox: undefined,
    jamb: "",
    jambWrap: "",
    locationJumb: "нет",

    isStainlessDoorStep: false,
    isStreetDoor: false,
    isEccentric: false,
    isBackSheet: false,
    isCloser: false,
    isEnhanceCloser: false,
    isTermoCable: false,
    isElectromagnet: false,
    isIllumination: false,
    sealer: "",

    dateCreate: undefined,
}

const initialState: OrderSate = {
    isLoading: false,
    isFetching: false,
    isSuccess: false,
    isCancel: false,
    validateErrors: {},
    orders: [],
    staticTables: initialStaticTables,    
    computedTables: initialComputedTables,
    block: initialBlock,
    currentOrder: initialCurrentOrder
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => { state.isLoading = action.payload },
        setFetching: (state, action: PayloadAction<boolean>) => { state.isFetching = action.payload },
        setSuccess: (state, action: PayloadAction<boolean>) => { state.isSuccess = action.payload },       
        setCancel: (state, action: PayloadAction<boolean>) => { state.isCancel = action.payload },       
        
        setOrders: (state, action: PayloadAction<IOrder[]>) => { state.orders = action.payload },

        setCustomers: (state, action: PayloadAction<ICustomer[]>) => { state.staticTables.customers = action.payload },
        setParties: (state, action: PayloadAction<IParty[]>) => { state.staticTables.parties = action.payload },
        setModels: (state, action: PayloadAction<IModel[]>) => { state.staticTables.models = action.payload },
        setModelBoxes: (state, action: PayloadAction<IModelBox[]>) => { state.staticTables.modelBoxes = action.payload },        
        setBaseLoks: (state, action: PayloadAction<ILock[]>) => { state.staticTables.baseLocks = action.payload },
        setOptionalLocks: (state, action: PayloadAction<ILock[]>) => { state.staticTables.optionalLocks = action.payload },
        setSpinners: (state, action: PayloadAction<ISpinner[]>) => { state.staticTables.spinners = action.payload },
        setCylinders: (state, action: PayloadAction<ICylinder[]>) => { state.staticTables.cylinders = action.payload },
        setCovers: (state, action: PayloadAction<ICover[]>) => { state.staticTables.covers = action.payload },
        setBaseCovers: (state, action: PayloadAction<ICover[]>) => { state.computedTables.baseCovers = action.payload },
        setBaseCovers2: (state, action: PayloadAction<ICover[]>) => { state.computedTables.baseCovers2 = action.payload },
        setOptionalCovers: (state, action: PayloadAction<ICover[]>) => { state.computedTables.optionalCovers = action.payload },
        setEyes: (state, action: PayloadAction<IEye[]>) => { state.staticTables.eyes = action.payload },
        setEyeLocations: (state, action: PayloadAction<IEyeLocation[]>) => { state.staticTables.eyeLocations = action.payload },
        setHandles: (state, action: PayloadAction<IHandle[]>) => { state.staticTables.handles = action.payload },
        setTypeDecorations: (state, action: PayloadAction<ITypeDecoration[]>) => { state.staticTables.typeDecorations = action.payload },
        setTypeDecorationsOutside: (state, action: PayloadAction<ITypeDecoration[]>) => { state.computedTables.typeDecorationsOutside = action.payload },
        setTypeDecorationsInside: (state, action: PayloadAction<ITypeDecoration[]>) => { state.computedTables.typeDecorationsInside = action.payload },        
        setDoorThicks: (state, action: PayloadAction<number[]>) => { state.computedTables.doorThicks = action.payload },
        setDecorations: (state, action: PayloadAction<IDecoration[]>) => { state.staticTables.decorations = action.payload },
        setDecorationsOutside: (state, action: PayloadAction<IDecoration[]>) => { state.computedTables.decorationsOutside = action.payload },
        setDecorationsInside: (state, action: PayloadAction<IDecoration[]>) => { state.computedTables.decorationsInside = action.payload },
        setWraps: (state, action: PayloadAction<IWrap[]>) => { state.staticTables.wraps = action.payload },
        setPatinas: (state, action: PayloadAction<IPatina[]>) => { state.staticTables.patinas = action.payload },
        setTypeWindows: (state, action: PayloadAction<ITypeWindow[]>) => { state.staticTables.typeWindows = action.payload },
        setWindows: (state, action: PayloadAction<IWindow[]>) => { state.staticTables.windows = action.payload },
        setCurrentWindows: (state, action: PayloadAction<IWindow[]>) => { state.computedTables.currentWindows = action.payload },
        setColorTints: (state, action: PayloadAction<IColorTint[]>) => { state.staticTables.colorTints = action.payload },
        setColorForges: (state, action: PayloadAction<IColorForge[]>) => { state.staticTables.colorForges = action.payload },
        setPatinaForges: (state, action: PayloadAction<IPatinaForge[]>) => { state.staticTables.patinaForges = action.payload },
        
        setLocationHinges: (state, action: PayloadAction<ILocationHinge[]>) => { state.staticTables.locationHinges = action.payload },
        setHingeCounts: (state, action: PayloadAction<IHingeCount[]>) => { state.staticTables.hingeCounts = action.payload },
        setTypeHinges: (state, action: PayloadAction<ITypeHinge[]>) => { state.staticTables.typeHinges = action.payload },        

        setThickMetalLeafs: (state, action: PayloadAction<IThickMetal[]>) => { state.staticTables.thickMetalLeafs = action.payload },
        setThickMetalBoxes: (state, action: PayloadAction<IThickMetal[]>) => { state.staticTables.thickMetalBoxes = action.payload },
        setJambs: (state, action: PayloadAction<IJamb[]>) => { state.staticTables.jambs = action.payload },
        setCurrentJambs: (state, action: PayloadAction<IJamb[]>) => { state.computedTables.currentJambs = action.payload },
        setLocationJambs: (state, action: PayloadAction<ILocationJamb[]>) => { state.staticTables.locationJambs = action.payload },
        setFittingColors: (state, action: PayloadAction<IFittingColor[]>) => { state.staticTables.fittingColors = action.payload },

        setSealers: (state, action: PayloadAction<ISealer[]>) => { state.staticTables.sealers = action.payload },
        
        setId: (state, action: PayloadAction<string>) => { state.currentOrder._id = action.payload },
        setNumber: (state, action: PayloadAction<string>) => { state.currentOrder.number = action.payload },        
        setCustomer: (state, action: PayloadAction<string>) => { state.currentOrder.customer = action.payload },
        setNumberCustomer: (state, action: PayloadAction<string>) => { state.currentOrder.numberCustomer = action.payload },
        setParty: (state, action: PayloadAction<string>) => { state.currentOrder.party = action.payload },
        setCountDoors: (state, action: PayloadAction<number | string>) => { state.currentOrder.countDoors = action.payload },
        setCostDoor: (state, action: PayloadAction<number | string>) => { state.currentOrder.costDoor = action.payload },
        setNote: (state, action: PayloadAction<string>) => { state.currentOrder.note = action.payload }, 
        setModel: (state, action: PayloadAction<string>) => { 
            state.currentOrder.model = action.payload            

            const { models, typeDecorations, jambs } = state.staticTables
            const selectedModel = models.find(item=>item.value === action.payload)!
            
            state.computedTables.typeDecorationsOutside = typeDecorations.filter(item => item.type === selectedModel.typeOutside || item.type === "нет" || item.type === "примечание")
            state.currentOrder.typeDecorationOutside = ""

            state.computedTables.typeDecorationsInside = typeDecorations.filter(item => item.type === selectedModel.typeInside || item.type === "нет" || item.type === "примечание")
            state.currentOrder.typeDecorationInside = ""

            state.computedTables.currentJambs = jambs.filter(item => item.type === selectedModel.typeOutside || item.type === "все" )
            state.currentOrder.jamb = ""            
            
            if (selectedModel.typeOutside === "панель") {
                state.block.isJambWrap =  true
                state.currentOrder.jambWrap = ""
            } else {
                state.block.isJambWrap =  false
                state.currentOrder.jambWrap = "нет"
            }                    

            state.block.isLocationJamb = selectedModel.isInside
            if (selectedModel.isInside === false) {
                state.currentOrder.locationJumb = "нет"            
            } else {
                state.currentOrder.locationJumb = ""
            }

            state.block.isDouble = selectedModel.isDouble
            if (!selectedModel.isDouble) {
                state.currentOrder.widthDouble = 0
            } else {
                state.currentOrder.widthDouble = undefined
            }

            state.computedTables.doorThicks = selectedModel!.doorThicks 
            state.currentOrder.doorThick = undefined

            state.currentOrder.sealer = ""

            state.currentOrder.decorationOutside = ""

            state.block.isWrapOutside = false
            state.currentOrder.wrapOutside = "" 

            state.currentOrder.decorationInside = ""
            state.block.isWrapInside = false
            state.currentOrder.wrapInside = ""

            state.block.isPatinaOutside = false
            state.currentOrder.patinaOutside = ""

            state.currentOrder.typeWindow = ""
            state.currentOrder.doorWindow = ""
            state.currentOrder.colorTint = ""
            state.block.isColorForge = false
            state.currentOrder.colorForge = ""
            state.block.isPatinaForge = false
            state.currentOrder.patinaForge = ""
            state.currentOrder.heightWindow = undefined
            state.currentOrder.widthWindow = undefined
            state.currentOrder.thickWindow = undefined
        },        
        setDoorThick: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.doorThick = action.payload },        
        setModelBox: (state, action: PayloadAction<string>) => { state.currentOrder.modelBox = action.payload },
        setHeight: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.height = action.payload },
        setWidth: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.width = action.payload },
        setWidthDouble: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.widthDouble = action.payload },
        setLocationHinge: (state, action: PayloadAction<string>) => { state.currentOrder.locationHinge = action.payload },
        setTypeHinge: (state, action: PayloadAction<string>) => { state.currentOrder.typeHinge = action.payload },
        setCountHinge: (state, action: PayloadAction<number|string>) => { state.currentOrder.countHinge = action.payload },
        
        setThickMetalLeaf: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.thickMetalLeaf = action.payload },
        setThickMetalBox: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.thickMetalBox = action.payload },

        //Основной замок
        setBaseLock: (state, action: PayloadAction<string>) => { 
            state.currentOrder.baseLock = action.payload
            
            const { baseLocks, covers } = state.staticTables
            const baseLock = baseLocks.find(lock => lock.value === action.payload)
            
            if (baseLock?.isBolt) {
                state.block.isLockSpinner = true
                state.currentOrder.lockSpinner = ""
                state.currentOrder.lockSpinnerColor = ""                
            } else {
                state.block.isLockSpinner = false
                state.currentOrder.lockSpinner = "нет"
                state.currentOrder.lockSpinnerColor = "нет"                 
            }
            
            switch (baseLock?.type) {
                case "цилиндр":
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.block.isBaseCylinder = true                    
                    state.currentOrder.baseCylinder = ""
                    state.block.isBaseCover = true
                    state.currentOrder.baseCoverOutside = ""
                    state.currentOrder.baseCoverColorOutside = ""
                    state.currentOrder.baseCoverInside= ""
                    state.currentOrder.baseCoverColorInside = ""
                    state.block.isBaseCover2 = false
                    state.currentOrder.baseCoverOutside2 = "нет"
                    state.currentOrder.baseCoverColorOutside2 = "нет"
                    state.currentOrder.baseCoverInside2 = "нет"
                    state.currentOrder.baseCoverColorInside2 = "нет"
                    break
                case "цилиндр-сувальда":
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    
                    state.block.isBaseCylinder = true                    
                    state.currentOrder.baseCylinder = ""
                    state.block.isBaseCover = true
                    state.currentOrder.baseCoverOutside = ""
                    state.currentOrder.baseCoverColorOutside = ""
                    state.currentOrder.baseCoverInside= ""
                    state.currentOrder.baseCoverColorInside = ""
                    state.block.isBaseCover2 = true
                    state.currentOrder.baseCoverOutside2 = ""
                    state.currentOrder.baseCoverColorOutside2 = ""
                    state.currentOrder.baseCoverInside2 = ""
                    state.currentOrder.baseCoverColorInside2 = ""                    
                    break
                case "сувальда-цилиндр":
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    
                    state.block.isBaseCylinder = true                    
                    state.currentOrder.baseCylinder = ""
                    state.block.isBaseCover = true
                    state.currentOrder.baseCoverOutside = ""
                    state.currentOrder.baseCoverColorOutside = ""
                    state.currentOrder.baseCoverInside= ""
                    state.currentOrder.baseCoverColorInside = ""
                    state.block.isBaseCover2 = true
                    state.currentOrder.baseCoverOutside2 = ""
                    state.currentOrder.baseCoverColorOutside2 = ""
                    state.currentOrder.baseCoverInside2 = ""
                    state.currentOrder.baseCoverColorInside2 = ""                    
                    break
                case "сувальда":
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.block.isBaseCylinder = false                    
                    state.currentOrder.baseCylinder = "нет"
                    state.block.isBaseCover = true
                    state.currentOrder.baseCoverOutside = ""
                    state.currentOrder.baseCoverColorOutside = ""
                    state.currentOrder.baseCoverInside= ""
                    state.currentOrder.baseCoverColorInside = ""
                    state.block.isBaseCover2 = false
                    state.currentOrder.baseCoverOutside2 = "нет"
                    state.currentOrder.baseCoverColorOutside2 = "нет"
                    state.currentOrder.baseCoverInside2 = "нет"
                    state.currentOrder.baseCoverColorInside2 = "нет"                    
                    break
                case "нет":
                case "другое":
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "нет")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.block.isBaseCylinder = false
                    state.currentOrder.baseCylinder = "нет"

                    state.block.isBaseCover = false
                    state.currentOrder.baseCoverOutside = "нет"
                    state.currentOrder.baseCoverColorOutside = "нет"
                    state.currentOrder.baseCoverInside= "нет"
                    state.currentOrder.baseCoverColorInside = "нет"

                    state.block.isBaseCover2 = false
                    state.currentOrder.baseCoverOutside2 = "нет"
                    state.currentOrder.baseCoverColorOutside2 = "нет"
                    state.currentOrder.baseCoverInside2 = "нет"
                    state.currentOrder.baseCoverColorInside2 = "нет" 
                    break                
                case "примечание":
                    state.computedTables.baseCovers = covers
                    state.computedTables.baseCovers2 = covers

                    state.block.isBaseCylinder = true
                    state.currentOrder.baseCylinder = ""

                    state.block.isBaseCover = true
                    state.currentOrder.baseCoverOutside = ""
                    state.currentOrder.baseCoverColorOutside = ""
                    state.currentOrder.baseCoverInside= ""
                    state.currentOrder.baseCoverColorInside = ""

                    state.block.isBaseCover2 = true
                    state.currentOrder.baseCoverOutside2 = ""
                    state.currentOrder.baseCoverColorOutside2 = ""
                    state.currentOrder.baseCoverInside2 = ""
                    state.currentOrder.baseCoverColorInside2 = ""                    
                    break
                default:
                    state.computedTables.baseCovers = covers.filter(cover => cover.type === "нет")
                    state.computedTables.baseCovers2 = covers.filter(cover => cover.type === "нет")
                    state.block.isBaseCylinder = false
                    state.currentOrder.baseCylinder = "нет"

                    state.block.isBaseCover = false
                    state.currentOrder.baseCoverOutside = "нет"
                    state.currentOrder.baseCoverColorOutside = "нет"
                    state.currentOrder.baseCoverInside= "нет"
                    state.currentOrder.baseCoverColorInside = "нет"

                    state.block.isBaseCover2 = false
                    state.currentOrder.baseCoverOutside2 = "нет"
                    state.currentOrder.baseCoverColorOutside2 = "нет"
                    state.currentOrder.baseCoverInside2 = "нет"
                    state.currentOrder.baseCoverColorInside2 = "нет"
            }
        },
        setBaseCylinder: (state, action: PayloadAction<string>) => { state.currentOrder.baseCylinder = action.payload },        
        setLockSpinner: (state, action: PayloadAction<string>) => { state.currentOrder.lockSpinner = action.payload },
        setLockSpinnerColor: (state, action: PayloadAction<string>) => { state.currentOrder.lockSpinnerColor = action.payload }, 
        
        //Накладки основного замка        
        setBaseCoverOutside: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverOutside = action.payload },        
        setBaseCoverColorOutside: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverColorOutside = action.payload },        
        setBaseCoverInside: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverInside = action.payload },
        setBaseCoverColorInside: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverColorInside = action.payload },

        //Накладки основного замка 2       
        setBaseCoverOutside2: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverOutside2 = action.payload },
        setBaseCoverColorOutside2: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverColorOutside2 = action.payload },        
        setBaseCoverInside2: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverInside2 = action.payload },
        setBaseCoverColorInside2: (state, action: PayloadAction<string>) => { state.currentOrder.baseCoverColorInside2 = action.payload },

        //Дополнительный замок
        setOptionalLock: (state, action: PayloadAction<string>) => {             
            state.currentOrder.optionalLock = action.payload            

            const { optionalLocks, covers } = state.staticTables                    
            const optionalLock = optionalLocks.find(lock => lock.value === action.payload)

            switch (optionalLock?.type) {
                case "цилиндр":
                    state.computedTables.optionalCovers = covers.filter(cover => cover.type === "цилиндр" || cover.type === "нет" || cover.type === "примечание")
                    state.block.isOptionalCylinder = true
                    state.block.isOptionalCover = true
                    state.currentOrder.optionalCylinder = ""                    
                    state.currentOrder.optionalCoverOutside = ""
                    state.currentOrder.optionalCoverColorOutside = ""
                    state.currentOrder.optionalCoverInside = ""
                    state.currentOrder.optionalCoverColorInside = ""
                    break
                case "сувальда":
                    state.computedTables.optionalCovers = covers.filter(cover => cover.type === "сувальда" || cover.type === "нет" || cover.type === "примечание")
                    state.block.isOptionalCylinder = false
                    state.block.isOptionalCover = true
                    state.currentOrder.optionalCylinder = "нет"                    
                    state.currentOrder.optionalCoverOutside = ""
                    state.currentOrder.optionalCoverColorOutside = ""
                    state.currentOrder.optionalCoverInside = ""
                    state.currentOrder.optionalCoverColorInside = ""
                    break  
                case "примечание":
                    state.computedTables.optionalCovers = covers
                    state.block.isOptionalCylinder = true
                    state.block.isOptionalCover = true
                    state.currentOrder.optionalCylinder = ""                    
                    state.currentOrder.optionalCoverOutside = ""
                    state.currentOrder.optionalCoverColorOutside = ""
                    state.currentOrder.optionalCoverInside = ""
                    state.currentOrder.optionalCoverColorInside = ""
                    break
                default:
                    state.computedTables.optionalCovers = covers.filter(cover => cover.type === "нет")
                    state.block.isOptionalCylinder = false
                    state.block.isOptionalCover = false
                    state.currentOrder.optionalCylinder = "нет"                    
                    state.currentOrder.optionalCoverOutside = "нет"
                    state.currentOrder.optionalCoverColorOutside = "нет"
                    state.currentOrder.optionalCoverInside = "нет"
                    state.currentOrder.optionalCoverColorInside = "нет"                  
            } 
        },
        setOptionalCylinder: (state, action: PayloadAction<string>) => { state.currentOrder.optionalCylinder = action.payload },        
        
        //Накладки дополнительного замка       
        setOptonalCoverOutside: (state, action: PayloadAction<string>) => { state.currentOrder.optionalCoverOutside = action.payload },
        setOptonalCoverColorOutside: (state, action: PayloadAction<string>) => { state.currentOrder.optionalCoverColorOutside = action.payload },
        setOptonalCoverInside: (state, action: PayloadAction<string>) => { state.currentOrder.optionalCoverInside = action.payload },
        setOptonalCoverColorInside: (state, action: PayloadAction<string>) => { state.currentOrder.optionalCoverColorInside = action.payload },

        //Глазок
        setEye: (state, action: PayloadAction<string>) => { 
            const eye: string  = action.payload
            state.currentOrder.eye = eye
            if (eye === "нет") {
                state.currentOrder.colorEye = "нет"
                state.currentOrder.eyeLocation = "нет"
            } else {
                state.currentOrder.colorEye = ""
                state.currentOrder.eyeLocation = ""
            }
        },        
        setColorEye: (state, action: PayloadAction<string>) => { state.currentOrder.colorEye = action.payload },        
        setEyeLocation: (state, action: PayloadAction<string>) => { state.currentOrder.eyeLocation = action.payload },

        //Ручка
        setHandle: (state, action: PayloadAction<string>) => { 
            const handle = action.payload
            state.currentOrder.handle = handle
            if (handle === "нет") {
                state.currentOrder.handleColor = "нет"               
            } else {
                state.currentOrder.handleColor = ""  
            }
        },
        setHandleColor: (state, action: PayloadAction<string>) => { state.currentOrder.handleColor = action.payload },

        //Вертушок
        setSpinner: (state, action: PayloadAction<string>) => { 
            const spinner: string = action.payload
            state.currentOrder.spinner = spinner
            if (spinner === "нет") {
                state.currentOrder.spinnerColor = "нет"                              
            } else {
                state.currentOrder.spinnerColor = "" 
            }
        },
        setSpinnerColor: (state, action: PayloadAction<string>) => { state.currentOrder.spinnerColor = action.payload },

        setTypeDecorationOutside: (state, action: PayloadAction<string>) => { 
            state.currentOrder.typeDecorationOutside = action.payload

            const {  decorations } = state.staticTables          
            const { typeDecorationsOutside } = state.computedTables         

            const selectedType = typeDecorationsOutside.find(item => item.value === action.payload)!
            
            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    state.computedTables.decorationsOutside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    state.computedTables.decorationsOutside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }                        

            switch (selectedType.type) {
                case "панель":                                                      
                    state.block.isWrapOutside = true
                    state.block.isPatinaOutside = true
                    state.currentOrder.wrapOutside = ""
                    state.currentOrder.patinaOutside = ""
                    break
                case "металл":                                       
                    state.block.isWrapOutside = false
                    state.block.isPatinaOutside = false
                    state.currentOrder.wrapOutside = "нет"
                    state.currentOrder.patinaOutside = "нет"
                    break
                case "нет":
                case "примечание":
                    state.currentOrder.decorationOutside = "нет" 
                    state.block.isWrapOutside = false
                    state.block.isPatinaOutside = false
                    state.currentOrder.wrapOutside = "нет"
                    state.currentOrder.patinaOutside = "нет"
                    break                
            }
        },
        setDecorationOutside: (state, action: PayloadAction<string>) => { state.currentOrder.decorationOutside = action.payload },        
        setWrapOutside: (state, action: PayloadAction<string>) => { state.currentOrder.wrapOutside = action.payload },        
        setPatinaOutside: (state, action: PayloadAction<string>) => { state.currentOrder.patinaOutside = action.payload },

        setTypeDecorationInside: (state, action: PayloadAction<string>) => { 
            state.currentOrder.typeDecorationInside = action.payload

            const { decorations } = state.staticTables          
            const { typeDecorationsInside } = state.computedTables          
            
            const selectedType = typeDecorationsInside.find(item => item.value === action.payload)!

            switch (selectedType.variety) {
                case "нет":
                case "примечание":
                    state.computedTables.decorationsInside = decorations.filter(item => item.variety === "нет")
                    break
                default: 
                    state.computedTables.decorationsInside = decorations.filter(item => item.variety === selectedType.variety || item.variety === "примечание")
            }
            
            switch (selectedType.type) {
                case "панель":                                                      
                    state.block.isWrapInside = true
                    state.block.isPatinaInside = true
                    state.currentOrder.wrapInside = ""
                    state.currentOrder.patinaInside = ""
                    break
                case "металл":                                       
                    state.block.isWrapInside = false
                    state.block.isPatinaInside = false
                    state.currentOrder.wrapInside = "нет"
                    state.currentOrder.patinaInside = "нет"
                    break
                case "нет":
                case "примечание":
                    state.currentOrder.decorationInside = "нет" 
                    state.block.isWrapInside = false
                    state.block.isPatinaInside = false
                    state.currentOrder.wrapInside = "нет"
                    state.currentOrder.patinaInside = "нет"
                    break
                default:
                    state.currentOrder.decorationInside = "нет" 
                    state.block.isWrapInside = false
                    state.block.isPatinaInside = false
                    state.currentOrder.wrapInside = "нет"
                    state.currentOrder.patinaInside = "нет"              
            }
        },
        setDecorationInside: (state, action: PayloadAction<string>) => { state.currentOrder.decorationInside = action.payload },        
        setWrapInside: (state, action: PayloadAction<string>) => { state.currentOrder.wrapInside = action.payload }, 
        setPatinaInside: (state, action: PayloadAction<string>) => { state.currentOrder.patinaInside = action.payload },        
        
        setLocationJumb: (state, action: PayloadAction<string>) => { state.currentOrder.locationJumb = action.payload },        
        setJamb: (state, action: PayloadAction<string>) => { state.currentOrder.jamb = action.payload },
        setJambWrap: (state, action: PayloadAction<string>) => { state.currentOrder.jambWrap = action.payload }, 

        setTypeWindow: (state, action: PayloadAction<string>) => {
            const { model, doorThick} = state.currentOrder           

            if (model === "" || doorThick === undefined) {                
                return alert("Сначала выберите модель двери и толщину")                
            }

            const { windows, typeWindows } = state.staticTables

            state.currentOrder.typeWindow = action.payload

            const selectedType = typeWindows.find(item => item.value === action.payload)!

            switch (selectedType.type) {
                case "нет":
                case "примечание":    
                    state.currentOrder.doorWindow = "нет"
                    state.currentOrder.colorTint = "нет"
                    state.block.isColorForge = false
                    state.currentOrder.colorForge = "нет"
                    state.block.isPatinaForge = false
                    state.currentOrder.patinaForge = "нет"
                    state.currentOrder.heightWindow = 0
                    state.currentOrder.widthWindow = 0
                    state.currentOrder.thickWindow= 0  
                    break
                case "КС":
                    state.currentOrder.doorWindow = ""
                    state.currentOrder.colorTint = ""
                    state.block.isColorForge = true
                    state.currentOrder.colorForge = ""
                    state.block.isPatinaForge = true
                    state.currentOrder.patinaForge = ""
                    state.currentOrder.heightWindow = undefined
                    state.currentOrder.widthWindow = undefined
                    state.currentOrder.thickWindow= undefined 
                    break 
                case "С":
                    state.currentOrder.doorWindow = ""
                    state.currentOrder.colorTint = ""
                    state.block.isColorForge = false
                    state.currentOrder.colorForge = "нет"
                    state.block.isPatinaForge = false
                    state.currentOrder.patinaForge = "нет"
                    state.currentOrder.heightWindow = undefined
                    state.currentOrder.widthWindow = undefined
                    state.currentOrder.thickWindow= undefined 
                    break
                default:    
                    state.currentOrder.doorWindow = "нет"
                    state.currentOrder.colorTint = "нет"
                    state.block.isColorForge = false
                    state.currentOrder.colorForge = "нет"
                    state.block.isPatinaForge = false
                    state.currentOrder.patinaForge = "нет"
                    state.currentOrder.heightWindow = 0
                    state.currentOrder.widthWindow = 0
                    state.currentOrder.thickWindow= 0 
            }

            state.computedTables.currentWindows = windows.filter(item => item.type === selectedType.type || item.type === "нет" || item.type === "примечание")            
        },
        setDoorWindow: (state, action: PayloadAction<string>) => { 
            state.currentOrder.doorWindow = action.payload

            const {windows, models} = state.staticTables
            const { doorThick, model } = state.currentOrder

            const selectedModel = models.find(item => item.value === model)!
            const selectedWindow = windows.find(item => item.value === action.payload)!
            
            if (selectedModel.isTermo) {
                state.currentOrder.thickWindow = selectedWindow.tTermo
            } else {
                switch (doorThick) {
                    case 60:
                        state.currentOrder.thickWindow = selectedWindow.t60
                        break
                    case 70:
                        state.currentOrder.thickWindow = selectedWindow.t70
                        break
                    case 80:
                        state.currentOrder.thickWindow = selectedWindow.t80
                        break
                    case 90:
                        state.currentOrder.thickWindow = selectedWindow.t90
                        break
                    case 100:
                        state.currentOrder.thickWindow = selectedWindow.t100
                        break       
                }
            } 
            
            state.currentOrder.heightWindow = selectedWindow.height
            state.currentOrder.widthWindow = selectedWindow.width            
        },
        setColorTint: (state, action: PayloadAction<string>) => { state.currentOrder.colorTint = action.payload },
        setColorForge: (state, action: PayloadAction<string>) => { state.currentOrder.colorForge = action.payload },        
        setPatinaForge: (state, action: PayloadAction<string>) => { state.currentOrder.patinaForge = action.payload },        
        setHeightWindow: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.heightWindow = action.payload },
        setWidthWindow: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.widthWindow = action.payload },
        setThickWindow: (state, action: PayloadAction<number | undefined>) => { state.currentOrder.thickWindow = action.payload }, 
        
        setIsStainlessDoorStep: (state, action: PayloadAction<boolean>) => { state.currentOrder.isStainlessDoorStep = action.payload },
        setIsStreetDoor: (state, action: PayloadAction<boolean>) => { state.currentOrder.isStreetDoor = action.payload },
        setIsEccentric: (state, action: PayloadAction<boolean>) => { state.currentOrder.isEccentric = action.payload },
        setIsBackSheet: (state, action: PayloadAction<boolean>) => { state.currentOrder.isBackSheet = action.payload },
        setIsTermoCable: (state, action: PayloadAction<boolean>) => { state.currentOrder.isTermoCable = action.payload },
        setIsCloser: (state, action: PayloadAction<boolean>) => { state.currentOrder.isCloser = action.payload },
        setIsEnhanceCloser: (state, action: PayloadAction<boolean>) => { state.currentOrder.isEnhanceCloser = action.payload },       
        setIsElectromagnet: (state, action: PayloadAction<boolean>) => { state.currentOrder.isElectromagnet = action.payload },
        setIsIllumination: (state, action: PayloadAction<boolean>) => { state.currentOrder.isIllumination = action.payload },

        setSealer: (state, action: PayloadAction<string>) => { state.currentOrder.sealer = action.payload },

        setValidateErrors: (state, action: PayloadAction<object | null>) => { state.validateErrors = action.payload },
        setOrder: (state, action: PayloadAction<IOrder>) => { state.currentOrder = action.payload },
        rebootState: state => initialState,
        rebootCurrentOrder: state => { state.currentOrder = initialCurrentOrder },        
        rebootBlock: state => { state.block = initialBlock },     
        rebootComputedTables: state => { state.computedTables = initialComputedTables },
        rebootOtherState: state => { 
            state.isLoading = false
            state.isFetching = false
            state.isSuccess = false
            state.isCancel = false
            state.orders = []
        },      
    }
})

export const orderActions = orderSlice.actions

export default orderSlice.reducer