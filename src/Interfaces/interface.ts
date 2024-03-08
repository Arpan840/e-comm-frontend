export interface InputController {
    label?: string;
    type: string;
    className?: string;
    id?: string;
    required?: boolean;
    maxlength?: number;
    minlength?: number;
    placeholder?: string;
    value?: string;
    control: any;
    name: string;
  }
 export interface Login{
  userId: string,
  password: string
 } 

 export interface search{
  searchProducts: string
 }

 export interface Logout{
  status?: number,
  message?: string,
 }