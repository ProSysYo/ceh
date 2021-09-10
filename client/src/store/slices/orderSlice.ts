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

    isLoading: boolean;
    isLockSpinner: boolean;
    isBaseCylinder: boolean;
    isBaseCover2: boolean;

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
    isLoading: false,
    isLockSpinner: false,
    isBaseCylinder: false,
    isBaseCover2: false,

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
        baseLock: "",
        optionalLock: "",
        lockSpinner: "нет",
        baseCylinder: "нет",
        baseCoverOutside: "",
        baseCoverInside: "",
        baseCoverOutside2: "нет",
        baseCoverInside2: "нет",
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        
        setCustomers: (state, action: PayloadAction<ICustomer[]>) => {
            state.customers = action.payload
        },

        setParties: (state, action: PayloadAction<[]>) => {
            state.parties = action.payload
        },

        setModels: (state, action: PayloadAction<[]>) => {
            state.models = action.payload
        },

        setModelBoxes: (state, action: PayloadAction<IModelBox[]>) => {
            state.modelBoxes = action.payload
        },

        setOpeningTypes: (state, action: PayloadAction<IOpeningType[]>) => {
            state.openingTypes = action.payload
        },

        setBaseLoks: (state, action: PayloadAction<ILock[]>) => {
            state.baseLocks = action.payload
        },

        setOptionalLocks: (state, action: PayloadAction<ILock[]>) => {
            state.optionalLocks = action.payload
        },

        setSpinners: (state, action: PayloadAction<ISpinner[]>) => {
            state.spinners = action.payload
        },

        setCylinders: (state, action: PayloadAction<ICylinder[]>) => {
            state.cylinders = action.payload
        },

        setCovers: (state, action: PayloadAction<ICover[]>) => {
            state.covers = action.payload
        },

        setBaseCovers: (state, action: PayloadAction<ICover[]>) => {
            state.baseCovers = action.payload
        },

        setBaseCovers2: (state, action: PayloadAction<ICover[]>) => {
            state.baseCovers2 = action.payload
        },

        //---------

        setNumberCustomer: (state, action: PayloadAction<string>) => {
            state.order.numberCustomer = action.payload
        },

        setCustomer: (state, action: PayloadAction<string>) => {
            state.order.customer = action.payload
        },

        setParty: (state, action: PayloadAction<string>) => {
            state.order.party = action.payload
        },

        setModel: (state, action: PayloadAction<string>) => {
            state.order.model = action.payload
        },

        setContours: (state, action: PayloadAction<string>) => {
            const model = state.models.find(model => model.value === action.payload)
            const contours = model!.contours
            state.contours = contours
        },

        setDoorThicks: (state, action: PayloadAction<string>) => {
            const model = state.models.find(model => model.value === action.payload)
            const doorThicks = model!.doorThicks
            state.doorThicks = doorThicks
        },

        checkSelectedContour: (state) => {
            const contour = state.contours.find(contour => contour === state.order.contour)
            if (!contour) {
                state.order.contour = ""
            }
        },

        checkSelectedDoorThick: (state) => {
            const thick = state.doorThicks.find(thick => thick === state.order.doorThick)
            if (!thick) {
                state.order.doorThick = ""
            }
        },

        setContour: (state, action: PayloadAction<string | number>) => {
            state.order.contour = action.payload
        },

        setDoorThick: (state, action: PayloadAction<string | number>) => {
            state.order.doorThick = action.payload
        },

        setHeight: (state, action: PayloadAction<string | number>) => {
            state.order.height = action.payload
        },

        setWidth: (state, action: PayloadAction<string | number>) => {
            state.order.width = action.payload
        },

        setModelBox: (state, action: PayloadAction<string>) => {
            state.order.modelBox = action.payload
        },

        setOpeningType: (state, action: PayloadAction<string>) => {
            state.order.openingType = action.payload
        },

        setIsDouble: (state, action: PayloadAction<boolean>) => {
            state.order.isDouble = action.payload
        },

        setWidthDouble: (state, action: PayloadAction<number | string>) => {
            state.order.widthDouble = action.payload
        },

        setBaseLock: (state, action: PayloadAction<string>) => {
            state.order.baseLock = action.payload
        },

        setLockSpinner: (state, action: PayloadAction<string>) => {
            state.order.lockSpinner = action.payload
        },

        setIsLockSpinner: (state, action: PayloadAction<boolean>) => {
            state.isLockSpinner = action.payload
        },

        setBaseCylinder: (state, action: PayloadAction<string>) => {
            state.order.baseCylinder = action.payload
        },
        
        setIsBaseCylinder: (state, action: PayloadAction<boolean>) => {
            state.isBaseCylinder = action.payload
        },

        setBaseCoverOutside: (state, action: PayloadAction<string>) => {
            state.order.baseCoverOutside = action.payload
        },

        setBaseCoverInside: (state, action: PayloadAction<string>) => {
            state.order.baseCoverInside = action.payload
        },

        setBaseCoverOutside2: (state, action: PayloadAction<string>) => {
            state.order.baseCoverOutside2 = action.payload
        },

        setBaseCoverInside2: (state, action: PayloadAction<string>) => {
            state.order.baseCoverInside2 = action.payload
        },

        setIsBaseCover2: (state, action: PayloadAction<boolean>) => {
            state.isBaseCover2 = action.payload
        },

        setOptionalLock: (state, action: PayloadAction<string>) => {
            state.order.optionalLock = action.payload
        }

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
    setModels,
    setContours,
    setDoorThicks,
    setCylinders,
    setCovers,
    setBaseCovers,
    setBaseCovers2,
    checkSelectedContour,
    checkSelectedDoorThick,
    setHeight,
    setWidth,
    setModelBox,
    setModelBoxes,
    setOpeningTypes,
    setOpeningType,
    setWidthDouble,
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
    setOptionalLock
} = orderSlice.actions

export default orderSlice.reducer