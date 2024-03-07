import { CreditCard } from './credit-card';

describe('Credit Card', (): void => {
  it('should exist', () => {
    expect(CreditCard).toBeDefined();
  });

  describe('Number Validation', (): void => {
    it('should ALLOW valid 16 digit card numbers as strings', () => {
      expect(new CreditCard('4417123456789113').isValid).withContext('Visa').toBeTrue();
      expect(new CreditCard('4917484589897107').isValid).withContext('Visa').toBeTrue();
      expect(new CreditCard('4001919257537193').isValid).withContext('Visa').toBeTrue();
      expect(new CreditCard('4007702835532454').isValid).withContext('Visa').toBeTrue();
      expect(new CreditCard('4701322211111234').isValid).withContext('Visa').toBeTrue();
      expect(new CreditCard('4347699988887777').isValid).withContext('Visa').toBeTrue();

      expect(new CreditCard('5105105105105100').isValid).toBeTrue();
      expect(new CreditCard('5555555555554444').isValid).toBeTrue();
      expect(new CreditCard('5425233430109903').isValid).toBeTrue();
      expect(new CreditCard('5105105105105100').isValid).toBeTrue();

      expect(new CreditCard('6011111111111117').isValid).toBeTrue();
      expect(new CreditCard('6011000990139424').isValid).toBeTrue();
      expect(new CreditCard('6011000180331112').isValid).toBeTrue();
      expect(new CreditCard('6011000991300009').isValid).toBeTrue();
    });

    it('should ALLOW valid 16 digit card numbers as numbers', () => {
      expect(new CreditCard(4417123456789113).isValid).toBeTrue();
      expect(new CreditCard(4917484589897107).isValid).toBeTrue();
      expect(new CreditCard(4001919257537193).isValid).toBeTrue();
      expect(new CreditCard(4007702835532454).isValid).toBeTrue();
      expect(new CreditCard(4701322211111234).isValid).toBeTrue();
      expect(new CreditCard(4347699988887777).isValid).toBeTrue();

      expect(new CreditCard(5105105105105100).isValid).toBeTrue();
      expect(new CreditCard(5555555555554444).isValid).toBeTrue();
      expect(new CreditCard(5425233430109903).isValid).toBeTrue();
      expect(new CreditCard(5105105105105100).isValid).toBeTrue();

      expect(new CreditCard(6011111111111117).isValid).toBeTrue();
      expect(new CreditCard(6011000990139424).isValid).toBeTrue();
      expect(new CreditCard(6011000180331112).isValid).toBeTrue();
      expect(new CreditCard(6011000991300009).isValid).toBeTrue();
    });

    it('should ALLOW a valid 16 digit card number as a string with spaces', () => {
      expect(new CreditCard('4417 1234 5678 9113').isValid).toBeTrue();
    });

    it('should DISALLOW a other card number lengths', () => {
      expect(new CreditCard('441712345678911').isValid).toBeFalse();
      expect(new CreditCard(441712345678911).isValid).toBeFalse();
      expect(new CreditCard('44171234567891130').isValid).toBeFalse();
      expect(new CreditCard(44171234567891130).isValid).toBeFalse();
    });

    it('should throw an error for invalid inputs', () => {
      //@ts-expect-error  -- Force TS to allow invalid input here so we can test against bad user input or errors!
      expect(() => new CreditCard()).toThrow(new Error('You must provide a number or a string as input!'));
      //@ts-expect-error  -- Force TS to allow invalid input here so we can test against bad user input or errors!
      expect(() => new CreditCard(null)).toThrow(new Error('You must provide a number or a string as input!'));
      //@ts-expect-error  -- Force TS to allow invalid input here so we can test against bad user input or errors!
      expect(() => new CreditCard(true)).toThrow(new Error('You must provide a number or a string as input!'));
      //@ts-expect-error  -- Force TS to allow invalid input here so we can test against bad user input or errors!
      expect(() => new CreditCard(['44171234567891130'])).toThrow(new Error('You must provide a number or a string as input!'));
    });
  });

  describe('Card Type Detection', () => {
    it('should detect a Visa card type', () => {
      expect(new CreditCard('4417123456789113').type).toEqual('Visa');
      expect(new CreditCard('4917484589897107').type).toEqual('Visa');
      expect(new CreditCard('4001919257537193').type).toEqual('Visa');
      expect(new CreditCard('4007702835532454').type).toEqual('Visa');
      expect(new CreditCard('4701322211111234').type).toEqual('Visa');
      expect(new CreditCard('4347699988887777').type).toEqual('Visa');
      expect(new CreditCard(4417123456789113).type).toEqual('Visa');
      expect(new CreditCard(4917484589897107).type).toEqual('Visa');
      expect(new CreditCard(4001919257537193).type).toEqual('Visa');
      expect(new CreditCard(4007702835532454).type).toEqual('Visa');
      expect(new CreditCard(4701322211111234).type).toEqual('Visa');
      expect(new CreditCard(4347699988887777).type).toEqual('Visa');
    });

    it('should detect a Mastercard card type', () => {
      expect(new CreditCard('5105105105105100').type).toEqual('Mastercard');
      expect(new CreditCard('5555555555554444').type).toEqual('Mastercard');
      expect(new CreditCard('5425233430109903').type).toEqual('Mastercard');
      expect(new CreditCard('5105105105105100').type).toEqual('Mastercard');
      expect(new CreditCard(5105105105105100).type).toEqual('Mastercard');
      expect(new CreditCard(5555555555554444).type).toEqual('Mastercard');
      expect(new CreditCard(5425233430109903).type).toEqual('Mastercard');
      expect(new CreditCard(5105105105105100).type).toEqual('Mastercard');
    });

    it('should detect a Discover card type', () => {
      expect(new CreditCard('6011111111111117').type).toEqual('Discover');
      expect(new CreditCard('6011000990139424').type).toEqual('Discover');
      expect(new CreditCard('6011000180331112').type).toEqual('Discover');
      expect(new CreditCard('6011000991300009').type).toEqual('Discover');
      expect(new CreditCard(6011111111111117).type).toEqual('Discover');
      expect(new CreditCard(6011000990139424).type).toEqual('Discover');
      expect(new CreditCard(6011000180331112).type).toEqual('Discover');
      expect(new CreditCard(6011000991300009).type).toEqual('Discover');
    });

    it('should NOT detect a type for invalid numbers', () => {
      expect(new CreditCard('1').type).toEqual('Unknown');
      expect(new CreditCard(1).type).toEqual('Unknown');
      expect(new CreditCard('1111111111111111').type).toEqual('Unknown');
      expect(new CreditCard('4444444444444444').type).toEqual('Unknown');
      expect(new CreditCard('5555555555555555').type).toEqual('Unknown');
      expect(new CreditCard('6666666666666666').type).toEqual('Unknown');
    });
  });
});
