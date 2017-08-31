const SERVICESURI = "http://localhost:8000/api";

export default async function reqSvc(requestJson) {
  const resp = await fetch(SERVICESURI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestJson),
  });
  console.log("resp:", resp);
  return await resp.json();
}


//reqSvc({
//  action: "CreateUser",
//  data: {
//    fullname: "James Potter",
//    age: 30
//  },
//})
//.then(x => console.log("CreateUser result:", x))
//.catch(console.error);
