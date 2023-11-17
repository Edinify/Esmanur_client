import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { changePasswordReducer } from "./reducers/changePasswordReducer";
import datePickerReducer from "./reducers/datepickerReducer";
import notificationsReducer from "./reducers/notificationsReducer";
import { dropdownReducer } from "./reducers/dropdownReducer";
import { dropdownNameErrReducer } from "./reducers/dropdownNameErrReducer";
import { userReducer } from "./reducers/userReducer";
import { shownavReducer } from "./reducers/shownavReducer";
import { paginationPageNumberReducer } from "./reducers/paginationPageNumberReducer";
import { profileImageReducer } from "./reducers/profileImagesReducer";
import { teacherPaginationReducer } from "./reducers/teachersPaginationReducer";
import { adminPaginationReducer } from "./reducers/adminsPaginationReducer";
import {  searchValuesReducer } from "./reducers/searchValuesReducer";
import { StudentsPaginationReducer } from "./reducers/studentsPaginationReducer";
import { coursesPaginationReducer } from "./reducers/coursesPaginationReducer";
import { salaryPaginationReducer } from "./reducers/salaryPaginationReducer";
import { dashBoardreducer } from "./reducers/dashboardReducer";
import forgotPasswordReducer from "./reducers/forgetPasswordReducer";
import { expensesReducer } from "./reducers/expensesPaginationReducer";
import { allCoursesReducer } from "./reducers/allCoursesReducer";
import { incomeReducer } from "./reducers/incomeReducer";
import { funcComponentReducer } from "./reducers/funcComponentReducer";
import { coursesModalReducer } from "./reducers/coursesModalReducer";
import { studentsModalReducer } from "./reducers/studentsModalReducer";
import { teachersModalReducer } from "./reducers/teachersModalReducer";
import { adminsModalReducer } from "./reducers/adminsModalReducer";
import {expensesModalReducer} from "./reducers/expensesModalReducer"
import { foodRationModalReducer } from "./reducers/foodRationModalReducer";
import { incomesModalReducer } from "./reducers/incomesModalReducer";
import { sidebarOpenReducer } from "./reducers/sidebarOpenReducer";
import { stimulationTypeReducer } from "./reducers/stimulationTypeReducer";
import { bonusPaginationReducer } from "./reducers/bonusPagionationReducer";
import { bonusModalReducer } from "./reducers/bonusModalReducer";
import { finePaginationReducer } from "./reducers/finePaginationReducer";
import {fineModalReducer} from "./reducers/fineModalReducer"
import { financeFilterReducer } from "./reducers/financeFilterReducer";
import { fineFilterReducer } from "./reducers/fineReducer";
import { teacherBonusReducer } from "./reducers/teacherBonusReducer";
import { financeReducer } from "./reducers/financeReducer";
import { teacherStatusReducer } from "./reducers/teacherStatusReducer";
import { studentStatusReducer } from "./reducers/studentStatusReducer";


const initialState={};
const reducers = combineReducers({
teachersPagination:teacherPaginationReducer,
adminsPagination:adminPaginationReducer,
coursesPagination:coursesPaginationReducer,
studentsPagination:StudentsPaginationReducer,
auth:authReducer,
changePass:changePasswordReducer,
salaryPagination:salaryPaginationReducer,
datepicker:datePickerReducer,
notifications:notificationsReducer,
dropdownName:dropdownReducer,
dropdownNameError:dropdownNameErrReducer,
user:userReducer,
show:shownavReducer,
pageNumber:paginationPageNumberReducer,
profileImg:profileImageReducer,
searchValues:searchValuesReducer,
dashboardData:dashBoardreducer,
financeData: financeReducer,
forgetPassword:forgotPasswordReducer,
expensesData:expensesReducer,
allCourses:allCoursesReducer,
incomes:incomeReducer,
funcComponent:funcComponentReducer,
coursesModal: coursesModalReducer,
studentsModal: studentsModalReducer,
teachersModal: teachersModalReducer,
adminsModal: adminsModalReducer,
expensesModal:expensesModalReducer,
foodRationModal: foodRationModalReducer,
incomesModal:incomesModalReducer,
bonusModal:bonusModalReducer,
fineModal:fineModalReducer,
openSidebar:sidebarOpenReducer,
bonusData:bonusPaginationReducer,
fineData:finePaginationReducer,
stimulationType:stimulationTypeReducer,
financeDateFilter: financeFilterReducer,
fineCategory:fineFilterReducer,
teacherBonus:teacherBonusReducer,
teacherStatus:teacherStatusReducer,
studentStatus:studentStatusReducer
})
// test

const store = createStore(
reducers,
initialState,
composeWithDevTools(applyMiddleware(thunk))

)
export default store;