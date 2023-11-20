import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminsPaginationAction, getAdminsAction } from "../../redux/actions/adminsActions";
import { ADMINS_MODAL_ACTION_TYPE} from "../../redux/actions-type";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";

import AdminsData from "./components/AdminsData/AdminsData";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";

const AdminsPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.adminsPagination);
  const { adminsSearchValues } = useSelector((state) => state.searchValues);
  const [adminPageNum, setAdminPageNum] = useState(1);

  const getPageNumber = (pageNumber) => {
    setAdminPageNum(pageNumber);
    if (adminsSearchValues) {
      dispatch(getAdminsPaginationAction(pageNumber, adminsSearchValues));
    } else {
      dispatch(getAdminsPaginationAction(pageNumber, ""));
    }
  };
  const openModal = () => {
    dispatch({
      type: ADMINS_MODAL_ACTION_TYPE.GET_ADMINS_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const searchData = (e) => {
    e.preventDefault();
    dispatch(getAdminsPaginationAction(1, adminsSearchValues));
    setAdminPageNum(1);
  };

  useEffect(() => {
    if (adminsSearchValues) {
      dispatch(getAdminsAction());
    } else {
      dispatch(getAdminsAction());
    }
  }, [dispatch]);
  
  useEffect(() => {
    if (lastPage) {
      setAdminPageNum(lastPage);
    }
  }, [lastPage]);


  return (
    <div className="details-page admins-page">
      {/* <button onClick={() => getSomething(5)}>work</button> */}
      <GlobalHead 
      searchData={searchData} 
      openModal={openModal} 
      DATA_SEARCH_VALUE={'ADMINS_SEARCH_VALUE'} 
      dataSearchValues={adminsSearchValues}
      search={false}
      />
      <AdminsData adminPageNum={adminPageNum} getPageNumber={getPageNumber} />
    </div>
  );
};

export default AdminsPage;
