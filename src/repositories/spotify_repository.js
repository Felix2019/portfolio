import { fetcher } from "../services/fetcher";

class SpotifyRepository {
  fetchRefreshToken = async () => {
    try {
      const endpoint = "/spotify/refreshToken";
      return await fetcher(endpoint);
    } catch (e) {
      throw e;
    }
  };

  fetchCurrentTrack = async () => {
    try {
      const endpoint = `/spotify/currentSong?accessToken=${accessToken}`;
      return await fetcher(endpoint);
    } catch (e) {
      throw e;
    }
  };

  fetchTopTracks = async (accessToken) => {
    try {
      const endpoint = `/spotify/topTracks?accessToken=${accessToken}`;
      return await fetcher(endpoint);
    } catch (e) {
      throw e;
    }
  };
}

export { SpotifyRepository };
