import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

export const carregarDados = async () => {
  const response = await instance.get("/employees");
  return response.data;
}
