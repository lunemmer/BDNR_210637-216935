# BDNR_210637-216935

### Obligatorio 2 | BDNR 210637-216935

## Instalación

A continuación se detalla una breve descripción de como instalar y ejecutar los servicios de 'Telemetría de Vehículos' y 'Registro y perfil de usuarios' y como así también la aplicación web que consume ambos servicios.

### Pre-requisitos

Se deberá tener instalado Docker previamente.

[Docker](https://docs.docker.com/get-docker/)

TODO: Crear un container de docker (TODO VER DE PONER UN DOCKER COMPOSE Y VA A SER MCUHO MAS FACIL)
Para Mongo:

1. Abrir docker
2. Correr `docker pull mongo`
3. Correr `docker run -d --name bdnr_mongo -p 4000:27017 -e MONGO_INITDB_ROOT_USERNAME=bdnr -e MONGO_INITDB_ROOT_PASSWORD=password mongo`
4. Para chequear que el container esta ejecutandose correctamente, correr: `docker container ls`

Para correr la instancia de MongoDB:

1. Correr `docker exec -it bdnr_mongo bash`
2. Acceder a la instancia: `mongo --username bdnr --password password`
3. Correr `show dbs`.

Referencia [https://medium.com/@szpytfire/setting-up-mongodb-within-a-docker-container-for-local-development-327e32a2b68d](Setting up MongoDB within a Docker container for local development)

Para Cassandra:

1. Abrir docker
2. Correr `docker pull cassandra`
3. Correr `docker run -d --name bdnr_cassandra -p 9042:9042 cassandra`

Para correr la instancia de Cassandra:

1. Correr `docker exec -it bdnr_cassandra bash`
2. Correr: `cqlsh`
3. Crear la tabla de Telemetría

````
  CREATE KEYSPACE bdnr_cassandra WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

  USE bdnr_cassandra;

  CREATE TABLE IF NOT EXISTS measurement(
    datetime timestamp,
    measurement_id UUID,
    vehicle_id UUID,
    temperature double,
    pressure double,
    voltage double,
    velocity int,
    electromagnetic_waves double,
    vibration double,
    PRIMARY KEY (vehicle_id, datetime, measurement_id)
  )
  WITH CLUSTERING ORDER BY(datetime DESC);
  ```




INSERT INTO measurement (
  datetime,
  vehicle_id,
  measurement_id
  ) VALUES (
    '2013-04-03 07:04:00',
    8757a5c3-1844-4448-a130-88abbb7550d4,
    8757a5c3-1844-4448-a130-88abbb755012
  );

  INSERT INTO measurement (
  datetime,
  vehicle_id,
  measurement_id
  ) VALUES (
    '2012-04-10 10:04:00',
    8757a5c3-1844-4448-a130-88abbb7550d4,
    8757a5c3-1844-4448-a130-88abbb755012
  );

INSERT INTO measurement (
  datetime,
  vehicle_id,
  measurement_id
  ) VALUES (
    '2021-07-10 06:04:00',
    8757a5c3-1844-4448-a130-88abbb7550d4,
    8757a5c3-1844-4448-a130-88abbb755012
  );

  INSERT INTO measurement (
  datetime,
  vehicle_id,
  measurement_id
  ) VALUES (
    '2021-07-10 08:04:00',
    8757a5c3-1844-4448-a130-88abbb7550d4,
    8757a5c3-1844-4448-a130-88abbb755012
  );

INSERT INTO measurement (
  datetime,
  vehicle_id,
  measurement_id
  ) VALUES (
    '2021-07-10 08:03:00',
    8757a5c3-1844-4448-a130-88abbb7550d4,
    8757a5c3-1844-4448-a130-88abbb755012
  );

Referencia [https://medium.com/@rohitanil/cassandra-docker-for-dummies-by-a-dummy-ee6c10672553](Cassandra + Docker For Dummies By a Dummy)

### Inicialización

#### Servicio Registro y Perfil de usuarios

Pasos:
Dentro de la carpeta `UserRegistration`:

1. Llenar el archivo de configuración `.env` con:

- SERVER_PORT=3001
- DB_PORT=4000
- MONGO_ROOT_USERNAME=bdnr
- MONGO_ROOT_PASSWORD=password

1. Correr `npm install`
2. Correr `npm start`
3. Esperar a que informe: `Server started on port 3001`

#### Aplicación web

Pasos:
Dentro de la carpeta `Frontend`

1. Llenar el archivo de configuración `.env` con:

- REACT_APP_USERS_API_URL=http://localhost:3001

2. Correr `npm install`
3. Correr `npm start`

### Puertos y conexiones

Los servicios se ejecutarán en los siguientes puertos:

- Aplicación web: [localhost:3000](localhost:3000)
- Servicio Registro y Perfíl de Usuarios: [localhost:3001](localhost:3001)
- Servicio de Telemetría de Vehículos: [localhost:3002](localhost:3002)
````
