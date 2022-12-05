import classNames from '../../helpers/classNames';
import { useUsersList } from '../../store/usersList';

export default function Tabs() {
  const setActiveTab = useUsersList(state => state.setActiveTabs)
  const activeTabs = useUsersList(state => state.tabs)
  
  const tabs = [
    { name: 'All', href: '#', current: activeTabs.allTabs },
    { name: 'Active', href: '#', current: activeTabs.activeTabs },
    { name: 'Suspended', href: '#', current: activeTabs.suspendedTabs },
    { name: 'Graduated', href: '#', current: activeTabs.graduatedTabs },
    { name: 'Inactive', href: '#', current: activeTabs.inactiveTabs }
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
                  allTabs: tab.name === "All" ? true : false,
                  activeTabs: tab.name === "Active" ? true : false,
                  suspendedTabs: tab.name === "Suspended" ? true : false,
                  graduatedTabs: tab.name === "Graduated" ? true : false,
                  inactiveTabs: tab.name === "Inactive" ? true : false,
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
