// const serverUrl = import.meta.env.VITE_DEV_SERVER_URL;
const serverUrl = import.meta.env.VITE_PROD_SERVER_URL;

const fetcher = async (endpoint) => {
  const response = await fetch(serverUrl + endpoint, {
    credentials: "include",
  });

  if (response.status != 200) throw await response.json();

  return await response.json();
};

export { fetcher };
