//import { useState } from "react";

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3000/rpc/api/xmlrpc")
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       setData(apiData);
  //       console.log(apiData.api.getUserAccountBalance);
  //     });
  // }, []);
  //const [state,setState]= useState(false);

  // // get the url
  // var url = window.location.href;
  // //getting the access token from url
  // var access_token = url.split("#")[1].split("=")[1].split("&")[0];
  // // get the userid
  // var userId = url.split("#")[1].split("=")[2].split("&")[0];
  // console.log(access_token);
  // console.log(userId);

  // var xhr = new XMLHttpRequest();
  // xhr.open(
  //   "GET",
  //   "https://api.fitbit.com/1/user/" +
  //     userId +
  //     "/activities/heart/date/today/1w.json"
  // );
  // xhr.setRequestHeader("Authorization", "Bearer " + access_token);
  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     console.log(xhr.responseText);
  //   }
  // };
  // xhr.send();
  return (
    // <h1>
    //   Fitbit API
    //   <a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=5295Q2&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight%20oxygen_saturation%20respiratory_rate%20temperature&expires_in=604800"></a>
    //   {/* <div>{data}</div> */}
    // </h1>

    <div className="App">
      <a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=238PDB&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight%20oxygen_saturation%20respiratory_rate%20temperature&expires_in=604800">
        Login to Fitbit
      </a>
    </div>

    
  );
}

export default App;
