const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/products');

const productSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [
    {
      feature: String,
      value: String,
    },
  ],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: Number,
      sale_price: Number,
      default: Boolean,
      photos: [
        {
          thumbnail_url: String,
          url: String,
        },
      ],
      skus: [
        {
          sku_id: Number,
          quantity: Number,
          size: String,
        },
      ],
    },
  ],
  related: [Number],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
