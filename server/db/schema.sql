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
  size VARCHAR(20),
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

CREATE INDEX styles_product_id_index ON styles(product_id);
CREATE INDEX photos_style_id_index ON photos(style_id);
CREATE INDEX skus_style_id_index ON skus(style_id);
CREATE INDEX features_product_id_index ON features(product_id);
CREATE INDEX related_current_product_id_index ON related(current_product_id);
