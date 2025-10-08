import jwt from 'jsonwebtoken';

export default function JwtVerifyViewMiddleware(request, response, next) {

    const HEADER_TEXT = "Aula 07 - V de Views, SSR e SSG";
    const { token } = request.cookies;

    console.log('Middleware JWT chamado');
    console.log('Cookies:', request.cookies);
    console.log('Token:', token);

    if (!token) {
        console.log('Sem token, renderizando login');
        try {
            return response.render("login", {
                header: HEADER_TEXT
            });
        } catch (renderError) {
            console.error('Erro ao renderizar login:', renderError);
            return response.status(500).send('Erro ao renderizar página de login');
        }
    }

    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token válido, usuário:', userDecoded);

        request.user = userDecoded;
        return next();
    } catch (err) {
        console.log('Token inválido, renderizando login');
        try {
            return response.render("login", {
                header: HEADER_TEXT
            });
        } catch (renderError) {
            console.error('Erro ao renderizar login:', renderError);
            return response.status(500).send('Erro ao renderizar página de login');
        }
    }

}