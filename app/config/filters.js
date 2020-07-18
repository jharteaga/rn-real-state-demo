import houses from '../assets/data/houses';

/**
 * Array of objects with every filter information
 */
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

/**
 * Function to identify filter pressed
 * @param filters Array of filters object
 * @param action Action sent by dispatcher
 */
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

/**
 * Function to filter list of houses according to filters selected
 * @param allHouses Completely array of houses object
 * @param housesByCity Array of houses object according to search bar value by city
 * @param filtersList Array of filter objects with active status updated
 */
export const filterHouses = (allHouses, housesByCity, filtersList) => {
  let houses = housesByCity.length ? housesByCity : allHouses;
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
