DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS donations;
DROP TABLE IF EXISTS food_types;
DROP TABLE IF EXISTS donations_foodtTypes;

CREATE TABLE IF NOT EXISTS users (email TEXT UNIQUE, password TEXT, name TEXT, company_name TEXT, street TEXT, city TEXT, state TEXT, zip_code TEXT, phone_number TEXT, type TEXT);
CREATE TABLE IF NOT EXISTS donations (users_id INTEGER, pickup_time TEXT DEFAULT NULL, feeds_quantity INTEGER, fits_car INTEGER, additional_info TEXT, processing TEXT DEFAULT available);
CREATE TABLE IF NOT EXISTS food_types (type TEXT);
CREATE TABLE IF NOT EXISTS donations_foodtTypes (donations_id INTEGER, food_types_id INTEGER);

INSERT INTO users VALUES ("test@google.com", "123456", "test", "test_co", "123 that_street", "that_city", "California", "94206", "555-555-5555", "recipient");
INSERT INTO food_types VALUES ("Dairy");
INSERT INTO food_types VALUES ("Meat/Other Protein");
INSERT INTO food_types VALUES ("Produce");
INSERT INTO food_types VALUES ("Pre-prepared");
INSERT INTO food_types VALUES ("Other");