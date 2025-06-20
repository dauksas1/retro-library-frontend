
export const getAllProjects = async ()=>{
    const response = await fetch("http://localhost:8080/api/projects");
    const data = await response.json()
    return data
};

export const searchProjects = async (query)=>{
    const response = await fetch(`http://localhost:8080/api/search/${query}`);
    const data = await response.json()
    return data
};

export const getFollowedProjects = async () => {
    const response = await fetch("http://localhost:8080/api/projects");
    const data = await response.json()
    return data
};

export const getMyProjects = async () => {
    const response = await fetch("http://localhost:8080/api/projects");
    const data = await response.json()
    return data
};

export const getProjectById = async (id) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/${id}`);
    const data = await response.json()
    return data
};

export const uploadProject = async (formedRetroProject) => {
    const response = await fetch(`http://localhost:8080/api/projects/upload`,
        {   
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(formedRetroProject),
        });
    console.log(response)
};

export const editProject = async (retroProject) => {
    console.log(retroProject.id)
    const response = await fetch(`http://localhost:8080/api/projects/editProject/${retroProject.id}`,
        {   
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(retroProject),
        });
    console.log(response)
};

export const deleteProjectApi = async (id) => {
    const response = await fetch(`http://localhost:8080/api/projects/deleteProject/${id}`,
        {   
            method:"DELETE",
            headers:{"Content-Type": "application/json"},
        });
    console.log(response)
};

export const handleLogin = async (credentials) => {
  try {
    const res = await fetch("http://localhost:8080/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, token: data.jwt };
    } else {
      return { success: false, message: "Invalid credentials"
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false };
  }
};





