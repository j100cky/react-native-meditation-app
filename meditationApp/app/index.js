import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native-web";

export default function Index() {
// This is the default export. 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
        const checkLoginState = async () => {
          try {
            const user = await AsyncStorage.getItem("userDetails");
            if (user) {
              setIsLoggedIn(true);
            }
          } catch (error) {
            console.error("Error checking login state:", error);
          }
          // Q: What is the purpose of using try...catch? 
          setIsLoading(false);
        };
    
        checkLoginState();
      }, []);
      if (isLoading) {
            return (
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
              </View>
            );
          }
    
  return <Redirect href={isLoggedIn ? "/home" : "/login"} />;
}
