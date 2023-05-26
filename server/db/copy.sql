\copy products(id, name, slogan, description, category, default_price) FROM './csv/product.csv' DELIMITER ',' CSV HEADER;
\copy styles(id, product_id, name, sale_price, original_price, default_style) FROM './csv/styles.csv' DELIMITER ',' CSV HEADER;
\copy photos(id, style_id, url, thumbnail_url) FROM './csv/photos.csv' DELIMITER ',' CSV HEADER;
\copy skus(id, style_id, size, quantity) FROM './csv/skus.csv' DELIMITER ',' CSV HEADER;
\copy features(id, product_id, feature, value) FROM './csv/features.csv' DELIMITER ',' CSV HEADER;
\copy related(id, current_product_id, related_product_id) FROM './csv/related.csv' DELIMITER ',' CSV HEADER;