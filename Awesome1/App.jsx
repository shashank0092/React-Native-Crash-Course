import { SafeAreaView, View, Text,ScrollView } from "react-native"
import FlatCard from "./components/FlatCard";
import tw from "twrnc"
import ElevetedCard from "./components/ElvetedCard";
import ViewImage from "./components/ViewImage";
import ActionCard from "./components/ActionCard";
import Contact from "./components/Contact";



const App = () => {
  return (
    <>
      <SafeAreaView style={tw `mt-5`} >
        <ScrollView>
        <View>
          <View style={tw `ml-5`} >
            <Text style={tw`text-white font-sans font-bold text-2xl`}>Flat Cards:</Text>
          </View>
          <View style={tw`flex flex-row `}>
            <FlatCard number={1} color={"red"} />
            <FlatCard number={2} color={"green"} />
            <FlatCard number={3} color={"blue"} />
          </View>
        </View>

        <View style={tw `border-t-2 border-white`}>
          <View>
            <Text style={tw `text-white font-sans font-bold text-2xl ml-5`} >
              Elevation Card:
            </Text>
          </View>
          <ScrollView horizontal style={tw `flex flex-row  `} >
            <ElevetedCard color={"red"} number={1} />
            <ElevetedCard color={"blue"} number={2} />
            <ElevetedCard color={"green"} number={3} />
         
          
            <ElevetedCard color={"orange"} number={4} />
            <ElevetedCard color={"yellow"} number={5} />
            <ElevetedCard color={"pink"} number={6} />
            </ScrollView>
        </View>

        <View style={tw `border-t-2 border-white`}>
          <ViewImage/>
        </View>

        <View style={tw `mt-16 border-t-2 border-white`} >
          <ActionCard/>
        </View>
        <View style={tw `border-t-2 border-white`} >
          <Contact/>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App;
