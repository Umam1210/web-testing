import MediumCalendar from '../components/calendar/mediumCalendar';
import MediumCalendarEventList from '../components/calendar/mediumCalendarEventList';
import OneLineStats from '../components/stats/oneLineStats';
import GridClassList from '../components/classList/gridClassList';
import GridFilesList from '../components/filesList/gridFilesList';
import VerticalRatingList from '../components/rating/verticalRatingList';
import VerticalMarketplaceList from '../components/marketplace/verticalMarketplaceList';
import VerticalNewsList from '../components/news/verticalNewsList';
import VerticalAnnouncementList from '../components/announcement/verticalAnnouncementList';
import VerticalChatMedium from '../components/chat/verticalChatMedium';
import VerticalForumList from '../components/forum/verticalForumList';
import SectionHeadingTab from '../components/sectionHeading/sectionHeadingTab';
import SectionHeadingFullWidth from '../components/sectionHeading/sectionHeadingFullWidth';

export default function Home() {
  return (
    <>
      {/* <div className="col-span-12">
        <LineHorizontalSteps />
      </div> */}

      <div className="col-span-12">
        <SectionHeadingTab />
      </div>

      <div className="col-span-8">
        <MediumCalendarEventList />
      </div>

      <div className="col-span-4">
        <MediumCalendar />
      </div>

      <div className="col-span-12">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-12">
        <OneLineStats />
      </div>

      <div className="col-span-12">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-12">
        <GridClassList />
      </div>

      <div className="col-span-12">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-12">
        <GridFilesList />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <VerticalRatingList />
      </div>

      <div className="col-span-6">
        <VerticalMarketplaceList />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <VerticalNewsList />
      </div>

      <div className="col-span-6">
        <VerticalAnnouncementList />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <SectionHeadingFullWidth />
      </div>

      <div className="col-span-6">
        <VerticalChatMedium />
      </div>

      <div className="col-span-6">
        <VerticalForumList />
      </div>
    </>
  );
}
