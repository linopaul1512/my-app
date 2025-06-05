import { Stack } from "expo-router";
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function LayoutRoot() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#64748b',
      }}
    >
      <Tabs.Screen
        name="pantalla1"
        options={{
          title: 'Primera',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pantalla2"
        options={{
          title: 'Segunda',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}