import { useSelector, useDispatch } from 'react-redux';
import { globalState } from '@/store/slices/counterSlice';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => jest.fn),
    useRoute: () => ({
      params: {
        id: jest.fn
      }
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('react-redux');

useSelector.mockImplementation(fn => fn(globalState));
useDispatch.mockReturnValue(jest.fn);
