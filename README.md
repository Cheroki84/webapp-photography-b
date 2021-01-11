<h1 align="center"> El Barquito de Papel - Fotografía infantil </h1>

<p align="center">
<img src="./img/logo3.png" alt="logo" width="200"/>
</p>

---

## About this 🤔
Its main feature is that it allows our clients to make appointments on their own through the webapp itself. Moreover it is responsive, which means total accesibility and functionality regardless of which device we use.
> Note: This repository is the backend of the application.
> Frontend is here: [repository](https://github.com/Cheroki84/webapp-photography-f)

---

## Do you want to see the application running? 🚀
 https://www.elbarquitodepapelfi.com
 > If you have problems accessing it, try it [here](https://webapp-photography-f.herokuapp.com/)

---

## Technologies used ✅
- MySQL
- NodeJS
- Git

---

## Libraries used 📚
- sequelize
- regEx
- bcrypt
- express
- jsonwebtoken
- nodemon

---

## Tools used  🛠️
- Postman
- Heroku
- GitHub
- Trello
- Git Flow

---

## Endpoints (backend routes)

| **Method** | **Route**                       | **Description**                                                                           |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| POST       | /users/register                 | Sends register info to the server and creates user in the DB.                             |
| POST       | /users/login                    | Sends login form data to the server.                                                      |
| PUT        | /users/logout/:email            | Sends user logout request to the server.                                                  |
| DELETE     | /users/delete                   | Sends user delete request to the server.                                                  |
| GET        | /users/allUsers                 | Send a request to show all users to the server.                                           |
| GET        | /users/userById/:id             | Send a request to show a user based on its ID to the server.                              |
| PUT        | /users/update/:id               | Sends a request to update a user's data to the server.                                    |
| POST       | /appointments/create            | Send a request to create a new appointment to the server.                                 |
| PUT        | /appointments/update/:id        | Send a request to update an appointment to the server.                                    |
| DELETE     | /appointments/delete/:id        | Send a request to delete an appointment to the server.                                    |
| GET        | /appointments/allAppointments   | Send a request to show all appointments to the server.                                    |
| GET        | /appointments/allWithUserAndDate| Send a request to show all appointments with user and date to the server.                 |
| GET        | /appointments/byUserId/:UserId  | Sends a request to show the appointment that a user has to the server.                    |
| POST       | /dateappointments/create        | Create a new date for an appointment.                                                     |
| GET        | /dateappointments/allDates      | Send a request to show all dates to the server.                                           |
| DELETE     | /dateappointments/delete/:id    | Send a request to delete a date to the server.                                            |
| GET        | /dateappointments/getById/:id   | Send a request to display a date based on its ID to the server.                           |
| GET        | /dateappointments/availableDates| Send a request to show dates with available status to the server.                         |
| PUT        | /dateappointments/update/:id    | Send a request to update the status of a date to the server.                              |

---
[Trello Board](https://trello.com/b/bCUUWx7S/webapp-photography)
![](https://visitor-badge.glitch.me/badge?page_id=cheroki84.webapp-photography-b)
[![Linkedin: Miguel Angel Morato](https://img.shields.io/badge/-Click_Me!-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anmol-p-singh/)](https://www.linkedin.com/in/miguelangelmorato84/)