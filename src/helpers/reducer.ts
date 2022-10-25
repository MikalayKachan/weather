import { StateType } from './context';

export type SetDayThemeAPIActionType = {
  type: 'SET_DAY_THEME_API';
  payload: boolean;
};
export type SetDayThemeActionType = {
  type: 'SET_DAY_THEME';
  payload: boolean;
};
export type SetThemeAutoModeActionType = {
  type: 'SET_THEME_AUTO_MODE';
  payload: boolean;
};

export type ActionsType =
  | SetDayThemeAPIActionType
  | SetDayThemeActionType
  | SetThemeAutoModeActionType;

export const reducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case 'SET_DAY_THEME_API':
      return { ...state, isDayThemeAPI: action.payload };
    case 'SET_DAY_THEME':
      return { ...state, isDayTheme: action.payload };
    case 'SET_THEME_AUTO_MODE':
      return { ...state, themeAutoMode: action.payload };
    default:
      return state;
  }
};