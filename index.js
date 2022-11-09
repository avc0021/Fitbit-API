// 1. This is for sleep
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNjY4NjM1MzQwLCJpYXQiOjE2NjgwMzA1NDB9.pgD9lzZDXtUVR94oU31oDFTuffhyycck4-aSejj6WRU";

// fetch("https://api.fitbit.com/1/user/5295Q2/sleep/date/2022-10-01/2022-10-10.json", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// 3. Minutes of exercise (divided into preset heart rate zones) // 4. Active zones mins
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNjY4NjM1MzQwLCJpYXQiOjE2NjgwMzA1NDB9.pgD9lzZDXtUVR94oU31oDFTuffhyycck4-aSejj6WRU";

// fetch("https://api.fitbit.com/1/user/5295Q2/activities/list.json?beforeDate=2022-10-27&sort=asc&offset=0&limit=100", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//4. Cardio Fitness score
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNjY4NjM1MzQwLCJpYXQiOjE2NjgwMzA1NDB9.pgD9lzZDXtUVR94oU31oDFTuffhyycck4-aSejj6WRU";

fetch("https://api.fitbit.com/1/user/5295Q2/cardioscore/date/2022-10-10.json", {
  method: "GET",
  headers: { Authorization: "Bearer " + access_token },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


















// Main example
//This token expires every 30 days. We will need to manually updated Oct-28-2022.
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

// fetch("https://api.fitbit.com/1/user/5295Q2/activities/steps/date/2022-10-23/7d.json", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
