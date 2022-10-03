//This token expires every 30 days. We will need to manually updated Oct-28-2022.
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

fetch("https://api.fitbit.com/1/user/-/activities/steps/date/2022-09-27/7d.json", {
  method: "GET",
  headers: { Authorization: "Bearer " + access_token },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
