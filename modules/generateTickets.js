module.exports = () => {
  const tickets = [];

  for (let i = 1; i <= 30; i++) {
    tickets.push({
      place: i,
      reserved: "",
    });
  }

  return tickets;
};
