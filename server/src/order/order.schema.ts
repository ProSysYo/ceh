import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    //@Prop({ unique: true, required: true })
    @Prop({ required: true })
    customer: string;

    @Prop({ required: true })
    number: string;

    @Prop({ required: true })
    numberCustomer: string;

    @Prop({ required: true })
    party: string;   

    @Prop({ required: true })
    model: string;    

    @Prop({ required: true })
    doorThick: number

    @Prop({ required: true })
    height: number;

    @Prop({ required: true })
    width: number;

    @Prop({ required: true })
    modelBox: string;

    @Prop({ required: true })
    widthDouble: number;

    @Prop({ required: true })
    locationHinge: string;

    @Prop({ required: true })
    countHinge: number;

    @Prop({ required: true })
    typeHinge: string;

    //Основной замок
    @Prop({ required: true })
    baseLock: string;

    @Prop({ required: true })
    lockSpinner: string;

    @Prop({ required: true })
    lockSpinnerColor: string;

    @Prop({ required: true })
    baseCylinder: string;

    //Накладки основного замка
    @Prop({ required: true })
    baseCoverOutside: string;
    
    @Prop({ required: true })
    baseCoverColorOutside: string;

    @Prop({ required: true })
    baseCoverInside: string;

    @Prop({ required: true })
    baseCoverColorInside: string;

    //Накладки основного замка 2
    @Prop({ required: true })
    baseCoverOutside2: string;

    @Prop({ required: true })
    baseCoverColorOutside2: string;

    @Prop({ required: true })
    baseCoverInside2: string;

    @Prop({ required: true })
    baseCoverColorInside2: string;

    //Дополнительный замок
    @Prop({ required: true })
    optionalLock: string;

    @Prop({ required: true })
    optionalCylinder: string;

    //Накладки дополнительного замка
    @Prop({ required: true })
    optionalCoverOutside: string;

    @Prop({ required: true })
    optionalCoverColorOutside: string;

    @Prop({ required: true })
    optionalCoverInside: string;

    @Prop({ required: true })
    optionalCoverColorInside: string;

    //Глазок
    @Prop({ required: true })
    eye: string;

    @Prop({ required: true })
    colorEye: string;

    @Prop({ required: true })
    eyeLocation: string;

    //Ручка
    @Prop({ required: true })
    handle: string;

    @Prop({ required: true })
    handleColor: string;

    //Вертушок
    @Prop({ required: true })
    spinner: string;

    @Prop({ required: true })
    spinnerColor: string;

    //Отделка снаружи
    @Prop({ required: true })
    typeDecorationOutside: string;

    @Prop({ required: true })
    decorationOutside: string;

    @Prop({ required: true })
    wrapOutside: string;

    @Prop({ required: true })
    patinaOutside: string; 
    
    //Отделка внутри
    @Prop({ required: true })
    typeDecorationInside: string;

    @Prop({ required: true })
    wrapInside: string;    

    @Prop({ required: true })
    patinaInside: string;

    @Prop({ required: true })
    decorationInside: string;

    //Окно
    @Prop({ required: true })
    typeWindow: string;

    @Prop({ required: true })
    doorWindow: string;

    @Prop({ required: true })
    colorTint: string;

    @Prop({ required: true })
    colorForge: string;

    @Prop({ required: true })
    patinaForge: string;

    @Prop({ required: true })
    heightWindow: number;

    @Prop({ required: true })
    widthWindow: number;

    @Prop({ required: true })
    thickWindow: number;

    @Prop({ required: true })
    countDoors: number;

    @Prop({ required: true })
    costDoor: number;
    
    @Prop()
    note: string;

    //Толщина металла
    @Prop({ required: true })
    thickMetalLeaf: number;

    @Prop({ required: true })
    thickMetalBox: number;

    @Prop({ required: true })
    jamb: string;

    @Prop({ required: true })
    jambWrap: string;

    @Prop({ required: true })
    locationJumb: string;
    
    @Prop()
    isStainlessDoorStep: boolean //порог из нержавейки

    @Prop()
    isStreetDoor: boolean;
    
    @Prop()
    isEccentric: boolean;

    @Prop()
    isBackSheet: boolean;

    @Prop()
    isCloser: boolean; //доводчик

    @Prop()
    isEnhanceCloser: boolean; //Училение под доводчик

    @Prop()
    isTermoCable: boolean; //Термокабель

    @Prop()
    isElectromagnet: boolean; //Электромагнит

    @Prop()
    isIllumination: boolean;

    @Prop()
    sealer: string;
}

export const OrdreSchema = SchemaFactory.createForClass(Order);
