# App Auto

This project is a web application built with **Ruby on Rails**, using **SQL Server** as the database, and designed with **TailwindCSS** for its user interface. The project is fully containerized with **Docker**, using two containers: one for Rails and another for SQL Server.

## Requirements

Before you begin, make sure you have the following programs installed on your system:

- [Docker](https://www.docker.com/) to manage the containers.
- [Git](https://git-scm.com/) to clone the repository.
- A web browser to access the application.

## Instructions to set up the project

1. **Clone the repository**

   Clone the repository from GitHub to your local machine and navigate to the project directory:

   ```bash
   git clone https://github.com/your-username/app_auto.git
   cd app_auto
   ```

2. **Create and run the SQL Server container**

   Run the following command to create a container with SQL Server:

   ```bash
   docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong@Passw0rd" \
   -p 1433:1433 --name sqlserver2019 -d mcr.microsoft.com/mssql/server:2019-latest
   ```

   This command will:
   - Accept the SQL Server license terms.
   - Set a password for the SA user.
   - Expose port 1433 to allow external connections.

   Note: Replace `YourStrong@Passw0rd` with a secure password.

3. **Build and run the Rails container**

   First, build the Docker image for the Rails application:

   ```bash
   docker build -t rubybasico:v1 .
   ```

   Then, start the container with the following command:

   ```bash
   docker run -it -v $(pwd):/usr/src/app -p 3000:3000 --name app_auto --link sqlserver2019 rubybasico:v1 bash
   ```

   This command:
   - Mounts the current directory to the container's `/usr/src/app` directory.
   - Exposes port 3000 to access the application.
   - Connects the Rails container to the SQL Server container.

4. **Install gems and dependencies**

   Inside the Rails container, run:

   ```bash
   bundle install
   ```

5. **Configure TailwindCSS**

   Ensure you install the necessary dependencies for TailwindCSS inside the container:

   ```bash
   yarn install
   ```

6. **Configure the database**

   Edit the `config/database.yml` file to connect to the SQL Server container. A basic example would be:

   ```yaml
   default: &default
     adapter: sqlserver
     host: sqlserver2019
     username: SA
     password: YourStrong@Passw0rd
     database: app_auto_development

   development:
     <<: *default
   ```

   Then, create and migrate the database:

   ```bash
   rails db:create
   rails db:migrate
   ```

7. **Start the Rails server**

   Finally, start the server inside the container:

   ```bash
   rails s -b 0.0.0.0
   ```

   The application will be available in your browser at `http://localhost:3000`.

8. **Restart the containers if necessary**

   To restart the SQL Server container:

   ```bash
   docker restart sqlserver2019
   ```

   To restart the Rails container:

   ```bash
   docker restart app_auto
   ```

## Additional Information

If you need to modify the application's design, ensure you work in the local directory and restart the containers as needed.

### Project Structure

The project follows the standard Rails structure:

- `app/`: Contains the controllers, models, and views.
- `config/`: Configurations for the environment and database.
- `db/`: Migrations and database schemas.

### Credits

This project was developed for educational purposes and can be freely modified.

### License

The project is licensed under the MIT License.

Enjoy working with App Auto!
