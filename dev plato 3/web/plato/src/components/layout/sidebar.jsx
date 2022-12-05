import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import classNames from '../../helpers/classNames';
import { Transition, Menu } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { sidebarCollapsedAtom } from '../../store/browserSetting';
import { useLocation, Link } from 'react-router-dom';

export default function Sidebar({ navigation, userNavigation }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useAtom(sidebarCollapsedAtom);
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentSection('/');
    } else {
      setCurrentSection('/' + location.pathname.split('/')[1]);
    }
  }, [location]);

  return (
    <div
      className={classNames(
        sidebarCollapsed ? 'md:w-14' : 'md:w-64',
        'hidden transition-all duration-100 md:fixed md:inset-y-0  md:flex md:flex-col'
      )}>
      <div className="flex flex-grow flex-col overflow-y-auto bg-white pt-5">
        <div
          className={classNames(
            sidebarCollapsed ? 'justify-center px-2' : 'px-4',
            'flex flex-shrink-0 items-center transition-all'
          )}>
          <Link to="/">
            <img
              className={'h-8 w-8'}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            {/* {sidebarCollapsed ? (
              <img
                className={classNames(sidebarCollapsed ? 'opacity-100' : 'opacity-0', 'h-8 w-8')}
                src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/c053a389a63e60b12ed4b23ab8de90f0.png"
                alt="Your Company"
              />
            ) : (
              <img
                className={classNames(sidebarCollapsed ? 'opacity-0' : 'opacity-100', 'h-8 w-auto')}
                src="https://et-asia.com/wp-content/uploads/2022/10/et-asia-retina.png"
                alt="Your Company"
              />
            )} */}
          </Link>
        </div>
        <div className="mt-5 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            <Menu as={Fragment}>
              <Menu.Button
                id="dropdownUserNameButton"
                data-dropdown-toggle="dropdownUserName"
                className="dark:hover-bg-gray-700 my-4 flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="button">
                <div className="flex items-center">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    className="mr-3 h-8 w-8 rounded-full"
                    alt="Bonnie avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Bonnie Green
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      bonnie@etasia.com
                    </div>
                  </div>
                </div>
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}>
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.href === currentSection
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'user-select-none group flex cursor-pointer items-center rounded-lg px-2 py-2 text-sm font-medium'
                )}>
                <item.icon
                  className={classNames(
                    item.href === currentSection
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {sidebarCollapsed ? null : item.name}
              </Link>
            ))}

            <div className="flex items-center py-4" aria-hidden="true">
              <div className="flex w-full border-t border-gray-100" />
            </div>

            <a
              href="#"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className={
                'user-select-none group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }>
              {sidebarCollapsed ? (
                <ChevronRightIcon
                  className={'mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'}
                  aria-hidden="true"
                />
              ) : (
                <ChevronLeftIcon
                  className={'mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'}
                  aria-hidden="true"
                />
              )}

              {sidebarCollapsed ? null : 'Minimize'}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
