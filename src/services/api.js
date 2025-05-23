
export const getAllProjects = async ()=>{
    const response = await fetch("localhost:3000/");
    const data = await response.json()
    return data.results
};

export const searchProjects = async (query)=>{
    const response = await fetch("localhost:3000/");
    const data = await response.json()
    return data.results
};


