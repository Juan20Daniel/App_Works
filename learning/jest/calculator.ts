export const priceCalculator = {
  calculateDiscount(
    price: number,
    percentage: number,
  ): number {
    return price * (percentage / 100);
  },
};

export const productService = {
  calculateFinalPrice(
    price: number,
    discountPercentage: number,
  ): number {
    const discount =
      priceCalculator.calculateDiscount(
        price,
        discountPercentage,
      );

    return price - discount;
  },
};