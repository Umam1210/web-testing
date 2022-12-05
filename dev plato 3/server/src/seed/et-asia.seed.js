import faker from '@faker-js/faker';

const educationSeed = {
  university: {
    // faculty and major uses the same name.
    name: 'ET Asia',
    businessType: 'nonFormal',
    brand: {
      name: 'ET Asia',
      color: '#DB3126',
      logo: 'https://et-asia.com/wp-content/uploads/2022/10/et-asia-retina.png',
      favicon: ''
    }
  }
};

const userSeed = {
  superAdmin: {
    name: 'Super Admin',
    email: 'superadmin@etasia.com',
    password: 'superadmin',
    userType: 'superAdmin'
  },
  admin: [
    {
      name: 'Admin #01',
      email: 'admin01@etasia.com',
      password: 'admin'
    },
    {
      name: 'Admin #02',
      email: 'admin02@etasia.com',
      password: 'admin'
    }
  ],
  teacher: {
    name: 'ET Asia',
    email: 'teacher@etasia.com',
    password: 'teacher',
    userType: 'teacher',
    publicProfile: {
      // avatar uses the same as profilePicture
      profilePicture: faker.image.avatar(),
      background: 'https://et-asia.com/wp-content/uploads/2022/10/et-asia-retina.png',
      bio: faker.lorem.sentences(4),
      social: {
        facebook: 'https://www.facebook.com/etasia',
        twitter: 'https://twitter.com/etasia',
        instagram: 'https://www.instagram.com/etasia',
        linkedin: 'https://www.linkedin.com/company/etasia',
        website: 'https://et-asia.com'
      }
    }
  },
  student: [
    {
      userType: 'student',
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'student',
      phoneNumber: faker.phone.phoneNumber(),
      educationData: {
        university: educationSeed.university._id,
        faculty: educationSeed.faculty._id,
        major: educationSeed.major._id
      }
    },
    {
      userType: 'student',
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'student',
      phoneNumber: faker.phone.phoneNumber(),
      educationData: {
        university: educationSeed.university._id,
        faculty: educationSeed.faculty._id,
        major: educationSeed.major._id
      }
    },
    {
      userType: 'student',
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'student',
      phoneNumber: faker.phone.phoneNumber(),
      educationData: {
        university: educationSeed.university._id,
        faculty: educationSeed.faculty._id,
        major: educationSeed.major._id
      }
    },
    {
      userType: 'student',
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'student',
      phoneNumber: faker.phone.phoneNumber(),
      educationData: {
        university: educationSeed.university._id,
        faculty: educationSeed.faculty._id,
        major: educationSeed.major._id
      }
    },
    {
      userType: 'student',
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'student',
      phoneNumber: faker.phone.phoneNumber(),
      educationData: {
        university: educationSeed.university._id,
        faculty: educationSeed.faculty._id,
        major: educationSeed.major._id
      }
    }
  ]
};

const subjectSeed = [
  // !SUBJECT 1
  {
    price: {
      basePrice: '2500000',
      discountPrice: '1500000'
    },
    name: 'English for Legal Practitioner : Exclusive with Practical Session',
    description:
      'Kecakapan berbahasa asing tentu menjadi poin plus bagi seorang praktisi hukum, salah satunya adalah Bahasa Inggris.',
    introduction:
      'Dalam pekerjaan sehari-hari seorang praktisi hukum, utamanya yang bekerja di sektor korporasi, penguasaan bahasa inggris yang baik dan benar merupakan sebuah prasyarat. Kekurangan dalam sektor ini dapat memiliki implikasi yang sangat signifikan, utamanya ketika merumuskan kontrak dalam bahasa inggris ataupun dalam berkorespondensi dengan orang asing. Tidak hanya penguasaan vocabulary yang kerap digunakan dalam dokumen hukum, seorang praktisi hukum harus memiliki pemahaman yang lengkap mengenai grammar serta sentence structure untuk dapat merumuskan dokumen hukum yang tidak hanya akurat secara data dan fakta, namun juga secara struktur penulisan kalimat. Untuk menjawab kebutuhan memahami bahasa inggris bagi seorang praktisi hukum, ET-Asia kembali menyelenggarakan salah satu program unggulan yakni Online Intensive Course: English for Legal Practitioner yang ditujukan bagi para mahasiswa, fresh graduate, dan entry level pada industri hukum.',
    identity: {
      thumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg',
      cover: '',
      video: '',
      videoThumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg'
    },
    classRoom: {
      name: 'English for Legal Practitioner : Exclusive with Practical Session'
    },
    sections: [
      {
        sectionNumber: 1,
        name: 'TENSES: Common Mistakes in Legal Documents and Practice',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'The Patterns & Functions of 16 Tenses',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Common Tense in Legal Documents',
            scheduleNumber: 2
          }
        ]
      },
      {
        sectionNumber: 2,
        name: 'SENTENCE STRUCTURE: Common Mistakes in Legal Documents',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Simple, Compound and Complex Sentences Noun Clause v. Adjective Clause',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Sentence Structure: Adverbial Clause',
            scheduleNumber: 2
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Practice Session: Noun Clause, Adjective Clause, Adverbial Clause',
            scheduleNumber: 3
          }
        ]
      },
      {
        sectionNumber: 3,
        name: 'GRAMMAR: Common Mistakes in Legal Documents and Practice',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Grammar 1 & The Common Mistakes',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Grammar 2 & The Common Mistakes',
            scheduleNumber: 2
          }
        ]
      },
      {
        sectionNumber: 4,
        name: 'Principles of Clear Writing',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Principles of Clear Writing 1',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Principles of Clear Writing 2',
            scheduleNumber: 2
          }
        ]
      },
      {
        sectionNumber: 5,
        name: 'Understanding The Key Aspect to Draft & Review Legal Documents',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'The diversity of legal documents & how to conduct it well',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Things that needed to be considered when review a legal document',
            scheduleNumber: 2
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Tips & trick for conducting legal documents',
            scheduleNumber: 3
          }
        ]
      },
      {
        sectionNumber: 6,
        name: 'Drafting & Review Legal Documents',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Based on the previous level, participant will be assigned for drafting the provision and will be reviewed by the mentor)',
            scheduleNumber: 1
          }
        ]
      }
    ]
  },

  // !SUBJECT 2
  {
    price: {
      basePrice: '3000000',
      discountPrice: '2800000'
    },
    name: 'Strategi Sistematis Penanganan Perizinan Perusahaan dan Pengoperasian OSS-RBA',
    description:
      'Perizinan usaha merupakan hal yang sangat krusial bagi para pelaku usaha dalam menjalankan bisnisnya.',
    introduction:
      'Setelah disahkannya Undang-Undang Cipta Kerja, perizinan usaha saat ini semakin dipermudah dengan hadirnya OSS RBA (Online Single Submission - Risk Based Approach). Dengan penerapan OSS RBA, maka perizinan berusaha akan diberikan kepada pelaku usaha untuk memulai dan menjalankan usaha berdasarkan tingkat potensi terjadinya cedera atau kerugian dari suatu bahaya atau kombinasi kemungkinan dan akibat bahaya. Oleh karena itu, menjadi penting bagi para praktisi hukum, khususnya yang memfokuskan dirinya dalam bagian compliance, untuk dapat memahami dan menguasai dari implementasi OSS RBA ini bagi perusahaan. Dengan demikian, guna membantu meningkatkan pemahaman tentang OSS RBA ini kepada para praktisi hukum, maka ET-Asia menyelenggarakan Offline Intensive Course: Strategi Sistematis Penanganan Perizinan Perusahaan dan Pengoperasian OSS-RBA.',
    identity: {
      thumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_2.jpg',
      cover: '',
      video: '',
      videoThumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_2.jpg'
    },
    classRoom: {
      name: 'English for Legal Practitioner : Exclusive with Practical Session'
    },
    sections: [
      {
        sectionNumber: 1,
        name: 'GRAMMAR: Common Mistakes in Legal Documents and Practice',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Analisis Kebutuhan Perusahaan dalam Bidang Perizinan',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Strategi Penanganan Perizinan IMB/PBG',
            scheduleNumber: 2
          }
        ]
      },
      {
        sectionNumber: 2,
        name: 'Strategi Penanganan Perizinan di Berbagai Bidang Usaha',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Perizinan Usaha Bidang Pertambangan',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Perizinan Usaha Industri Supporting Pertambangan (Industri Alat Berat & Pembangunan Smelter)',
            scheduleNumber: 2
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Perizinan Usaha Bidang Konstruksi',
            scheduleNumber: 3
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Perizinan Usaha Ketenagalistrikan',
            scheduleNumber: 4
          }
        ]
      },
      {
        sectionNumber: 3,
        name: 'Praktik Pengoperasian dan Konsultasi Perizinan melalui OSS-RBA',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'The diversity of legal documents & how to conduct it well',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Things that needed to be considered when review a legal document',
            scheduleNumber: 2
          }
        ]
      }
    ]
  },

  // !SUBJECT 3
  {
    price: {
      basePrice: '0',
      discountPrice: '0'
    },
    name: 'Practitioners On Stage: Penindakan Sanksi Perizinan yang Bermasalah bagi Perusahaan',
    description:
      'Online Single Submission-Risk Based Approach (OSS-RBA) merupakan salah satu sistem yang krusial bagi pelaku usaha.',
    introduction:
      'Dalam menjalankan bisnis di Indonesia, sebuah perusahaan tentunya harus mempunyai perizinan. Saat ini, untuk memudahkan pengusaha mengajukan perizinan, dikenal dengan sistem Online Single Submission - Risk Based Approach, yang pada pokoknya perizinan berusaha akan diberikan kepada pelaku usaha untuk memulai dan menjalankan usaha berdasarkan tingkat potensi terjadinya cedera atau kerugian dari suatu bahaya atau kombinasi kemungkinan dan akibat bahaya. Namun, dalam praktiknya masih banyak para pengusaha, maupun praktisi hukum yang kurang memahami pengoperasiannya. Oleh karena itu, Melalui practitioners on stage, ET-Asia menghadirkan free event webinar yang akan membahas sekaligus memperkenalkan OSS RBA dalam praktik bersama ahli.',
    identity: {
      thumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_4.jpg',
      cover: '',
      video: '',
      videoThumbnail:
        'https://learn.et-asia.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_4.jpg'
    },
    classRoom: {
      name: 'English for Legal Practitioner : Exclusive with Practical Session'
    },
    sections: [
      {
        sectionNumber: 1,
        name: 'GRAMMAR: Common Mistakes in Legal Documents and Practice',
        schedules: [
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'General overview kategori tindakan yang dapat menimbulkan masalah dalam perizinan OSS-RBA',
            scheduleNumber: 1
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Bentuk-bentuk sanksi dijatuhkan kepada perusahaan sebagaimana yang terdapat dalam PP No. 5 Tahun 2021 dan/atau peraturan lain yang berkaitan',
            scheduleNumber: 2
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Lembaga yang berwenang dalam penindakan sanksi perizinan perusahaan',
            scheduleNumber: 3
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Potensi dampak yang dialami perusahaan bila perizinan terdapat masalah',
            scheduleNumber: 4
          },
          {
            scheduleType: 'material',
            materialFiles: [''],
            name: 'Mitigasi risiko perizinan yang bermasalah bagi perusahaan',
            scheduleNumber: 5
          }
        ]
      }
    ]
  }
];

export { educationSeed, userSeed, subjectSeed };
