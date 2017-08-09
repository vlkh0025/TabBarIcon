import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

export default class Home extends Component{
  render(){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Detail</Text>
          <TouchableOpacity   >
            <Text style={{backgroundColor:'blue', fontSize:20, color:'white', padding:10}}
            onPress={()=>{this.props.navigation.goBack()}}
          >
              Back
            </Text>
            <Text style={{fontSize:20}}>
            {this.props.navigation.state.params.thamso}
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}
