import { createContext, Reducer, useReducer } from "react";

type ContextType = {} | null

const ThemeContext = createContext<ContextType>(null);

enum actionStrings {
    darkTheme = "Theme Context - DARK",
    lightTheme = "Theme Context - LIGHT",
}

const themeReducer: Reducer<IThemeState, IThemeAction> = (state, action) => {
    switch (action.type) {
        case actionStrings.darkTheme:
            return { darkMode: false };
        case actionStrings.lightTheme:
            return { darkMode: true };
        default:
            return state
    }
};

interface IThemeAction {
    type: actionStrings;
    payload: number;
}

interface IThemeState {
    darkMode: boolean
}

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
        {children}
    </ThemeContext.Provider>;
}