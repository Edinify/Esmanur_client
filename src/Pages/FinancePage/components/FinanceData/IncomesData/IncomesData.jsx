import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomesCard from "./IncomesCard";
import { Pagination } from "antd";
import Loading from "../../../../../globalComponents/Loading/Loading";
import { getIncomePaginationAction } from "../../../../../redux/actions/incomeActions";

const IncomesData = ({ getPageNumber, page }) => {
  const dispatch = useDispatch();
  const { incomes, totalPages } = useSelector((state) => state.incomes);
  const { loading, lastPage: incomesPageNum } = useSelector(
    (state) => state.incomes
  );
  const { financeMonthsFilter, financeChooseDate } = useSelector(
    (state) => state.financeDateFilter
  );
  const incomesHead = [
    { id: 1, label: "Təyinat" },
    { id: 2, label: "Məbləğ" },
    { id: 3, label: "Tarix" },
    { id: 4, label: "" },
  ];

  // useEffect(() => {
  //   dispatch(getIncomePaginationAction(1, "", "", 1));
  // }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table incomes-table">
            <thead>
              <tr>
                {incomesHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incomes?.map((income, i) => (
                <IncomesCard
                  key={i}
                  data={income}
                  mode="desktop"
                  cellNumber={i + 1 + (incomesPageNum - 1) * 10}
                  page={page}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet incomes-page  ">
            {incomes?.map((income, i) => (
              <IncomesCard
                key={i}
                data={income}
                mode="tablet"
                cellNumber={i + 1 + (incomesPageNum - 1) * 10}
                page={page}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={incomesPageNum}
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

export default IncomesData;
