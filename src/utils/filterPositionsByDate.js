const formatDate = require("./formatDate");

const filterPositionsByDate = (positions, date) => {
  const positionsFiltered = [];
  for (let i = 0; i < positions.length; i += 1) {
    const formattedDate = formatDate(new Date(positions[i].data_posicao)).split('/').join('-');

    if (date.match(formattedDate)) {
      positionsFiltered.push(positions[i]);
    };
  };
  return positionsFiltered;
};

module.exports = filterPositionsByDate;
