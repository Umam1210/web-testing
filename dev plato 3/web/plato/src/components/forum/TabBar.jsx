import classNames from '../../helpers/classNames';
import { useForumList } from '../../store/forumList';
import QuillEditor from '../QuillEditor';
import ButtonBlue from './atoms/ButtonBlue';
import ButtonGray from './atoms/ButtonGray';
import FooterCreateTabs from './molecules/FooterCreateTabs';
import UploadMedia from './molecules/UploadMedia';

// const tabs = [
//     { name: 'Post', href: '#', current: true },
//     { name: 'Foto & Video', href: '#', current: false },
//     { name: 'Link', href: '#', current: false },
//     { name: 'Poll', href: '#', current: false },
//     { name: 'Talk', href: '#', current: false },
//   ]
  
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }
  
  export default function Example() {
    const setActiveTab = useForumList(state => state.setActiveTabs)
  const activeTabs = useForumList(state => state.tabs)
  
  const tabs = [
    { name: 'Post', href: '#', current: activeTabs.postTabs },
    { name: 'Foto & Video', href: '#', current: activeTabs.mediaTabs },
    { name: 'Link', href: '#', current: activeTabs.linkTabs },
    { name: 'Poll', href: '#', current: activeTabs.pollTabs },
    { name: 'Talk', href: '#', current: activeTabs.talkTabs },
  ];
    return (
      <>
      <div className="h-96 h-[513px] border rounded-tr-md rounded-tl-md border-gray-300">
        <div className="sm:hidden">
          <select
            id="tabs"
            name="tabs"
            className="block rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="isolate border-b flex divide-x divide-gray-200" aria-label="Tabs">
            {tabs.map((tab, tabIdx) => (
              <a
              onClick={() => setActiveTab({
                ...activeTabs,
                postTabs: tab.name === "Post" ? true : false,
                mediaTabs: tab.name === "Foto & Video" ? true : false,
                linkTabs: tab.name === "Link" ? true : false,
                pollTabs: tab.name === "Poll" ? true : false,
                talkTabs: tab.name === "Talk" ? true : false,
              })}
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current ? 'text-indigo-500' : 'text-gray-500 hover:text-indigo-500',
                  // tabIdx === 0 ? 'rounded-l-lg' : '',
                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                  'group relative min-w-0 flex-1 overflow-hidden bg-transparent py-3 px-2 text-xs font-semibold text-center hover:bg-blue-50 focus:z-10'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5'
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
        <div className="m-4">
        <input type="text" placeholder='Title' className='border border-solid border-gray-300 h-10 w-full pl-3 rounded' />
        {activeTabs.postTabs && <QuillEditor
                // value={valueQuill}
                // setValue={setValueQuill}
                style="mb-16 mt-2.5 h-40"
              />}
        {activeTabs.mediaTabs &&  <UploadMedia />}
        <div className="flex gap-1.5 mt-2.5">
        <ButtonGray label="OC"/>
        <ButtonGray label="Spoiler"/>
        <ButtonGray label="NSFW"/>
        <ButtonGray label="Flair"/>
    </div>

    <div className="flex gap-3.5 mt-7 justify-end border-t border-t-gray-200 pt-5">
        <ButtonGray label="Save Draft" />
        <ButtonBlue label="Post" />
    </div>
        </div>
      </div>
      <FooterCreateTabs/>
      </>
    )
  }