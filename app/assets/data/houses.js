const houses = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home1_xhrdcb.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794354/rn-real-state/home1_xhrdcb.jpg',
    price: 590000,
    city: 'Vancouver',
    address: '1225 Robson St, V8Y 9D3, BC',
    description:
      'Clean & well kept 2480 SQFT two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2408,
    bedrooms: 2,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home11_dw1ard.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794357/rn-real-state/home11_dw1ard.jpg',
    price: 125000,
    city: 'Toronto',
    address: '789 Thurlow St, V8Y 9D3, ON',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1500,
    bedrooms: 2,
    bathrooms: 1,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home17_orcqrx.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794357/rn-real-state/home17_orcqrx.jpg',
    price: 175000,
    city: 'Saskatoon',
    address: '123 Byro St, V8Y 9D3, SK',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1444,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home14_qr7eqp.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794357/rn-real-state/home14_qr7eqp.jpg',
    price: 475000,
    city: 'Montreal',
    address: '679 Howe St, V8Y 9D3, QC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 3400,
    bedrooms: 4,
    bathrooms: 4,
    garage: 4,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home15_m6bcnp.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794357/rn-real-state/home15_m6bcnp.jpg',
    price: 225000,
    city: 'Ottawa',
    address: '111 Jason St, V8Y 9D3, ON',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1600,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 6,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home13_lxhojo.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_scale,w_100/v1594794357/rn-real-state/home13_lxhojo.jpg',
    price: 555000,
    city: 'Calgary',
    address: '789 Thurlow St, V8Y 9D3, AB',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2200,
    bedrooms: 4,
    bathrooms: 4,
    garage: 3,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 7,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home16_l7f9oa.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home16_l7f9oa.jpg',
    price: 510000,
    city: 'Montreal',
    address: '789 Thurlow St, V8Y 9D3, QC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1800,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 8,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794355/rn-real-state/home6_xrkvxm.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794355/rn-real-state/home6_xrkvxm.jpg',
    price: 875500,
    city: 'Vancouver',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 3500,
    bedrooms: 4,
    bathrooms: 4,
    garage: 5,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 9,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794355/rn-real-state/home12_tuhauy.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794355/rn-real-state/home12_tuhauy.jpg',
    price: 620200,
    city: 'Edmonton',
    address: '789 Thurlow St, V8Y 9D3, AB',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1750,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 10,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794355/rn-real-state/home10_jrbxlq.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794355/rn-real-state/home10_jrbxlq.jpg',
    price: 355300,
    city: 'Winnipeg',
    address: '789 Thurlow St, V8Y 9D3, MB',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2600,
    bedrooms: 3,
    bathrooms: 4,
    garage: 3,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 11,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794355/rn-real-state/home9_l8gxog.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794355/rn-real-state/home9_l8gxog.jpg',
    price: 410750,
    city: 'Victoria',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2100,
    bedrooms: 2,
    bathrooms: 2,
    garage: 4,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 12,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home5_itrpnd.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794354/rn-real-state/home5_itrpnd.jpg',
    price: 960300,
    city: 'Vancouver',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2408,
    bedrooms: 2,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 13,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home8_sxrre3.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794354/rn-real-state/home8_sxrre3.jpg',
    price: 105900,
    city: 'Halifax',
    address: '789 Thurlow St, V8Y 9D3, NS',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1100,
    bedrooms: 1,
    bathrooms: 1,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 14,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home7_zv8i70.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794354/rn-real-state/home7_zv8i70.jpg',
    price: 680900,
    city: 'Regina',
    address: '789 Thurlow St, V8Y 9D3, SK',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2408,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 15,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home3_itrdfh.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794354/rn-real-state/home3_itrdfh.jpg',
    price: 740000,
    city: 'Kelowna',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 3400,
    bedrooms: 4,
    bathrooms: 4,
    garage: 3,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 16,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794353/rn-real-state/home20_vpv7mq.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794353/rn-real-state/home20_vpv7mq.jpg',
    price: 1100000,
    city: 'Vancouver',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1500,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 17,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794353/rn-real-state/home2_zwjpjc.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794353/rn-real-state/home2_zwjpjc.jpg',
    price: 925300,
    city: 'Banff',
    address: '789 Thurlow St, V8Y 9D3, AB',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 2100,
    bedrooms: 4,
    bathrooms: 3,
    garage: 4,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 18,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794352/rn-real-state/home19_twx33f.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794352/rn-real-state/home19_twx33f.jpg',
    price: 440000,
    city: 'Thunder Bay',
    address: '789 Thurlow St, V8Y 9D3, ON',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 1890,
    bedrooms: 4,
    bathrooms: 4,
    garage: 2,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
  {
    id: 19,
    imageUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794351/rn-real-state/home4_xusyjc.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794351/rn-real-state/home4_xusyjc.jpg',
    price: 1500000,
    city: 'Vancouver',
    address: '789 Thurlow St, V8Y 9D3, BC',
    description:
      'Clean & well kept two-level home on a large 46.5x120 lot on a quiet cul-de-sac & high side of the road in popular Fraserview area! Featuring 3 bedrooms & 2 Baths on the top floor, bright & spacious living room & dining room with laminate flooring and new paint throughout & updated kitchen with newer appliances & Fischer Paykal Induction Stove. ',
    squareFeet: 4500,
    bedrooms: 4,
    bathrooms: 4,
    garage: 6,
    publishedDate: '2020-07-13',
    location: { latitude: 37.78719, longitude: -122.408421 },
  },
];

export default houses;
