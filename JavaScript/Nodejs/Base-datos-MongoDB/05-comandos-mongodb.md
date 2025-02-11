<img src="../../../00_img/MongoDB_Logo.svg" height="50" style="background-color: white; padding: 20"><br>

# Comandos de MongoDB

Un listado de comandos para interactuar con las bases de datos de [MongoDB](../../../GLOSARIO.md#mongodb). En Windows usaremos la consola de ***Windows PowerShell***.

```show databases```<br>
**Muestra las bases de datos** de nuestro sistema, por defecto aparecerán admin, config, local y test (nuestra *db* recién creada)

```show collections```<br>
**Muestra las colecciones** dentro de nuestra *db*

```db.collectionName.insertOne({ propiedad1: ‘valor1’, propiedad2: ‘valor2’ })```<br>
**Inserta un documento** en la colección especificada de nuestra *db*, si la colección no existe, la genera automáticamente

```db.collectionName.insertMany({ propiedad1: ‘valor1’, propiedad2: ‘valor2’ }, { propiedad1: ‘valor1’, propiedad2: ‘valor2’ })```<br>
**Inserta varios documentos** (separados por comas {...},{...}) en la colección especificada de nuestra *db*, si la colección no existe, la genera automáticamente

```db.collectionName.find()```<br>
**Busca todos los documentos** que hay en la colección especificada de nuestra *db* y los muestra en la consola

```db.collectionName.updateOne({ _id: ObjectId('idDelDocumento')}, { $set: {propiedadParaActualizar:'nuevoValor'}}```<br>
**Actualiza los campos especificados (mediante *id*) de un documento** y los reemplaza en la colección especificada

```db.collectionName.updateMany({ propiedadDocumentos }, { $set: {propiedadParaActualizar:'nuevoValor'}}```<br>
**Actualiza los campos especificados de varios documentos** (especificados mediante una **propiedad** que compartan los documentos a actualizar) y los reemplaza en la colección especificada

```db.collectionName.deleteOne({ _id: ObjectId('idDelDocumento')})```<br>
**Elimina un documento** (especificado mediante un ***id***) de la colección especificada

```db.collectionName.deleteMany({ propiedadDocumentos })```<br>
**Elimina varios documentos** (que comparten una **propiedad**) de la colección especificada

```db.collectionName.deleteMany({ })```<br>
**Elimina todos los documentos** de la colección especificada

```db.collectionname.drop()```<br>
**Elimina la colección** especificada de nuestra *db* 