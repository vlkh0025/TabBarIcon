import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {StyleSheet,Image} from 'react-native';
import Home from './screen/Home';
import User from './screen/User';
import Detail from './screen/Detail';
import Menu from './screen/Menu';


export const HomeStack = StackNavigator({
  Home_Monitor:{
    screen:Home,
     navigationOptions:{
      title:'Trang chu'
    }
  },
  Detail_Monitor:{
    screen:Detail,
    navigationOptions:{
      title:'Chi tiet'
    }
  },
});

export const UserStack = StackNavigator({
  User_Monitor: {
    screen: User,
    navigationOptions:{
      title:'Tai Khoan'
    }
  },
});

export const Tabbar = TabNavigator({
  Home:{
    screen: HomeStack,
    navigationOptions:{

      tabBarIcon: ({ tintColor }) => (
        <Image
         source={{uri:'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      tabBarLabel:'Home',

    },
  },
  User:{
    screen: UserStack,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
         source={{uri:'http://iconshow.me/media/images/ui/ios7-icons/png/256/contact-outline.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      tabBarLabel:'User',


    },
  },

  },

  {
  tabBarPosition:'bottom',
  swipeEnabled:true,
    tabBarOptions: {
      showIcon:true,
      labelStyle: {
        //marginTop:40,
        fontSize: 10,
        },
      activeTintColor:'black',
      inactiveTintColor: '#cc33ff',
      style: {

        height:70,
        backgroundColor: '#99ccff',
        },
      }
    }
);

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
