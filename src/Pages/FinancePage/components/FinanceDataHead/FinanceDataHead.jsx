import React, { useState } from "react";
import "./financeDataHead.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  INCOMES_MODAL_ACTION_TYPE,
  EXPENSES_MODAL_ACTION_TYPE,
  FOOD_RATION_MODAL_ACTION_TYPE,
} from "../../../../redux/actions-type";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/finance/Plus.svg";
import FinanceDropdown from "./FinanceDropdown";

const FinanceDataHead = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const openIncomesModal = () => {
    dispatch({
      type: INCOMES_MODAL_ACTION_TYPE.GET_INCOMES_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const openExpensesModal = () => {
    dispatch({
      type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const openFoodRationModal = () => {
    dispatch({
      type: FOOD_RATION_MODAL_ACTION_TYPE.GET_FOOD_RATION_MODAL,
      payload: { data: {}, openModal: true },
    });
  };


  const openModal = () => {
    if (location.pathname === "/finance/incomes") {
      openIncomesModal();
    } else if (location.pathname === "/finance/expenses") {
      openExpensesModal();
    } else if (location.pathname === "/finance/food-ration") {
      openFoodRationModal();
    } 
  };
  return (
    <div className="finance-data-head">
      <div className="top">
        <Link
          to="/finance/incomes"
          className={`data-type ${
            location.pathname === "/finance/incomes" ? "active" : ""
          }`}
        >
          Mədaxil
        </Link>
        <Link
          to="/finance/expenses"
          className={`data-type ${
            location.pathname === "/finance/expenses" ? "active" : ""
          }`}
        >
          Xərc
        </Link>
        <Link
          to="/finance/food-ration"
          className={`data-type ${
            location.pathname === "/finance/food-ration" ? "active" : ""
          }`}
        >
          Qida rasionu
        </Link>
      </div>

      <div className="bottom">
        <div className="left">
        {/* {location.pathname !== "/finance/food-ration" && <FinanceDropdown type='category'  /> }
        {location.pathname !== "/finance/food-ration" && <FinanceDropdown type='sorting'  /> } */}
        </div>

        <div className="right">
          <button className="add-btn" onClick={() => openModal()}>
            <PlusIcon />
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceDataHead;
