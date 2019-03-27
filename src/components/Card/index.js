import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends React.PureComponent {
    render() {
        const {
            containerStyle,
            titleTextStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <Text style={titleTextStyle}>{ this.props.title }</Text>
                { this.props.children }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        elevation: 8,
        marginTop: 16,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16
    },
    titleTextStyle: {
        color: '#424242',
        fontSize: 24,
        fontFamily: 'sans-serif-light',
        marginBottom: 16,
        alignSelf: 'center'
    }
});

export default Card;