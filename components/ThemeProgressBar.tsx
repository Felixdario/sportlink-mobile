import React from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
}

const ThemeProgressBar: React.FC<ProgressBarProps> = ({ progress, color, height }) => {
  return (
    <View className="w-full overflow-hidden bg-gray-300" style={{ height }}>
      <View
        style={{
          width: `${progress * 100}%`,
          backgroundColor: color,
          height,
        }}
      />
    </View>
  );
};

export default ThemeProgressBar;