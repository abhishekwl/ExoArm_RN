import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { ProgressCircle, AreaChart, Grid, LineChart }  from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Speedometer from 'react-native-speedometer-chart';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
//LOCAL
import Card from '../../components/Card';

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

class Home extends React.Component {
    state = {
        showBoxLottie: true,
        batteryPercentage: 89,
        daysBeforeService: 96,
        rotationSpeed: 67.3,
        flag: false
    }

    componentDidMount() {
        setInterval(()=>{
            if(this.state.batteryPercentage<=0) {
                if(this.state.flag) this.setState({ batteryPercentage: 69, rotationSpeed: this.state.rotationSpeed+0.1, flag: false });
                else this.setState({ batteryPercentage: 69, rotationSpeed: this.state.rotationSpeed-0.2, flag: true });
            } 
            else {
                if(this.state.flag) this.setState({ batteryPercentage: this.state.batteryPercentage-0.1, rotationSpeed: this.state.rotationSpeed+0.1, flag: false });
                else this.setState({ batteryPercentage: this.state.batteryPercentage-0.1, rotationSpeed: this.state.rotationSpeed-0.2, flag: true });
            }
        }, 5000);
    }

    render() {
        const {
            containerStyle,
            titleTextStyle
        } = styles;
        
        const batteryChild = <AnimatedCircularProgress
            size={200}
            width={3}
            fill={this.state.batteryPercentage}
            tintColor="rgb(134, 65, 244)"
            style={{alignSelf: 'center'}}
            backgroundColor="white">
            {
            (fill) => (
                <Text style={{color: '#424242', fontSize: 24, fontFamily: 'sans-serif-light'}}>
                { fill.toFixed(2)+' %' }
                </Text>
            )
            }
        </AnimatedCircularProgress>

        const armRotationSpeedChild = <Speedometer
            value={this.state.rotationSpeed}
            totalValue={100}
            size={256}
            showIndicator
            showLabels
            showPercent
            showText
            indicatorColor='#424242'
            internalColor={'rgb(134, 65, 244)'}
            style={{alignSelf:'center'}}
        />

        const numberOfRotationsChild =  <LineChart
            style={{ height: 196 }}
            data={ data }
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
        >
            <Grid svg={{strokeWidth: 0.2}} />
        </LineChart>;

        const numberOfDaysTillNextServiceChild = <AnimatedCircularProgress
            size={200}
            width={3}
            fill={this.state.daysBeforeService}
            tintColor="rgb(134, 65, 244)"
            style={{alignSelf: 'center'}}
            backgroundColor="white">
            {
            (fill) => (
                <Text style={{color: '#424242', fontSize: 24, fontFamily: 'sans-serif-light'}}>
                { fill+' days more' }
                </Text>
            )
            }
        </AnimatedCircularProgress>

        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={containerStyle}>
                
                <View style={{flexDirection: 'row',flex: 1,justifyContent: 'space-between',alignItems: 'center'}}>
                    <Animatable.Text animation='bounceInDown' delay={500}>
                        <Text style={titleTextStyle}>{ 'ExoArm' }</Text>
                    </Animatable.Text>
                    <LottieView
                        source={require('../../assets/lottie/botface.json')}
                        autoPlay
                        loop
                        style={{height: 80,width: 80}}
                    />
                </View>
                
                <Card title='Device Battery' children={batteryChild} />

                <Card title='Arm Rotation Speed' children={armRotationSpeedChild} />

                <Card title='Number of Rotations' children={numberOfRotationsChild} />

                <Card title='Days Before Next Service' children={numberOfDaysTillNextServiceChild} />
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 16
    },
    titleTextStyle: {
        color: '#424242',
        fontSize: 48
    }
});

export default Home;