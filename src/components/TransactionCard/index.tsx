import React from 'react'
import { ITransactionCardDataProps } from '../../global/interfaces/ITransactionCardDataProps'

import { ITransactionProps } from '../../global/interfaces/ITransactionProps'

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
 } from './styles'

 interface ITransactionCardProps {
    data: ITransactionCardDataProps;
}

export function TransactionCard({data}: ITransactionCardProps){
    return (
        <Container>
            <Title>{data?.title}</Title>

            <Amount type={data?.type}>
                {data?.type === 'negative' && '- '}
                {data?.amount}
            </Amount>
            
            <Footer>
                <Category>
                    <Icon name={data?.category?.icon}/>
                    <CategoryName>{data?.category?.name}</CategoryName>
                </Category>
                <Date>{data?.date}</Date>
            </Footer>
        </Container>
    )
}