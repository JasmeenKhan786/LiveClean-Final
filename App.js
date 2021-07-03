import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Navigator from './Navigation/Navigation';
import ProductListScreen from './Screens/ProductListScreen'
import ProductScreen from './Screens/ProductScreen'


export default class App extends React.Component {
  render() {
    return <Navigator/>;
  }
}

