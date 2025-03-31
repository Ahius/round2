import { Text, View, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="bg-[#0474f4]" style={{ paddingTop: 50, paddingBottom: 20 }}>
      <StatusBar backgroundColor="#0474f4" barStyle="light-content" />
      <View className="flex-row items-center px-4 py-2.5">
        <View className="w-10">
          <MaterialIcons name="menu" size={24} color="white" />
        </View>

        <Text className="text-white text-lg font-bold flex-1 text-center">
          Lệnh Sản Xuất
        </Text>
        
        <View className="w-10">
          <MaterialIcons name="print" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;