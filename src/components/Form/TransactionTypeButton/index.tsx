import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
    Container, 
    Title, 
    Icon 
} from './styles'

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface ITransactionTypeButtonProps extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export function TransactionTypeButton({ 
    title, 
    type,
    isActive,
    ...rest 
}: ITransactionTypeButtonProps) {
    return (
        <Container 
            isActive={isActive}
            type={type}
            {...rest} 
        >
            <Icon 
                name={icons[type]} 
                type={type}
            />
            <Title>{title}</Title>
        </Container>
    )
}
