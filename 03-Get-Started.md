# Additional Credit Card Validation Steps

In addition to Luhn, some other basic checks you can perform:

- **Length**: depending on the brand, a credit card number is between 13 and 19 digits long.
- **First** number: the first number of a credit card tells you the type/brand.

# Get started!

To keep it simple for now we will only care about Mastercard, Visa, and Discover. All of these card numbers have exactly 16 digits.

Write some code that:

- Implements the Luhn algorithm
- Validates there are exactly `16` digits being input
- Identifies the card type/brand by the first digit
  - `4` = **Visa**
  - `5` = **Mastercard**
  - `6` = **Discover**

# Writing your code and tests

Run `npm run test` to launch the testing environment.
This will live-reload as you save changes to your code and show you the results of the tests

A few sample tests are written for you already, write enough code to get some to pass before moving on to others.
Start simple and then get more complex, make sure anything you add doesn't break any tests that previously passed.

# Code Coverage

Once you are in a good spot with your tests, open the files generated in `/coverage` in your browser and it will give you a detailed breakdown of which lines of code are covered by unit tests, and which are not.
Strive to get to 100% code coverage in this exercise!

---

# [⬅ PREV (Luhn)](02-Luhn.md) | [NEXT (Sample Card Numbers) ➡](04-Sample-Card-Numbers.md)
