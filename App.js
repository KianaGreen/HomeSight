import { StatusBar } from 'expo-status-bar';
/*import React from 'react';*/
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground ,TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomHeader from './CustomHeader'; // Adjust the import path to match your file structure




import Resources from './Resources';
import CommunityDevelopment from './CommunityDevelopment';
import SupportOurWork from './SupportOurWork';
import NewsandEvents from './NewsandEvents';
import TestimonialSubmission from './TestimonialSubmission';
import NotificationsScreen from './NotificationsScreen';
import VolunteerOpportunities from './VolunteerOpportunities';



const LoadingScreen = () => {
  return (
    <ImageBackground
      source={require('./app/assets/loadscreen.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.logo}>
        <Animatable.View animation="fadeIn" duration={2000} style={styles.logoContainer}>
          <Image
            source={require('./app/assets/unlogo.jpg')}
            style={styles.logo}
          />
        </Animatable.View>
      </View>
    </ImageBackground>
  );
};

const Loadingstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: 600,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  logoContainer: {
    alignItems: 'center',
    
  },
 
  logo: {
    flex: 1,
    
    resizeMode: 'contain',
    backgroundColor: 'transparent', 
  
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',    justifyContent: 'center',
    alignItems: 'center',
  },
});


const HomeScreen = ({ navigation }) => {
  const [isActive, setIsActive] = useState(true);
 
  const handleNewsAndEventsButtonPress = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.org/posts');
      const data = response.data;
      // Handle the data, you can set it to state or use it as needed
      setApiData(data);

      // Navigate to a new screen with the data if needed
      navigation.navigate('NewsAndEvents', { data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    const handleResourcesButtonPress = async () => {
      const url = 'https://www.homesightwa.org/resources/#Resources';
      try {
        await WebBrowser.openBrowserAsync(url);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    };

    const handleCommunityDevelopmentButtonPress = async () => {
      const url = 'https://www.homesightwa.org/community-economic-development/';
      try {
        await WebBrowser.openBrowserAsync(url);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    };

    const handleSupportOurWorkButtonPress = async () => {
      const url = 'https://www.homesightwa.org/donation/';
      try {
        await WebBrowser.openBrowserAsync(url);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    };

    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        
        {/* Top Logo Bar */}
        <View style={styles.header}>
        <View style={{ ...styles.logoContainer, flexDirection: 'column', flex: 1 }}>
            <Image source={require('./app/assets/hslogo.jpeg')} style={styles.logo} />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleResourcesButtonPress}>
              <FontAwesome5 name="book-open" size={48} color="white" />
              <Text style={styles.buttonLabel}>Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleCommunityDevelopmentButtonPress}>
              <Ionicons name="business" size={48} color="white" />
              <Text style={styles.buttonLabel}>Community Development</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSupportOurWorkButtonPress}>
              <FontAwesome5 name="hand-holding-heart" size={48} color="white" />
              <Text style={styles.buttonLabel}>Support Our Work</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('News and Events')}>
              <Ionicons name="calendar" size={48} color="white" />
              <Text style={styles.buttonLabel}>News and Events</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Volunteer Opportunities')}>
              <Ionicons name="people" size={48} color="white" />
              <Text style={styles.buttonLabel}>Volunteer Opportunities</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Testimonial Submission')}>
              <Ionicons name="chatbubble-ellipses-sharp" size={48} color="white" />
              <Text style={styles.buttonLabel}>Testimonial Submission</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      {/* Bottom Navigation Dock */}
      <View style={styles.bottomNav}>
  <View style={styles.bottomNavItem}>
  <Ionicons name="home" size={24} color={isActive ? 'white' : 'black'} />
</View>

        <View style={styles.bottomNavItem}>
          <Ionicons name="calculator-sharp" size={24} color="grey" />
        </View>

        <TouchableOpacity
  style={styles.bottomNavItem}
  onPress={() => navigation.navigate('Notifications')}
>
  <Ionicons name="notifications" size={24} color="grey" />
</TouchableOpacity>


        <View style={styles.bottomNavItem}>
          <Ionicons name="person" size={24} color="grey" />
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a loading time of 2 seconds
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // Hide the header
            headerStyle: {
            backgroundColor: 'blue', // Set the background color
            },
            headerTintColor: 'white', // Set the text color
            }}
            />
            
          <Stack.Screen
          name="Testimonial Submission"
          component={TestimonialSubmission}
          options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Resources" 
        component={Resources}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>
        <Stack.Screen name="Community Development" 
        component={CommunityDevelopment}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>
        <Stack.Screen name="Support Our Work" 
        component={SupportOurWork}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>
        <Stack.Screen name="News and Events" 
        component={NewsandEvents}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>
      
        <Stack.Screen name="Volunteer Opportunities" 
        component={VolunteerOpportunities}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>
        <Stack.Screen name="Notifications" 
        component={NotificationsScreen}  options={{
            headerStyle: {
              backgroundColor: '#405C6F',
            },
            headerTintColor: 'white',
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffffff', 
  },
  logoContainer: {
    alignItems: 'center', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logo: {
    width: 240,
    height: 70,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  button: {
    width: '48%',
    aspectRatio: 1,
    
    backgroundColor: '#405C6F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#405C6F', 
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    paddingBottom: 34, 
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavItemLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
 
  topLogo: {
    width: 400,
    height: 90,
    resizeMode: 'contain',
  },
  
  
});
