import Subject from 'models/education/subject';

export default async (req, res) => {
  try {
    const { body } = req;

    const oneSubjectQuery = await Subject({
      ...body
    });

    await oneSubjectQuery.save();

    if (oneSubjectQuery) {
      res.status(200).json({
        code: 200,
        message: 'Add Data Success',
        data: oneSubjectQuery
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
