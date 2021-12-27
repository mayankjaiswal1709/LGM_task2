import React from "react";
import "./App.css";
import UserDataa from "./UserDataa";
import Navbar from "./components/Navbar";
// import userdataa from "./UserDataa";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [Buttonaction, setButtonAction] = React.useState(false);

  const fun = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.data);
    if (data.data) {

      setUserData(data.data);
      setLoading(false);
    }

  }
  const handleClick = async () => {

    try {
      setButtonAction(true);
      setLoading(true);
      setTimeout(fun, 1000)

    } catch (error) {
      console.log(error.message);
    }



  };

  return (
    <>


      <Navbar title="My Coders" handleClick={handleClick} />

      {/* ------------------- */}

      <div className="bodytextflex">
        <div className="mainflex">
          {Buttonaction ? (
            !loading ? (
              <UserDataa userData={userData} />
            ) : (
              <div className="loader"></div>
            )
          ) : (
            <div>
              <div class="banner">
                <div class="typed_wrap">
                  <h1>  Click on Get Users button to get users data<span class="typed"></span></h1>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* --------- */}

      <div className="Contact">
        mayankjaiswal20180@gmail.com
      </div>

    </>
  );
}

export default App;
