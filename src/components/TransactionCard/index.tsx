import React, { Component } from 'react'
import { Text, View } from 'react-native'

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

export function TransactionCard(){
    return (
        <Container>
            <Title>Desenvolvimento de sites</Title>      

            <Amount>R$ 12.000,00</Amount>            
            
            <Footer>
                <Category>
                    <Icon name='dollar-sign'/>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>14/04/2021</Date>
            </Footer>
        </Container>
    )
}