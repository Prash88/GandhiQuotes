/**
 * GandhiQuotes
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   Clipboard,
   ToastAndroid,
   AlertIOS,
   Platform,
 } from 'react-native';

 const GandhiSaid = require('./GandhiQuotes.json');

 const GANDHI_IMAGE = require('./resources/gandhi.png');
 const TITLE_TEXT = 'Gandhi Quotes';
 const INFORMATION_TEXT = 'Tap on the quote to change the quote';
 const AUTHOR_TEXT = 'Mahatma Gandhi';

 type State = {
   quote: string,
   visible: boolean,
 };

 type Props = {

 };

 class GandhiQuotes extends Component<void, Props, State> {

   state: State;
   props: Props;

   static propTypes = {
   };

   constructor(props) {
     super(props);
     this.state = {
       quote: GandhiSaid.GandhiQuotes[
         Math.floor(Math.random() * GandhiSaid.GandhiQuotes.length)
       ],
       visible: false,
     };
   }

   //Touch Function
   _changeQuote() {
      this.setState({
       quote: GandhiSaid.GandhiQuotes[
         Math.floor(Math.random() * GandhiSaid.GandhiQuotes.length)
       ],
     });
   }

   //Render Function
   render() {
    return (
       <View
         style={styles.container}>
         <View style={styles.topHalfView}>
           <View style={styles.titleView}>
             <Text style={styles.title}>
               {TITLE_TEXT}
             </Text>
           </View>
           <View style={styles.profileImageView}>
             <Image
              style={styles.profilePic}
              source={GANDHI_IMAGE}/>
           </View>
           <View style={styles.informationView}>
             <Text style={styles.information}>
               {INFORMATION_TEXT}
             </Text>
           </View>
         </View>
         <View
          style={styles.bottomHalfView}
          onTouchStart={() => this._changeQuote()}>
           <Text style={styles.quote}>
             {this.state.quote}
           </Text>
           <Text style={styles.author}>
             {AUTHOR_TEXT}
           </Text>
         </View>
      </View>
    );
   }

 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'column',
   },
   topHalfView: {
     flex:0.5,
     flexDirection: 'column',
   },
   bottomHalfView: {
     flex:0.5,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'aliceblue',

   },
   titleView: {
     flex: 0.2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'cornflowerblue',
   },
   profileImageView: {
     flex: 0.7,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'cornflowerblue',
   },
   informationView: {
     flex: 0.1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'cornflowerblue',
   },
   quote: {
     fontSize: 18,
     textAlign: 'center',
     margin: 10,
     color: 'black',
     fontFamily: 'Cochin'
   },
   author: {
     fontSize: 18,
     textAlign: 'center',
     margin: 10,
     color: 'cornflowerblue',
     fontFamily: 'Cochin'
   },
   title: {
     fontSize: 24,
     textAlign: 'center',
     margin: 10,
     color: 'white',
     fontWeight: 'bold'
   },
   information: {
     fontSize: 12,
     textAlign: 'center',
     margin: 10,
     color: 'white',
   },
   share: {
     fontSize: 14,
     textAlign: 'center',
     color: 'black',
   },
   profilePic: {
     height: 100,
     borderRadius: 50,
     width: 100
   },
 });

 AppRegistry.registerComponent('GandhiQuotes', () => GandhiQuotes);
