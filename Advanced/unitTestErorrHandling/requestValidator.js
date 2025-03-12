function requestValidator(obj) {
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  const uriPattern = /^[a-zA-Z.0-9]+$/

  const messagePattern = /[<>&'"\\]/g

  if (!obj.hasOwnProperty("method") || !validMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  } else if (
    !obj.hasOwnProperty("uri") ||
    !uriPattern.test(obj.uri)||obj.uri== ''
  ) {
    throw new Error("Invalid request header: Invalid URI");
  } else if (
    !obj.hasOwnProperty("version") ||
    !validVersions.includes(obj.version)
  ) {
    throw new Error("Invalid request header: Invalid Version");
  } else if (
    !obj.hasOwnProperty("message") ||obj.message !== "" && messagePattern.test(obj.message)){
   
    throw new Error("Invalid request header: Invalid Message");
  }
  
  return obj;
}
console.log(
  requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})
);
