export class CreditCard {
  public readonly isValid: boolean;
  public readonly type: string;
  private readonly ccNumStr: string;

  constructor(input: string | number) {
    if (typeof input !== 'number' && typeof input !== 'string') {
      throw Error('You must provide a number or a string as input!');
    }

    this.ccNumStr = input.toString().replace(/\D/g, '');
    this.isValid = this.luhn();
    this.type = this.setType();
  }

  private luhn(): boolean {
    const numbersOnlyStr = this.ccNumStr.toString().replace(/\D/g, '');

    if (numbersOnlyStr.length !== 16) {
      return false;
    }

    const numbersWithDoubled = numbersOnlyStr
      .split('')
      .map((num, i) => {
        if (i % 2 === 0) {
          const doubledStr = (parseInt(num, 10) * 2).toString();
          if (doubledStr.length > 1) {
            return doubledStr
              .split('')
              .map((n) => parseInt(n, 10))
              .reduce((prev, curr) => prev + curr, 0);
          }
          return doubledStr;
        }
        return num;
      })
      .join('');

    const checkDigit = parseInt(numbersWithDoubled.charAt(numbersWithDoubled.length - 1), 10);
    const allWithoutCheck = numbersWithDoubled.slice(0, numbersWithDoubled.length - 1);
    const sum = allWithoutCheck.split('').reduce((prev, curr) => prev + parseInt(curr, 10), 0);
    const calcedSumStr = (sum * 9).toString();
    const calcedCheckDigit = parseInt(calcedSumStr.charAt(calcedSumStr.length - 1), 10);
    const isDivisibleByTen = (sum + checkDigit) % 10 === 0;

    // console.groupCollapsed(numbersOnlyStr);
    // console.log(numbersWithDoubled);
    // console.log('check', checkDigit);
    // console.log('allWithoutCheck', allWithoutCheck);
    // console.log('calcedSumStr', calcedSumStr);
    // console.log('calcedCheckDigit', calcedCheckDigit);
    // console.log('totalSum', sum + checkDigit, (sum + checkDigit) % 10);
    // console.groupEnd();

    return checkDigit === calcedCheckDigit && isDivisibleByTen;
  }

  private setType(): string {
    //Don't bother with detecting a type if the card number is invalid in the first place
    if (this.isValid) {
      if (this.ccNumStr.startsWith('4')) {
        return 'Visa';
      }
      if (this.ccNumStr.startsWith('5')) {
        return 'Mastercard';
      }
      if (this.ccNumStr.startsWith('')) {
        return 'Discover';
      }
    }

    return 'Unknown';
  }
}
