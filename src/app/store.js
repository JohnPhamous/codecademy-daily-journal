import { configureStore } from '@reduxjs/toolkit';
import backgroundImageReducer from '../features/backgroundImage/backgroundImageSlice';
import counterReducer from '../features/counter/counterSlice';
import journalReducer from '../features/journal/journalSlice';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    journal: journalReducer,
  },
});
