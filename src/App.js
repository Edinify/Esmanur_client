import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routing } from "./routing";
import TeacherModal from "./globalComponents/Modals/TeacherModal/TeacherModal";
import AdminModal from "./globalComponents/Modals/AdminModal/AdminModal"
import { CourseModal } from "./globalComponents/Modals/CourseModal/CourseModal";
import { StudentModal } from "./globalComponents/Modals/StudentModal/StudentModal";
import { ExpensesModal } from "./globalComponents/Modals/ExpensesModal/ExpensesModal";
import { IncomesModal } from "./globalComponents/Modals/IncomesModal/IncomesModal";
import {BonusModal} from "./globalComponents/Modals/BonusModal/BonusModal";
import { FineModal } from "./globalComponents/Modals/FineModal/FineModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const { coursesOpenModal } = useSelector((state) => state.coursesModal);
  const { studentsOpenModal } = useSelector((state) => state.studentsModal);
  const { teachersOpenModal } = useSelector((state) => state.teachersModal);
  const { adminsOpenModal } = useSelector((state) => state.adminsModal);
  const { expensesOpenModal } = useSelector((state) => state.expensesModal);
  const { incomesOpenModal } = useSelector((state) => state.incomesModal);
  const { bonusOpenModal } = useSelector((state) => state.bonusModal);
  const { fineOpenModal } = useSelector((state) => state.fineModal);
  const { openMainPageModal } = useSelector((state) => state.modalLesson);

  useEffect(() => {
    if (bonusOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [bonusOpenModal]);
  
  useEffect(() => {
    if (coursesOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [coursesOpenModal]);

  useEffect(() => {
    if (expensesOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [expensesOpenModal]);


  useEffect(() => {
    if (fineOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [fineOpenModal]);

  useEffect(() => {
    if (incomesOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [incomesOpenModal]);

  useEffect(() => {
    if (studentsOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [studentsOpenModal]);

  useEffect(() => {
    if (teachersOpenModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [teachersOpenModal]);

  useEffect(() => {
    if (openMainPageModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [openMainPageModal]);
  

  return (
    
    <div className="App">
      <Routing />
      {coursesOpenModal && <CourseModal />}
      {studentsOpenModal && <StudentModal />}
      {teachersOpenModal && <TeacherModal />}
      {adminsOpenModal && <AdminModal />}
      {expensesOpenModal && <ExpensesModal />}
      {incomesOpenModal && <IncomesModal />}
      {bonusOpenModal && <BonusModal />}
      {fineOpenModal && <FineModal />}
      <ToastContainer />
    </div>
  );
}

export default App;
