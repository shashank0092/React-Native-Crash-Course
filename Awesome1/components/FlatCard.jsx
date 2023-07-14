import { SafeAreaView, View, Text } from "react-native";
import tw from "twrnc";
const FlatCard = ({ color, number }) => {
    return (
        <>
            <SafeAreaView  >
                <View style={tw`bg-${color}-500 h-[100px] w-[100px] m-3 rounded-lg flex justify-center items-center `} >
                    <Text style={tw`text-black font-bold underline`} >Card {number} </Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default FlatCard;