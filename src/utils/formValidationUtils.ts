/* Validates a string has at least one non space char*/
export const validateNonEmptyString = (
  value: string,
  errorReturn: boolean | string = false
) => {
  if (!value) return errorReturn;
  if (value.match(/\S/)) return true;
  return errorReturn;
};
