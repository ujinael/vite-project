export interface MessageInteface{
    title:string
    body:string
}
export class Message implements MessageInteface{
   
    constructor( 
   public title: string="Message",
   public body:string="Hello gays!"
   ){}
}