DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS related CASCADE;


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(90),
  slogan TEXT,
  description TEXT,
  category VARCHAR(90),
  default_price NUMERIC
);

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  name VARCHAR(90),
  sale_price TEXT,
  original_price NUMERIC,
  default_style BOOLEAN
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  url TEXT,
  thumbnail_url TEXT
);

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER REFERENCES styles(id),
  size VARCHAR(5),
  quantity INTEGER
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature VARCHAR(90),
  value VARCHAR(90)
);

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES products(id),
  related_product_id INTEGER
);
