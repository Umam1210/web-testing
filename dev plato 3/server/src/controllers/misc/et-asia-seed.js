require('dotenv').config();

export default async (req, res) => {
  try {
    // How to seed ET Asia
    // Fix seed data on /src/seed/et-asia.seed.js (add youtube link to all schedules).
    // Don't add student and teacher yet.
    // Create university, faculty, major, subject, classRoom, section, and schedule. (skip the folders).
    // Keep those empty from students.
    // Create teachers, students, admins, and superadmins.
  } catch (err) {
    res.status(400).json({ err });
  }
};
