import { ITransactionProps } from "./ITransactionProps";

interface ICategoryProps {
    name: string;
    icon: string;
 }

export interface ITransactionCardDataProps extends ITransactionProps{
    title: string;
    amount: string;
    category: ICategoryProps;
    date: string
}