import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { ActionsType, reducer } from './reducer';

export type StateType = {
  isDayThemeAPI: boolean;
  isDayTheme: boolean;
  themeAutoMode: boolean;
};
const initialState: StateType = {
  isDayThemeAPI: true,
  isDayTheme: true,
  themeAutoMode: true,
};

const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionsType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
