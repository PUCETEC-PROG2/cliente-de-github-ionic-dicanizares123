import axios from "axios";
import { RepositoryItem } from "../interfaces/RepositoryItem";
import { UserInfo } from "../interfaces/UserInfo";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_API_TOKEN = `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`;

/**
 * Recuperar Repositorios
 * @returns
 */

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
      headers: {
        Authorization: GITHUB_API_TOKEN,
      },
      params: {
        per_page: 100,
        sort: "created",
        direction: "desc",
        affiliation: "owner",
      },
    });

    const repositories: RepositoryItem[] = response.data.map((repo: any) => ({
      name: repo.name,
      owner: repo.owner ? repo.owner.login : null,
      description: repo.description ? repo.description : null,
      imageUrl: repo.owner ? repo.owner.avatar_url : null,
      language: repo.language ? repo.language : null,
    }));

    return repositories;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

/**
 * Crear Repositorios
 * @param repo
 */
export const createRepository = async (
  repo: RepositoryItem
): Promise<RepositoryItem | void> => {
  try {
    const response = await axios.post(`${GITHUB_API_URL}/user/repos`, repo, {
      headers: {
        Authorization: GITHUB_API_TOKEN,
      },
    });

    console.log("Creado Exitosamente:", response.data);
  } catch (error) {
    console.error("Error Ocurrido:", error);
  }
};

export const getUserInfo = async (): Promise<UserInfo | null> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/user`, {
      headers: {
        Authorization: GITHUB_API_TOKEN,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error recuperando usuario:", error);
    alert("Error recuperando usuario");
    return null;
  }
};
