## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

## Notes

### Data

> - Data Source: Use the sample JSON in this repo or your own small dataset.
> - No backend required. You may simulate network latency/errors with a small helper.

For this project I decided to directly import the JSON data, no need for fetch calls.
Ideally I would use react-query but based on the instructions I didn't think it was needed.

The trade-off here is now the data is part of my final bundle size. I wanted to note this.

### Comments

- The search field has a lot more to consider, clearing the search, showing the last searched item or perhaps item(s)?
- I decided to not reach for Zustand at this moment, while I love it and it can make things simple, I'd rather use react state for searching currently.
- I should fix when I search but we don't match anything
