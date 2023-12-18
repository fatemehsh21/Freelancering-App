const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export default function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n);
  const persainNumber = toPersianNumbers(numWithCommas);
  return persainNumber;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
