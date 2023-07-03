stack used : NestJS, PostgreSQL

route : /AddEvent

used to add event to the db, useing express js 
related file : 
-app.module.ts
-event.module.ts
-app.service.ts
-app.controller.ts
-server.js

route : /home

home page with 2 button, to navigate between : /addEvent or /show
related file:
-app.module.ts
-home.controller.ts
-home.module.ts
-home.service.ts
-server.js

route : /show
used to display all event available in the dbrelated file :
-app.module.ts
-showEvent/*
-server.js

server.js = express file, need to be lunch with : node server.js (or nodemon)
used to execute querry on the db !