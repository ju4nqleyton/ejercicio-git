import axios from "axios";

export async function fetchUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
}
