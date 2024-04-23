export const getFormattedCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};
export const getFullMoney = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};

export const getFormattedAmount = (amount: number | undefined) => {
  return amount
    ? new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      }).format(amount)
    : null;
};

export const getCommaSepertatedNumber = (
  amount: number | string | undefined,
  toFixed?: number
) => {
  if (amount) {
    if (typeof amount == 'string') {
      return toFixed
        ? new Intl.NumberFormat().format(
            Number(Number(amount).toFixed(toFixed))
          )
        : new Intl.NumberFormat().format(Number(amount));
    } else {
      return toFixed
        ? new Intl.NumberFormat().format(Number(amount.toFixed(toFixed)))
        : new Intl.NumberFormat().format(amount);
    }
  }
  return toFixed ? '0.00' : '0';
};
