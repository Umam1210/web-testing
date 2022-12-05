import {
  Bars3BottomLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import classNames from '../../helpers/classNames';
import { Fragment } from 'react';
import { useAtom } from 'jotai';
import { searchModalVisible } from '../../store/browserSetting';
import { Link } from 'react-router-dom';
import { storeCart } from '../../store/storeCart';

export default function Header({ userNavigation, setSidebarOpen }) {
  const cartListState = storeCart((state) => state.cartList);
  const [searchModal, setSearchModal] = useAtom(searchModalVisible);

  return (
    <div className="bg-white/64 sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-slate-600/10 backdrop-blur-md">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-8">
        <div className="flex flex-1 items-center">
          <button
            onClick={() => setSearchModal(true)}
            type="button"
            className="flex items-center rounded-md bg-white py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none">
            <MagnifyingGlassIcon className="ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Cari semua di sini...
            <span className="ml-24 flex-none pl-3 text-xs font-semibold">⌘K</span>
          </button>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <span className="inline-flex select-none items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-green-400"
              fill="currentColor"
              viewBox="0 0 8 8">
              <circle cx={4} cy={4} r={3} />
            </svg>
            Online
          </span>

          <Link to="/market/cart">
            <button
              type="button"
              className="relative ml-3 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="sr-only">View cart</span>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full border border-white bg-green-600 px-1.5 text-xs text-white">
                {cartListState.length > 0 ? cartListState.length : null}
              </span>
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </Link>

          <button
            type="button"
            className="ml-3 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="ml-3 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="sr-only">Settings</span>
            <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-6">
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
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
        </div>
      </div>
    </div>
  );
}
