import {SafeAreaView,Text,View,Image,Linking} from "react-native"
import tw from "twrnc"
const Contact=()=>{

    const dev=[
        {
          "name": "Alice Smith",
          "image": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "contactNumber": "555-1234",
          "email": "alice@example.com"
        },
        {
          "name": "Bob Johnson",
          "image": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "contactNumber": "555-5678",
          "email": "bob@example.com"
        },
        {
          "name": "Eve Davis",
          "image": "https://randomuser.me/api/portraits/med/women/75.jpg",
          "contactNumber": "555-9876",
          "email": "eve@example.com"
        }
      ]
    return(
        <>
           <SafeAreaView>

                <View>
                    {
                        dev.map((item,key)=>{
                            return(
                                <View key={key} style={tw `flex flex-row gap-5 ml-5 mt-5 p-5 `} >
                                    <View>
                                        <Image source={{uri:`${item.image}`}} height={50} width={50} style={tw `rounded-full`} />
                                    </View>
                                    <View>
                                        <Text style={tw `text-white text-xl font-bold`} >{item.name}</Text>
                                        <Text style={tw `text-white text-lg font-bold`}>{item.contactNumber}</Text>
                                        <Text style={tw `text-white text-sm font-bold`}>{item.email}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>

            </SafeAreaView> 
        </>

    )
}

export default Contact;