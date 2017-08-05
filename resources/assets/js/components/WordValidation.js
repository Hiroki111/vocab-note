const WordValidation = values => {
  const errors = {}
  if (!values.word) {
    errors.word = 'Required'
  }
  if (!values.meaning) {
    errors.meaning = 'Required'
  }
  if (!values.type) {
    errors.type = 'Required'
  }
  return errors
};

export default WordValidation;