// import { View, Text, StyleSheet } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function CustomDrawerContent(props: any) {
//   return (
//     <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
//       <Text className="text-xl font-bold px-4 py-6">Lệnh Sản Xuất</Text>
      
//       <View className="px-4 mb-6">
//         <Text className="text-gray-700 font-semibold mb-2">Tìm kiếm mô lệnh sản xuất</Text>
//         <View className="pl-4">
//           <Text className="py-2">- Trọng thái</Text>
//           <Text className="py-2">- Chưa sản xuất</Text>
//           <Text className="py-2">- Đang sản xuất</Text>
//           <Text className="py-2">- Hoàn thành</Text>
//         </View>
//       </View>

//       <View className="border-t border-gray-300 pt-4 px-4">
//         <Text className="text-gray-700 font-semibold mb-2">Bộ ghim toán bộ</Text>
        
//         <View className="mb-4">
//           <Text className="font-medium py-1">Chưa sản xuất</Text>
//           <Text className="pl-4 py-1">- LSX-13032514</Text>
//           <Text className="pl-4 py-1">- Deadline: 13/03/2025</Text>
//         </View>

//         <View className="mb-4">
//           <Text className="font-medium py-1">Đang sản xuất</Text>
//           <Text className="pl-4 py-1">- LSX-13032514</Text>
//           <Text className="pl-4 py-1">- Deadline: 13/03/2025</Text>
//         </View>

//         <View className="mb-4">
//           <Text className="font-medium py-1">Hoàn thành</Text>
//           <Text className="pl-4 py-1">- LSX-13032514</Text>
//           <Text className="pl-4 py-1">- Deadline: 13/03/2025</Text>
//         </View>
//       </View>
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
// });