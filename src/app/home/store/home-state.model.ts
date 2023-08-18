import { Entity, IBrand, ICategory, IFamily, IProduct } from "../models";

export interface HomeState {
    entities: Array<Entity>;
    brand: IBrand | null;
    category: ICategory | null;
    family: IFamily | null; 
    product: IProduct | null;
    inProgress: IProgress;
}

export enum EntityType {
    Brand = "brand",
    Category = "category",
    Family = "family",
    Product = "product"
}

export interface IProgress {
    brand: boolean;
    category: boolean;
    family: boolean;
    product: boolean;
    list: boolean;
}