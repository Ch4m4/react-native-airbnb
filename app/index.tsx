import {Link} from "expo-router";
import { Text, View } from "react-native";

const Index= ()  => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='mb-5 text-3xl font-rubik'>Welcome to Airbnb</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">prop 1r</Link>
    </View>
  );
}

export default Index;
