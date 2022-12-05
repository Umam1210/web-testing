import mongoose from 'mongoose';
import capitalizeName from 'helpers/capitalizeName';
import passwordHash from 'helpers/passwordHash';

export const allUsers = {
  type: String,
  required: true,
  enum: ['Parent', 'Student', 'Management', 'Admin', 'Teacher', 'SuperAdmin']
};

export const educationLevels = {
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationUniversity'
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationFaculty'
  },
  major: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationMajor'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationSubject'
  },
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationClassRoom'
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationSection'
  },
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationSchedule'
  }
};

export const question = {
  questionType: {
    type: String,
    required: true,
    enum: ['multiple', 'essay', 'upload']
  },
  questionNumber: {
    type: Number,
    required: true
  },
  question: String,
  answerOptions: [String],
  attachmentUrl: {
    type: String,
    required: false
  },
  attachment: {
    url: String,
    fileType: String
  },
  scoreWeight: {
    type: Number,
    default: 1
  },
  correctAnswer: String
};

export const userPublicProfile = {
  avatar: String,
  profilePicture: String,
  bio: String,
  background: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    github: String,
    website: String,
    others: [String]
  }
};

export const educationData = {
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationUniversity'
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationFaculty'
  },
  major: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EducationMajor'
  },
  activeSubjects: [
    {
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EducationSubject'
      },
      classRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EducationClassRoom'
      }
    }
  ],
  pastSubjects: [
    // Array of each semester/year, based on studyCard.
    [
      {
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EducationSubject'
        },
        classRoom: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'EducationClassRoom'
        }
      }
    ]
  ]
};

export const baseUser = {
  name: {
    type: String,
    required: false,
    set: capitalizeName
  },
  password: {
    type: String,
    required: true,
    set: passwordHash
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false
  },
  flags: {
    isUserGrouped: {
      type: Boolean,
      default: false
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    isUnderReview: {
      type: Boolean,
      default: false
    },
    isOnline: {
      type: Boolean,
      default: false
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  }
};
