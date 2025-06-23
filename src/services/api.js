
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

export const getFollowedProjects = async (userId, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/subscribed/${userId}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    });
    const data = await response.json()
    return data
};

export const getMyProjects = async (id, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/myProjects/${id}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    });
    const data = await response.json()
    return data
};

export const getProjectsByPlatform = async (platform, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/byPlatform/${platform}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    });
    const data = await response.json()
    return data
};

export const getProjectById = async (id, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/${id}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    });
    if(response.ok){
        const data = await response.json()
        return data 
    }else {
        throw new Error(`Error ${response.status}: ${data.message || 'Failed to fetch project'}`);
    }
    
};

export const uploadProject = async (formedRetroProject, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/upload`,
        {   
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formedRetroProject),
        });
    const text = await response.text();

    if(response.ok){
        alert(text)
    }else{
        alert(text)
    }
};

export const subscribeToProject = async (userId, projectId, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/subscribe/${userId}/${projectId}`,
        {   
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
    if(response.ok){
        alert("Project added to your subscriber list")
    }else{
        return response.text().then(text => alert(text) )
    }
};

export const unSubscribeToProject = async (userId, projectId, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/unsubscribe/${userId}/${projectId}`,
        {   
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
     const text = await response.text();

    if(response.ok){
        alert(text)
    }else{
        alert(text)
    }
};

export const editProject = async (retroProject, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/editProject/${retroProject.id}`,
        {   
            method:"PUT",
            headers:{
                'Authorization' : `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(retroProject),
        });
    if(response.ok){
        alert("Project edit completed.")
    }
};

export const deleteProjectApi = async (id, token) => {
    const response = await fetch(`http://localhost:8080/api/user/projects/deleteProject/${id}`,
        {   
            method:"DELETE",
            headers:{
                'Authorization' : `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
    if(response.ok){
        alert("Project successfuly deleted.")
    }
};

export const handleLogin = async (credentials) => {
  try {
    const response = await fetch("http://localhost:8080/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, token: data.jwt };
    } else {
      return { success: false, message: "Incorrect username or/and password."
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false };
  }
};

export const handleUserRegistration = async (userDetails) => {
  try {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      alert("Registration was successful.");
    } else {
      return response.text().then(text => alert(text));
    }
    } catch (error) {
        console.error("Registration error:", error);
        alert("Something went wrong during registration.");
    }
};

export const getUserDetails = async (userName, token) => {
    const response = await fetch(`http://localhost:8080/user/details/${userName}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
    });
    if (response.ok) {
        try {
            const data = await response.json();
            return data;
        } catch (err) {
            throw new Error('Received invalid JSON response');
        }
    }


    
};