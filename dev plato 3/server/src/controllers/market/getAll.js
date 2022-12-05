import Market from 'models/market/item';

export default async (req, res) => {
  try {
    const MarketQuery = await Market.find().populate('item');
    if (MarketQuery) {
      res.status(200).json({
        code: 200,
        message: 'Get All Data Success',
        data: MarketQuery
      });
    } else {
      res.status(400).json({
        code: 400,
        errors: err.message,
        message: 'Get All Data failed'
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      errors: err.message,
      message: 'Error Get All Data'
    });
  }
};
