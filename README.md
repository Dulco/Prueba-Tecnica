
Pasos para crear o editar un despliegue en OCI.

1. Iniciar sesión en OCI.
2. Buscar Gateways en la barra de búsqueda y seleccionamos "Gateways" en la sección de servicios.
3. Seleccionamos nuestro Gateway correspondiente a la privacidad de la documentación (Publica/Privada)
4. En el menú lateral inferior izquierdo damos click en "Deployments"
5. Buscamos el deployment con el siguiente nombre:

    **CORES_REST_B2B_VALORES**

    Y damos click a los 3 puntos y en editar. En caso de no encontrar un despliegue asociado, clickeamos "Create deploymeny". Dónde:
        "Name": **CORES_REST_B2B_VALORES**
        
        "Path": **/rest/valores/b2b/cores** 

6. Una vez en esta pestaña de Edit deployment o Create deployment, deberemos seleccionar la opción:
    
    **Upload an existing deployment API**

Que es la opción que nos permitirá subir nuestro archivo JSON con la especificación api de nuestro despligue. 

7. Una vez seleccionado el archivo, vamos al paso 2 "Review" en dónde se encontrarán las rutas con sus respectivos Métodos, tipo de backend, header transformations etc.

8. Revisamos que todo esté bien y guardamos cambios o creamos según sea el caso. 
