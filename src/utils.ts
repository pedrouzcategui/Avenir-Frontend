export function formatNumberToUSDDollars(number: number): string {
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };
  return Intl.NumberFormat("en-US", formatOptions).format(number);
}
