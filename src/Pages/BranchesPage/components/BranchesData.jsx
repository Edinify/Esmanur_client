import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../globalComponents/Loading/Loading";
import { getBranchesAction } from "../../../redux/actions/branchesActions";
import BranchCard from "./BranchCard";

const BranchesData = ({ getPageNumber, page, dataHead = [] }) => {
  const dispatch = useDispatch();
  const { branchesData, loading } = useSelector((state) => state.branchesData);
  useEffect(() => {
    dispatch(getBranchesAction());
  }, []);

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
