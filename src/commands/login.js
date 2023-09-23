import axios from "axios";

async function logout() {
  const { status } = await axios.get("http://wifi.shahroodut/logout");

  if (status != 200) {
    throw new Error("unable to logout");
  }
}

export async function login(username, password) {
  await logout();

  const { status } = await axios.post(
    "http://wifi.shahroodut/login",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (status != 200) {
    throw new Error("unable to login");
  }
}
