import {UserResponse} from "./user.model";

export interface IProduct {
    id: number,
    name: string,
    quantity: number,
    quantityUsedPerDay: number,
    unit: string,
    endsIn: Date,
    category: string,
    leftQuantity: number,
    imgPath: string,
    notificationDate: Date,
    notificationWindowInDays: number,
    user: UserResponse,
    units: IUnitOfProduct[]
}

export interface IUnitOfProduct {
    id: number,
    buyDate: Date
}
