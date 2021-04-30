// setting up the data layer to put info
//we need this to track the basket
//this file remains the same for setting up the data layer
//we can actually copy and paste it in any application

import React,{ createContext ,useContext ,useReducer} from "react";

//This is the data layer -> like declaring global variables which are accessible everywhere
//empty data layer as we do not pass anything
export const StateContext = createContext();

//Initialstate is the beginning state of our data layer
//build a provider
//children here is referred to the app
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer( reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
