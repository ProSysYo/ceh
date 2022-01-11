import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";

export type OrderDocument = Order & Document;

@Table({tableName: 'orders'})
export class Order extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    number: string;

    @Column({type: DataType.STRING, allowNull: false})
    customer: string;

    @Column({type: DataType.STRING, allowNull: false})
    numberCustomer: string;

    @Column({type: DataType.STRING, allowNull: false})
    party: string;   

    @Column({type: DataType.STRING, allowNull: false})
    model: string;    

    @Column({type: DataType.INTEGER, allowNull: false})
    doorThick: number

    @Column({type: DataType.INTEGER, allowNull: false})
    height: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    width: number;

    @Column({type: DataType.STRING, allowNull: false})
    modelBox: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    widthDouble: number;

    @Column({type: DataType.STRING, allowNull: false})
    locationHinge: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    countHinge: number;

    @Column({type: DataType.STRING, allowNull: false})
    typeHinge: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    baseLock: string;

    @Column({type: DataType.STRING, allowNull: false})
    lockSpinner: string;

    @Column({type: DataType.STRING, allowNull: false})
    lockSpinnerColor: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCylinder: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    baseCoverOutside: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    baseCoverColorOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCoverInside: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCoverColorInside: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    baseCoverOutside2: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCoverColorOutside2: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCoverInside2: string;

    @Column({type: DataType.STRING, allowNull: false})
    baseCoverColorInside2: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    optionalLock: string;

    @Column({type: DataType.STRING, allowNull: false})
    optionalCylinder: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    optionalCoverOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    optionalCoverColorOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    optionalCoverInside: string;

    @Column({type: DataType.STRING, allowNull: false})
    optionalCoverColorInside: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    eye: string;

    @Column({type: DataType.STRING, allowNull: false})
    colorEye: string;

    @Column({type: DataType.STRING, allowNull: false})
    eyeLocation: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    handle: string;

    @Column({type: DataType.STRING, allowNull: false})
    handleColor: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    spinner: string;

    @Column({type: DataType.STRING, allowNull: false})
    spinnerColor: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    typeDecorationOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    decorationOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    wrapOutside: string;

    @Column({type: DataType.STRING, allowNull: false})
    patinaOutside: string;    
    
    @Column({type: DataType.STRING, allowNull: false})
    typeDecorationInside: string;

    @Column({type: DataType.STRING, allowNull: false})
    wrapInside: string;    

    @Column({type: DataType.STRING, allowNull: false})
    patinaInside: string;

    @Column({type: DataType.STRING, allowNull: false})
    decorationInside: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    typeWindow: string;

    @Column({type: DataType.STRING, allowNull: false})
    doorWindow: string;

    @Column({type: DataType.STRING, allowNull: false})
    colorTint: string;

    @Column({type: DataType.STRING, allowNull: false})
    colorForge: string;

    @Column({type: DataType.STRING, allowNull: false})
    patinaForge: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    heightWindow: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    widthWindow: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    thickWindow: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    countDoors: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    costDoor: number;
    
    @Column({type: DataType.STRING, allowNull: false})
    note: string;
    
    @Column({type: DataType.DOUBLE, allowNull: false})
    thickMetalLeaf: number;

    @Column({type: DataType.DOUBLE, allowNull: false})
    thickMetalBox: number;

    @Column({type: DataType.STRING, allowNull: false})
    jamb: string;

    @Column({type: DataType.STRING, allowNull: false})
    jambWrap: string;

    @Column({type: DataType.STRING, allowNull: false})
    locationJumb: string;
    
    @Column({type: DataType.BOOLEAN, allowNull: false})
    isStainlessDoorStep: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isStreetDoor: boolean;
    
    @Column({type: DataType.BOOLEAN, allowNull: false})
    isEccentric: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isBackSheet: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isCloser: boolean; 

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isEnhanceCloser: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isTermoCable: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isElectromagnet: boolean;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isIllumination: boolean;

    @Column({type: DataType.STRING, allowNull: false})
    sealer: string;

    @Column({type: DataType.DATEONLY, allowNull: false})
    dateCreate: Date;
}
