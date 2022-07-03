# BDNR_210637-216935

Obligatorio II - Base de datos no relacional (210637 | 216935)

## Instalación

A continuación se detalla una breve descripción de como instalar y ejecutar los servicios de 'Telemetría de Vehículos' y 'Registro y perfil de usuarios' y como así también la aplicación web que consume ambos servicios.

## Pre-requisitos

Se deberá tener instalado [Docker](https://docs.docker.com/get-docker/) previamente.

### Sistema "Registro y Perfil de Usuarios"

1. Abrir docker
2. Correr `docker pull mongo`
3. Correr `docker run -d --name bdnr_mongo -p 4000:27017 -e MONGO_INITDB_ROOT_USERNAME=bdnr -e MONGO_INITDB_ROOT_PASSWORD=password mongo`
4. Para ejecutar la instancia de MongoDB, correr `docker exec -it bdnr_mongo bash`
5. Ir a `root/UserRegistration` y crear un archivo `.env` con las siguientes envs:

```
SERVER_PORT=3001
DB_PORT=4000
MONGO_ROOT_USERNAME=bdnr
MONGO_ROOT_PASSWORD=password
```

(OPCIONAL) En caso de querer acceder a la instancia:

1. Luego de correr el paso 4, ejecutar `mongo --username bdnr --password password`
2. Correr `show dbs`
3. Correr `use test`
4. Correr `show collections` (Chequear que aparece users luego de haber corrido el sistema).
5. EJEMPLO: Correr `db.users.find()` para ver todos los usuarios que hay en sistema

### Sistema "Telemetría de Vehículos"

1. Abrir docker
2. Correr `docker pull cassandra`
3. Correr `docker run -d --name bdnr_cassandra -p 9042:9042 cassandra`
4. Correr `docker exec -it bdnr_cassandra bash`
5. Correr: `cqlsh`
6. Crear la tabla de Telemetría:

```
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

7. Ir a `root/VehicleTelemetry` y crear un archivo `.env` con las siguientes envs:

```
SERVER_PORT=3002
DB_PORT=9042
CASSANDRA_KEYSPACE=bdnr_cassandra
CASSANDRA_USERNAME=bdnr
CASSANDRA_PASSWORD=password
```

### Aplicación Web (Frontend)

7. Ir a `root/Frontend` y crear un archivo `.env` con las siguientes envs:

```
REACT_APP_USERS_API_URL=http://localhost:3001
REACT_APP_TELEMETRY_API_URL=http://localhost:3002
```

## Inicialización

### Sistema "Registro y Perfil de Usuarios"

1. Correr `npm install`
2. Correr `npm start`
3. Esperar a que imprima: `Server started on port 3001`

### Sistema "Telemetría de Vehículos"

1. Correr `npm install`
2. Correr `npm start`
3. Esperar a que imprima: `Server started on port 3002`

#### Aplicación web

1. Correr `npm install`
2. Correr `npm start`
3. Esperar a que imprima `Webpack compiled successfully`

### Información extra:

#### Puertos y conexiones

Los servicios se ejecutarán en los siguientes puertos:

- Aplicación web: [http://localhost:3000](http://localhost:3000)
- Servicio Registro y Perfíl de Usuarios: [http://localhost:3001](http://localhost:3001)
- Servicio de Telemetría de Vehículos: [http://localhost:3002](lhttp://localhost:3002)

#### Postman

En la carpeta de cada servicio, se encuentran las respectivas colecciones de Postman.
