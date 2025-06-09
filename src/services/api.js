
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



