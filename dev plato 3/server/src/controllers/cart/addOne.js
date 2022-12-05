import Cart from 'models/finance/cart';

export default async (req, res) => {
  try {
    const { body } = req;

    const oneCartQuery = await Cart({
      ...body
    });

    await oneCartQuery.save();

    if (oneCartQuery) {
      res.status(200).json({
        code: 200,
        message: 'Add Data Success',
        data: oneCartQuery
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
