import { Message, type MessageInteface } from "./message.entity"

export interface UserInterface{
    id?:number
    name:string
    avatar:string
    address:string
    country:string
    score:number
    message:MessageInteface
}
export class User implements UserInterface{
     id?:number

    constructor(
    public name:string="",
    public avatar:string,
    public address:string="",
    public country:string="usa",
    public score:number=0,
    public message:MessageInteface=new Message()
    ){}
}