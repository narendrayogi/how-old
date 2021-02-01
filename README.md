`how-old` gives how old from birthdate to any date. Not just previous dates from birthdate.

# Examples

## Example 1 - One day before birthday

```js
new Date(2019, 1, 2), new Date(2020, 1, 1);
```

```js
{ years: 0, months: 11, days: 30 }
```

## Example 2 - On birthday

```js
new Date(2019, 1, 2), new Date(2020, 1, 1);
```

```js
{ years: 0, months: 11, days: 30 }
```

## Example 3 - One day after birthday

```js
new Date(2019, 1, 2), new Date(2020, 1, 1);
```

```js
{ years: 0, months: 11, days: 30 }
```
