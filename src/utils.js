export const getAvailableSectors = (companies) => {
  return [...new Set(companies.map(({ sector }) => sector))].sort();
};

export const getMinAndMaxFees = (companies) => {
  return [
    Math.min(...companies.map(({ fees: { amount } }) => amount)),
    Math.max(...companies.map(({ fees: { amount } }) => amount)),
  ];
};
