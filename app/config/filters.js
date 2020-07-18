import houses from '../assets/data/houses';

export const initFilters = [
  {
    id: 0,
    name: 'less than',
    label: '<$500,000',
    active: false,
    visible: true,
  },
  {
    id: 1,
    name: 'greater than',
    label: '>$500,000',
    active: false,
    visible: true,
  },
  { id: 2, name: '1-2 beds', label: '1-2 Beds', active: false, visible: true },
  { id: 3, name: '3-4 beds', label: '3-4 Beds', active: false, visible: true },
  {
    id: 4,
    name: '1-2 baths',
    label: '1-2 Baths',
    active: false,
    visible: true,
  },
  {
    id: 5,
    name: '3-4 baths',
    label: '3-4 Baths',
    active: false,
    visible: true,
  },
];

export const toggleFilter = (filters, action) => {
  const tfilters = filters.map((f) => {
    if (f.name === action) {
      f.active = !f.active;
    }
    return f;
  });

  for (let i = 0; i < tfilters.length; i += 2) {
    if (tfilters[i].active) tfilters[i + 1].visible = false;
    else tfilters[i + 1].visible = true;

    if (tfilters[i + 1].active) tfilters[i].visible = false;
    else tfilters[i].visible = true;
  }

  return tfilters;
};

export const filterHouses = (currentHouses, housesByText, filtersList) => {
  let houses = housesByText.length ? housesByText : currentHouses;
  for (let f of filtersList) {
    if (f.name === 'less than' && f.active)
      houses = houses.filter((h) => h.price < 500000);
    if (f.name === 'greater than' && f.active)
      houses = houses.filter((h) => h.price >= 500000);
    if (f.name === '1-2 beds' && f.active)
      houses = houses.filter((h) => h.bedrooms >= 1 && h.bedrooms <= 2);
    if (f.name === '3-4 beds' && f.active)
      houses = houses.filter((h) => h.bedrooms >= 3 && h.bedrooms <= 4);
    if (f.name === '1-2 baths' && f.active)
      houses = houses.filter((h) => h.bathrooms >= 1 && h.bathrooms <= 2);
    if (f.name === '3-4 baths' && f.active)
      houses = houses.filter((h) => h.bathrooms >= 3 && h.bathrooms <= 4);
  }

  return houses;
};
