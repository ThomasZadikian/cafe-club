import { BASE_API_URL } from "../../Assets/constantes/API_URL";


export default async function fetchUserWithJwt(jwt: string) {
    try {
      const response = await fetch(`${BASE_API_URL}users/fetch-user-from-token`, {
        headers: {
          'Authorization': jwt
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error(error);
    }
  }  
  