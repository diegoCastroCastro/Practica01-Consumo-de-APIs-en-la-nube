OBJETIVO ALCANZADO:

•	Conocer las arquitecturas y patrones arquitectónicos web para el diseño de aplicaciones web.
•	Interactuar con servicios web de plataformas de la nube.
•	Analizar la documentación de la API a consumir.

1.	Arquitectura web de la aplicación a desarrollar.
•	HTML: Contiene la parte de la interfaz para el usuario.
•	CSS: Mejora la visualización de la parte de presentación.
•	JavaScript: Lógica de programación.
	md5.js: protección de las claves.
	Script.js: Funciones que nos permiten consumir la API de Marvel.


2.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada). 

•	Usando llaves.
Todas las llamadas a la API de Marvel Comics deben pasar su clave pública a través de un parámetro "apikey".
Las aplicaciones del lado del cliente y del lado del servidor tienen reglas de autenticación ligeramente diferentes para acceder a la API. Lea a continuación el método apropiado para su aplicación.
¡Mantenga su clave privada en privado! No almacene su clave privada en códigos o repositorios disponibles públicamente que sean accesibles al público. No lo dejes accidentalmente en la barra.

•	Autenticación para aplicaciones del lado del cliente.
Las solicitudes de aplicaciones del lado del cliente (basadas en navegador) deben originarse en un sitio web preautorizado o una URL de extensión del navegador.
Puede agregar o editar sus dominios autorizados en el panel de su cuenta API. Puede utilizar el comodín "*" para indicar subdominios o rutas. Por ejemplo:
marvel.com : autorizará las solicitudes de Marvel.com pero no los subdominios de Marvel.com
developer.marvel.com : autorizará las solicitudes de developer.marvel.com

* .marvel.com : autorizará las solicitudes de cualquier subdominio de Marvel.com, así como de Marvel.com
* .marvel.com / apigateway : autorizará las solicitudes de la ruta apigateway en cualquier subdominio de Marvel.com, así como en Marvel.com
•	Autenticación para aplicaciones del lado del servidor
Las aplicaciones del lado del servidor deben pasar dos parámetros además del parámetro apikey:
ts : una marca de tiempo (u otra cadena larga que puede cambiar solicitud por solicitud)
hash : un resumen md5 del parámetro ts, su clave privada y su clave pública (por ejemplo, md5 (ts + privateKey + publicKey)

![claves](https://user-images.githubusercontent.com/49213231/115035332-19c9c700-9e92-11eb-9b74-83f8f74347cc.png)

![calves2](https://user-images.githubusercontent.com/49213231/115035560-4f6eb000-9e92-11eb-8d35-f09c0d6abd14.png)

RESULTADO(S) OBTENIDO(S):

Se obtuvo la siguiente pagina HTML para el consumo de la API de Marvel.

![1](https://user-images.githubusercontent.com/49213231/115035151-e4bd7480-9e91-11eb-9f59-744a3116d7a4.png)

CONCLUSIONES:

Con el desarrollo de esta practica se comprendió mejor la lógica de las APIs, con el uso de estas herramientas nos permite la reutilización de código lo que logramos reducir el tiempo de desarrollo. La API actúa como un intermediario virtual conectando diferentes partes de una plataforma de software y aprovechar la infraestructura que existe en otra plataforma para que funcione perfectamente en nuestra página, en este caso para que toda la información llegue a nuestra pagina HTML se nos asignó claves privadas y publicas como un mecanismo de seguridad para poder agregar al código javascript que contiene la lógica y así poder llegar a obtener el beneficio de la API.

RECOMENDACIONES:

Para consumir correctamente cualquier API desde HTML es recomendable revisar la documentación respectiva para poder guiarnos de mejor manera y evitar errores en el código.



















