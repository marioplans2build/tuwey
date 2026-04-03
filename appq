export const metadata = {
  title: "Mario Puddunan Portfolio",
  description: "Licensed Civil Engineer | Project Coordinator | Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}

"use client";

import React, { useState } from "react";
import { Moon, Sun, X } from "lucide-react";

export default function Page() {
  const [dark, setDark] = useState(false);
  const [role, setRole] = useState(null);
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  const handleLogin = () => {
    if (username === "marioplans2build" && password === "Superm@rio30") {
      setAuth(true);
      setRole("owner");
    } else {
      alert("Invalid credentials");
    }
  };

  const addProject = () => {
    setProjects([...projects, { title: "New Project", desc: "", link: "" }]);
  };

  if (!role) {
    return (
      <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",gap:10}}>
        <button onClick={()=>setRole("client")}>Client</button>
        <button onClick={()=>setRole("owner")}>Owner</button>
      </div>
    );
  }

  if (role==="owner" && !auth){
    return (
      <div style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",alignItems:"center",gap:10}}>
        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  }

  return (
    <div style={{padding:20}}>
      <button onClick={()=>setDark(!dark)}>
        {dark ? <Sun size={16}/> : <Moon size={16}/>}
      </button>

      <h1>Mario Puddunan</h1>

      {role==="owner" && <button onClick={addProject}>Add Project</button>}

      {projects.map((p,i)=>(
        <div key={i} style={{border:"1px solid #ccc",margin:10,padding:10}}>
          <input value={p.title} disabled={role!=="owner"} onChange={(e)=>{
            const updated=[...projects]; updated[i].title=e.target.value; setProjects(updated);
          }}/>
          <textarea value={p.desc} disabled={role!=="owner"} onChange={(e)=>{
            const updated=[...projects]; updated[i].desc=e.target.value; setProjects(updated);
          }}/>
          <input placeholder="Drive link" value={p.link} disabled={role!=="owner"} onChange={(e)=>{
            const updated=[...projects]; updated[i].link=e.target.value; setProjects(updated);
          }}/>

          {role==="client" && <button onClick={()=>setActiveProject(p)}>View</button>}
        </div>
      ))}

      {activeProject && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)"}}>
          <div style={{background:"#fff",margin:"100px auto",padding:20,width:300}}>
            <button onClick={()=>setActiveProject(null)}><X/></button>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.desc}</p>
            <a href={activeProject.link} target="_blank">Open Link</a>
          </div>
        </div>
      )}
    </div>
  );
}
