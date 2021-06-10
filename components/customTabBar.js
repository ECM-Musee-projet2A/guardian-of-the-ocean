import React, { useState, useEffect } from 'react';
import { View, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LiveButton from './liveButton';
import Icon from 'react-native-vector-icons/FontAwesome';

// export default function CustomTabBar({ state, descriptors, navigation }) {

//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);

//   useEffect(() => {
//       const keyboardDidShowListener = Keyboard.addListener(
//         'keyboardDidShow',
//         () => {
//           setKeyboardVisible(true);
//         }
//       );
//       const keyboardDidHideListener = Keyboard.addListener(
//         'keyboardDidHide',
//         () => {
//           setKeyboardVisible(false);
//         }
//       );

//       return () => {
//         keyboardDidHideListener.remove();
//         keyboardDidShowListener.remove();
//       };
//     }, []);
    
//   const focusedOptions = descriptors[state.routes[state.index].key].options;

//   if (focusedOptions.tabBarVisible === false || isKeyboardVisible === true) {
//     return null;
//   }

//   return (
//     <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'white' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         if (label === 'Live'){
//             return(
//               <View 
//                   key={route.key}
//                   style={{flex: 2, alignSelf: 'flex-end', height: 130, justifyContent: 'center' ,alignItems: 'center'}}>
//                   <LiveButton navigation={navigation} isFocused={isFocused}/>
//               </View>
//             );
//         }
//         else{
//           return (
//               <TouchableWithoutFeedback
//                 accessibilityRole="button"
//                 accessibilityState={isFocused ? { selected: true } : {}}
//                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                 testID={options.tabBarTestID}
//                 onPress={onPress}
//                 style={{ flex: 1 }}
//                 key={route.key}>
//                 {label === 'Home'
//                   ?   <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
//                           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                               {isFocused === true
//                               ? <FontAwesome name='th-large' size={36} color='#00A6FF' />
//                               : <FontAwesome name='th-large' size={36} color='#ECECEC' />}
//                           </TouchableOpacity>
//                       </View>
//                   :   <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
//                             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//                                 {isFocused === true
//                                 ? <FontAwesome name='user' size={36} color='#00A6FF' />
//                                 : <FontAwesome name='user' size={36} color='#ECECEC' />}
//                             </TouchableOpacity>
//                         </View>}
//               </TouchableWithoutFeedback>
//             );
//         }
//       })}
//     </View>
//   );
// }

export default function MyTabBar({ state, descriptors, navigation }) {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        }
      );

      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
    
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false || isKeyboardVisible === true) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{ flex: 1 }}
              key={route.key}>
              {label === 'Home'
                ?   <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            {isFocused === true
                            ? <Icon name='home' size={36} color='#00A6FF' />
                            : <Icon name='home' size={36} color='#ECECEC' />}
                        </TouchableOpacity>
                    </View>
                : label == 'Live'
                ?   <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Live')}>
                            {isFocused === true
                            ? <Icon name='play-circle' size={48} color='#00A6FF' />
                            : <Icon name='play-circle' size={48} color='#ECECEC' />}
                        </TouchableOpacity>
                    </View>
                :   <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => navigation.navigate('Data')}>
                              {isFocused === true
                              ? <Icon name='bar-chart' size={36} color='#00A6FF' />
                              : <Icon name='bar-chart' size={36} color='#ECECEC' />}
                          </TouchableOpacity>
                      </View>}
            </TouchableWithoutFeedback>
            );
      })}
    </View>
  );
}
