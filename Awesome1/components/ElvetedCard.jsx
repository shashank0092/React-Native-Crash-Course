import {SafeAreaView,View,Text} from "react-native"
import tw from 'twrnc'
const ElevetedCard=({number,color})=>{
    return(
        <>
            <SafeAreaView>
                <View style={tw `bg-${color}-500 h-[100px] w-[100px] flex justify-center items-center m-3 rounded-lg`} >
                    <Text style={tw `text-black font-sans font-bold underline text-sm tracking-tight `} >Eleveted Card {number}</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ElevetedCard;