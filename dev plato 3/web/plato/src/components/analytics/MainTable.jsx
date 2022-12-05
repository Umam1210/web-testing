import { useAnalyticList } from "../../store/analyticsList";
import CourseTable from './Table/CourseTable';
import SalesTable from './Table/SalesTable';
import TeacherTable from './Table/TeacherTable';
import UserTable from "./Table/userTable";

const MainTable = () => {
  const tabs = useAnalyticList(state => state.tabs)
  return (
    <div>
      {tabs.userTabs && <UserTable/> }
      {tabs.salesTabs && <SalesTable/> }
      {tabs.courseTabs && <CourseTable/> }
      {tabs.teacherTabs && <TeacherTable/> }
    </div>
  )
}

export default MainTable