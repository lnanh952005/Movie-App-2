const toUSD = (money, currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
};

export { toUSD };
