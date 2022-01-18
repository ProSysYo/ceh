import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IOrder } from "../../../interfaces/IOrder";

@Entity()
export class Order implements IOrder {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "bigint", unique: true, nullable: false })
	number: number;

	@Column({ nullable: false })
	customer: string;

	@Column({ nullable: false })
	numberCustomer: string;

	@Column({ nullable: false })
	party: string;

	@Column({ nullable: false })
	model: string;

	@Column({ nullable: false })
	doorThick: number;

	@Column({ nullable: false })
	height: number;

	@Column({ nullable: false })
	width: number;

	@Column({ nullable: false })
	modelBox: string;

	@Column({ nullable: false })
	widthDouble: number;

	@Column({ nullable: false })
	locationHinge: string;

	@Column({ nullable: false })
	countHinge: number;

	@Column({ nullable: false })
	typeHinge: string;

	@Column({ nullable: false })
	baseLock: string;

	@Column({ nullable: false })
	lockSpinner: string;

	@Column({ nullable: false })
	lockSpinnerColor: string;

	@Column({ nullable: false })
	baseCylinder: string;

	@Column({ nullable: false })
	baseCoverOutside: string;

	@Column({ nullable: false })
	baseCoverColorOutside: string;

	@Column({ nullable: false })
	baseCoverInside: string;

	@Column({ nullable: false })
	baseCoverColorInside: string;

	@Column({ nullable: false })
	baseCoverOutside2: string;

	@Column({ nullable: false })
	baseCoverColorOutside2: string;

	@Column({ nullable: false })
	baseCoverInside2: string;

	@Column({ nullable: false })
	baseCoverColorInside2: string;

	@Column({ nullable: false })
	optionalLock: string;

	@Column({ nullable: false })
	optionalCylinder: string;

	@Column({ nullable: false })
	optionalCoverOutside: string;

	@Column({ nullable: false })
	optionalCoverColorOutside: string;

	@Column({ nullable: false })
	optionalCoverInside: string;

	@Column({ nullable: false })
	optionalCoverColorInside: string;

	@Column({ nullable: false })
	eye: string;

	@Column({ nullable: false })
	colorEye: string;

	@Column({ nullable: false })
	eyeLocation: string;

	@Column({ nullable: false })
	handle: string;

	@Column({ nullable: false })
	handleColor: string;

	@Column({ nullable: false })
	spinner: string;

	@Column({ nullable: false })
	spinnerColor: string;

	@Column({ nullable: false })
	typeDecorationOutside: string;

	@Column({ nullable: false })
	decorationOutside: string;

	@Column({ nullable: false })
	wrapOutside: string;

	@Column({ nullable: false })
	patinaOutside: string;

	@Column({ nullable: false })
	typeDecorationInside: string;

	@Column({ nullable: false })
	wrapInside: string;

	@Column({ nullable: false })
	patinaInside: string;

	@Column({ nullable: false })
	decorationInside: string;

	@Column({ nullable: false })
	typeWindow: string;

	@Column({ nullable: false })
	doorWindow: string;

	@Column({ nullable: false })
	colorTint: string;

	@Column({ nullable: false })
	colorForge: string;

	@Column({ nullable: false })
	patinaForge: string;

	@Column({ nullable: false })
	heightWindow: number;

	@Column({ nullable: false })
	widthWindow: number;

	@Column({ nullable: false })
	thickWindow: number;

	@Column({ nullable: false })
	countDoors: number;

	@Column({ nullable: false })
	costDoor: number;

	@Column({ nullable: false })
	note: string;

	@Column({ type: "double precision", nullable: false })
	thickMetalLeaf: number;

	@Column({ type: "double precision", nullable: false })
	thickMetalBox: number;

	@Column({ nullable: false })
	jamb: string;

	@Column({ nullable: false })
	jambWrap: string;

	@Column({ nullable: false })
	locationJumb: string;

	@Column({ nullable: false })
	isStainlessDoorStep: boolean;

	@Column({ nullable: false })
	isEccentric: boolean;

	@Column({ nullable: false })
	isBackSheet: boolean;

	@Column({ nullable: false })
	isCloser: boolean;

	@Column({ nullable: false })
	isEnhanceCloser: boolean;

	@Column({ nullable: false })
	isTermoCable: boolean;

	@Column({ nullable: false })
	isElectromagnet: boolean;

	@Column({ nullable: false })
	isIllumination: boolean;

	@Column({ nullable: false })
	isNoise: boolean;

	@Column({ nullable: false })
	sealer: string;

	@Column({ nullable: false })
	ear: string;

	@Column({ nullable: false })
	holeInBox: string;

	@Column({ nullable: false })
	colorDoor: string;

	@Column({ nullable: false })
	packaging: string;

	@Column({ nullable: false })
	typePolkaLeft: string;

	@Column({ nullable: false })
	isForgePolkaLeft: boolean;

	@Column({ nullable: false })
	isGlassPolkaLeft: boolean;

	@Column({ nullable: false })
	typePolkaRight: string;

	@Column({ nullable: false })
	isForgePolkaRight: boolean;

	@Column({ nullable: false })
	isGlassPolkaRight: boolean;

	@Column({ nullable: false })
	executionFramuga: string;

	@Column({ nullable: false })
	typeFramuga: string;

	@Column({ nullable: false })
	isForgeFramuga: boolean;

	@Column({ nullable: false })
	isGlassFramuga: boolean;

	@Column({ type: "date", nullable: false })
	dateCreate: Date;
}
