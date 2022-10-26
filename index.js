// 1. This is for sleep
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

// fetch("https://api.fitbit.com/1/user/5295Q2/sleep/date/2022-10-02.json", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// 2. Heartrate Variability
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

// fetch("https://api.fitbit.com/1/user/5295Q2/hrv/date/2022-09-01.json", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// 3. Minutes of exercise (divided into preset heart rate zones) // 4. Active zones mins
// const access_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

// fetch("https://api.fitbit.com/1/user/5295Q2/activities/list.json?afterDate=2022-10-01&sort=asc&offset=0&limit=10", {
//   method: "GET",
//   headers: { Authorization: "Bearer " + access_token },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// 5. Cardio Fitness Score (also know as VO2 Max)  
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhWWkIiLCJzdWIiOiI1Mjk1UTIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3NvYyB3YWN0IHdveHkgd3RlbSB3d2VpIHdzZXQgd3JlcyB3bG9jIiwiZXhwIjoxNjY3MDU1NDgyLCJpYXQiOjE2NjQ0NjM0ODJ9.u4sgRaTARrh3vlr4GH5q0sLvPXcrKo5o8SD-6xgz158";

fetch("https://api.fitbit.com/1/user/5295Q2/cardioscore/date/2021-10-04.json", {
  method: "GET",
  headers: { Authorization: "Bearer " + access_token }
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
