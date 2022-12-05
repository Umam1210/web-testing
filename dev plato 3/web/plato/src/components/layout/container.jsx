import { useState } from 'react';
import {
  HomeIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  FolderOpenIcon,
  BuildingLibraryIcon,
  SparklesIcon,
  ChartPieIcon,
  UserGroupIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

import useKeyboardShortcut from 'use-keyboard-shortcut';
import { osName } from 'react-device-detect';
import Sidebar from './sidebar';
import Header from './header';
import { useAtom } from 'jotai';
import { sidebarCollapsedAtom, searchModalVisible } from '../../store/browserSetting';

import classNames from '../../helpers/classNames';
import { Outlet } from 'react-router-dom';

// Components
import SearchModal from '../modal/searchModal';
import SearchModal2 from '../modal/searchModal2';

import ExpandScreenNotice from '../modal/expandScreenNotice';
import { useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Get Courses!', href: '/market', icon: RocketLaunchIcon },
  { name: 'Courses', href: '/course', icon: TrophyIcon },
  { name: 'Webinars', href: '/webinars', icon: UserGroupIcon },
  { name: 'News & Announcement', href: '/news', icon: GlobeAltIcon },
  { name: 'Forum', href: '/forum/main', icon: ChatBubbleLeftRightIcon },
  { name: 'Chat', href: '/chat', icon: ChatBubbleLeftIcon },
  { name: 'Calendar', href: '/calendar', icon: ClockIcon },
  { name: 'Library', href: '/library', icon: BuildingLibraryIcon },
  { name: 'Files', href: '/files', icon: FolderOpenIcon },
  { name: 'Finance', href: '/finance', icon: WalletIcon },
  { name: 'Apps', href: '/apps', icon: SparklesIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartPieIcon },
  { name: 'Manage User', href: '/users', icon: UsersIcon },
];
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/setting' },
  { name: 'Switch account', href: '' },
  { name: 'Sign out', href: '/sign/in' }
];

export default function Container() {
  const [sidebarCollapsed] = useAtom(sidebarCollapsedAtom);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchModal, setSearchModal] = useAtom(searchModalVisible);

  useEffect(() => {
    console.log('osName ->', osName);
  }, [osName]);

  const { flushMetaK } = useKeyboardShortcut(
    osName === 'Mac OS' ? ['Meta', 'K'] : ['Control', 'K'],
    () => setSearchModal(!searchModal),
    {
      overrideSystem: false,
      ignoreInputFields: true,
      repeatOnHold: false
    }
  );

  return (
    <div>
      <ExpandScreenNotice sidebarCollapsed={sidebarCollapsed} />
      {/* <SearchModal /> */}
      <SearchModal2 />
      <Sidebar
        userNavigation={userNavigation} navigation={navigation} />
      <div
        className={classNames(
          sidebarCollapsed ? 'min-w-[1080px] md:pl-14' : 'min-w-[1280px] md:pl-64',
          'flex flex-1 flex-col transition-all duration-100'
        )}>
        <Header userNavigation={userNavigation} setSidebarOpen={setSidebarOpen} />

        <main className="grid flex-1 grid-cols-12 gap-8 px-6 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
