import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage"
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";

const Home = () => {

    const [userDetails, setUserDetails] = useState(null);

    const loadUserDetails = async() => {
        const user = await AsyncStorage.getItem("userDetails");
        console.log("user", user);
        setUserDetails(user);
    };
    // Q: Why can I not use "userDetails = user", and have to use the setUserDetails. 
    // A: This line would mutate a variable directly, but:
    //      -It does not tell React that the state has changed.
    //      -React will not re-render your component.
    //      -It can lead to stale or buggy UI because React didn’t "see" the change.

    useEffect(() => {
        loadUserDetails();
    }, []);
    // React’s useEffect runs after the component renders, not during the initial parse. 
    // So declaring loadUserDetails() after useEffect() is fine.

    return (
     <>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScreenHeaderBtn/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
                testID="screensDisplay"
                >
                    <Welcome userDetails={userDetails?JSON.parse(userDetails):null}/>
                    <PopularMeditation/>
                    <DailyMeditation/>
                </View>
            </ScrollView>
        </SafeAreaView>
     </>
    );
  };

  export default Home;