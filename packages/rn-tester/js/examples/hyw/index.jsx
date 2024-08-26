import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

// 第一层组件
const FirstLevelComponent = () => {
  const [firstLevelState, setFirstLevelState] = useState('1111111111');

  useEffect(() => {
    // console.time('FirstLevelComponent render time');
    return () => {
      // console.timeEnd('FirstLevelComponent render time');
    };
  });

  return (
    <View style={{ padding: 20, backgroundColor: '#f0f0f0', marginBottom: 10 }}>
      <Text>First Level Component</Text>
      <Text>{firstLevelState}</Text>
      <SecondLevelComponent setFirstLevelState={setFirstLevelState} />
    </View>
  );
};

// 第二层组件
const SecondLevelComponent = ({ setFirstLevelState }) => {
  const [secondLevelState, setSecondLevelState] = useState('1111111111');

  const updateFirstLevelState = useCallback(() => {
    setSecondLevelState('2222222222');
    setFirstLevelState('2222222222');
  }, [setFirstLevelState]);

  useEffect(() => {
    // console.time('SecondLevelComponent render time');
    return () => {
      // console.timeEnd('SecondLevelComponent render time');
    };
  });

  return (
    <View style={{ padding: 20, backgroundColor: '#d0d0d0', marginBottom: 10 }}>
      <Text>Second Level Component</Text>
      <Text>{secondLevelState}</Text>
      <ThirdLevelComponent setSecondLevelState={updateFirstLevelState} />
    </View>
  );
};

// 第三层组件
const ThirdLevelComponent = ({ setSecondLevelState }) => {
  const [thirdLevelState, setThirdLevelState] = useState('11111');

  const handleClick = () => {
    // 更新第三层组件的 state
    setTimeout(() => {
      setThirdLevelState('33333333');
    }, 1000);
    setThirdLevelState('2222222');

    // 同时触发第二层组件的 hook
    setSecondLevelState('2222222');
  };

  useEffect(() => {
    // console.time('ThirdLevelComponent render time');
    return () => {
      // console.timeEnd('ThirdLevelComponent render time');
    };
  });

  return (
    <View style={{ padding: 20, backgroundColor: '#b0b0b0', marginBottom: 10 }}>
      <Text>Third Level Component</Text>
      <Text>{thirdLevelState}</Text>
      <Button title="Update State" onPress={handleClick} />
    </View>
  );
};

// 渲染第一层组件
const App = () => {
  return (
    <View style={{ padding: 50 }}>
      <FirstLevelComponent />
    </View>
  );
};


exports.title = 'HywTest';
exports.documentationURL =
  'https://reactnative.dev/docs/next/drawerlayoutandroid';
exports.description = 'Drawer Example';
exports.examples = [
  {
    title: 'hyw 测试',
    render(): Node {
      return <App />;
    },
  },
];
