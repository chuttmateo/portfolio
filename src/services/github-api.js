const baseGitHubUrl = "https://api.github.com";
const cacheDuration = 5 * 60 * 1000; // 5 minutos en milisegundos

// Caché en memoria
const data = { projects: [], time: 0 };

export async function getProjects() {
  try {
    const currentTime = Date.now();

    // Verifica si hay datos en caché y si el tiempo de caché no ha expirado
    if (data.projects.length > 0 && currentTime - data.time < cacheDuration) {
      return data.projects;
    }

    // Realiza la solicitud a la API de GitHub
    const response = await fetch(
      baseGitHubUrl + "/users/chuttmateo/repos?per_page=100"
    );
    const projects = await response.json();

    // Actualiza la caché con los nuevos datos y el tiempo actual
    data.projects = projects;
    data.time = currentTime;

    // Revisar que el estatus sea correcto
    if (!response.ok) {
      throw new Error("Error fetching projects: " + response.statusText);
    }

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Lanza el error para que el llamador lo maneje
  }
}
