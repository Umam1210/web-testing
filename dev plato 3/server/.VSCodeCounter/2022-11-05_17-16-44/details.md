# Details

Date : 2022-11-05 17:16:44

Directory /Users/mifzan/Documents/code/plato/server2/src

Total : 55 files, 1988 codes, 94 comments, 273 blanks, all 2355 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files

| filename                                                                                | language   | code | comment | blank | total |
| :-------------------------------------------------------------------------------------- | :--------- | ---: | ------: | ----: | ----: |
| [src/helpers/capitalizeName.js](/src/helpers/capitalizeName.js)                         | JavaScript |    7 |       1 |     2 |    10 |
| [src/helpers/commonControllers.js](/src/helpers/commonControllers.js)                   | JavaScript |  101 |       1 |    13 |   115 |
| [src/helpers/databaseTypes.js](/src/helpers/databaseTypes.js)                           | JavaScript |   41 |       0 |     4 |    45 |
| [src/helpers/mongodbErrorCodes.js](/src/helpers/mongodbErrorCodes.js)                   | JavaScript |    7 |       2 |     2 |    11 |
| [src/helpers/passwordHash.js](/src/helpers/passwordHash.js)                             | JavaScript |    7 |       0 |     2 |     9 |
| [src/middlewares/authentication.js](/src/middlewares/authentication.js)                 | JavaScript |   19 |       0 |     4 |    23 |
| [src/middlewares/rolePermission.js](/src/middlewares/rolePermission.js)                 | JavaScript |   16 |       1 |     1 |    18 |
| [src/models/chat/chat.js](/src/models/chat/chat.js)                                     | JavaScript |   60 |       0 |     5 |    65 |
| [src/models/chat/session.js](/src/models/chat/session.js)                               | JavaScript |   38 |       0 |     5 |    43 |
| [src/models/education/classRoom.js](/src/models/education/classRoom.js)                 | JavaScript |   49 |       0 |     5 |    54 |
| [src/models/education/faculty.js](/src/models/education/faculty.js)                     | JavaScript |   43 |       0 |     5 |    48 |
| [src/models/education/major.js](/src/models/education/major.js)                         | JavaScript |   44 |       0 |     5 |    49 |
| [src/models/education/schedule.js](/src/models/education/schedule.js)                   | JavaScript |   56 |       0 |     5 |    61 |
| [src/models/education/session.js](/src/models/education/session.js)                     | JavaScript |   55 |       0 |     5 |    60 |
| [src/models/education/sessionAssignment.js](/src/models/education/sessionAssignment.js) | JavaScript |   51 |       0 |     5 |    56 |
| [src/models/education/sessionConference.js](/src/models/education/sessionConference.js) | JavaScript |   51 |       0 |     5 |    56 |
| [src/models/education/sessionExam.js](/src/models/education/sessionExam.js)             | JavaScript |   51 |       0 |     5 |    56 |
| [src/models/education/sessionMaterial.js](/src/models/education/sessionMaterial.js)     | JavaScript |   51 |       0 |     5 |    56 |
| [src/models/education/sessionQuiz.js](/src/models/education/sessionQuiz.js)             | JavaScript |   51 |       0 |     5 |    56 |
| [src/models/education/subject.js](/src/models/education/subject.js)                     | JavaScript |   53 |       2 |     5 |    60 |
| [src/models/education/university.js](/src/models/education/university.js)               | JavaScript |   60 |       0 |     5 |    65 |
| [src/models/file/file.js](/src/models/file/file.js)                                     | JavaScript |   54 |       0 |     5 |    59 |
| [src/models/file/folder.js](/src/models/file/folder.js)                                 | JavaScript |   66 |       0 |     5 |    71 |
| [src/models/forum/comment.js](/src/models/forum/comment.js)                             | JavaScript |   53 |       0 |     5 |    58 |
| [src/models/forum/community.js](/src/models/forum/community.js)                         | JavaScript |   61 |       0 |     5 |    66 |
| [src/models/forum/post.js](/src/models/forum/post.js)                                   | JavaScript |   61 |       0 |     5 |    66 |
| [src/models/news/comment.js](/src/models/news/comment.js)                               | JavaScript |   62 |       0 |     5 |    67 |
| [src/models/news/externalNews.js](/src/models/news/externalNews.js)                     | JavaScript |   61 |       3 |     6 |    70 |
| [src/models/news/internalNews.js](/src/models/news/internalNews.js)                     | JavaScript |   57 |       3 |     6 |    66 |
| [src/models/news/publisher.js](/src/models/news/publisher.js)                           | JavaScript |   47 |       0 |     5 |    52 |
| [src/models/user/admin.js](/src/models/user/admin.js)                                   | JavaScript |   52 |       0 |     5 |    57 |
| [src/models/user/management.js](/src/models/user/management.js)                         | JavaScript |   52 |       0 |     5 |    57 |
| [src/models/user/parent.js](/src/models/user/parent.js)                                 | JavaScript |   52 |       0 |     5 |    57 |
| [src/models/user/student.js](/src/models/user/student.js)                               | JavaScript |   64 |       0 |     5 |    69 |
| [src/models/user/teacher.js](/src/models/user/teacher.js)                               | JavaScript |   52 |       0 |     5 |    57 |
| [src/models/user/userGroup.js](/src/models/user/userGroup.js)                           | JavaScript |   41 |       0 |     5 |    46 |
| [src/routes/chat/chat.js](/src/routes/chat/chat.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/chat/session.js](/src/routes/chat/session.js)                               | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/file/file.js](/src/routes/file/file.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/file/folder.js](/src/routes/file/folder.js)                                 | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/forum/comment.js](/src/routes/forum/comment.js)                             | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/forum/community.js](/src/routes/forum/community.js)                         | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/forum/post.js](/src/routes/forum/post.js)                                   | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/index.js](/src/routes/index.js)                                             | JavaScript |   42 |      13 |     6 |    61 |
| [src/routes/news/comment.js](/src/routes/news/comment.js)                               | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/news/externalNews.js](/src/routes/news/externalNews.js)                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/news/internalNews.js](/src/routes/news/internalNews.js)                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/news/publisher.js](/src/routes/news/publisher.js)                           | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/admin.js](/src/routes/user/admin.js)                                   | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/management.js](/src/routes/user/management.js)                         | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/parent.js](/src/routes/user/parent.js)                                 | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/student.js](/src/routes/user/student.js)                               | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/teacher.js](/src/routes/user/teacher.js)                               | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/userGroup.js](/src/routes/user/userGroup.js)                           | JavaScript |   10 |       4 |     5 |    19 |
| [src/server.js](/src/server.js)                                                         | JavaScript |   30 |       0 |     7 |    37 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)
