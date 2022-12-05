import React, { lazy, Suspense } from 'react';
import { BrowserView } from 'react-device-detect';
import { Outlet, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './privateRoutes';
import UnprivateRoutes from './unprivateRoutes';

const NotFound = lazy(() => import('../pages/misc/NotFound'));

const Container = lazy(() => import('../components/layout/container'));

const Chat = lazy(() => import('../pages/chat/Chat'));

import MarketCart from '../pages/marketplace/Cart';

import Payment from '../pages/marketplace/Payment';
import CourseView from '../pages/unauthed/CourseView';
import LandingPage from '../pages/unauthed/LandingPage';
import MainProfile from '../pages/profile/MainProfile';
import TestAddArticle from '../components/course/TestAddArticle';
import TestDetail from '../pages/course/TestDetail';
import TestEdit from '../pages/course/TestEdit';
import { MainForum } from '../pages/forum/MainForum';
import { DetailPost } from '../pages/forum/DetailPost';
import CreatePost from '../pages/forum/CreatePost';
import WebinarPage from '../pages/webinars/WebinarPage';
import DetailWebinar from '../pages/webinars/DetailWebinar';
import WebinarPayments from '../pages/webinars/WebinarPayments';
import CreateWebinar from '../pages/webinars/CreateWebinar';

// const Home = lazy(() => lazyDelay(import('../pages/Home')));
const Home = lazy(() => import('../pages/Home'));

const MarketplaceHome = lazy(() => import('../pages/marketplace/Home'));
const MarketDetail = lazy(() => import('../pages/marketplace/Detail'));
const MarketDetailLive = lazy(() => import('../pages/marketplace/DetailLive'));
const PaymentCourse = lazy(() => import('../pages/marketplace/Payment'))
// const MarketplaceCourses = lazy(() => import('../components/marketplace/itemListCard'));

const FinanceHome = lazy(() => import('../pages/finance/Home'));
const ListTransactionAdmin = lazy(() => import('../pages/finance/ListTransactionAdmin'));
const AnalyticsHome = lazy(() => import('../pages/analytics/Home'));

const CourseHome = lazy(() => import('../pages/course/Home'));
const CourseDetail = lazy(() => import('../pages/course/Detail'));
const CourseCreate = lazy(() => import('../pages/course/Create'));
const CourseEdit = lazy(() => import('../pages/course/Edit'));
const CourseExam = lazy(() => import('../pages/course/Exam'));

const SettingHome = lazy(() => import('../pages/setting/Home'));

const NewsHome = lazy(() => import('../pages/news/Main'));
const DetailNews = lazy(() => import('../pages/news/DetailNews'));

const SignRoutes = lazy(() => import('./signRoutes'));
const CalendarRoutes = lazy(() => import('./calendarRoutes'));
const MobileRoutes = lazy(() => import('./mobile'));

const MainTools = lazy(() => import('../pages/tools/Main'));
const DrawHome = lazy(() => import('../pages/tools/Draw'));
const UppyHome = lazy(() => import('../pages/tools/Uppy'));
const MeetHome = lazy(() => import('../pages/tools/Meet'));
const CertificateHome = lazy(() => import('../pages/tools/Certificate'));

const UserManagementHome = lazy(() => import('../pages/usersManagement/Home'));

const MasterRoute = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserView>
          <Routes>
            {/* AUTHENTICATED ROUTES */}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Container />}>
                <Route index element={<Home />} />
                <Route path="news" element={<Outlet />}>
                  <Route index element={<NewsHome />} />
                  <Route path="detail-news/:id" element={<DetailNews />} />
                </Route>
                <Route path="apps" element={<Outlet />}>
                  <Route index element={<MainTools />} />
                  <Route path="uppy" element={<UppyHome />} />
                  <Route path="draw" element={<DrawHome />} />
                  <Route path="meet" element={<MeetHome />} />
                  <Route path="certificate" element={<CertificateHome />} />
                </Route>
                <Route path="market" element={<Outlet />}>
                  <Route index element={<MarketplaceHome />} />
                  <Route path="view/:id" element={<MarketDetail />} />
                  <Route path="cart" element={<MarketCart />} />
                  <Route path="live" element={<MarketDetailLive />} />
                </Route>
                  <Route path="payment" element={<PaymentCourse />} />

                <Route path="finance" element={<Outlet />}>
                  <Route index element={<FinanceHome />} />
                  <Route path="listTransactionAdmin" element={<ListTransactionAdmin />} />
                </Route>
                {/* <Route path="finance" element={<FinanceHome />} /> */}
                <Route path="course" element={<Outlet />}>
                  <Route index element={<CourseHome />} />
                  <Route path="view" element={<CourseDetail />} />
                  <Route path="edit" element={<CourseEdit />} />
                  <Route path="create" element={<CourseCreate />} />
                  <Route path="view/exam/:id" element={<CourseExam />} />
                </Route>
                <Route path="chat" element={<Chat />} />
                <Route path="setting" element={<SettingHome />} />
                <Route path="calendar/*" element={<CalendarRoutes />} />
                <Route path="*" element={<NotFound />} />
                <Route path="add-article" element={<TestAddArticle />} />
                <Route path="detail/:id" element={<TestDetail />} />
                <Route path="edit/:id" element={<TestEdit />} />
                <Route path="profile" element={<MainProfile />} />
                <Route path="forum" element={<Outlet />}>
                  <Route path="main" element={<MainForum />} />
                  <Route path=":id" element={<DetailPost />} />
                  <Route path="create" element={<CreatePost />} />
                </Route>
                <Route path="analytics" element={<AnalyticsHome />}></Route>
                <Route path="webinars/" element={<WebinarPage />} />
                <Route path="webinars/detail/:id" element={<DetailWebinar />} />
                {/* <Route path='detail/:id/payment' element={<WebinarPayments />} /> */}
                <Route path='webinar/create' element={<CreateWebinar />} />


                <Route path="users" element={<Outlet />}>
                  <Route index element={<UserManagementHome />} />
                </Route>
              </Route>
            </Route>
            {/* UNAUTHENTICATED ROUTES */}
            <Route element={<UnprivateRoutes />}>
              <Route path="/land" element={<LandingPage />} />
              <Route path="/land/view" element={<CourseView />} />
              <Route path="/sign/*" element={<SignRoutes />} />
            </Route>
          </Routes>
        </BrowserView>
        <MobileRoutes />
      </Suspense>
    </>
  );
};

export default MasterRoute;
