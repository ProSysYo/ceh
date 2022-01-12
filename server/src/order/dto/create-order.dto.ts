import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly customer: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly numberCustomer: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly party: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly model: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly doorThick: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly height: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly width: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly modelBox: string;

	readonly isDouble: boolean;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly widthDouble: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly locationHinge: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly countHinge: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly typeHinge: string;

	//Основной замок
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseLock: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly lockSpinner: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly lockSpinnerColor: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCylinder: string;

	//Накладки основного замка
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverColorOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverInside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverColorInside: string;

	//Накладки основного замка 2
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverOutside2: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverColorOutside2: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverInside2: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly baseCoverColorInside2: string;

	//Дополнительный замок
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalLock: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalCylinder: string;

	//Накладки дополнительного замка
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalCoverOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalCoverColorOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalCoverInside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly optionalCoverColorInside: string;

	//Глазок
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly eye: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly colorEye: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly eyeLocation: string;

	//Ручка
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly handle: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly handleColor: string;

	//Вертушок
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly spinner: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly spinnerColor: string;

	//Отделка снаружи
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly typeDecorationOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly decorationOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly wrapOutside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly patinaOutside: string;

	//Отделка внутри
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly typeDecorationInside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly decorationInside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly wrapInside: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly patinaInside: string;

	//Окно
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly typeWindow: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly doorWindow: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly colorTint: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly colorForge: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly patinaForge: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly heightWindow: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly widthWindow: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly thickWindow: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly countDoors: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly costDoor: number;

	readonly note: string;

	//Толщина металла
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly thickMetalLeaf: number;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly thickMetalBox: number;

	//Наличники
	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly jamb: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly jambWrap: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly locationJumb: string;

	@IsNotEmpty({ message: 'Поле не должно быть пустым' })
	readonly sealer: string; //Уплотнитель

	readonly isStainlessDoorStep: boolean; //порог из нержавейки
	readonly isStreetDoor: boolean;
	readonly isEccentric: boolean;
	readonly isBackSheet: boolean;
	readonly isCloser: boolean; //доводчик
	readonly isEnhanceCloser: boolean; //Училение под доводчик
	readonly isTermoCable: boolean; //Термокабель
	readonly isElectromagnet: boolean; //Электромагнит
	readonly isIllumination: boolean; //Подсветка
}
