import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Linking from "expo-linking";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center p-2 bg-neutral-950  ">
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/69318293?v=4",
        }}
        className="w-48 h-48 rounded-full"
      />
      <Text className="text-2xl font-bold mt-4">Rui marcos</Text>
      <Text className="text-base mt-2 text-gray-500">Luanda, Angola</Text>
      <Text className="text-base mt-4 text-gray-500">
        Desenvolvedor(a) mobile apaixonado(a) por criar aplicativos intuitivos e
        bonitos. Criei este aplicativo de explo para ajudar a comunidade para
        escrever notas e exportar em pdf, quem quiser ajudar a sua ajudar é bem
        vinda.
      </Text>
      <Text className="text-base mt-4 text-yellow-500">De momento gerar pdf só funciona para Android</Text>
      <View className="flex flex-row mt-8">
        <TouchableOpacity
          className="bg-blue-500 p-4 h-12 rounded-md mx-2"
          onPress={() => {
            Linking.openURL("https://twitter.com/Ruimarcosjoao");
          }}
        >
          <Text className="text-white text-center">Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 p-4 h-12 rounded-md mx-2"
          onPress={() => {
            Linking.openURL("https://www.linkedin.com/in/rui-marcos-joao/");
          }}
        >
          <Text className="text-white text-center">LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 p-4 h-12 rounded-md mx-2"
          onPress={() => {
            Linking.openURL("https://github.com/ruimarcosjoao");
          }}
        >
          <Text className="text-white text-center">Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
