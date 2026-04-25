import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Requirment } from './components/Requirment'
import { calcDimension } from '@/presentation/helpers/calcDimension'
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles'
import { publicationStyles } from '../../styles'

export const RequirmentsList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Requisitos</Text>
            <Requirment />
            <Requirment />
            <Requirment />
            <Requirment />
            <Text style={styles.showMore}>Ver mas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5,
        marginBottom: 30,
        ...publicationStyles.paddingHorizontal
    },
    title: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: calcDimension({small: 15, medium: 18})
    },
    showMore: {
        color: globalColors.azureBlue,
        fontSize: calcDimension({small: 10, medium: 12}),
        paddingLeft: 15,
    }
})