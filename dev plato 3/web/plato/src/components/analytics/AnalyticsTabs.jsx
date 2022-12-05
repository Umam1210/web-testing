import classNames from '../../helpers/classNames';
import { useAnalyticList } from '../../store/analyticsList';

export default function Tabs() {
  const setActiveTab = useAnalyticList(state => state.setActiveTabs)
  const activeTabs = useAnalyticList(state => state.tabs)
  
  const tabs = [
    { name: 'User Registered', href: '#', count: '7', current: activeTabs.userTabs },
    { name: 'Sales', href: '#', count: '4', current: activeTabs.salesTabs },
    { name: 'Courses', href: '#', count: '3', current: activeTabs.courseTabs },
    { name: 'Teachers', href: '#', count: '17', current: activeTabs.teacherTabs },
  ];

  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                onClick={() => setActiveTab({
                  ...activeTabs,
                  userTabs: tab.name === "User Registered" ? true : false,
                  salesTabs: tab.name === "Sales" ? true : false,
                  courseTabs: tab.name === "Courses" ? true : false,
                  teacherTabs: tab.name === "Teachers" ? true : false,
                })}
                key={tab.name}
                href="#"
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                  'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                      'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
