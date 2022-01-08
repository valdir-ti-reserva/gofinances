import React, { useState } from 'react'
import { 
    Keyboard, 
    Modal, 
    TouchableWithoutFeedback,
    Alert
} from 'react-native'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'

import { CategorySelect } from '../CategorySelect'
import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles'

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório')
        .min(3, 'Minimo de 3 caracteres'),
        amount: Yup
        .number()
        .required()
        .typeError('Informe um valor numérico')
        .positive('O valor não pode ser negativo')
})

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
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

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
        if(!transactionType)
            return Alert.alert('Selecione o tipo da transação')

        if(category.key === 'category')
            return Alert.alert('Selecione a categoria')

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                            />
                        <InputForm 
                            name='amount'
                            control={control}
                            placeholder='Preço'
                            keyboardType='numeric'  
                            error={errors.amount && errors.amount.message}
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
        </TouchableWithoutFeedback>
    )
}
