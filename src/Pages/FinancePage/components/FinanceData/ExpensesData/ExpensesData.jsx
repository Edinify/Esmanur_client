import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpensesCard from "./ExpensesCard";
import { Pagination } from "antd";
import Loading from "../../../../../globalComponents/Loading/Loading";
import { getExpensesPaginationAction } from "../../../../../redux/actions/expensesAction";

const ExpensesData = ({  getPageNumber,  page, dataHead = [] }) => {
  const dispatch = useDispatch();
  const expensesData = useSelector((state) => state?.expensesData.expensesData);
  const { totalPages, loading, lastPage: expensesPageNum } = useSelector((state) => state.expensesData);
  const expensesHead = [...dataHead];


// useEffect(() => {
//   dispatch(getExpensesPaginationAction(1, "", "", 1));
// }, []);

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
                <ExpensesCard
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
            <ExpensesCard
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

export default ExpensesData;
