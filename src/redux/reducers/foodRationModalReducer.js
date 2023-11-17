import { FOOD_RATİON_MODAL_ACTION_TYPE } from "../actions-type";

const initialState = {
  foodRationModalData: { category: "", appointment: "", amount: "", date: "" },
  foodRationOpenModal: false,
  foodRationModalLoading: false,
};

export const foodRationModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_RATİON_MODAL_ACTION_TYPE.GET_FOOD_RATİON_MODAL:
      return {
        ...state,
        foodRationModalData: action.payload.data,
        foodRationOpenModal: action.payload.openModal,
      };
    case FOOD_RATİON_MODAL_ACTION_TYPE.FOOD_RATİON_OPEN_MODAL:
      return {
        ...state,
        foodRationOpenModal: action.payload,
      };
    case FOOD_RATİON_MODAL_ACTION_TYPE.FOOD_RATİON_MODAL_LOADING:
      return {
        ...state,
        foodRationModalLoading: action.payload,
      };
    default:
      return state;
  }
};
