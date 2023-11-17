import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodRationCard from "./FooadRationCard";
import { Pagination } from "antd";
import Loading from "../../../../../globalComponents/Loading/Loading";
import { getExpensesPaginationAction } from "../../../../../redux/actions/expensesAction";

const FoodRationData = ({  getPageNumber,  page, dataHead = [] }) => {
  const dispatch = useDispatch();
  const expensesData = useSelector((state) => state?.expensesData.expensesData);
  const { totalPages, loading, lastPage: expensesPageNum } = useSelector((state) => state.expensesData);
  const expensesHead = page !== 'finance' ? [
    { id: 1, label: "Xərcin təyinatı" },
    { id: 2, label: "Xərcin dəyəri" },
    { id: 3, label: "Xərcin tarixi" },
    { id: 4, label: "" },
  ] : [...dataHead];

// console.log(expensesPageNum);
// console.log(lastPage);
useEffect(() => {
  dispatch(getExpensesPaginationAction(1, "", "", 1, "food", "oldest"));
}, []);


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table expenses-table">
            <thead>
              <tr>
                {expensesHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expensesData?.map((expense, i) => (
                <FoodRationCard
                  key={i}
                  data={expense}
                  mode="desktop"
                  cellNumber={i + 1 + (expensesPageNum - 1) * 10}
                  page={page}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet incomes-page ">
          {expensesData?.map((expense, i) => (
            <FoodRationCard
              key={i}
              data={expense}
              mode="tablet"
              cellNumber={i + 1 + (expensesPageNum - 1) * 10}
              page={page}
            />
          ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={expensesPageNum}
                defaultCurrent={1}
                total={totalPages * 10}
                onChange={getPageNumber}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FoodRationData;
