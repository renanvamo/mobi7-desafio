const formatDate = require("./formatDate");

const filterPositionsByDate = (positions, date) => {
  const positionsFiltered = [];

  positions.filter(position => {
    const formattedDate = formatDate(new Date(position.data_posicao)).split('/').join('-');
  
    if (date.match(formattedDate)) {
      positionsFiltered.push(position);
    };
  });
  return positionsFiltered;
};

module.exports = filterPositionsByDate;
