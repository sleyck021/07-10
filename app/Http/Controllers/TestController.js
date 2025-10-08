import express from 'express';

export default function TestController(request, response) {
    try {
        return response.render("login", {
            header: "Teste de Renderização"
        });
    } catch (error) {
        console.error('Erro na renderização:', error);
        return response.status(500).send(`Erro: ${error.message}`);
    }
}