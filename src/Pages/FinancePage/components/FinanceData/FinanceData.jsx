import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncomePaginationAction } from "../../../../redux/actions/incomeActions";
import { getExpensesPaginationAction } from "../../../../redux/actions/expensesAction";
import { getFoodRationPaginationAction } from "../../../../redux/actions/foodRationAction";
import {
  EXPENSES_ACTION_TYPE,
  INCOME_ACTION_TYPE,
  FOOD_RATION_ACTION_TYPE,
} from "../../../../redux/actions-type";
import IncomesData from "./IncomesData/IncomesData";
import ExpensesData from "./ExpensesData/ExpensesData";
import FoodRationData from "./FoodRation/FoodRation";

const FinanceData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    financeMonthsFilter,
    financeChooseDate,
  } = useSelector((state) => state.financeDateFilter);
  const { lastPage: incomesLastPage } = useSelector((state) => state.incomes);
  const { lastPage: expensesLastPage } = useSelector(
    (state) => state.expensesData
  );
  const { lastPage: foodRationLastPage } = useSelector(
    (state) => state.foodRationData
  );
  const dataHead = location.pathname === "/finance/food-ration" ? [
    { id: 1, label: "Qidanın adı" },
    { id: 2, label: "Miqdarı" },
    { id: 3, label: "Vahidin məbləği" },
    { id: 3, label: "Ümumi məbləğ" },
    { id: 3, label: "Tarix" },
    { id: 4, label: "" },
  ]
  : [
    { id: 1, label: "Təyinat" },
    { id: 2, label: "Məbləğ" },
    { id: 3, label: "Tarix" },
    { id: 4, label: "" },
  ];

  const getPageNumberIncomes = (pageNumber) => {
    if (financeChooseDate.startDate && financeChooseDate.endDate) {
      dispatch({
        type: INCOME_ACTION_TYPE.GET_INCOME_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getIncomePaginationAction(
          pageNumber,
          financeChooseDate.startDate,
          financeChooseDate.endDate,
          "", //month
        )
      );
    } else {
      dispatch({
        type: INCOME_ACTION_TYPE.GET_INCOME_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getIncomePaginationAction(
          pageNumber,
          "",
          "",
          financeMonthsFilter ? financeMonthsFilter : 1, //month
        )
      );
    }
  };
  const getDateFilteredIncomes = (pageNumber) => {
    dispatch({
      type: INCOME_ACTION_TYPE.GET_INCOME_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getIncomePaginationAction(
        pageNumber,
        financeChooseDate.startDate,
        financeChooseDate.endDate,
        "", //month
      )
    );
  };
  const getMonthFilteredIncomes = (pageNumber) => {
    dispatch({
      type: INCOME_ACTION_TYPE.GET_INCOME_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getIncomePaginationAction(
        pageNumber,
        "",
        "",
        financeMonthsFilter ? financeMonthsFilter : 1, //month
      )
    );
  };

  const getPageNumberExpenses = (pageNumber) => {
    if (financeChooseDate.startDate && financeChooseDate.endDate) {
      dispatch({
        type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getExpensesPaginationAction(
          pageNumber,
          financeChooseDate.startDate,
          financeChooseDate.endDate,
          "", //month
        )
      );
    } else {
      dispatch({
        type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getExpensesPaginationAction(
          pageNumber,
          "",
          "",
          financeMonthsFilter ? financeMonthsFilter : 1, //month
        )
      );
    }
  };
  const getDateFilteredExpenses = (pageNumber) => {
    dispatch({
      type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getExpensesPaginationAction(
        pageNumber,
        financeChooseDate.startDate,
        financeChooseDate.endDate,
        "", //month
      )
    );
  };
  const getMonthFilteredExpenses = (pageNumber) => {
    dispatch({
      type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getExpensesPaginationAction(
        pageNumber,
        "",
        "",
        financeMonthsFilter ? financeMonthsFilter : 1, //month
      )
    );
  };

  const getPageNumberFoodRation = (pageNumber) => {
    if (financeChooseDate.startDate && financeChooseDate.endDate) {
      dispatch({
        type: FOOD_RATION_ACTION_TYPE.GET_FOOD_RATION_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getFoodRationPaginationAction(
          pageNumber,
          financeChooseDate.startDate,
          financeChooseDate.endDate,
          "" //month
        )
      );
    } else {
      dispatch({
        type: FOOD_RATION_ACTION_TYPE.GET_FOOD_RATION_LAST_PAGE,
        payload: pageNumber,
      });
      dispatch(
        getFoodRationPaginationAction(
          pageNumber,
          "",
          "",
          financeMonthsFilter ? financeMonthsFilter : 1 //month
        )
      );
    }
  };
  const getDateFilteredFoodRation = (pageNumber) => {
    dispatch({
      type: FOOD_RATION_ACTION_TYPE.GET_FOOD_RATION_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getFoodRationPaginationAction(
        pageNumber,
        financeChooseDate.startDate,
        financeChooseDate.endDate,
        "" //month
      )
    );
  };
  const getMonthFilteredFoodRation = (pageNumber) => {
    dispatch({
      type: FOOD_RATION_ACTION_TYPE.GET_FOOD_RATION_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch(
      getFoodRationPaginationAction(
        pageNumber,
        "",
        "",
        financeMonthsFilter ? financeMonthsFilter : 1 //month
      )
    );
  };

  useEffect(() => {
    if (financeChooseDate?.startDate && financeChooseDate?.endDate) {
      getDateFilteredIncomes(incomesLastPage);
      getDateFilteredExpenses(expensesLastPage);
      getDateFilteredFoodRation(foodRationLastPage);
    }
  }, [financeChooseDate]);

  useEffect(() => {
    if (financeMonthsFilter) {
      getMonthFilteredIncomes(incomesLastPage);
      getMonthFilteredExpenses(expensesLastPage);
      getMonthFilteredFoodRation(foodRationLastPage);
    }
  }, [financeMonthsFilter]);


  useEffect(() => {
    dispatch(getExpensesPaginationAction(1, "", "", 1));
    dispatch(getIncomePaginationAction(1, "", "", 1));
    dispatch(getFoodRationPaginationAction(1, "", "", 1));
  }, []);


  return (
    <div>
      {location.pathname === "/finance/incomes" && (
        <IncomesData
          getPageNumber={getPageNumberIncomes}
          page={"finance"}
          dataHead={dataHead}
        />
      )}
      {location.pathname === "/finance/expenses" && (
        <ExpensesData
          getPageNumber={getPageNumberExpenses}
          page={"finance"}
          dataHead={dataHead}
        />
      )}

      {location.pathname === "/finance/food-ration" && (
        <FoodRationData
          getPageNumber={getPageNumberFoodRation}
          page={"finance"}
          dataHead={dataHead}
        />
      )}
    </div>
  );
};

export default FinanceData;
