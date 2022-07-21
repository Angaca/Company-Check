export const getAvailableSectors = (companies) => {
  return [...new Set(companies.map(({ sector }) => sector))].sort();
};
