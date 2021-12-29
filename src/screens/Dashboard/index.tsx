import React from 'react';

import { IDataListProps } from '../../global/interfaces/IDataListProps';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting, 
    UserName, 
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList
} from './styles'


export function Dashboard(){

    const data: IDataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de sites',
            amount: 'R$ 12.000,00',
            category: {name: 'Vendas', icon: 'dollar-sign'},
            date: '13/04/2020'
        },
        {
            id: '2',
            type: 'negative',
            title: 'Hamburgueria Pizzy',
            amount: 'R$ 59,00',
            category: {name: 'Alimentação', icon: 'coffee'},
            date: '10/04/2020'
        },
        {
            id: '3',
            type: 'negative',
            title: 'Aluguel do apartamento',
            amount: 'R$ 1.000,00',
            category: {name: 'Casa', icon: 'shopping-bag'},
            date: '17/04/2020'
        },
    ]
    
    return (
        <Container>
           <Header>
               <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: 'https://avatars.githubusercontent.com/u/11434239?v=4'}}  />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Valdir</UserName>
                    </User>
                </UserInfo>
                <Icon name='power'/>
               </UserWrapper>
           </Header>

            <HighlightCards>
            <HighlightCard type='up' title='Entradas' amount='R$ 14.400,00' lastTransaction='Última entrada dia 13 de Abril'/>
            <HighlightCard type='down' title='Saídas' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de Abril'/>
            <HighlightCard type='total' title='Total' amount='R$ 16.141,00' lastTransaction='01 à 06 de Abril'/>
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionsList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />} 
                />
            </Transactions>
        </Container>
    )
}
