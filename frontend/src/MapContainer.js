import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import KeplerGl from 'kepler.gl';
import keplerGlReducer from 'kepler.gl/reducers';

// 创建 Redux store
const reducers = combineReducers({
  keplerGl: keplerGlReducer
});
const store = createStore(reducers, {}, applyMiddleware(thunk));

function MapContainer() {
  return (
    <Provider store={store}>
      <KeplerGl
        id="map"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </Provider>
  );
}

export default MapContainer;

