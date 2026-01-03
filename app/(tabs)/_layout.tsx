import { images } from "@/constants";
import { TabBarIconProps } from "@/type";
import { Tabs } from "expo-router";
import { Image, View, Text } from "react-native";
import cn from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View className="tab-icon">
    <Image
      source={icon}
      className="size-7"
      resizeMode="contain"
      tintColor={focused ? "#FE8C00" : "#5D5F6D"}
    />
    <Text
      className={cn(
        "text-sm font-bold",
        focused ? "text-primary" : "text-gray-200"
      )}
    >
      {title}
    </Text>
  </View>
);

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderRadius: 50,
            marginHorizontal: 20,
            height: 80,
            position: "absolute",
            backgroundColor: "white",
            shadowColor: "1a1a1a",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title="Home" icon={images.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                title="Search"
                icon={images.search}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title="Cart" icon={images.bag} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                title="Profile"
                icon={images.person}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
