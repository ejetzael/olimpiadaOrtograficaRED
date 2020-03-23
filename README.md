
# Olimpiada Nacional de Ortografía RED Larousse

Proyecto realizado para RED Larousse. Evaluación en línea de estudiantes representados por un coach (profesor) que con un usuario/password deben elegir de 3 posibles respuestas la correcta. En caso de empates, el tiempo de respuesta es el valor que desempata. todo se guarga y consulta en firebase. La conexión actua igualmente es mediante Fb.

## Descripción de SPA ⚙️
_ Hay secciones de contenido públicas y otras privadas que requieren sesión activa, esto esta resuelto con Guard/Angular y FireBase, la intención de utilizar Fb es que no se tiene acceso pleno a las BBDD del servidor en el que está  montado * [redlarousse.mx/olimpiadanortografia](http://redlarousse.mx/olimpiadanortografia/) y además actualmente se está  migrando de servidor, es importante conocer la data que te otorga Fb. _

---
_ Para poder hacer TEST de esta SPA puedes utilizar los siguientes accesos: _

---

* User: pruebas@gramaticales.mx
* passw: 654321

## Frameworks o plugins empleados 🛠️
_ Se utiliza SweetAler2 Angular/materialDesign _

* Sweet Alert2 
* Angular Material Design 
* Auth0 - en este caso se descartó porque actualmente tiene un bug que hace que la sesión se pierda con un refresh. Por lo que si se encuentra código que no se haya retirado, ignorarlo.

----

_ La documentación de AngularMD es fea, pero útil., SweetAlert2 me desagrada que todo mundo lo usa. _

### Comandos utiles
_ Coloco comandos que constantemente tengo que buscar en Google. _

```
ng g c 'nombre de' --module=app.module --skipTests
```

```
ng build --prod --base-href 'https://redlarousse.mx/olimpiadanortografia/2020/'
```

```
ng g c NOMBRE --module=app.module --skipTest -> porque existen dos module hay que definir en cual se deben cargar los nuevos elementos.
```
---

_ Tener presente que existen DOS module.ts dado que se separó AngularMD del resto de la lógica. _ 

##  Versionado 📌
Al quedar este repositorio como público y accesible para todos, pongo a disposición mi contacto ante dudas y en caso de que te sirva de algo.

* **Jbautista** - *arranque* - [contacto](https://ejetzael.github.io/jbautista/)

---

⌨️ con ❤️ por [jbautista](https://ejetzael.github.io/jbautista/) 😊 para RED Larousse.
