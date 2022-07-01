const serverUrl = "http://localhost:4000";

class SpotifyController {
  //   test = 2;

  loginSpotify = async () => {
    try {
      const response = await fetch(serverUrl + "/spotify/login");

      if (response.status != 200) throw await response.json();

      const redirectUrl = await response.json();

      window.location.href = redirectUrl;
    } catch (e) {
      throw e;
    }
  };

  checkToken = async () => {
    const expireTime = parseInt(localStorage.getItem("expireTime"));
    const currentTime = Date.now();

    // console.log("now", new Date(Date.now()).toString());
    // console.log("expire", new Date(expireTime).toString());

    // The expiry time has been exceeded and the token is no longer valid
    if (currentTime >= expireTime) await refreshToken();
  };

  refreshToken = async () => {
    try {
      const response = await fetch(serverUrl + "/spotify/refreshToken", {
        credentials: "include",
      });

      if (response.status != 200) throw await response.json();

      const result = await response.json();

      localStorage.setItem("expireTime", result.expireTime);
    } catch (e) {
      throw e;
    }
  };
}

export { SpotifyController };
