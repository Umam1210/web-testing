import Cart from 'models/finance/cart';

export default async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const oneCartQuery = await Cart.findByIdAndUpdate(id, body, {
      new: true
    });

    if (oneCartQuery) {
      res.status(200).json({
        code: 200,
        message: 'Update Data Success',
        data: oneCartQuery
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
