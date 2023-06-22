**LIBRERIA TSDX**

https://tsdx.io/

## Tabla de contenido

- [Aportaciones](#aportaciones)
- [Instrucciones](#instrucciones)
- [Posibles Soluciones a errores.](#posibles-soluciones-a-errores)


# Aportaciones

Plantilla que soluciona los errores iniciales de configuracion de tsdx.

  - Se han actualizado las dependencias a versiones compatibles 
  - Cambios en la configuración del tsconfig.
  - Se ha añadido el archivo tsdx.config.js donde se determita que el paquete puede recibir modulos de css.
  - se han actualizado las dependencias del example.
  - Se ha añadido la carpeta static en la raiz, donde deben ir todos los assets que necesite la libreria.
  - Se ha añadido el archivo typing.ts que configura los archivos css para que puedan ser exportados.
  
# Instrucciones 

1. Realiza ````npm i``` tanto en la carpeta example como en la raiz del proyecto
2. Para definir componentes o hooks..., en el src crear la carpetas componentes hooks... e importar todos los componentes o funciones que se desee.
3. En el index.jsx/tsx hay qe importar todo lo que se quiera poner a disposicion por parte de la libreria y despues exportarlo 
4. En la raiz del proyecto, una vez instalado ejecutamos el script ````npm start```
   
   - Este compando empieza a compilar los modulos en caso de ser compilado correctamente, se quedara observando cambios.

5. Una vez compilandose la biblioteca situese en la carpeta example y ejecuta el script ```npm start``` esto levantara su proyecto example donde se podran usar los componentes definidos en el src del proyecto.
6. Si todo funciona correctamente levantara el proyecto de ejemplo para provar lo que exporta la libreria en este puerto http://localhost:1234 ✨ 


# Posibles Soluciones a errores.

Error al importar modulos css.

  -> **Solución** : https://github.com/jaredpalmer/tsdx/issues/186

Si experimentas cualquier tipo de error o no detectas cambios a la hora de compilar el ejemplo, **elimina la carpeta .parcel-cache y la carpeta dist** y vuelve a ejecutar el comando npm start.

Manten actualizado las versiones de los paquetes que se esten actualizando.

Con la instalacion a veces no reconoce jsx, si se clona de nuevo el proyecto deberia solucionarse el error.

Cualquier posible error con tema de tsdx lo mejor es mirar las issues.

  -> https://github.com/jaredpalmer/tsdx/issues

Cualquier posible error con tema de parcel

  -> https://github.com/parcel-bundler/parcel/issues

Cualquier posible error con babel.

  -> https://github.com/babel/babel/issues