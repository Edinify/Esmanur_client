import { useState } from "react";
import FuncComponent from "../../../../globalComponents/FuncComponent/FuncComponent";
import { useSelector } from "react-redux";
const TeacherCard = ({
  data,
  mode,
  cellNumber,
  setOpenMoreModal,
  handleUpdate,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  let courses =
    Array.isArray(data.courses) && data.courses.length > 0
      ? data.courses
          .map((course) => {
            return course.name;
          })
          .join(", ")
      : "boş";

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
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
              <div className="table-scroll-text">{courses}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="email">
            <div className="td-con">
              <div className="table-scroll-text">{data.email}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.phone}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="salary">
            {data.salary?.value}{" "}
            {data.salary.monthly === true ? "aylıq" : " saatlıq"}
          </td>
          <td className="more" onClick={() => openMoreModal()}>
            Ətraflı
          </td>
          <td>
            {user.role === "super-admin" ? (
              <FuncComponent
                handleDeleteModal={handleDeleteModal}
                handleUpdate={handleUpdate}
                data={data}
                deleteModal={deleteModal}
              />
            ) : null}
          </td>
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
                <span className="type">Email:</span>
                <p>{data.email ? data.email : "boş"}</p>
              </li>
              <li>
                <span className="type">Telefon nömrəsi:</span>
                <p>{data.phone ? data.phone : "boş"}</p>
              </li>
              <li>
                <span className="type">Əmək haqqı:</span>
                <p>
                  {data.salary.value ? data.salary.value : "boş"}{" "}
                  {data.salary.hourly === true ? "(saatlıq)" : "(aylıq)"}{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="right">
            {user.role === "super-admin" ? (
              <FuncComponent
                handleDeleteModal={handleDeleteModal}
                handleUpdate={handleUpdate}
                data={data}
                deleteModal={deleteModal}
              />
            ) : null}
            <span onClick={() => openMoreModal()}>Ətraflı</span>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherCard;
