
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
    const response = await fetch(`http://localhost:8080/api/projects/${id}`);
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
    const response = await fetch(`http://localhost:8080/api/projects/editProject/${retroProject.id}`,
        {   
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(retroProject),
        });
    console.log(response)
};

