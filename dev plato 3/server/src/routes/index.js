import express from 'express';
const route = express.Router();

// user
import userStudent from 'routes/user/student';
import userTeacher from 'routes/user/teacher';
import userManagement from 'routes/user/management';
import userParent from 'routes/user/parent';
import userAdmin from 'routes/user/admin';
import userSuperAdmin from 'routes/user/superAdmin';
import userGroup from 'routes/user/userGroup';
// forum
import forumCommunity from 'routes/forum/community';
import forumPost from 'routes/forum/post';
import forumComment from 'routes/forum/comment';
// news
import newsPublisher from 'routes/news/publisher';
import newsExternal from 'routes/news/externalNews';
import newsInternal from 'routes/news/internalNews';
import newsComment from 'routes/news/comment';
// chat
import chatSession from 'routes/chat/session';
import chatChat from 'routes/chat/chat';
// file
import fileFile from 'routes/file/file';
import fileFolder from 'routes/file/folder';
// education
import educationScheduleAnswer from 'routes/education/scheduleAnswer';
import educationSchedule from 'routes/education/schedule';
import educationSection from 'routes/education/section';
import educationClassRoom from 'routes/education/classRoom';
import educationSubject from 'routes/education/subject';
import educationUniversity from 'routes/education/university';
import educationMajor from 'routes/education/major';
import educationFaculty from 'routes/education/faculty';
// market
import marketItem from 'routes/market/item';

// misc
import misc from 'routes/misc';

//finance
import financeCart from 'routes/finance/cart';

/*
  Below are the codes for the routes!
*/

// user
route.use('/user/student', userStudent);
route.use('/user/teacher', userTeacher);
route.use('/user/management', userManagement);
route.use('/user/parent', userParent);
route.use('/user/admin', userAdmin);
route.use('/user/super-admin', userSuperAdmin);
route.use('/user/user-group', userGroup);
// forum
route.use('/forum/community', forumCommunity);
route.use('/forum/post', forumPost);
route.use('/forum/comment', forumComment);
// news
route.use('/news/publisher', newsPublisher);
route.use('/news/external', newsExternal);
route.use('/news/internal', newsInternal);
route.use('/news/comment', newsComment);
// chat
route.use('/chat/session', chatSession);
route.use('/chat/chat', chatChat);
// file
route.use('/file/file', fileFile);
route.use('/file/folder', fileFolder);
// education
route.use('/education/schedule-answer', educationScheduleAnswer);
route.use('/education/schedule', educationSchedule);
route.use('/education/section', educationSection);
route.use('/education/class-room', educationClassRoom);
route.use('/education/subject', educationSubject);
route.use('/education/university', educationUniversity);
route.use('/education/major', educationMajor);
route.use('/education/faculty', educationFaculty);
// market
route.use('/market/item', marketItem);
// misc
route.use('/misc', misc);
//finance
route.use('/finance/cart', financeCart);

route.use((_, res) => {
  res.status(404).json({
    message: 'API not found.'
  });
});

export default route;
