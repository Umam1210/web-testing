import Market from 'models/market/item';

export default async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const oneMarketQuery = await Market.findByIdAndUpdate(id, body, {
      new: true
    });

    if (oneMarketQuery) {
      res.status(200).json({
        code: 200,
        message: 'Update Data Success',
        data: oneMarketQuery
      });
    } else {
      res.status(400).json({
        code: 400,
        message: 'Get Data Failed',
        errors: err.message
      });
    }
  } catch (err) {
    res.status(500).json({
      code: 500,
      errors: err.message,
      message: 'Id Is not Valid'
    });
  }
};
