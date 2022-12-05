# Education Database Schema

&nbsp;

## University

### (formal, university, time-based)

For your typical & simple university purpose,  
think of this database scheme.

```

Universitas Indonesia
│
│   faculty
│   faculty
│   faculty
└───faculty
│   │
│   │   major
│   │   major
│   │   major
│   └───major
│       │
│       │   subject
│       │   subject
│       │   subject
│       └───subject
│           │
│           │   classRoom (20 murid, 1 dosen)
│           │   classRoom (35 murid, 1 dosen)
│           │   classRoom (50 murid, 3 dosen)
│           └───classRoom (100 murid, 3 dosen)
│               │
│               │   section (minggu 1)
│               │   section (minggu 2)
│               │   section (minggu 3)
│               └───section (minggu 4)
│                   │
│                   │   schedule  (tugas 1)
│                   │   schedule  (tugas 2)
│                   │   schedule  (quiz A)
│                   │   schedule  (vidconf 5)
│                   └───schedule  (material 4)

```

&nbsp;

## ET Asia

### (Non-formal, not time-based)

For your typical & simple university purpose,  
think of this database scheme.

```

University (ET Asia)
│
└───faculty (bypassed: ET Asia)
│   │
│   └───major (bypassed: ET Asia)
│       │
│       │   subject (1 subject per course)
│       │   subject
│       │   subject
│       └───subject
│           │
│           └───classRoom (bypassed: one per course)
│               │
│               │   section (1 section per chapter)
│               │   section
│               │   section
│               └───section
│                   │
│                   │   schedule  (berurut, per section)
│                   │   schedule
│                   │   schedule
│                   │   schedule
│                   └───schedule

```
