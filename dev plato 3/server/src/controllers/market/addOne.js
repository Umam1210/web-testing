import Market from 'models/market/item';

export default async (req, res) => {
  try {
    const { body } = req;

    const oneMarketQuery = await Market({
      ...body
    });

    await oneMarketQuery.save();

    if (oneMarketQuery) {
      res.status(200).json({
        code: 200,
        message: 'Add Data Success',
        data: oneMarketQuery
      });
    } else {
      res.status(400).json({
        code: 400,
        message: 'Add Data Failed',
        errors: err.message
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      errors: err.message,
      message: 'Add Failed'
    });
  }
};
