const formatHour = (datetime) => {
  const date = new Date(datetime);
  return date.toString().slice(16, 24);
};

module.exports = formatHour;
