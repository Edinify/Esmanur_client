import { useState } from "react";
import FuncComponent from "../../../../globalComponents/FuncComponent/FuncComponent";
import { useSelector } from "react-redux";

const StudentCard = ({
  data,
  mode,
  cellNumber,
  setOpenMoreModal,
  handleUpdate,
}) => {
  const [modal, setModal] = useState(false);
  const [deleteStudentModal, setDeleteStudentModal] = useState(false);
  const { user } = useSelector((state) => state.user);

  //

  let courses =
    Array.isArray(data.courses) && data.courses.length > 0
      ? data.courses
          .map((course) => {
            return `${course.course.name} (${course.lessonAmount} dərs)`;
          })
          .join(", ")
      : "boş";

  const handleModal = () => {
    setModal(!modal);
  };
  const handleDeleteModal = () => {
    setDeleteStudentModal(!deleteStudentModal);
  };
  const openMoreModal = () => {
    handleUpdate(data, "more");
    setOpenMoreModal(true);
  };

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.fullName}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">
                {data.motherName ? data.motherName : "boş"}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">
                {data.fatherName ? data.fatherName : "boş"}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{courses}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.motherPhone ? data.motherPhone : "boş"}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.fatherPhone ? data.fatherPhone : "boş"}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="more" onClick={() => openMoreModal()}>
            Ətraflı
          </td>
          {user.role === "super-admin" && (
            <td className="more-options">
              <FuncComponent
                handleUpdate={handleUpdate}
                handleModal={handleModal}
                data={data}
                deleteStudentModal={deleteStudentModal}
                handleDeleteModal={handleDeleteModal}
              />
            </td>
          )}
        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <h3>{data.fullName}</h3>
            <ul>
              <li>
                <span className="type">Fənn:</span>
                <p>{courses}</p>
              </li>
              <li>
                <span className="type">Ana telefon nömrəsi:</span>
                <p>{data.motherPhone ? data.motherPhone : "boş"}</p>
              </li>
              <li>
                <span className="type">Ata telefon nömrəsi:</span>
                <p>{data.fatherPhone ? data.fatherPhone : "boş"}</p>
              </li>
            </ul>
          </div>
          <div className="right">
            {user.role === "super-admin" ? (
              <FuncComponent
                handleDeleteModal={handleDeleteModal}
                handleUpdate={handleUpdate}
                data={data}
                deleteStudentModal={deleteStudentModal}
              />
            ) : null}

            <span onClick={() => openMoreModal()}>Ətraflı</span>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentCard;
