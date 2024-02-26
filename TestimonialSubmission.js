import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

function TestimonialSubmission({ navigation }) {
  // States for the user's information and testimonial
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [testimony, setTestimony] = useState('');

  const handleSubmit = () => {
    // Handle the submission of the testimonial, email, or other actions
    // You can add your logic here

    // After submission, clear the input fields
    setName('');
    setEmail('');
    setTestimony('');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Share Your Experience with Us!
      </Text>
      <Text>We value your feedback and experiences as our client. Your insights help us improve our services and serve you better. Please take a moment to share your thoughts with us below. Thank you for being a part of our journey!</Text>
    
      <View style={{ marginTop: 20 }}>
        <Text>Name:</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          style={{ borderColor: 'gray', borderWidth: 1, padding: 10 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Email Address:</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email address"
          style={{ borderColor: 'gray', borderWidth: 1, padding: 10 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Testimonial:</Text>
        <TextInput
          value={testimony}
          onChangeText={(text) => setTestimony(text)}
          multiline
          numberOfLines={4}
          placeholder="Write your testimonial here"
          style={{ borderColor: 'gray', borderWidth: 1, padding: 10, minHeight: 90 }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#405C6F',
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Submit Testimonial</Text>
      </TouchableOpacity>

      {/* Separate buttons for Google Review, Yelp Review, and App Review */}


      <TouchableOpacity
  style={{
    backgroundColor: '#405C6F',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  }}
  onPress={async () => {
    const googleReviewURL = 'https://www.google.com/search?client=safari&sca_esv=576670217&channel=iphone_bm&q=HomeSight&ludocid=2142472762821033370&lsig=AB86z5Wf6wzcmynGQFnZDvNe8Ayk&kgs=f9aa30474db5bf9f&shndl=-1&source=sh/x/loc/act/m1/can/3&asid=canlbse'; // Replace with your Google Review URL
    try {
      await WebBrowser.openBrowserAsync(googleReviewURL);
    } catch (error) {
      console.error('Error opening Google Review URL:', error);
    }
  }}
>
  <Text style={{ color: 'white', fontSize: 18 }}>Give a Google Review</Text>
</TouchableOpacity>




      <TouchableOpacity
        style={{
          backgroundColor: '#405C6F',
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={async () => {
          const yelpReviewURL = 'https://www.yelp.com/writeareview/biz/QT4KVJIZayryBhxZS5zSSg?return_url=%2Fbiz%2FQT4KVJIZayryBhxZS5zSSg&review_origin=biz-details-war-button';
          try {
            await WebBrowser.openBrowserAsync(yelpReviewURL);
          } catch (error) {
            console.error('Error opening Google Review URL:', error);
          }
        }}
      > 
        <Text style={{ color: 'white', fontSize: 18 }}>Give a Yelp Review</Text>
      </TouchableOpacity>

      

      <TouchableOpacity
        style={{
          backgroundColor: '#405C6F',
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Rate the App</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default TestimonialSubmission;
