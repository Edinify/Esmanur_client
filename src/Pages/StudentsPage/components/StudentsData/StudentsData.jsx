import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "./StudentCard";
import { Pagination } from "antd";
import Loading from "../../../../globalComponents/Loading/Loading";
import MoreModal from "../../../../globalComponents/MoreModal/MoreModal";
import { STUDENTS_MODAL_ACTION_TYPE } from "../../../../redux/actions-type";

const StudentsData = ({ studentPageNum, getPageNumber }) => {
  const { students, totalPages } = useSelector(
    (state) => state.studentsPagination
  );
  const { loading } = useSelector((state) => state.studentsPagination);
  const [openMoreModal, setOpenMoreModal] = useState(false);
  const dispatch = useDispatch();
  const tableHead = [
    { id: 1, label: "Tələbə adı" },
    { id: 2, label: "Ana adı" },
    { id: 8, label: "Ata adı" },
    { id: 3, label: "Fənn" },
    { id: 4, label: "Ana telefon nömrəsi" },
    { id: 9, label: "Ata telefon nömrəsi" },
    { id: 5, label: "" },
    // { id: 5, label: "Dərs sayı" },
    // { id: 6, label: "Status" },
    { id: 7, label: "" },
  ];
  const handleUpdate = (data, modalType) => {
    const {
      fullName,
      motherName,
      fatherName,
      birthday,
      motherPhone,
      fatherPhone,
      email,
      password,
      courses,
      lessonAmount,
      status,
      _id,
      createdAt,
      payment,
      sector,
      whereComing,
      educationalInstitution,
      educationDegree,
      healthStatus,
      emergencyPhone,
      whereFrom,
      fin,
      seria,
    } = data;

    dispatch({
      type: STUDENTS_MODAL_ACTION_TYPE.GET_STUDENTS_MODAL,
      payload: {
        data: {
          fullName,
          motherName,
          fatherName,
          birthday,
          motherPhone,
          fatherPhone,
          email,
          password,
          courses,
          lessonAmount,
          status,
          _id,
          createdAt,
          payment,
          sector,
          whereComing,
          educationalInstitution,
          educationDegree,
          healthStatus,
          emergencyPhone,
          whereFrom,
          fin,
          seria,
        },
        openModal: modalType !== "more" ? true : false,
      },
    });
  };

  useEffect(() => {
    if (openMoreModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [openMoreModal]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {openMoreModal && (
            <MoreModal
              handleUpdate={handleUpdate}
              data={students}
              setOpenMoreModal={setOpenMoreModal}
              type="student"
            />
          )}
          <table className="details-table  student-table">
            <thead>
              <tr>
                {tableHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students?.map((student, i) => (
                <StudentCard
                  key={i}
                  data={student}
                  mode="desktop"
                  handleUpdate={handleUpdate}
                  setOpenMoreModal={setOpenMoreModal}
                  cellNumber={i + 1 + (studentPageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {students?.map((student, i) => (
              <StudentCard
                key={i}
                data={student}
                mode="tablet"
                handleUpdate={handleUpdate}
                setOpenMoreModal={setOpenMoreModal}
                cellNumber={i + 1 + (studentPageNum - 1) * 10}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={studentPageNum}
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

export default StudentsData;
