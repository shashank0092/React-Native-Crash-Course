import {SafeAreaView,View,Image, StyleSheet, Text} from "react-native";
import tw from "twrnc"
const ViewImage=()=>{
    return(
        <SafeAreaView>
            <View style={tw `h-[500px]`} >
                <Image source={require("../assets/Batman.png")} height={20} width={20}  />
            </View>
            <View style={tw `ml-5 `} >
                <Text style={tw `text-white text-2xl font-bold`} >THIS IS MY VERY BEST FRIEND BATMAN</Text>
            </View>
        </SafeAreaView>
    )
}

export default ViewImage;