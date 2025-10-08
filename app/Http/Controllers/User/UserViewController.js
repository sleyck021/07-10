
import UserModel from '../../../Models/UserModel.js';

export default async function UserViewController(request, response) {
    try {
        console.log('UserViewController chamado');
        console.log('request.user:', request.user);
        
        // Buscar todos os usuários
        const allUsers = await UserModel.findAll({
            attributes: ['id', 'name', 'email', 'photo', 'created_at'],
            order: [['created_at', 'DESC']]
        });

        console.log('Usuários encontrados:', allUsers.length);

        // Usuário atual (vindo do middleware JWT)
        const currentUser = request.user;

        return response.render("users", {
            header: "Aula 07 - V de Views, SSR e SSG",
            user: currentUser,
            users: allUsers
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return response.status(500).json({
            error: "Erro interno do servidor",
            details: error.message
        });
    }
};
