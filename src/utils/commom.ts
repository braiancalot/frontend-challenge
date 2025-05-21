export function formatPrice(priceInCents: number) {
  return `R$ ${(priceInCents / 100).toFixed(2).toString().replace(".", ",")}`;
}
