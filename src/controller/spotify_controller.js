import { SpotifyRepository } from "../repositories/spotify_repository";

// const serverUrl = import.meta.env.VITE_DEV_SERVER_URL;
const serverUrl = import.meta.env.VITE_PROD_SERVER_URL;

const spotifyRepository = new SpotifyRepository();

class SpotifyController {
  // ! move to spotify repository
  loginSpotify = async () => {
    try {
      const response = await fetch(serverUrl + "/spotify/login");

      const redirectUrl = await response.json();

      window.location.href = redirectUrl;
    } catch (e) {
      throw e;
    }
  };

  // ! move to spotify repository
  getAccessToken = async (code, state) => {
    try {
      const response = await fetch(
        `${serverUrl}/spotify/callback?code=${code}&state=${state}`,
        {
          credentials: "include",
        }
      );

      // if (response.status != 200) throw await response.json();

      const result = await response.json();

      // compare local vs session storage
      localStorage.setItem("expireTime", result.expireTime);
    } catch (e) {
      throw e;
    } finally {
      //   router.push("/");
    }
  };

  refreshToken = async () => {
    try {
      const result = await spotifyRepository.fetchRefreshToken();

      localStorage.setItem("spotify", JSON.stringify(result));
    } catch (e) {
      throw e;
    }
  };

  checkToken = async () => {
    const spotifyApi = JSON.parse(localStorage.getItem("spotify"));

    console.log("now", new Date(Date.now()).toString());
    // console.log("expire", new Date(parseInt(spotifyApi.expireTime)).toString());

    // case: start application and no expire time is locally stored
    if (spotifyApi === null) return await this.refreshToken();

    // The expiry time has been exceeded and the token is no longer valid
    if (Date.now() >= parseInt(spotifyApi.expireTime)) {
      console.log("time is expired");

      await this.refreshToken();
    }
  };

  getCurrentTrack = async () => {
    await this.checkToken();
    const { accessToken } = JSON.parse(localStorage.getItem("spotify"));

    return await spotifyRepository.fetchCurrentTrack(accessToken);
  };

  getTopTracks = async () => {
    await this.checkToken();
    const { accessToken } = JSON.parse(localStorage.getItem("spotify"));

    return await spotifyRepository.fetchTopTracks(accessToken);
  };
}

export { SpotifyController };
