export interface Person{
    id?: string,
    name: string,
    role: string,
    age: number,
    email: string,
    isActive?:boolean,
    country?: string,
    experience?:string
}