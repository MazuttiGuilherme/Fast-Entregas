import { Address } from './Address';
export type Estimate = {
    id: string
    minutes: number
    meters: number
    value: number
    pickupAddress: Address
    deliveryAddress: Address
    comments:  string 
}