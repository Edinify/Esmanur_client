import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../globalComponents/Loading/Loading";
import BranchCard from "./BranchCard";

const BranchesData = ({ getPageNumber, page, dataHead = [] }) => {
  const dispatch = useDispatch();
  const { branchesData, loading } = useSelector((state) => state.branchesData);
  const { user } = useSelector((state) => state.user);

// console.log(user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="branches-con">
          {branchesData?.map((branch, i) => (
            <BranchCard key={i} data={branch} />
          ))}
        </div>
      )}
    </>
  );
};

export default BranchesData;
