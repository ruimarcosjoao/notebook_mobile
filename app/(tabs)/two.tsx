import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import {
  RichText,
  Toolbar,
  useEditorBridge,
  darkEditorTheme,
  darkEditorCss,
  TenTapStartKit,
  CoreBridge,
} from "@10play/tentap-editor";


const initialContent = '<p>Olá bem vindo ao notebook mobile</p>'

function createhtml(content:string) {
  return `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
        ${content}
    </body>
  </html>
  `
}

export default function TabTwoScreen() {

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: initialContent,
  });

  const printToFile = async (html: string) => {
    
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    return uri
  };


  async function getHtmlToPDF() {
    const content = await editor.getHTML();
    const html = createhtml(content)

    printToFile(html);
    
  }

  return (
    <SafeAreaView className="flex-1 px-2">
      <View className="flex-1">
        <RichText editor={editor} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="absolute w-full bottom-0"
        >
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </View>
      <View>
        <Pressable
          onPress={getHtmlToPDF}
          className="px-4 py-4 focus:scale-50 rounded-md bg-yellow-600 flex items-center justify-center"
        >
          <Text className="text-white">Gerar PDF</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

