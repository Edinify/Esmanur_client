import { BRANCHES_ACTION_TYPE } from "../actions-type";

const initialState = {
  branchModalData: {
    name: "",
    number: "",
  },
  branchesAllData: "",
  branchesAllDataLoading: false,
  branchOpenModal: false,
  modalLoading: false,
};

export const branchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRANCHES_ACTION_TYPE.GET_ALL_BRANCHES:
      return {
        ...state,
        branchesAllData: action.payload.data,
      };
    case BRANCHES_ACTION_TYPE.BRANCHES_ALL_LOADING:
      return {
        ...state,
        branchesAllDataLoading: action.payload,
      };
    case BRANCHES_ACTION_TYPE.GET_BRANCH_MODAL:
      return {
        branchModalData: action.payload.data,
        branchOpenModal: action.payload.openModal,
      };
    case BRANCHES_ACTION_TYPE.BRANCH_OPEN_MODAL:
      return {
        ...state,
        branchOpenModal: action.payload,
      };
    case BRANCHES_ACTION_TYPE.BRANCH_MODAL_LOADING:
      return {
        ...state,
        modalLoading: action.payload,
      };
    default:
      return state;
  }
};
