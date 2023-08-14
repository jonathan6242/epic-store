const products = require('./products')
const Stripe = require('stripe')

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const createProducts = async () => {
  console.log(process.env.STRIPE_SECRET_KEY)
  // for (const product of products) {
  //   const stripeProduct = await stripe.products.create({
  //     name: product.name,
  //     default_price_data: {
  //       currency: product.currency,
  //       unit_amount_decimal: product.price
  //     },
  //     images: [product.image]
  //   })
  //   console.log(stripeProduct.name, ':', stripeProduct.id)
  // }
}

createProducts();