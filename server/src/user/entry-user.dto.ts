import { IsString, Length } from "class-validator";

export class EntryUserDto {
	@IsString({ message: "Должно быть строкой" })
	readonly login: string;

	@IsString({ message: "Должно быть строкой" })
	@Length(4, 16, { message: "Не меньше 4 и не больше 16" })
	readonly password: string;
}
