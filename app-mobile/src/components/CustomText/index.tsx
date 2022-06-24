/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type Props = TextProps & {
    bold?: boolean
}

export function CustomText({style, bold = false, ...props}: Props) {
  return <Text style={[styles.text, bold ? styles.bold : {}, style]} {...props} />;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Regular',
    },
    bold: {
        fontFamily: 'Lato-Bold',
    },
});
