## Getting Started

Install packages, then run project.

```bash
npm i
npm run dev
```

## Tests

```
npm run test
```

## Notes

### Data

> - Data Source: Use the sample JSON in this repo or your own small dataset.
> - No backend required. You may simulate network latency/errors with a small helper.

For this project I decided to directly import the JSON data, no need for fetch calls.
Ideally I would use react-query but based on the instructions I didn't think it was needed.

The trade-off here is now the data is part of my final bundle size. I wanted to note this.

### Commits

- Please notice I used semantic commits fix, feat, etc while also keeping commits small and focused detailing them with descriptive messages.

### State

- I decided to not reach for Zustand at this moment, while I love it and it can make things simple, I'd rather use react state for searching currently.
- I approached this project as a small task at a time. I adjusted the state each time a new requirement came up, hopefully this shows my thinking as I worked on each item.

### Tests

- I added a few tests, in a real project I would add meaningful tests for all components.
- I haven't had to setup tests and config in a long time, apologies but I had to ask AI a few things to get this configured. I went with Jest but if it was a vite project vitest would be better.

### Components

- I should make smaller shared components for rating, description, etc so they are consistent, but for now focusing on other requirements.
- Added a hook for favorites and then created a `<Favorite />` component for shared logic between detail page and card list
- The search field has a lot more to consider, clearing the search, showing the last searched item or perhaps item(s)?

### AI

- Speaking of AI, I used it for a few questions and to help sort out my device page using my favorite hook since that can't be run server side, so I created the comp separate for that page with its hook client side while the main page remained server side rendered.

### Comments

- I wasn't going to add too many packages, but I think having a nice UI with a lightweight icon library makes sense. Adding specifically for some of the search/sort UI and forward thinking about favoriting.
- I didn't make the entire card clickable. We can discuss this decision in more detail but essentially when a card has multiple interactions such as favorites, category tags, etc unexpected actions for the user can happen when the whole card is a link.
- I pushed the site live and did some testing and refined the filter and icons.
- I ran the site through page speed insights and improved some accessibility issues with my favorite button not having text.
- I met AA compliance but some of my text is not AAA compliance. I wanted my cards to have enough visual hierarchy without all the text looking the same, something to refine and further improve.
