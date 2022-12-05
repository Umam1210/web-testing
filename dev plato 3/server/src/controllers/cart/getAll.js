import Cart from 'models/finance/cart';

export default async (req, res) => {
  try {
    const CartQuery = await Cart.find().populate('items').populate('user');
    if (CartQuery) {
      res.status(200).json({
        code: 200,
        message: 'Get All Data Success',
        data: CartQuery
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
