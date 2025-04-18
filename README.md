# Modulo 8 / Ejercicio Práctico 2 - CI/CD Web Hospital / Fecha entrega 04-04-25

URL Github pública acceso archivos fuente Proyecto TypeScript React JS:

https://github.com/MauricioBarriosB/curso-front-end-m8-ci-cd

## 1 Integración de Docker en el Proyecto:

* He implementado Dockerfile y dockerignore para instalación modo dev proyecto Docker.

## 2 Implementación de Pruebas Automatizadas: 

* He desarrollado pruebas unitarias en carpeta test/ para componentes como AppointmentsList, CustomSelect y DoctorCard, en los cuales he validado que las props sean correctas y que el componente sea exitosamente rederizado en el stage.

## 3 Configuración de CI/CD con GitHub Actions:

* He implementado acciones en archivo .github/workflows/ci.yml,  el status y progreso es visible desde panel GitHub/Actions (aquí se indica el éxito de los tres tests aplicados).

## 4 Gestión de Ramas en la Nube:

* He implementado ramas main y develop para gestión Git y desarrollo de proyecto.

## 5 Protección de Rutas y Perfilamiento:

Rutas protejidas de React Router DOM y perfilamiento:

* Nombre de usuario: admin
* Contraseña: adminpass
* Perfil admin tiene acceso a las siguientes páginas: home, pacientes, equipo médico, citas.<br/><br/>
* Nombre de usuario: doctor
* Contraseña: doctorpass
* Perfil doctor tiene acceso a las siguientes páginas: home, pacientes.<br/><br/>
* Nombre de usaurio: guest 
* Contraseña: guestpass
* Perfil guest (invitado) tiene acceso a las siguientes páginas:  home, equipo médico, citas.