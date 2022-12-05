require('dotenv').config();

import SuperAdmin from 'models/user/superAdmin';
import Admin from 'models/user/admin';
import Teacher from 'models/user/teacher';
import Student from 'models/user/student';
import Parent from 'models/user/parent';
import Management from 'models/user/management';
import UserGroup from 'models/user/userGroup';

import ChatChat from 'models/chat/chat';
import ChatSession from 'models/chat/session';

import FileFile from 'models/file/file';
import FileFolder from 'models/file/folder';

import EducationUniversity from 'models/education/university';
import EducationFaculty from 'models/education/faculty';
import EducationMajor from 'models/education/major';
import EducationSubject from 'models/education/subject';
import EducationClassRoom from 'models/education/classRoom';
import EducationSection from 'models/education/section';
import EducationSchedule from 'models/education/schedule';
import EducationScheduleAnswer from 'models/education/scheduleAnswer';

import ForumCommunity from 'models/forum/community';
import ForumPost from 'models/forum/post';
import ForumComment from 'models/forum/comment';

import NewsPublisher from 'models/news/publisher';
import NewsExternal from 'models/news/externalNews';
import NewsInternal from 'models/news/internalNews';
import NewsComment from 'models/news/comment';

import MarketItem from 'models/market/item';

import FinanceCart from 'models/finance/cart';
import FinanceOrder from 'models/finance/order';
import FinanceStudyCard from 'models/finance/studyCard';

export default async (req, res) => {
  try {
    await SuperAdmin.deleteMany({});
    await Admin.deleteMany({});
    await Teacher.deleteMany({});
    await Student.deleteMany({});
    await Parent.deleteMany({});
    await Management.deleteMany({});
    await UserGroup.deleteMany({});
    await ChatChat.deleteMany({});
    await ChatSession.deleteMany({});
    await FileFile.deleteMany({});
    await FileFolder.deleteMany({});
    await EducationUniversity.deleteMany({});
    await EducationFaculty.deleteMany({});
    await EducationMajor.deleteMany({});
    await EducationSubject.deleteMany({});
    await EducationClassRoom.deleteMany({});
    await EducationSection.deleteMany({});
    await EducationSchedule.deleteMany({});
    await EducationScheduleAnswer.deleteMany({});
    await ForumCommunity.deleteMany({});
    await ForumPost.deleteMany({});
    await ForumComment.deleteMany({});
    await NewsPublisher.deleteMany({});
    await NewsExternal.deleteMany({});
    await NewsInternal.deleteMany({});
    await NewsComment.deleteMany({});
    await MarketItem.deleteMany({});
    await FinanceCart.deleteMany({});
    await FinanceOrder.deleteMany({});
    await FinanceStudyCard.deleteMany({});

    res.status(200).json({
      message: 'nuked.'
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};
