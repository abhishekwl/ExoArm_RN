import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, StatusBar, View, Text, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Splash extends React.PureComponent {
    state = {
        animation: null
    }

    render() {
        const {
            containerStyle,
            lottieStyle,
            textStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <StatusBar backgroundColor='white' barStyle='dark-content' />

                <Animatable.View animation='bounceInDown'>
                    <LottieView
                        ref={ animation => this.setState({ animation: animation }) }
                        style={lottieStyle}
                        source={require('../../assets/lottie/armtwo.json')}
                        loop={true}
                        /> 
                </Animatable.View>

                <Animatable.Text animation='bounceInUp' delay={800} duration={1500} onAnimationEnd={()=>this.state.animation.play()}>
                    <Text style={textStyle}>{ 'ExoArm' }</Text>           
                </Animatable.Text>
            </View>
        );
    }

    componentDidMount() {
        setTimeout(()=>{
            this.state.animation.reset();
            this.props.navigation.navigate('Home');
        },7000);
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    lottieStyle: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width/2
    },
    textStyle: {
        fontFamily: 'sans-serif-light',
        color: '#9e9e9e',
        fontSize: 64
    }
});

export default Splash;