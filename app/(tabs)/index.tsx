import { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import Header from "@/components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { productionOrders } from "@/data/productionOrders";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.85;

export default function HomeScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarPosition = useState(new Animated.Value(-SIDEBAR_WIDTH))[0];
  const [selectedStatuses, setSelectedStatuses] = useState([
    "pending",
    "in_progress",
    "completed",
  ]);
  const [pinnedOrders, setPinnedOrders] = useState<number[]>([]);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  const toggleSidebar = () => {
    const toValue = sidebarOpen ? -SIDEBAR_WIDTH : 0;

    Animated.timing(sidebarPosition, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setSidebarOpen(!sidebarOpen);
  };

  const togglePin = (orderId: number) => {
    if (pinnedOrders.includes(orderId)) {
      setPinnedOrders(pinnedOrders.filter((id) => id !== orderId));
    } else {
      setPinnedOrders([...pinnedOrders, orderId]);
    }
  };
  const toggleStatus = (status: any) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  const filteredOrders = productionOrders.filter((order) =>
    selectedStatuses.includes(order.status)
  );

  const getStatusInfo = (status: any) => {
    switch (status) {
      case "pending":
        return { color: "orange", text: "Chưa sản xuất" };
      case "in_progress":
        return { color: "blue", text: "Đang sản xuất" };
      case "completed":
        return { color: "green", text: "Hoàn thành" };
      default:
        return { color: "gray", text: "Unknown" };
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const statuses = [
    {
      key: "pending",
      label: "Chưa sản xuất",
      color: "bg-orange-100 text-orange-600",
    },
    {
      key: "in_progress",
      label: "Đang sản xuất",
      color: "bg-blue-100 text-blue-600",
    },
    {
      key: "completed",
      label: "Hoàn thành",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <View className="flex-1 bg-[#f3f4f6]">
      <Header />

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-6">
        <Image
          source={require("../../assets/images/imageBody.jpg")}
          className="w-[270px] h-[270px] mb-2"
          resizeMode="contain"
        />
        <Text className="text-black text-xl mb-5 text-center">
          Chưa có Lệnh sản xuất.
        </Text>
        <TouchableOpacity
          className="bg-[#0474f4] py-3 px-6 flex-row items-center justify-center rounded-lg gap-2"
          onPress={toggleSidebar}
        >
          <MaterialIcons name="push-pin" size={22} color="white" />
          <Text className="text-white font-bold text-base">
            Bắt đầu ghim lệnh ngay
          </Text>
        </TouchableOpacity>
      </View>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <Pressable
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"
          onPress={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: SIDEBAR_WIDTH,
          backgroundColor: "white",
          transform: [{ translateX: sidebarPosition }],
          zIndex: 100,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View className="pt-12 px-4 bg-white flex-1">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-[#0a2463]">
              Lệnh Sản Xuất
            </Text>
            <TouchableOpacity onPress={toggleSidebar}>
              <MaterialIcons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <View className="mb-4">
            <View className="flex-row items-center border border-gray-300 rounded-lg overflow-hidden mt-2">
              <TextInput
                placeholder="Tìm kiếm mã lệnh sản xuất"
                className="flex-1 px-3 py-2 text-gray-500"
              />
              <TouchableOpacity className="bg-blue-400 p-3">
                <MaterialIcons name="search" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <View className="bg-white rounded-lg p-2 mt-3 border border-gray-200">
              {/* Header Dropdown */}
              <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                className="flex-row justify-between items-center p-3"
              >
                <Text className="text-[#0a2463] font-medium">Trạng thái</Text>
                <MaterialIcons
                  name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={20}
                  color="#0a2463"
                />
              </TouchableOpacity>

              {/* Dropdown Content */}
              {isOpen && (
                <View className="border-t border-gray-300">
                  {statuses.map((status, index) => (
                    <TouchableOpacity
                      key={status.key}
                      className="flex-row items-center p-3"
                      onPress={() => toggleStatus(status.key)}
                    >
                      {/* Check Box */}
                      <View
                        className={`w-5 h-5 border border-blue-500 rounded mr-2 items-center justify-center ${
                          selectedStatuses.includes(status.key)
                            ? "bg-blue-500"
                            : "bg-white"
                        }`}
                      >
                        {selectedStatuses.includes(status.key) && (
                          <MaterialIcons name="check" size={14} color="white" />
                        )}
                      </View>

                      {/* Status Label */}
                      <Text
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${status.color}`}
                      >
                        {status.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            <View className="bg-white rounded-lg p-2 mt-3 border border-gray-200">
              <TouchableOpacity
                className="flex-row items-center justify-between p-2"
                onPress={() => setPinnedOrders([])}
              >
                <Text className="text-[#0a2463] font-medium ml-1">
                  Bỏ ghim toàn bộ
                </Text>
                <MaterialCommunityIcons
                  name="pin-off-outline"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Production orders list */}
          <ScrollView className="flex-1">
            {filteredOrders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              const isPinned = order.status !== "completed";

              return (
                <View
                  key={order.id}
                  className="mb-3 overflow-hidden rounded-lg"
                  style={{ backgroundColor: "#f4fcfc" }}
                >
                  {/* Left Border */}
                  <View className="flex-row">
                    <View className="w-1 bg-blue-500" />

                    <View className="flex-1">
                      {/* Status Header */}
                      <View
                        className={`flex-row items-center px-3 py-2 ${
                          statusInfo.color === "orange"
                            ? "bg-orange-50"
                            : statusInfo.color === "blue"
                            ? "bg-blue-50"
                            : statusInfo.color === "green"
                            ? "bg-green-50"
                            : "bg-gray-50"
                        }`}
                      >
                        <Text
                          className={`font-medium ${
                            statusInfo.color === "orange"
                              ? "text-orange-600"
                              : statusInfo.color === "blue"
                              ? "text-blue-600"
                              : statusInfo.color === "green"
                              ? "text-green-600"
                              : "text-gray-600"
                          }`}
                        >
                          {statusInfo.text}
                        </Text>
                        <View className="flex-1" />
                        {/* <MaterialIcons
                          name="push-pin"
                          size={20}
                          color={isPinned ? "red" : "gray"}
                        /> */}
                        <TouchableOpacity onPress={() => togglePin(order.id)}>
                          <MaterialIcons
                            name="push-pin"
                            size={20}
                            color={
                              pinnedOrders.includes(order.id) ? "red" : "gray"
                            }
                          />
                        </TouchableOpacity>
                      </View>

                      {/* Order Content */}
                      <View className="px-3 py-2">
                        <Text className="text-blue-700 font-bold text-lg mb-1">
                          {order.name || "LSX-13032514"}
                        </Text>
                        <Text className="text-gray-500 text-sm mb-3">
                          Deadline: {order.deadline || "13/03/2025"}
                        </Text>

                        {/* Progress bars in a row */}
                        <View className="flex-row items-center mb-3">
                          {/* Process 1 (Orange) */}
                          <View className="h-3 bg-orange-100 rounded-full overflow-hidden flex-1 mr-1 relative">
                            <View
                              className="h-full bg-orange-500 rounded-full flex-row items-center"
                              style={{ width: `${order.process1}%` }}
                            >
                              <Text className="text-white text-xs font-bold px-1 absolute left-1">
                                {order.process1}%
                              </Text>
                            </View>
                          </View>

                          {/* Process 2 (Blue) */}
                          <View className="h-3 bg-blue-100 rounded-full overflow-hidden flex-1 mr-1 relative">
                            <View
                              className="h-full bg-blue-500 rounded-full flex-row items-center"
                              style={{ width: `${order.process2}%` }}
                            >
                              <Text className="text-white text-xs font-bold px-1 absolute left-1">
                                {order.process2}%
                              </Text>
                            </View>
                          </View>

                          {/* Info icon with tooltip */}
                          <View className="relative">
                            <TouchableOpacity
                              onPress={() =>
                                setShowTooltip(
                                  showTooltip === order.id ? null : order.id
                                )
                              }
                              className="p-1"
                            >
                              <MaterialIcons
                                name="info-outline"
                                size={20}
                                color="#999"
                              />
                            </TouchableOpacity>

                            {/* Enhanced Tooltip */}
                            {showTooltip === order.id && (
                              <View className="absolute right-0 bottom-6 bg-white border border-gray-200 shadow-xl rounded-lg p-4 z-10 w-72">
                                {/* First Row */}
                                <View className="flex-row items-center justify-between mb-3">
                                  <View className="flex-row items-center flex-1">
                                    <View className="w-3 h-3 rounded-full bg-orange-500 mr-3" />
                                    <Text className="text-gray-700 font-medium">
                                      Tiến độ Kế hoạch Nguyên liệu
                                    </Text>
                                  </View>
                                  <Text className="text-gray-700 font-bold ml-4">
                                    {order.process1}%
                                  </Text>
                                </View>

                                {/* Second Row */}
                                <View className="flex-row items-center justify-between ">
                                  <View className="flex-row items-center flex-1">
                                    <View className="w-3 h-3 rounded-full bg-blue-500 mr-3" />
                                    <Text className="text-gray-700 font-medium">
                                      Tiến độ Nhập kho Thành phẩm
                                    </Text>
                                  </View>
                                  <Text className="text-gray-700 font-bold ml-4">
                                    {order.process2}%
                                  </Text>
                                </View>

                                {/* Triangle pointer */}
                                <View
                                  className="absolute -bottom-2 right-4"
                                  style={{
                                    width: 0,
                                    height: 0,
                                    backgroundColor: "transparent",
                                    borderStyle: "solid",
                                    borderLeftWidth: 8,
                                    borderRightWidth: 8,
                                    borderBottomWidth: 0,
                                    borderTopWidth: 8,
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent",
                                    borderTopColor: "white",
                                  }}
                                />
                                {/* Shadow for triangle */}
                                <View
                                  className="absolute -bottom-2.5 right-3.5"
                                  style={{
                                    width: 0,
                                    height: 0,
                                    backgroundColor: "transparent",
                                    borderStyle: "solid",
                                    borderLeftWidth: 9,
                                    borderRightWidth: 9,
                                    borderBottomWidth: 0,
                                    borderTopWidth: 9,
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent",
                                    borderTopColor: "rgba(0,0,0,0.1)",
                                  }}
                                />
                              </View>
                            )}
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
}
