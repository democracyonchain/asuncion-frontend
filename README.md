
<div align="center">
  <a href="https://single-spa.js.org/" target="_blank">
    <img src="https://single-spa.js.org/img/single-spa-mark-magenta.svg" width="150" alt="Nest Logo" />
  </a>
</div>
<div align="center">  
  <a href=""https://single-spa.js.org/" target="_blank">
    <img src="https://img.shields.io/badge/singlespa-6.0.0-pink" alt="single-spa">
  </a>
</div>

### English Version

# Frontend Project for Blockchain Voting System  
**STATUS**: ACTIVE

### Table of Contents  
1. [Actors](#actors)  
2. [Project Phases](#project-phases)  
3. [Functional Aspects](#functional-aspects)  
4. [Technical Aspects](#technical-aspects)  
5. [Installation Procedure](#installation-procedure)  
6. [Other Documents](#other-documents)

## Actors

* **David Tacuri**
* **Juan Guanolema**
* **Luis Nuñez**

## Project Phases
- [X] Planning
- [X] Implementation
- [ ] Production

### Objective:

The Blockchain voting system aims to integrate a ballot-based vote counting system (manual scrutiny system) with blockchain.

### Architecture

- Microfrontend

The internal file organization in each microfrontend follows a Clean Architecture approach and uses design patterns recommended by React.js, such as Flux, HOC, Children, dispatchEvent, among others, which are described in detail later.

### Tools

Programming language: JavaScript / TypeScript

- Framework: Single-spa with React.js

### Target Audience:

Developers

## Technical Aspects

### Prerequisites

*   Node.js: 18.13.0 LTS
*   Npm: 8.19.3
*   Yarn
*   Lerna
*   Single-spa 4.1.3

1. Install Lerna [Lerna](https://lerna.js.org/)
```plaintext
$ yarn global add lerna
```

2. Install the single-spa framework [https://single-spa.js.org/](https://single-spa.js.org/)
```plaintext
$ yarn global add create-single-spa
```

### Fix Unable to Run Yarn in Windows Terminal – PowerShell
If you encounter problems running Yarn on a Windows operating system, open PowerShell as an administrator and run:
```plaintext
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

### Clone the project
```plaintext
$ git clone https://github.com/democracyonchain/asuncion-frontend.git
```

### Install project dependencies
```plaintext
$ yarn bootstrap
```

### Naming Conventions and Standards for Files and Components

- ***PascalCase for components***  Example: IngresosComponent
- ***CamelCase for non-component files***  Example: bscUtility
- ***Folders in plural:*** To group related files
- ***barrel*** Create an index file in each folder. Example: In `Component`, create an `Index.js` file
- ***HOC design pattern*** These components should start with `with`, for example: `withForm`

### Create a new application (Example: Maintenance App)

1.- Create

```plaintext
$ npx create-single-spa
```

2.- Answer the following questions:

In the following example, it corresponds to the Maintenance submodule

Directory for new project? A: packages/maintenance  
What type to generate? A: single-spa application / parcel  
Which framework would you like to use? A: react  
Which package manager would you like to use? A: yarn  
Will this project use Typescript? | y  
Organization name | bsc  
Project name | maintenance  

3.- Delete unnecessary files

Ignore the following error. It is caused because the assistant creates a separate repository, which is not necessary because we are using monorepo.

The following files and folders are not needed because we are using a monorepo with Lerna:

They should be deleted:
*   .husky  
*   .prettierignore  
*   .gitignore  
*   .eslintrc  

You should also delete all dependencies.

4.- Configure the package.json file of the new maintenance submodule  
...change in line 4

```plaintext
"scripts": {
-    "start": "webpack serve",
+    "start": "webpack serve --port 9001",
```

5.- Configure the packages/app-root/src/index.ejs file

---add the following line
```plaintext
<% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@bsc/root-config": "//localhost:9000/bsc-root-config.js",++     
      }
    }
  </script>
<% } %>
```

6.- Configure the packages/app-root/src/bsc-root-config.ts file

7.- Delete the git repository from the new submodule

```plaintext
$ rm -rf  packages/header/.git
```

## Start the application
```plaintext
$ yarn bootstrap
```

# Deploy to the server --DEV

## Steps to deploy a Microfrontend:
- Test and build the application code (build, test, lint, store artifacts)
- Upload static files to the server
- Update the paths of the new JavaScript libraries (import map)

###  Build the application code

It is recommended to delete the compiled code during development and testing.

- Delete dependencies and download them again
```plaintext
$ yarn clean
```

- Build the code
```plaintext
$ yarn build
```

### Upload static files to the server

To automate the uploading of static files to the GitLab repository, it is necessary to store credentials on the local computer.

The following commands can be used in a Linux environment.

```plaintext
# Cache for one hour
git config --global credential.helper "cache --timeout=3600"

# Cache for one day
git config --global credential.helper "cache --timeout=86400"

# Cache for one week
git config --global credential.helper "cache --timeout=604800"
```

#### Command to upload static files to GitLab

```plaintext
$ yarn deploy:dev
$ yarn deploy:test
$ yarn deploy:prod
```

#### Branches used to deploy according to the environment

- static_dev  
- static_test  
- static_prod  

### Update the paths of the new JavaScript libraries

There are two files where these libraries need to be updated in the root of the application according to the environment:

- importmap.stg.json (dev and test)
- importmap.prod.json (production)

### Spanish Version
# Proyecto Front-end para Sistema Integral Blockchain voting System
**ESTADO**: ACTIVO
### Tabla de contenidos
1. [Actores](#actores)
2. [Fases del proyecto](#fases)
3. [Aspectos funcionales](#aspectos-funcionales)
4. [Aspectos técnicos](#aspectos-técnicos)
5. [Procedimiento de instalación](#procedimiento-de-instalación)
6. [Otros documentos](#otros-documentos)

## Actores

* **David Tacuri**
* **Juan Guanolema**
* **Luis Nuñez**

## Fases
- [X] Planificación
- [X] Implementación
- [ ] Producción

### Objetivo:

Blockchain voting system tiene como objetivo integrar un sistema de conteo de votos basado en papeletas (sistema de escrutinios manual) con la blockchain.
### Arquitectura

- Microfrontend


La organización interna de archivos en cada microfrontend tiene un enfoque de arquitectura limpia (Clean Architecture) y utilizando patrones de diseño recomendados por react js como es Flux , HOC, Children, dispatchEvent, entre otros que más adelante se describe a detalle.

### Herramientas

Lenguaje de programación: Javascript / typescript

- Framework: Single-spa con React js

### A quien va dirigido:

Desarrolladores

## Aspectos Técnicos


### Pre-requisitos

*   Node js: 18.13.0 LTS
*   Npm: 8.19.3
*   yarn
*   Lerna
*   single-spa 4.1.3


1. Instalar lerna [Lerna](https://lerna.js.org/)

```plaintext
$ yarn global add lerna
```

2. Instalar spa-simple framework [https://single-spa.js.org/](https://single-spa.js.org/)

```plaintext
$ yarn global add create-single-spa
```

### Fix Unable to Run Yarn in Windows Terminal – PowerShell
Si tiene problemas para ejecutar yarn en sistema operativo Windows, abra PowerShell como administrador y ejecute
"Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted"

### Clonar proyecto

```plaintext
$ git clone https://github.com/democracyonchain/asuncion-frontend.git

```
### Instalar las dependencias del proyecto

```plaintext
$ yarn bootstrap

```

### Convenciones y estándares para nombrar archivos y componentes

- ***PascalCase para componentes***  Ejemplo: IngresosComponent
- ***CamelCase para archivos no componentes***  Ejemplo: bscUtility
- ***Carpetas en plural:*** Para agrupar archivos relacionados
- ***barrel*** crear un achivo index en cada carpeta ejemplo en Component contiene un archivo Index.js
- ***Patrón de diseño HOC*** estos componente deben iniciar con with ejemplo: -withForm

### Crear una nueva aplicación (Ejemplo: App de mantenimientos)

1.- Crear

```plaintext
$ npx create-single-spa
```
2.- Contestar la siguientes preguntas:

En el siguiente ejemplo corresponde al sub-modulo de mantenimientos

Directorio para nuevo proyecto? R. packages/mantenimientos
Seleccionar tipo a generar? R. single-spa application / parcel
¿Qué marco quieres usar? R. react
¿Qué administrador de paquetes quieres usar? R. yarn
¿Este proyecto usará Typescript? | y
Nombre de la organización | bsc
Nombre del proyecto | mantenimientos

3.- Borrar archivos

Ignorar el siguiente error , es causado por que el asiste crea un repositorio independiente y no es necesario por que se esta utilizando monorepo

Los siguientes y carpetas archivos no son necesarios porque estamos utilizando monorepo con lerna.

Deben ser borrados:

*   .husky
*   .prettierignore
*   .gitignore
*   .eslintrc

Tambien se debe borrar todas las dependencias

4.- Configurar archivo package.json del nuevo sub-moduloo mantenimientos
... cambio en linea 4

```plaintext
"scripts": {
-    "start": "webpack serve",
+    "start": "webpack serve --port 9001",
```


5.- Configurar archivo packages/app-root/src/index.ejs

---agregar siguiente línea
```plaintext
<% if (isLocal) { %>
  <script type="systemjs-importmap">
    {
      "imports": {
        "@bsc/root-config": "//localhost:9000/bsc-root-config.js",++     
      }
    }
  </script>
  <% } %>
  ```

6.- Configurar el archivo: packages/app-root/src/bsc-root-config.ts



7.- Borrar repositorio git del muevo sub-modulo

```plaintext
$ rm -rf  packages/header/.git
```

## Iniciar la aplicación


 ```plaintext
$ yarn bootstrap
```

# Publicar al servidor --DEV

## Pasos para desplegar un Microfront-End:
- Probar y compilar el código de la aplicación (build , test, lint, store artifacts)
- Subir al servidor los archivos estáticos
- Actualizar la rutas de las nuevas librerías JavaScript ( import map)

###  Compilar el código de la aplicación

Es recomendable borrar el código compilado durante el desarrollo y las pruebas.

- Borrar las dependencias y descargar nuevamente

```plaintext
$ yarn clean
```

- Compilar el ccódigo

```plaintext
$ yarn build
```
### Subir al servidor los archivos estáticos

Para automatizar la carga de los archivos estáticos al repositorio gitlab se requiere almacenar las credenciales en la computadora local.

Los siguientes comandos se puede utilizar en un ambiente de Linux.

```plaintext
# Cache por una hora
git config --global credential.helper "cache --timeout=3600"

# Cache por un dia
git config --global credential.helper "cache --timeout=86400"

# Cache por una semana
git config --global credential.helper "cache --timeout=604800"
```
#### Comando la subir los archivos estáticos al Gitlab

```plaintext
$ yarn deploy:dev
$ yarn deploy:test
$ yarn deploy:prod

```
#### Ramas utilizadas para desplegar de acuerdo al entorno

- static_dev
- static_test
- static_prod

### Actualizar la rutas de las nuevas librerías JavaScript

Existen dos archivos donde se debe actualizar estas librerías en la raíz de la aplicación de acuerdo al entorno

- importmap.stg.json (dev y test)
- importmap.prod.json (producción)

