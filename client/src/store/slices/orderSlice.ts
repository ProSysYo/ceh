import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { IOrder, IOrderNum, IOrderStr, IOrderBool } from '../../interfaces/IOrder';
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
import { api, tables } from '../../api/api';


export interface IStaticTables {
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
    _id: "",
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
    countHinge: undefined,

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
    countDoors: undefined,
    costDoor: undefined,
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

export const fetchTables = createAsyncThunk(
    'order/tables',
    async (tableName: tables) => {
        const response = await api.fetchTableByName(tableName)        
        return {
            data: response.data,
            tableName
        }
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => { state.isLoading = action.payload },
        setFetching: (state, action: PayloadAction<boolean>) => { state.isFetching = action.payload },
        setSuccess: (state, action: PayloadAction<boolean>) => { state.isSuccess = action.payload },
        setCancel: (state, action: PayloadAction<boolean>) => { state.isCancel = action.payload },

        setOrders: (state, action: PayloadAction<IOrder[]>) => { state.orders = action.payload }, 

        setOrderFieldStr: (state, action: PayloadAction<{fieldName: keyof IOrderStr, value: string}>) => { state.currentOrder[action.payload.fieldName] = action.payload.value },
        setOrderFieldNum: (state, action: PayloadAction<{fieldName: keyof IOrderNum, value: number | undefined}>) => { state.currentOrder[action.payload.fieldName] = action.payload.value },
        setOrderFieldBool: (state, action: PayloadAction<{fieldName: keyof IOrderBool, value: boolean}>) => { state.currentOrder[action.payload.fieldName] = action.payload.value },
        
        setValidateErrors: (state, action: PayloadAction<object | null>) => { state.validateErrors = action.payload },
        setOrder: (state, action: PayloadAction<IOrder>) => { state.currentOrder = action.payload },

        setModel: (state, action: PayloadAction<string>) => {
            state.currentOrder.model = action.payload

            const { models, typeDecorations, jambs } = state.staticTables
            const selectedModel = models.find(item => item.value === action.payload)!

            state.computedTables.typeDecorationsOutside = typeDecorations.filter(item => item.type === selectedModel.typeOutside || item.type === "нет" || item.type === "примечание")
            state.currentOrder.typeDecorationOutside = ""

            state.computedTables.typeDecorationsInside = typeDecorations.filter(item => item.type === selectedModel.typeInside || item.type === "нет" || item.type === "примечание")
            state.currentOrder.typeDecorationInside = ""

            state.computedTables.currentJambs = jambs.filter(item => item.type === selectedModel.typeOutside || item.type === "все")
            state.currentOrder.jamb = ""

            if (selectedModel.typeOutside === "панель") {
                state.block.isJambWrap = true
                state.currentOrder.jambWrap = ""
            } else {
                state.block.isJambWrap = false
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
                    state.currentOrder.baseCoverInside = ""
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
                    state.currentOrder.baseCoverInside = ""
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
                    state.currentOrder.baseCoverInside = ""
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
                    state.currentOrder.baseCoverInside = ""
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
                    state.currentOrder.baseCoverInside = "нет"
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
                    state.currentOrder.baseCoverInside = ""
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
                    state.currentOrder.baseCoverInside = "нет"
                    state.currentOrder.baseCoverColorInside = "нет"

                    state.block.isBaseCover2 = false
                    state.currentOrder.baseCoverOutside2 = "нет"
                    state.currentOrder.baseCoverColorOutside2 = "нет"
                    state.currentOrder.baseCoverInside2 = "нет"
                    state.currentOrder.baseCoverColorInside2 = "нет"
            }
        }, 
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
        setEye: (state, action: PayloadAction<string>) => {
            const eye: string = action.payload
            state.currentOrder.eye = eye
            if (eye === "нет") {
                state.currentOrder.colorEye = "нет"
                state.currentOrder.eyeLocation = "нет"
            } else {
                state.currentOrder.colorEye = ""
                state.currentOrder.eyeLocation = ""
            }
        }, 
        setHandle: (state, action: PayloadAction<string>) => {
            const handle = action.payload
            state.currentOrder.handle = handle
            if (handle === "нет") {
                state.currentOrder.handleColor = "нет"
            } else {
                state.currentOrder.handleColor = ""
            }
        }, 
        setSpinner: (state, action: PayloadAction<string>) => {
            const spinner: string = action.payload
            state.currentOrder.spinner = spinner
            if (spinner === "нет") {
                state.currentOrder.spinnerColor = "нет"
            } else {
                state.currentOrder.spinnerColor = ""
            }
        },
        setTypeDecorationOutside: (state, action: PayloadAction<string>) => {
            state.currentOrder.typeDecorationOutside = action.payload

            const { decorations } = state.staticTables
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

        setTypeWindow: (state, action: PayloadAction<string>) => {
            const { model, doorThick } = state.currentOrder

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
                    state.currentOrder.thickWindow = 0
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
                    state.currentOrder.thickWindow = undefined
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
                    state.currentOrder.thickWindow = undefined
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
                    state.currentOrder.thickWindow = 0
            }

            state.computedTables.currentWindows = windows.filter(item => item.type === selectedType.type || item.type === "нет" || item.type === "примечание")
        },
        setDoorWindow: (state, action: PayloadAction<string>) => {
            state.currentOrder.doorWindow = action.payload

            const { windows, models } = state.staticTables
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
    },
    extraReducers: (builder) => {        
        builder.addCase(fetchTables.fulfilled, (state, action) => {
            const { data, tableName } = action.payload
            state.staticTables[tableName as keyof IStaticTables] = data
            if (tableName === 'locks') {
                state.staticTables.baseLocks = data.filter((lock: ILock) => lock.installation === "основной" || lock.installation === "нет" || lock.installation === "примечание")
                state.staticTables.optionalLocks = data.filter((lock : ILock) => lock.installation === "дополнительный" || lock.installation === "нет" || lock.installation === "примечание")
            } 
        })
    }
})  

export const orderActions = orderSlice.actions

export default orderSlice.reducer