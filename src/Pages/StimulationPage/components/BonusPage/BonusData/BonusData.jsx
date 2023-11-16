import { useDispatch, useSelector } from "react-redux";
import BonusCard from "./BonusCard";
import { Pagination } from "antd";
import Loading from "../../../../../globalComponents/Loading/Loading";
import { useEffect, useState } from "react";
import { getBonusPaginationAction } from "../../../../../redux/actions/bonusActions";
import { clearSearchValue } from "../../../../../redux/actions/clearSearchValueAction";
import MoreModal from "../../../../../globalComponents/MoreModal/MoreModal";
import { BONUS_MODAL_ACTION_TYPE } from "../../../../../redux/actions-type";

const BonusData = ({ bonusPageNum, getPageNumber, page, dataHead = [] }) => {
  const dispatch = useDispatch();
  const { bonusData, totalPages, loading } = useSelector(
    (state) => state.bonusData
  );
  const { bonusSearchValues } = useSelector((state) => state.searchValues);

  const handleUpdate = (data, modalType) => {
    const { teacher, comment, _id, amount } = data;
    dispatch({
      type: BONUS_MODAL_ACTION_TYPE.GET_BONUS_MODAL,
      payload: {
        data: {
          teacher: teacher._id,
          comment,
          amount,
          _id,
        },
        openModal: modalType !== "more" ? true : false,
      },
    });
  };

  useEffect(() => {
    if (bonusSearchValues) {
      dispatch(getBonusPaginationAction(1, bonusSearchValues, "", ""));
    } else {
      dispatch(getBonusPaginationAction(1, "", "", ""));
    }
    return () => {
      dispatch(clearSearchValue());
    };
  }, [dispatch]);

  // 
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table bonus-table">
            <thead>
              <tr>
                {dataHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bonusData?.map((bonus, i) => (
                <BonusCard
                  key={i}
                  data={bonus}
                  mode="desktop"
                  cellNumber={i + 1 + (bonusPageNum - 1) * 10}
                  handleUpdate={handleUpdate}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet">
            {bonusData?.map((bonus, i) => (
              <BonusCard
                key={i}
                data={bonus}
                mode="tablet"
                cellNumber={i + 1 + (bonusPageNum - 1) * 10}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={bonusPageNum}
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

export default BonusData;
