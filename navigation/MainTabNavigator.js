import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/NewsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ActionScreen from '../screens/ActionScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import MoreScreen from '../screens/MoreScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'НОВОСТИ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'
      }
    />
  ),
};

NewsStack.path = '';

const CategoryStack = createStackNavigator(
  {
    Category: CategoryScreen,
  },
  config
);

CategoryStack.navigationOptions = {
  tabBarLabel: 'СПРАВОЧНИК',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-folder' : 'md-folder'} />
  ),
};

CategoryStack.path = '';

const ActionStack = createStackNavigator(
  {
    Action: ActionScreen,
  },
  config
);

ActionStack.navigationOptions = {
  tabBarLabel: 'АКЦИИ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'} />
  ),
};

ActionStack.path = '';

const DiscussionStack = createStackNavigator(
  {
    Discussion: DiscussionScreen,
  },
  config
);

DiscussionStack.navigationOptions = {
  tabBarLabel: 'ОБСУЖДЕНИЯ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} />
  ),
};

DiscussionStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'Ещё',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  NewsStack,
  CategoryStack,
  ActionStack,
  DiscussionStack,
  MoreStack,
});

tabNavigator.path = '';

export default tabNavigator;
