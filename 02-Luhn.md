# The Luhn Algorithm

This is the algorithm used for validating a credit card number.
This ensures that a credit card number is not mistyped or just a random combination of numbers.
It uses a checksum or "check digit" the validates all the other digits are correct.
Read more about it: https://en.wikipedia.org/wiki/Luhn_algorithm

# How Luhn Works

This is easy enough to do by hand on paper.

---

## Find the check digit

First take sample a card number. The last number is our check digit.

```js
  4417 1234 5678 9113
//                  ^ check digit is 3
```

## Double every other digit

Starting from the first number, double every other digit.

```js
  4417 1234  5678  9113
//^ ^  ^ ^   ^ ^   ^ ^
//8 2  2 6  10 14 18 2
```

If the result of the doubling ends up with any two digit numbers, then add those two digits together and replace them in the list

```js
  8 2 2 6 10 14 18 2
//        ^^ ^^ ^^
```

- `10` - `1 + 0 = 1`
- `14` - `1 + 4 = 5`
- `18` - `1 + 8 = 9`

The final list of numbers now looks like this

```js
8427 2264 1658 9123
```

## Calculate the checksum

Now add up all the numbers except for the last number which is our check digit

```js
8+4+2+7+2+2+6+4+1+6+5+8+9+1+2 = 67
```

Take that final sum and multiply it by 9

```js
  67 * 9 = 603
//           ^ should be the same as our check digit!
```

- The last digit of that result should equal our check digit
- The total of all number together (`70` in this case) should be divisible by 10

In the above example, credit card number `4417 1234 5678 9113` has passed the Luhn test because:

- The calculated checksum of `3` is equal to the last number of the original card number
- The total sum of `70` is divisible by 10: `70 % 10 === 0`

---

# [⬅ PREV (Intro)](01-Intro.md) | [NEXT (Get Started) ➡](03-Get-Started.md)
