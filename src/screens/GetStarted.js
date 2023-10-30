import { Alert, StatusBar, Image, Text, View, Pressable } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Button from "../components/AppButton";
import colors from "../layouts/colors";
import React, { useRef, useState, useEffect } from 'react';
import { FlatList, I18nManager, Platform } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



// visit https://www.npmjs.com/package/react-native-onboarding-swiper for more of the documentation
const WithCTA = ({navigation}) => {
    const onboardingRef = useRef(null);
    const [hasShownOnboarding, setHasShownOnboarding] = useState(false);

    const goNext = () => {
      // Find the current page index
      onboardingRef.current.goNext()
      //others pagination methods are
//       onboardingRef.current.goToPage(2, true) //where the boolean is if animated
// onboardingRef.current.goToPage(2, false) //where the boolean is if animated
    };



    // When onboarding is completed (e.g., user presses the "done" button), set the state and store it in AsyncStorage.
const UserBoarded = () => {
  setHasShownOnboarding(true);
  AsyncStorage.setItem('hasShownOnboarding', 'true');
};

// When the app starts, load the state from AsyncStorage (e.g., in your app's entry point(such as the onBoarding screen itself) or a component like App.js).
useEffect(() => {
  async function loadOnboardingStatus() {
    const status = await AsyncStorage.getItem('hasShownOnboarding');
    if (status === 'true') {
      setHasShownOnboarding(true);
      navigation.replace('Register');
    }
  }

  loadOnboardingStatus();
}, []);

console.log(hasShownOnboarding);
    
    const doneButton = () => {
        // Find the current page index
       console.log('done');
       navigation.navigate('Register');
            //   Alert.alert('done');
            StatusBar.setBarStyle('default');
            UserBoarded();
      };

    // primary, secondary, white, activeTab, lightGrey, InputBg, InputBorder, lightpurple, red, light, gold, yellow, lightblue, passwordindicator, textinputborder, greytext, textinputbackground, orange, paleyellow, green,
    return (
      hasShownOnboarding ?<View style={{flex: 1}}></View>:
  <Onboarding
  //the two below ref and pages enables page callback functions
  ref={onboardingRef}
  onDone={() => console.log('done')}
  showDone={false}
    onSkip={() => Alert.alert('Skipped')}
    showSkip={true}
    skipToPage={3}
    skipLabel={' '} //optional
    nextLabel={<Text style={{color: colors.primary,}}>Next</Text>} //optional
    showNext={true} //a bool flag indicating whether the Next button is visible. Defaults to true
    bottomBarHeight={60}
    // flatlistProps={{width: '50%', }} //additional props for the FlatList which holds all the pages
    bottomBarColor={'transparent'}  //backgroundColor of the bottom bar. Defaults to transparent
    bottomBarHighlight={false} //a bool flag indicating whether the bottom bar should be highlighted. Defaults to true
    controlStatusBar={true}
    showPagination={true} //whether to show the bottom pagination bar. Defaults to true
    transitionAnimationDuration={400} //The duration in milliseconds for the animation of the background color for the page transition. Defaults to 500
    // containerStyles={{backgroundColor: 'white'}}
    imageContainerStyles={{backgroundColor: 'transparent', }}
    titleStyles={{fontWeight: 'bold', }}
    subTitleStyles={{fontWeight: 'normal', }}
    pages={[
      {
        title: '',
        subtitle: <Pressable onPress={goNext} style={{ paddingTop: 100, }}><View style={{ alignItems: 'center'}}><Text style={{color: colors.primary, fontSize: 40, fontWeight: 'bold', paddingTop: 30, paddingBottom: 5,}}>WetinDeySup App!</Text><Text style={{color: colors.lightpurple, fontWeight: 'bold', fontSize: 20, }}>Your Number 1. Sports Tracker</Text><Text style={{color: colors.primary, marginTop: 100, }}>Tap to continue...</Text></View></Pressable>,
        backgroundColor: colors.InputBg,
        titleStyles:{color: colors.primary, fontSize: 40, },
        subTitleStyles:{color: colors.black, },
        image: (
            <Pressable onPress={goNext} style={{ paddingVertical: 290, top: -350, position: 'absolute', width: '100%', }}><Image source={require('../../assets/board1.png')}  style={{ width: '100%', }}/></Pressable>
        ),
      },
      {
        title: '',
        subtitle: <Pressable onPress={goNext} style={{ paddingTop: 100, }}><View style={{ alignItems: 'center'}}><Text style={{color: colors.primary, fontSize: 30, fontWeight: 'bold', paddingTop: 30, paddingBottom: 5, textAlign: 'center', }}>Connect With People with Similar Interests</Text><Text style={{color: 'grey', fontSize: 20, }}>You can reach Everybody with us</Text><Text style={{color: colors.primary, marginTop: 100, }}></Text></View></Pressable>,
        backgroundColor: '#EEDFFF',
        titleStyles:{color: colors.primary},
        subTitleStyles:{color: colors.lightpurple},
        image: (
            <Pressable onPress={goNext} style={{ paddingVertical: 350, top: -400, position: 'absolute',}} ><Image source={require('../../assets/board2.png')} /></Pressable>
        ),
      },
      {
        title: '',
        subtitle: <Pressable onPress={goNext} style={{ paddingTop: 100, }}><View style={{ alignItems: 'center'}}><Text style={{color: colors.primary, fontSize: 30, fontWeight: 'bold', paddingTop: 30, paddingBottom: 5, textAlign: 'center', }}>Get Amazing Sports Content</Text><Text style={{color: '#ff817e', fontSize: 20, textAlign: 'center', paddingHorizontal: 30, }}>Bringing engaging Contents to your screen in real-time</Text><Text style={{color: colors.primary, marginTop: 100, }}></Text></View></Pressable>,
        backgroundColor: colors.passwordindicator,
        titleStyles:{color: colors.primary},
        subTitleStyles:{color: '#ff817e'},
        image: (
            <Pressable onPress={goNext} style={{ paddingVertical: 350, top: -400, position: 'absolute',}} ><Image source={require('../../assets/board3.png')}  onPress={goNext} /></Pressable>
        ),
      },
      {
        title: '',
        subtitle: <Pressable onPress={goNext} style={{ paddingTop: 250, }}><View style={{ alignItems: 'center'}}><Text style={{color: colors.primary, fontSize: 30, fontWeight: 'bold', paddingTop: 30, paddingBottom: 5, textAlign: 'center', }}>Follow Your Sport Favs</Text><Text style={{color: colors.greytext, fontSize: 20, textAlign: 'center', paddingHorizontal: 30, }}>You will get notifications about your favorite sport stars</Text><Text style={{color: colors.primary, marginTop: 100, }}></Text></View></Pressable>,
        backgroundColor: '#e1e1e1',
        titleStyles:{color: colors.primary},
        subTitleStyles:{color: colors.greytext},
        image: (
            <Pressable onPress={goNext} style={{ paddingVertical: 290, top: -350, position: 'absolute',}} ><Image source={require('../../assets/board4.png')} /></Pressable>
        ),
      },
      {
        title: "Also, Get To Engage in Sports Yourself",
        subtitle: (
          <Button
          style={{ width: '90%', }}
            title='Get Started'
            onPress={doneButton}
          />
        ),
        backgroundColor: colors.lightblue,
        titleStyles:{color: colors.primary},
        subTitleStyles:{color: 'pink'},
        image: (
            <Image source={require('../../assets/board5.png')} style={{ width: '70%', height: '30%', overflow: 'visible', marginTop: 90,}} />
        ),
      },
    ]}
  />)
};


export default WithCTA;