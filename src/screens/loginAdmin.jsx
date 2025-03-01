import React, { useState } from "react";
import "./loginAdmin.css";

function LoginAdmin({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const adminUser = "camille";
        const adminPassword = "1234";

        if (username === adminUser && password === adminPassword) {
            onLogin(); // Chama a função para autenticar o usuário
        } else {
            setError("Usuário ou senha incorretos!");
        }
    };

    return (
        <div className="login-admin">
            <h2>Login Administrativo</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Usuário" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default LoginAdmin;
