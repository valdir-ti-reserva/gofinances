import React, { useState } from 'react'
import { Modal } from 'react-native'
import { useForm, UseForm } from 'react-hook-form'

import { CategorySelect } from '../CategorySelect'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles'

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const {
        control,
        handleSubmit,
    } = useForm()

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }
    
    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }
    
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm 
                        name='name'
                        control={control}
                        placeholder='Nome'
                    />
                    <InputForm 
                        name='amount'
                        control={control}
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


                    <CategorySelectButton 
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />

                </Fields>
                <Button 
                    title='Enviar'
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>

            <Modal 
                visible={categoryModalOpen}
            >
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>

        
        </Container>
    )
}
