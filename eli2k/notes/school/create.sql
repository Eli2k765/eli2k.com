CREATE TABLE EMPLOYEE (
  employee_id INTEGER PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  hire_date DATE,
  job_title VARCHAR(30),
  shop_id INTEGER
);

CREATE TABLE COFFEE_SHOP (
  shop_id INTEGER PRIMARY KEY,
  shop_name VARCHAR(50),
  city VARCHAR(50),
  state CHAR(2),
  supplier_id INTEGER
);

CREATE TABLE COFFEE (
  coffee_id INTEGER PRIMARY KEY,
  coffee_name VARCHAR(30),
  price_per_pound NUMERIC(5,2),
  shop_id INTEGER,
  supplier_id INTEGER
);

CREATE TABLE SUPPLIER (
  supplier_id INTEGER PRIMARY KEY,
  company_name VARCHAR(50),
  country VARCHAR(30),
  sales_contact_name VARCHAR(60),
  email VARCHAR(50) NOT NULL
);

ALTER TABLE EMPLOYEE
ADD CONSTRAINT fk_employee_shop
FOREIGN KEY (shop_id)
REFERENCES COFFEE_SHOP(shop_id);

ALTER TABLE COFFEE
ADD CONSTRAINT fk_coffee_shop
FOREIGN KEY (shop_id)
REFERENCES COFFEE_SHOP(shop_id);

ALTER TABLE COFFEE
ADD CONSTRAINT fk_coffee_supplier
FOREIGN KEY (supplier_id)
REFERENCES SUPPLIER(supplier_id);