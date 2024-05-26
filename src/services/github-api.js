export async function getProjects() {
  try {
    const response = await fetch(
      "https://api.github.com/users/chuttmateo/repos?per_page=100"
    );
    const projects = await response.json();
    return projects;
  } catch (error) {
    alert(error);
  }
}
