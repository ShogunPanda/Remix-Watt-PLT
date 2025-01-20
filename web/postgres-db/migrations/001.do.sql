CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, image_url) VALUES
    ('Mechanical Keyboard', 'Cherry MX switches with RGB backlighting', 149.99, '/images/keyboard.jpg'),
    ('Ergonomic Mouse', 'Wireless with adjustable DPI', 79.99, '/images/mouse.jpg'),
    ('4K Monitor', '27-inch IPS display with HDR support', 399.99, '/images/monitor.jpg');
  