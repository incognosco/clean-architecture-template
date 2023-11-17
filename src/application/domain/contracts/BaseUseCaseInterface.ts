import type ErrorService from "@/infrastructure/services/ErrorService";

export interface BaseUseCaseInterface {
    errorService: ErrorService
}