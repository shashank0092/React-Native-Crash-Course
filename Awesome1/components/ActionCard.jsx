import {SafeAreaView,View,Text,Linking,TouchableOpacity} from "react-native"
import tw from "twrnc"
const ActionCard=()=>{

    const openWeb=async(link)=>{
        await Linking.openURL(link);
    }
    return(
        <>
            <SafeAreaView style={tw `ml-5`} >
                <View  >
                    <Text style={tw `text-white text-2xl font-bold`} >
                        Blogs:
                    </Text>
                </View>

                <View style={tw `mt-2`}>  
                    <TouchableOpacity onPress={()=>{openWeb("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}}  ><Text style={tw `text-white text-xl text-center`} >What is going in JACASCRIPT</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>openWeb("https://react.dev/")} ><Text style={tw `text-white text-xl text-center`} >What is going in REACTJS</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{openWeb("https://reactnative.dev/")}} ><Text style={tw `text-white text-xl text-center`} >What is going in NEXTJS</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ActionCard;