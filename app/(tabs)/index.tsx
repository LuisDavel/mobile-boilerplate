import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function HomeScreen() {
  const { styles, theme } = useStyles(stylesheet);
  const insets = useSafeAreaInsets();
  return <View></View>;
}

const stylesheet = createStyleSheet(() => {
  return {
    container: (top: number) => ({
      flex: 1,
      paddingTop: top,
      paddingHorizontal: 20
    }),
    section: {
      flex: 1
    },
    icon: {
      marginLeft: 10
    }
  };
});
