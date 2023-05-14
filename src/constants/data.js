import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '£56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbec',
    price: '£59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieille Rose',
    price: '£44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Peroni',
    price: '£7',
    tags: 'IT | 660 ml',
  },
  {
    title: 'Guinness Stout',
    price: '£6',
    tags: 'IE | 600 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '£20',
    tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '£16',
    tags: 'Dark Rum | Ginger Beer | Slice of Lime',
  },
  {
    title: 'Daiquiri',
    price: '£10',
    tags: 'Rum | Citrus Juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '£31',
    tags: 'Bourbon | Brown Sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '£26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange Garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '"Recognising our exceptional cuisine and value." - 2011',
  },
  {
    imgUrl: images.award01,
    title: 'Michelin Star',
    subtitle: '"The Ultimate Seal of Culinary Excellence." - 2008',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '"Recognizing Excellence in Fine Dining." - 2015',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: `"Recognising Chef Kevin Luo's Artistry." - 2019`,
  },
];

export default { wines, cocktails, awards };
