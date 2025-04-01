import React from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0874ec",
        tabBarInactiveTintColor: "#888",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: Platform.OS === "ios" ? 90 : 70,
          paddingBottom: Platform.OS === "ios" ? 25 : 12,
          paddingTop: 8,
          borderTopStartRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 6,  
        },
        tabBarIconStyle: {
          marginTop: 6,  
        },
      }}
    >
      <Tabs.Screen
        name="overview"
        options={{
          title: "Tổng quan",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="dashboard"
              size={26}  
              color={focused ? "#0874ec" : "#888"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Đơn hàng",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="list-alt"
              size={26}
              color={focused ? "#0874ec" : "#888"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          title: "Sơ đồ Gantt",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="timeline"
              size={26}
              color={focused ? "#0874ec" : "#888"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Lệnh SX",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="assignment"
              size={26}
              color={focused ? "#0874ec" : "#888"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "Xem thêm",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="more-horiz"
              size={26}
              color={focused ? "#0874ec" : "#888"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
