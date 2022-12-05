import { useState } from 'react';
import QuillEditor from '../QuillEditor';
import FooterCreateTabs from './molecules/FooterCreateTabs';
import UploadMedia from './molecules/UploadMedia';
import TabContent from './TabContent';
// import "./index.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="relative flex h-[600px] w-full flex-col overflow-hidden break-all rounded-lg border border-gray-200 bg-white shadow-sm shadow-sm ">
      <div className="flex">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}>
          Post
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}>
          Image & Video
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
          disabled>
          Link
        </button>
        <button
          className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(4)}
          disabled>
          Poll
        </button>
        <button
          className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(5)}
          disabled>
          Talk
        </button>
      </div>

      <div className="grow">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <TabContent
            content={
              <QuillEditor
                // value={valueQuill}
                // setValue={setValueQuill}
                className="mb-16 mt-2.5 h-40"
              />
            }
          />
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <TabContent content={<UploadMedia />} />
        </div>

        <div className={toggleState === 3 ? 'content  active-content' : 'content'}></div>

        <div className={toggleState === 4 ? 'content  active-content' : 'content'}></div>

        <div className={toggleState === 5 ? 'content  active-content' : 'content'}></div>
      </div>
      <FooterCreateTabs />
    </div>
  );
}

export default Tabs;
