# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# db/seeds.rb

# Usuarios
User.create!([
  { email: 'alex@retromarket.com', username: 'alex01', password: 'testme' },
  { email: 'maria@retromarket.com', username: 'maria23', password: 'testme' },
  { email: 'jean@retromarket.com', username: 'jean05', password: 'testme' }
])

# Categorías
Category.create!([
  { name: 'Videojuegos' },
  { name: 'Informática' },
  { name: 'Ropa' },
  { name: 'Coches' },
  { name: 'Música' },
  { name: 'Electrónica' },
  { name: 'Libros' },
  { name: 'Móviles' },
  { name: 'Deportes' }
])

categories = {
  videogames: Category.find_or_create_by(name: 'Videojuegos'),
  computers: Category.find_or_create_by(name: 'Informática'),
  clothes: Category.find_or_create_by(name: 'Ropa'),
  cars: Category.find_or_create_by(name: 'Coches'),
  music: Category.find_or_create_by(name: 'Música'),
  electronic: Category.find_or_create_by(name: 'Electrónica'),
  books: Category.find_or_create_by(name: 'Libros'),
  mobile: Category.find_or_create_by(name: 'Móviles'),
  sports: Category.find_or_create_by(name: 'Deportes')
}

# Productos
Product.create!([
  { title: 'PS4 Fat', description: 'Ps4 en buen estado', price: 150, category: categories[:videogames] },
  { title: 'Nintendo Switch', description: 'Le falla el lector de tarjeta SD', price: 195, category: categories[:videogames] },
  { title: 'Nintendo 64 en buen estado', description: 'Con su caja, solo tiene algún pequeño arañazo', price: 190, category: categories[:videogames] },
  { title: 'Sega Megadrive', description: 'Funciona perfectamente, solo consola', price: 90, category: categories[:videogames] },
  { title: 'Driver 2 para ps1', description: 'Como nuevo en su caja y con instrucciones', price: 25, category: categories[:videogames] },
  { title: 'PS5 nueva sin lector', description: 'A estrenar, usada solo dos veces.', price: 650, category: categories[:videogames] },
  { title: 'Game Boy Color', description: 'Con su caja. Color morada transparente.', price: 150, category: categories[:videogames] },
  { title: 'Macbook Air', description: 'Le falla la batería', price: 250, category: categories[:computers] },
  { title: 'iMac 27" 2015', description: 'i5 con 8gb de ram y SSD', price: 90, category: categories[:computers] },
  { title: 'Ryzen 5950x', description: 'Sin estrenar precintado como nuevo', price: 590, category: categories[:computers] },
  { title: 'Nvidia 3090ti', description: 'Solo usada 3 meses la vendo porque no la uso', price: 1500, category: categories[:computers] },
  { title: '16GB Ram DDR4 3200mhz', description: 'Funciona perfectamente', price: 95, category: categories[:computers] },
  { title: 'Renault Clio 2009', description: '85000km, 95cv', price: 4500, category: categories[:cars] },
  { title: 'Seat Panda clásico', description: 'Tan solo 90000km, 75cv. Del año 1980', price: 5500, category: categories[:cars] },
  { title: 'Vinilo Michael Jackson Thriller', description: 'Como nuevo a estrenar', price: 45, category: categories[:music] },
  { title: 'Vinilo Queen', description: 'Ligeras marcas de uso de los años 80', price: 35, category: categories[:music] },
  { title: 'Televisión LG 48 pulgadas', description: 'Viene con smart TV funciona perfectamente', price: 350, category: categories[:electronic] },
  { title: 'Lector de libros Kindle 2010', description: 'Tiene marcas de uso pero funciona bien', price: 35, category: categories[:electronic] },
  { title: 'iPod touch', description: 'Como nuevo a estrenar con su caja', price: 175, category: categories[:electronic] },
  { title: 'Colección entera de Harry Potter', description: 'Todos los libros de la saga. Bien cuidados!', price: 65, category: categories[:books] },
  { title: 'El hobbit', description: 'Libro en buen estado', price: 15, category: categories[:books] },
  { title: 'iPhone 13', description: 'Funciona correctamente.', price: 400, category: categories[:mobile] },
  { title: 'Google Pixel 4', description: 'Le falla la batería', price: 100, category: categories[:mobile] },
  { title: 'Tabla de surf', description: 'Usada dos veces. Como nueva.', price: 125, category: categories[:sports] },
  { title: 'Raqueta de tenis profesional', description: 'Fabricada en fibra de carbono. Solo un par de arañazos', price: 135, category: categories[:sports] },
  { title: 'Skateboard', description: 'Como nuevo con las ruedas recién cambiadas', price: 75, category: categories[:sports] }
])
