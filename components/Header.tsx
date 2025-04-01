import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface HeaderProps {
  onMenuPress?: () => void;
}

const Header = ({ onMenuPress }: HeaderProps) => {
  return (
    <View
      className="bg-[#0474f4]"
      style={{ paddingTop: 50, paddingBottom: 20 }}
    >
      <View className="flex-row items-center px-4 py-2.5">
        <TouchableOpacity className="w-10" onPress={onMenuPress}>
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold flex-1 text-center">
          Lệnh Sản Xuất
        </Text>

        <View className="w-10">
          <MaterialCommunityIcons
            name="credit-card-scan-outline"
            size={24}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;