# App Auto

Este proyecto es una aplicación web construida con **Ruby on Rails**, utilizando **SQL Server** como base de datos y diseñada con **TailwindCSS** para su interfaz de usuario. El proyecto está completamente contenerizado con **Docker**, empleando dos contenedores: uno para Rails y otro para SQL Server.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:
- [Docker](https://www.docker.com/) para gestionar los contenedores.
- [Git](https://git-scm.com/) para clonar el repositorio.
- Un navegador web para acceder a la aplicación.

## Instrucciones para levantar el proyecto

1. **Clona el repositorio**

   Comienza clonando el repositorio desde GitHub en tu máquina local y entra al directorio del proyecto:

   ```bash
   git clone https://github.com/tu-usuario/app_auto.git
   cd app_auto

Crea y ejecuta el contenedor de SQL Server

Ejecuta el siguiente comando para crear un contenedor con SQL Server:

bash
Copiar código
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong@Passw0rd" \
-p 1433:1433 --name sqlserver2019 -d mcr.microsoft.com/mssql/server:2019-latest
Este comando configurará un contenedor que:

Acepta los términos de licencia de SQL Server.
Define una contraseña para el usuario SA.
Expone el puerto 1433 para permitir conexiones externas.
Nota: Cambia YourStrong@Passw0rd por una contraseña segura.

Construye y ejecuta el contenedor de Rails

Primero, construye la imagen Docker para la aplicación Rails:

bash
Copiar código
docker build -t rubybasico:v1 .
Luego, inicia el contenedor con el siguiente comando:

bash
Copiar código
docker run -it -v $(pwd):/usr/src/app -p 3000:3000 --name app_auto --link sqlserver2019 rubybasico:v1 bash
Este comando vincula el contenedor de Rails al directorio actual, expone el puerto 3000 para acceder a la aplicación y conecta este contenedor al de SQL Server.

Instala las gemas y dependencias

Dentro del contenedor de Rails, ejecuta:

bash
Copiar código
bundle install
Configura TailwindCSS

Asegúrate de instalar las dependencias necesarias para TailwindCSS dentro del contenedor:

bash
Copiar código
yarn install
Configura la base de datos

Edita el archivo config/database.yml para que se conecte al contenedor de SQL Server. Un ejemplo básico sería:

yaml
Copiar código
default: &default
  adapter: sqlserver
  host: sqlserver2019
  username: SA
  password: YourStrong@Passw0rd
  database: app_auto_development

development:
  <<: *default
Luego, crea y migra la base de datos ejecutando:

bash
Copiar código
rails db:create
rails db:migrate
Inicia el servidor de Rails

Finalmente, inicia el servidor dentro del contenedor:

bash
Copiar código
rails s -b 0.0.0.0
La aplicación estará disponible en tu navegador en la URL http://localhost:3000.

Reinicia los contenedores si es necesario

Para reiniciar el contenedor de SQL Server:

bash
Copiar código
docker restart sqlserver2019
Para reiniciar el contenedor de Rails:

bash
Copiar código
docker restart app_auto
Información adicional

Si necesitas modificar el diseño de la aplicación, asegúrate de trabajar en el directorio local y reiniciar los contenedores según sea necesario.

Estructura del proyecto
El proyecto sigue la estructura estándar de Rails:

app/: Contiene los controladores, modelos y vistas.
config/: Configuraciones del entorno y la base de datos.
db/: Migraciones y esquemas de la base de datos.
Créditos
Este proyecto fue desarrollado para fines educativos y puede ser modificado libremente.

Licencia
El proyecto está bajo la Licencia MIT.

¡Disfruta trabajando con App Auto!

markdown
Copiar código

Este archivo **contiene todo en un solo bloque** con pasos continuados, listo para copiar y pegar.
