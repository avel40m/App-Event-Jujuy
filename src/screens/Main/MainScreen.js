import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../../util/Theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HomeScreen } from '../Home/HomeScreen'
import { EventsScreen } from '../Events/EventsScreen'
import { FestivalScreen } from '../Festival/FestivalScreen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Events: 'glass-cocktail',
  Festival: 'party-popper'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}
export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name='Events' options={{ title: 'Eventos' }} component={EventsScreen} />
      <Tab.Screen name='Festival' options={{ title: 'Festival' }} component={FestivalScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
