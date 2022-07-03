import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    aircraftReg: undefined,
	requestBy: null,
	idNumber: null,
	unit: null,
	equipment: null,
	remark: null
};

export const RequestContext = createContext(INITIAL_STATE);

const RequestReducer = (state, action) => {
  switch (action.type) {
    case "NEW_REQUEST":
      return action.payload;
    case "RESET_REQUEST":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const RequestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RequestReducer, INITIAL_STATE);

  return (
    <RequestContext.Provider
      value={{
        aircraftReg: state.aircraftReg,
        requestBy: state.requestBy,
        idNumber: state.idNumber,
        unit: state.unit,
        equipment: state.equipment,
        remark: state.remark,
        dispatch,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};



















