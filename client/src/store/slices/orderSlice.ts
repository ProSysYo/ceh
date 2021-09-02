import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { IOrder } from '../../interfaces/IOrder';
import { IParty } from '../../interfaces/IParty';
import { IModel } from '../../interfaces/IModel';
import { IModelBox } from '../../interfaces/IModelBox';
import { IOpeningType } from '../../interfaces/IOpeningType';
import { ILock } from '../../interfaces/ILock';

interface OrderSate {
  customers: ICustomer[];
  parties: IParty[];
  models: IModel[];
  contours: number[];
  isLoading: boolean;
  order: IOrder;
  doorThicks: number[];
  modelBoxes: IModelBox[]
  openingTypes: IOpeningType[];  
  baseLocks: ILock[],
  optionalLocks: ILock[]
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
  isLoading: false,
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
    baseLock: ""
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

    setOptionalLoks: (state, action: PayloadAction<ILock[]>) => {
      state.optionalLocks = action.payload
    },

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
      const model =  state.models.find(model => model.value === action.payload)      
      const contours = model!.contours
      state.contours = contours
    },

    setDoorThicks: (state, action: PayloadAction<string>) => {
      const model =  state.models.find(model => model.value === action.payload)
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
  setOptionalLoks,
  setBaseLock
} = orderSlice.actions

export default orderSlice.reducer