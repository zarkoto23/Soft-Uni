import http from "http";
// import { userDeleted } from "./audit-system.js";
// import { userDeleted as userDeletedReporting } from "./reporting-service.js";
import msgBroker from "./msg-broker.js";

import './audit-system.js'
import './reporting-service.js'

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("on / home");
  } else if (req.url === "/create-user") {
    // userDeleted('pepi')
    // userDeletedReporting('epi')
    msgBroker.pubEmitter('userCreated', 'peshko')
    res.write("on create user");
  } else {
    res.write("not found");
  }
  res.end();
});

server.listen(3000);
console.log("server listen on - http://localhost:3000");
