import { Product } from "./product";

export interface Venta {
    id: number;
    fecha: string;
    numeroFactura: number;
    cliente: string;
    total: number;
    /*detalle: [
        {
            producto: Product,
            cantidad: number,
            totalDetalle: number,
        }
    ];*/
}