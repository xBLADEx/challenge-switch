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
- I wasn't going to add too many packages, but I think having a nice UI with a lightweight icon library makes sense. Adding specifically for some of the search/sort UI and forward thinking about favoriting.
- I approached this project as a small task at a time. I adjusted the state each time a new requirement came up, hopefully this shows my thinking as I worked on each item.
