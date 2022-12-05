# Diff Details

Date : 2022-11-07 11:21:14

Directory /Users/mifzan/Documents/code/plato/server2/src

Total : 48 files, 500 codes, 68 comments, 134 blanks, all 702 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files

| filename                                                                                                | language   | code | comment | blank | total |
| :------------------------------------------------------------------------------------------------------ | :--------- | ---: | ------: | ----: | ----: |
| [src/controllers/education/university/createOne.js](/src/controllers/education/university/createOne.js) | JavaScript |   32 |       1 |     9 |    42 |
| [src/controllers/user/superAdmin/signIn.js](/src/controllers/user/superAdmin/signIn.js)                 | JavaScript |   44 |       0 |     7 |    51 |
| [src/helpers/commonControllers.js](/src/helpers/commonControllers.js)                                   | JavaScript |   30 |       0 |     7 |    37 |
| [src/helpers/databaseTypes.js](/src/helpers/databaseTypes.js)                                           | JavaScript |  103 |       0 |     4 |   107 |
| [src/helpers/responseCodes.js](/src/helpers/responseCodes.js)                                           | JavaScript |   10 |       4 |     3 |    17 |
| [src/helpers/winstonLogger.js](/src/helpers/winstonLogger.js)                                           | JavaScript |   15 |       0 |     4 |    19 |
| [src/models/education/schedule.js](/src/models/education/schedule.js)                                   | JavaScript |    2 |       5 |     1 |     8 |
| [src/models/education/scheduleAnswer.js](/src/models/education/scheduleAnswer.js)                       | JavaScript |   64 |       0 |     5 |    69 |
| [src/models/education/sessionAssignment.js](/src/models/education/sessionAssignment.js)                 | JavaScript |  -51 |       0 |    -5 |   -56 |
| [src/models/education/sessionConference.js](/src/models/education/sessionConference.js)                 | JavaScript |  -51 |       0 |    -5 |   -56 |
| [src/models/education/sessionExam.js](/src/models/education/sessionExam.js)                             | JavaScript |  -51 |       0 |    -5 |   -56 |
| [src/models/education/sessionMaterial.js](/src/models/education/sessionMaterial.js)                     | JavaScript |  -51 |       0 |    -5 |   -56 |
| [src/models/education/sessionQuiz.js](/src/models/education/sessionQuiz.js)                             | JavaScript |  -51 |       0 |    -5 |   -56 |
| [src/models/education/studyCard.js](/src/models/education/studyCard.js)                                 | JavaScript |    0 |       1 |     1 |     2 |
| [src/models/education/university.js](/src/models/education/university.js)                               | JavaScript |    2 |       0 |     0 |     2 |
| [src/models/file/folder.js](/src/models/file/folder.js)                                                 | JavaScript |    8 |       2 |     0 |    10 |
| [src/models/finance/cart.js](/src/models/finance/cart.js)                                               | JavaScript |   47 |       1 |     5 |    53 |
| [src/models/finance/order.js](/src/models/finance/order.js)                                             | JavaScript |   75 |       2 |     5 |    82 |
| [src/models/finance/studyCard.js](/src/models/finance/studyCard.js)                                     | JavaScript |   47 |       2 |     6 |    55 |
| [src/models/market/item.js](/src/models/market/item.js)                                                 | JavaScript |   57 |       0 |     5 |    62 |
| [src/models/user/admin.js](/src/models/user/admin.js)                                                   | JavaScript |  -18 |       0 |     0 |   -18 |
| [src/models/user/enterprise.js](/src/models/user/enterprise.js)                                         | JavaScript |   35 |       0 |     5 |    40 |
| [src/models/user/management.js](/src/models/user/management.js)                                         | JavaScript |  -18 |       0 |     0 |   -18 |
| [src/models/user/parent.js](/src/models/user/parent.js)                                                 | JavaScript |  -18 |       0 |     0 |   -18 |
| [src/models/user/student.js](/src/models/user/student.js)                                               | JavaScript |  -22 |       0 |     0 |   -22 |
| [src/models/user/superAdmin.js](/src/models/user/superAdmin.js)                                         | JavaScript |   34 |       0 |     5 |    39 |
| [src/models/user/teacher.js](/src/models/user/teacher.js)                                               | JavaScript |  -18 |       0 |     0 |   -18 |
| [src/routes/education/classRoom.js](/src/routes/education/classRoom.js)                                 | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/faculty.js](/src/routes/education/faculty.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/major.js](/src/routes/education/major.js)                                         | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/schedule.js](/src/routes/education/schedule.js)                                   | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/scheduleAnswer.js](/src/routes/education/scheduleAnswer.js)                       | JavaScript |   17 |       4 |     5 |    26 |
| [src/routes/education/session.js](/src/routes/education/session.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/subject.js](/src/routes/education/subject.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/education/university.js](/src/routes/education/university.js)                               | JavaScript |   12 |       3 |     5 |    20 |
| [src/routes/finance/cart.js](/src/routes/finance/cart.js)                                               | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/finance/order.js](/src/routes/finance/order.js)                                             | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/finance/studyCard.js](/src/routes/finance/studyCard.js)                                     | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/index.js](/src/routes/index.js)                                                             | JavaScript |   20 |       4 |     0 |    24 |
| [src/routes/market/item.js](/src/routes/market/item.js)                                                 | JavaScript |   10 |       4 |     5 |    19 |
| [src/routes/user/admin.js](/src/routes/user/admin.js)                                                   | JavaScript |    1 |      -1 |     0 |     0 |
| [src/routes/user/management.js](/src/routes/user/management.js)                                         | JavaScript |    9 |      -1 |     0 |     8 |
| [src/routes/user/parent.js](/src/routes/user/parent.js)                                                 | JavaScript |    1 |      -1 |     0 |     0 |
| [src/routes/user/student.js](/src/routes/user/student.js)                                               | JavaScript |    1 |      -1 |     0 |     0 |
| [src/routes/user/superAdmin.js](/src/routes/user/superAdmin.js)                                         | JavaScript |   19 |       4 |     5 |    28 |
| [src/routes/user/teacher.js](/src/routes/user/teacher.js)                                               | JavaScript |    1 |      -1 |     0 |     0 |
| [src/seed/readme.md](/src/seed/readme.md)                                                               | Markdown   |   51 |       0 |    18 |    69 |
| [src/server.js](/src/server.js)                                                                         | JavaScript |   12 |       0 |     4 |    16 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details
