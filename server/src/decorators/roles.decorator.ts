import { SetMetadata } from "@nestjs/common";
import { RoleTypes } from "../types/RoleTypes";

export const Roles = (...roles: RoleTypes[]) => SetMetadata("roles", roles);
