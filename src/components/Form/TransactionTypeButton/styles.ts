import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionsProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<TransactionsProps>`
    width: 48%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;

    border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 5px;

    ${({ isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `}

    ${({ isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `}    
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    `

export const Icon = styled(Feather)<TransactionsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({theme, type}) => 
        type === 'up' ? theme.colors.success : theme.colors.attention
    }
`