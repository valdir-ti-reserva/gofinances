import React, { useState } from 'react'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { CategorySelector } from '../../components/Form/CategorySelect'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles'

export function Register() {
    const [transactionType, setTransactionType] = useState('')

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type)
    }
    
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder='Nome'
                    />
                    <Input 
                        placeholder='Preço'
                    />

                    <TransactionTypes>
                        <TransactionTypeButton 
                            type='up' 
                            title='Income'
                            isActive={transactionType === 'up'}
                            onPress={() => handleTransactionTypeSelect('up')}
                            />
                        <TransactionTypeButton 
                            type='down' 
                            title='Outcome'
                            isActive={transactionType === 'down'}
                            onPress={() => handleTransactionTypeSelect('down')}
                        />
                    </TransactionTypes>


                    <CategorySelector 
                        title='Categoria' 
                    />

                </Fields>
                <Button title='Enviar'/>
            </Form>

        
        </Container>
    )
}
