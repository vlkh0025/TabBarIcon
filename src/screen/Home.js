import React, {Component} from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';

export default class Home extends Component{

  render(){
    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', }}>
          <Text>Home</Text>
          <TouchableOpacity>
            <Text style={{fontSize:20, padding:10, backgroundColor:'green',color:'white'}}
              onPress={()=>{this.props.navigation.navigate('Detail_Monitor',{thamso:'Hello Nhat Linh'})}}
            >
              Go to Detail Page
            </Text>
            
          </TouchableOpacity>

        </View>
    );
  }
}
