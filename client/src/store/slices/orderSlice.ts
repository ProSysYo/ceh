import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomer } from '../../interfaces/ICustomer';
import { IOrder } from '../../interfaces/IOrder';
import { IParty } from '../../interfaces/IParty';
import { IModel } from '../../interfaces/IModel';
import { IModelBox } from '../../interfaces/IModelBox';

interface OrderSate {
  customers: ICustomer[];
  parties: IParty[];
  models: IModel[];
  contours: number[];
  status: string;
  order: IOrder;
  doorThicks: number[];
  modelBoxes: IModelBox[]
}

const initialState: OrderSate = {
  customers: [],
  parties: [],
  models: [],
  contours: [],
  doorThicks: [],
  modelBoxes: [],
  status: "",
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
    modelBox: ""
  }
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: { 
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

    setContour: (state, action: PayloadAction<string>) => {
      state.order.contour = action.payload
    },

    setDoorThick: (state, action: PayloadAction<string>) => {
      state.order.doorThick = action.payload
    },

    setHeight: (state, action: PayloadAction<string>) => {
      state.order.height = action.payload
    },

    setWidth: (state, action: PayloadAction<string>) => {
      state.order.width = action.payload
    },

    setModelBox: (state, action: PayloadAction<string>) => {
      state.order.modelBox = action.payload
    },

  }  
})

export const {
  setCustomer, setNumberCustomer, setParty, setModel, setContour,
  setDoorThick, setCustomers, setParties, setModels, setContours, 
  setDoorThicks, checkSelectedContour, checkSelectedDoorThick,
  setHeight, setWidth, setModelBox, setModelBoxes
} = orderSlice.actions

export default orderSlice.reducer