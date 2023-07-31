import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { customTheme } from './theme';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppRoutes/>
    </NativeBaseProvider>
  )
}

export default App;
