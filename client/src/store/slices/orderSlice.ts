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

interface OrderSate {
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
    typeHinges: ITypeHinge[];
    thickMetalLeafs: IThickMetal[],
    thickMetalBoxes: IThickMetal[],
    jambs: IJamb[],
    currentJambs: IJamb[],
    locationJambs: ILocationJamb[],

    isLoading: boolean;
    isLockSpinner: boolean;
    isBaseCylinder: boolean;
    isBaseCover2: boolean;
    isOptionalCylinder: boolean;
    isWrapOutside: boolean;
    isWrapInside: boolean;
    isPatinaOutside: boolean;
    isPatinaInside: boolean;
    isColorForge: boolean;
    isPatinaForge: boolean;
    isJambWrap: boolean;
    isLocationJamb: boolean;

    order: IOrder;
}

const initialState: OrderSate = {
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
    typeHinges: [],
    thickMetalLeafs: [],
    thickMetalBoxes: [],
    jambs: [],
    currentJambs: [],
    locationJambs: [],

    isLoading: false,
    isLockSpinner: false,
    isBaseCylinder: false,
    isBaseCover2: false,
    isOptionalCylinder: false,
    isWrapOutside: false,
    isWrapInside: false,
    isPatinaOutside: false,
    isPatinaInside: false,
    isColorForge: false,
    isPatinaForge: false,
    isJambWrap: false,
    isLocationJamb: false,

    order: {
        customer: "",
        number: "",
        numberCustomer: "",
        party: "",
        model: "",
        contour: "",
        doorThick: "",
        height: "",
        width: "",
        modelBox: "",
        openingType: "",
        isDouble: false,
        widthDouble: "",
        locationHinge: "",
        isThreeHinge: false,
        typeHinge: "",
        baseLock: "",
        lockSpinner: "нет",
        baseCylinder: "нет",
        baseCoverOutside: "",
        baseCoverInside: "",
        baseCoverOutside2: "нет",
        baseCoverInside2: "нет",
        optionalLock: "",
        optionalCylinder: "нет",
        optionalCoverOutside: "",
        optionalCoverInside: "",
        eye: "",
        eyeLocation: "",
        handle: "",
        spinner: "",
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
        thickMetalLeaf: "",
        thickMetalBox: "",
        jamb: "",
        jambWrap: "",
        locationJumb: "",
        isStainlessDoorStep: false,
        isStreetDoor: false,
        isEccentric: false,
        isBackSheet: false,
        isCloser: false,
        isEnhanceCloser: false,
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => { state.isLoading = action.payload },
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
        setWraps: (state, action: PayloadAction<IWrap[]>) => { state.wraps = action.payload },
        setPatinas: (state, action: PayloadAction<IPatina[]>) => { state.patinas = action.payload },
        setTypeWindows: (state, action: PayloadAction<ITypeWindow[]>) => { state.typeWindows = action.payload },
        setWindows: (state, action: PayloadAction<IWindow[]>) => { state.windows = action.payload },
        setCurrentWindows: (state, action: PayloadAction<IWindow[]>) => { state.currentWindows = action.payload },
        setColorTints: (state, action: PayloadAction<IColorTint[]>) => { state.colorTints = action.payload },
        setColorForges: (state, action: PayloadAction<IColorForge[]>) => { state.colorForges = action.payload },
        setPatinaForges: (state, action: PayloadAction<IPatinaForge[]>) => { state.patinaForges = action.payload },
        setLocationHinges: (state, action: PayloadAction<ILocationHinge[]>) => { state.locationHinges = action.payload },
        setTypeHinges: (state, action: PayloadAction<ITypeHinge[]>) => { state.typeHinges = action.payload },
        setThickMetalLeafs: (state, action: PayloadAction<IThickMetal[]>) => { state.thickMetalLeafs = action.payload },
        setThickMetalBoxes: (state, action: PayloadAction<IThickMetal[]>) => { state.thickMetalBoxes = action.payload },
        setJambs: (state, action: PayloadAction<IJamb[]>) => { state.jambs = action.payload },
        setCurrentJambs: (state, action: PayloadAction<IJamb[]>) => { state.currentJambs = action.payload },
        setLocationJambs: (state, action: PayloadAction<ILocationJamb[]>) => { state.locationJambs = action.payload },

        setNumberCustomer: (state, action: PayloadAction<string>) => { state.order.numberCustomer = action.payload },
        setCustomer: (state, action: PayloadAction<string>) => { state.order.customer = action.payload },
        setParty: (state, action: PayloadAction<string>) => { state.order.party = action.payload },
        setModel: (state, action: PayloadAction<string>) => { state.order.model = action.payload },
        setContour: (state, action: PayloadAction<string | number>) => { state.order.contour = action.payload },
        setDoorThick: (state, action: PayloadAction<string | number>) => { state.order.doorThick = action.payload },
        setHeight: (state, action: PayloadAction<string | number>) => { state.order.height = action.payload },
        setWidth: (state, action: PayloadAction<string | number>) => { state.order.width = action.payload },
        setModelBox: (state, action: PayloadAction<string>) => { state.order.modelBox = action.payload },
        setOpeningType: (state, action: PayloadAction<string>) => { state.order.openingType = action.payload },
        setIsDouble: (state, action: PayloadAction<boolean>) => { state.order.isDouble = action.payload },
        setWidthDouble: (state, action: PayloadAction<number | string>) => { state.order.widthDouble = action.payload },
        setLocationHinge: (state, action: PayloadAction<string>) => { state.order.locationHinge = action.payload },
        setBaseLock: (state, action: PayloadAction<string>) => { state.order.baseLock = action.payload },
        setLockSpinner: (state, action: PayloadAction<string>) => { state.order.lockSpinner = action.payload },
        setIsLockSpinner: (state, action: PayloadAction<boolean>) => { state.isLockSpinner = action.payload },
        setBaseCylinder: (state, action: PayloadAction<string>) => { state.order.baseCylinder = action.payload },
        setIsBaseCylinder: (state, action: PayloadAction<boolean>) => { state.isBaseCylinder = action.payload },
        setBaseCoverOutside: (state, action: PayloadAction<string>) => { state.order.baseCoverOutside = action.payload },
        setBaseCoverInside: (state, action: PayloadAction<string>) => { state.order.baseCoverInside = action.payload },
        setBaseCoverOutside2: (state, action: PayloadAction<string>) => { state.order.baseCoverOutside2 = action.payload },
        setBaseCoverInside2: (state, action: PayloadAction<string>) => { state.order.baseCoverInside2 = action.payload },
        setIsBaseCover2: (state, action: PayloadAction<boolean>) => { state.isBaseCover2 = action.payload },
        setOptionalLock: (state, action: PayloadAction<string>) => { state.order.optionalLock = action.payload },
        setOptionalCylinder: (state, action: PayloadAction<string>) => { state.order.optionalCylinder = action.payload },
        setIsOptonalCylinder: (state, action: PayloadAction<boolean>) => { state.isOptionalCylinder = action.payload },
        setIsOptonalCoverOutside: (state, action: PayloadAction<string>) => { state.order.optionalCoverOutside = action.payload },
        setIsOptonalCoverInside: (state, action: PayloadAction<string>) => { state.order.optionalCoverInside = action.payload },
        setEye: (state, action: PayloadAction<string>) => { state.order.eye = action.payload },
        setEyeLocation: (state, action: PayloadAction<string>) => { state.order.eyeLocation = action.payload },
        setHandle: (state, action: PayloadAction<string>) => { state.order.handle = action.payload },
        setSpinner: (state, action: PayloadAction<string>) => { state.order.spinner = action.payload },
        setTypeDecorationOutside: (state, action: PayloadAction<string>) => { state.order.typeDecorationOutside = action.payload },
        setTypeDecorationInside: (state, action: PayloadAction<string>) => { state.order.typeDecorationInside = action.payload },
        setDecorationOutside: (state, action: PayloadAction<string>) => { state.order.decorationOutside = action.payload },
        setWrapOutside: (state, action: PayloadAction<string>) => { state.order.wrapOutside = action.payload },
        setWrapInside: (state, action: PayloadAction<string>) => { state.order.wrapInside = action.payload },
        setIsWrapOutside: (state, action: PayloadAction<boolean>) => { state.isWrapOutside = action.payload },
        setIsPatinaOutside: (state, action: PayloadAction<boolean>) => { state.isPatinaOutside = action.payload },
        setPatinaOutside: (state, action: PayloadAction<string>) => { state.order.patinaOutside = action.payload },
        setIsWrapInside: (state, action: PayloadAction<boolean>) => { state.isWrapInside = action.payload },
        setDecorationsInside: (state, action: PayloadAction<IDecoration[]>) => { state.decorationsInside = action.payload },
        setDecorationInside: (state, action: PayloadAction<string>) => { state.order.decorationInside = action.payload },
        setPatinaInside: (state, action: PayloadAction<string>) => { state.order.patinaInside = action.payload },
        setIsPatinaInside: (state, action: PayloadAction<boolean>) => { state.isPatinaInside = action.payload },
        setTypeWindow: (state, action: PayloadAction<string>) => { state.order.typeWindow = action.payload },
        setDoorWindow: (state, action: PayloadAction<string>) => { state.order.doorWindow = action.payload },
        setColorTint: (state, action: PayloadAction<string>) => { state.order.colorTint = action.payload },
        setColorForge: (state, action: PayloadAction<string>) => { state.order.colorForge = action.payload },
        setIsColorForge: (state, action: PayloadAction<boolean>) => { state.isColorForge = action.payload },
        setPatinaForge: (state, action: PayloadAction<string>) => { state.order.patinaForge = action.payload },
        setIsPatinaForge: (state, action: PayloadAction<boolean>) => { state.isPatinaForge = action.payload },
        setHeightWindow: (state, action: PayloadAction<number | string>) => { state.order.heightWindow = action.payload },
        setWidthWindow: (state, action: PayloadAction<number | string>) => { state.order.widthWindow = action.payload },
        setThickWindow: (state, action: PayloadAction<number | string>) => { state.order.thickWindow = action.payload },
        setCountDoors: (state, action: PayloadAction<number>) => { state.order.countDoors = action.payload },
        setCostDoor: (state, action: PayloadAction<number>) => { state.order.costDoor = action.payload },
        setNote: (state, action: PayloadAction<string>) => { state.order.note = action.payload },
        setIsThreeHinge: (state, action: PayloadAction<boolean>) => { state.order.isThreeHinge = action.payload },
        setTypeHinge: (state, action: PayloadAction<string>) => { state.order.typeHinge = action.payload },
        setThickMetalLeaf: (state, action: PayloadAction<number>) => { state.order.thickMetalLeaf = action.payload },
        setThickMetalBox: (state, action: PayloadAction<number>) => { state.order.thickMetalBox = action.payload },
        setJamb: (state, action: PayloadAction<string>) => { state.order.jamb = action.payload },
        setJambWrap: (state, action: PayloadAction<string>) => { state.order.jambWrap = action.payload },
        setIsJambWrap: (state, action: PayloadAction<boolean>) => { state.isJambWrap = action.payload },
        setIsLocationJumb: (state, action: PayloadAction<boolean>) => { state.isLocationJamb = action.payload },
        setLocationJumb: (state, action: PayloadAction<string>) => { state.order.locationJumb = action.payload },
        setIsStainlessDoorStep: (state, action: PayloadAction<boolean>) => { state.order.isStainlessDoorStep = action.payload },
        setIsStreetDoor: (state, action: PayloadAction<boolean>) => { state.order.isStreetDoor = action.payload },
        setIsEccentric: (state, action: PayloadAction<boolean>) => { state.order.isEccentric = action.payload },
        setIsBackSheet: (state, action: PayloadAction<boolean>) => { state.order.isBackSheet = action.payload },
        setIsCloser: (state, action: PayloadAction<boolean>) => { state.order.isCloser = action.payload },
        setIsEnhanceCloser: (state, action: PayloadAction<boolean>) => { state.order.isEnhanceCloser = action.payload },
    }
})

export const {
    setCustomer,
    setNumberCustomer,
    setParty,
    setModel,
    setContour,
    setDoorThick,
    setCustomers,
    setParties,
    setCountDoors,
    setCostDoor,
    setNote,
    setModels,
    setContours,
    setDoorThicks,
    setCylinders,
    setCovers,
    setBaseCovers,
    setBaseCovers2,
    setHeight,
    setWidth,
    setModelBox,
    setModelBoxes,
    setOpeningTypes,
    setOpeningType,
    setWidthDouble,
    setLocationHinge,
    setIsThreeHinge,
    setIsDouble,
    setLoading,
    setBaseLoks,
    setOptionalLocks,
    setBaseLock,
    setSpinners,
    setLockSpinner,
    setIsLockSpinner,
    setBaseCylinder,
    setIsBaseCylinder,
    setBaseCoverOutside,
    setBaseCoverInside,
    setBaseCoverOutside2,
    setBaseCoverInside2,
    setIsBaseCover2,
    setOptionalLock,
    setOptionalCylinder,
    setIsOptonalCylinder,
    setOptionalCovers,
    setIsOptonalCoverOutside,
    setIsOptonalCoverInside,
    setEyes,
    setEye,
    setHandles,
    setHandle,
    setSpinner,
    setTypeDecorations,
    setTypeDecorationsOutside,
    setTypeDecorationsInside,
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
    setIsPatinaOutside,
    setPatinaOutside,
    setIsWrapInside,
    setDecorationInside,
    setDecorationsInside,
    setPatinaInside,
    setIsPatinaInside,
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
    setIsPatinaForge,
    setIsColorForge,
    setLocationHinges,
    setTypeHinges,
    setTypeHinge,
    setThickMetalLeafs,
    setThickMetalLeaf,
    setThickMetalBoxes,
    setThickMetalBox,
    setEyeLocations,
    setEyeLocation,
    setJambs,
    setJamb,
    setCurrentJambs,
    setJambWrap,
    setIsJambWrap,
    setLocationJambs,
    setIsLocationJumb,
    setLocationJumb,
    setIsStainlessDoorStep,
    setIsStreetDoor,
    setIsEccentric,
    setIsBackSheet,
    setIsCloser,
    setIsEnhanceCloser,
} = orderSlice.actions

export default orderSlice.reducer