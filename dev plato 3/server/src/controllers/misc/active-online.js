require('dotenv').config();

export default async (req, res) => {
  try {
    // TODO: Get all online users.
    const randomNumber = Math.floor(Math.random() * (95 - 75 + 1) + 75);
    const randomTime = Math.floor(Math.random() * (2500 - 1000 + 1) + 1000);

    // Test delay
    setTimeout(() => {
      return res.status(200).json({
        onlineCount: randomNumber
      });
    }, randomTime);
  } catch (err) {
    res.status(400).json({ err });
  }
};
