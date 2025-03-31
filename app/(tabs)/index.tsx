import {
  Image,
  View,
  Text,
} from "react-native";
import Header from "@/components/Header";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <View className="flex-1 justify-center items-center px-6">
        <Image
          source={require("../../assets/images/imageBody.jpg")}
          className="w-[270px] h-[270px] mb-2"
          resizeMode="contain"
        />

        <Text className="text-black text-xl mb-5 text-center">
          Chưa có Lệnh sản xuất.
        </Text>

        <View className="bg-[#0474f4] py-3 px-6 flex-row items-center justify-center rounded-lg gap-2">
          <MaterialIcons name="push-pin" size={22} color="white" />
          <Text className="text-white font-bold text-base">
            Bắt đầu ghim lệnh ngay
          </Text>
        </View>
      </View>
    </View>
  );
}