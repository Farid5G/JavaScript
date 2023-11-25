let price = [250,645,300,900,50];
for(let pr in price)
{
    console.log(`Price Before Discount: ${price[pr]}`)
    let discount = price[pr] / 10;
    price[pr] = price[pr] - discount;
}
for(let pr of price)
{
    console.log(`Price After 10% Discount: ${pr}`)
}