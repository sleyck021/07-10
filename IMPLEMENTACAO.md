# Implementação SSR - Lista de Usuários

## O que foi implementado

### 1. Controlador UserViewController.js
- ✅ Importação do `UserModel` para buscar dados dos usuários
- ✅ Busca de todos os usuários do banco de dados com `UserModel.findAll()`
- ✅ Ordenação dos usuários por data de criação (mais recentes primeiro)
- ✅ Tratamento de erros com try/catch
- ✅ Passagem de duas variáveis para a view:
  - `user`: usuário atual (do middleware JWT)
  - `users`: lista de todos os usuários

### 2. View users.ejs 
- ✅ Mantida a saudação ao usuário logado
- ✅ Adicionada seção com lista de todos os usuários
- ✅ Loop usando `for...of` para percorrer o array de usuários (SSR)
- ✅ Renderização HTML direto no backend com EJS
- ✅ Layout responsivo usando Bootstrap
- ✅ Cards para cada usuário com:
  - Foto do usuário (se disponível) ou avatar padrão
  - Nome e email
  - Badge "Você" para identificar o usuário atual
  - Data de membro
- ✅ Contador de total de usuários
- ✅ Tratamento para lista vazia

### 3. Funcionalidades Adicionais
- ✅ View de erro criada para tratamento de exceções
- ✅ Design responsivo e moderno
- ✅ Identificação visual do usuário atual na lista

## Como testar

1. Inicie o servidor:
   ```bash
   npm start
   ```

2. Acesse `http://localhost:3000`

3. Faça login com suas credenciais

4. Acesse a rota `/users` (protegida por JWT)

5. Você verá:
   - Saudação personalizada com seu nome
   - Lista de todos os usuários cadastrados renderizada no servidor (SSR)
   - Sua identificação destacada na lista

## Critérios de aceite atendidos

- ✅ `/users` mostra saudação ao usuário logado
- ✅ `/users` mostra lista de todos os usuários
- ✅ Listagem renderizada diretamente pelo controlador + view (SSR)
- ✅ Não há busca de usuários via API no frontend
- ✅ Nenhum JavaScript/TypeScript necessário no navegador para a listagem

## Tecnologias utilizadas

- **Backend**: Node.js + Express
- **Template Engine**: EJS
- **ORM**: Sequelize
- **Banco de dados**: PostgreSQL
- **CSS**: Bootstrap 5
- **Autenticação**: JWT

A implementação segue o padrão SSR (Server-Side Rendering), onde todo o HTML é gerado no servidor e enviado pronto para o navegador, sem necessidade de JavaScript no frontend para buscar os dados dos usuários.