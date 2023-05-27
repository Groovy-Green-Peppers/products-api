const dbInstance = require('../../utils/dbInstance');

const getProducts = async () => {
  const response = 'SELECT * FROM products LIMIT 5';
  return dbInstance.query(response);
};

const getProductStyle = async (id) => {
  const response = `
  SELECT
    p.id AS product_id,
    json_agg(results) AS results
  FROM (
    SELECT
      s.id AS style_id, s.name, s.sale_price, s.original_price, s.default_style AS "default?",
      json_agg(json_build_object('thumbnail_url', ph.thumbnail_url, 'url', ph.url)) AS photos,
      json_object_agg(sk.id, json_build_object('quantity', sk.quantity, 'size', sk.size)) AS skus
  FROM
    products p
  JOIN styles s ON p.id = s.product_id
  JOIN photos ph ON s.id = ph.style_id
  JOIN skus sk ON s.id = sk.style_id
  WHERE
    p.id = $1
  GROUP BY
    p.id, s.id, s.name, s.sale_price, s.original_price, s.default_style
  )
  AS results
  JOIN products p ON p.id = $1
  GROUP BY p.id;`;

  const results = await dbInstance.query(response, [id]);
  return results.rows[0];
};

const getProduct = async (id) => {
  const response = `
  SELECT
    p.id, p.name, p.slogan, p.description, p.category, p.default_price,
    json_agg(json_build_object('feature', f.feature, 'value', f.value))
  AS features
  FROM
    products p
  JOIN features f ON p.id = f.product_id
  WHERE
    p.id = $1
  GROUP BY
    p.id`;

  const results = await dbInstance.query(response, [id]);
  return results.rows[0];
};

const getProductRelated = async (id) => {
  const response = `
  SELECT
   rp.related_product_id
  FROM
    related rp
  WHERE
    rp.current_product_id = $1`;
  const values = await dbInstance.query(response, [id]);
  return values.rows.map(({ related_product_id }) => related_product_id);
};

module.exports = {
  getProducts,
  getProduct,
  getProductStyle,
  getProductRelated,
};
