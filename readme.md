<h4 align="center"> 
  Letmeask 🚀
</h4> 

<h1 align="center">
    <img alt="Letmeask" src=".github/cover.svg" />
</h1>

<p align="center">
  <img alt="Letmeask" src=".github/logo.svg" width="160px">
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=8257E5&labelColor=000000" alt="NLW Together 06" />
  
  <img src="https://img.shields.io/github/stars/rocketseat-education/nlw-06-reactjs?label=stars&message=MIT&color=8257E5&labelColor=000000" alt="Stars">

  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000" alt="License">   
</p>

<br>

## 💻 Projeto 

Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.  

E pode ser adaptado a outras situações comerciais.

## 🧪 Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias: 
- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🧪 Construindo o projeto

#### Liftoff 

- [x] Fluxo SPA
- [x] Conceitos React: componente, propriedade e estado
- [x] Configuração do ambiente
- [x] Criado projeto com `yarn create react-app letme-ask --template typescript`
- [x] Integração com o Firebase: autenticação, banco de dados
- [x] Instalar o Firebase no projeto: `yarn add firebase`
- [x] Lembrando da versão do Firebase: `"^9.6.1"`
- [x] Variáveis de ambiente

#### Maximum Speed 

- [x] Sass: `yarn add node-sass@^5.0.0` 
- [x] Google Fonts: Roboto e Poppins 
- [x] Tela de autenticação: estrutura
- [x] Tela de autenticação: estilização com .scss, componentização do botão
- [x] Tela de criação de sala
- [x] Roteamento e navegação react-router: `yarn add react-router-dom` e `yarn add @types/react-router-dom -D`
- [x] Mudança em React-Router-Dom: ao invés de `component={Home}`, é `element={<Home />}`
- [x] Navegação com Hook: ao invés de `useHistory`, é `useNavigate`
- [x] Roteamento e Navegação
- [x] Experimentação do banco de dados do Firebase
- [x] Autenticação com Firebase
- [x] Contextos no React: uso de hook useContext
- [x] Contexto de autenticação para armazenar informações (useContext)
- [x] Recuperar o estado de autenticação: sair da página ou apertar F5
- [x] Criar Hook de autenticação 
- [x] Atualização de dependência: `npx browserslist@latest --update-db`

#### In Orbit

- [x] Criação de sala: usando informação do input.
- [x] Redirecionamento por rota: usar useNavigate.
- [x] Entrando na sala
- [x] Estipulando autorização: construíndo as especificações em .json
- [x] Função para copiar código no RoomCode
- [x] Pegar o código da sala vindo na url
- [x] Criando nova pergunta 
- [x] As três rotas dinâmicas
- [x] Página de sala (hmtl + css)
- [x] Consumindo perguntas do Firebase: trazendo as perguntas
- [x] Ouvindo novas perguntas: um teste com `{JSON.stringify(questions)}`
 
#### Landing 

- [x] Criando hook useRoom
- [x] Estrutura de perguntas 
- [x] Criando Hook useRoom
- [x] Página de Sala
- [x] Funcionalidade de Like
- [x] Remoção de pesquisa: pacote react-modal para construir modal de exclusão
- [x] Encerrar sala

#### Surface Exploration

- [x] Html e Css de destaque e respondida
- [x] Dar destaque na pergunta
- [x] Marcar como respondida
- [x] Hospedando projeto: Firebase Hosting

#### Levar o projeto ao próximo nível
  
- [ ] 1. responsividade
- [ ] 2. acessibilidade
- [ ] 3. modo dark / light
- [ ] 4. variação de cores
- [ ] 5. hospedar aplicação
- [ ] 6. versão PWA: create-react-app para web parecer app
- [ ] 7. styled components - sass
- [ ] 8. eSLint e prettier - padrões de código

---

#### 🚀 warning para corrigir

- Node Sass does not yet support your current environment: Windows 64-bit with Uns
upported runtime (93)

---

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo. 
```bash
$ git clone https://github.com/douglasabnovato/letmeask
$ cd letmeask
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn
# Iniciar o projeto
$ yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000. 
Lembrando que será necessário criar uma conta no [Firebase](https://firebase.google.com/) e um projeto para disponibilizar um Realtime Database.
 
## 🔖 Layout 

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/community/file/1009824839797878169/Letmeask)  
Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---  

Feito com ❤️ por Douglas A B Novato 👋🏽 [Entre em contato!](https://www.linkedin.com/in/douglasabnovato/).

Fonte do projeto: [NLW Together Edição 6 na trilha Mission: ReactJS da Rocketseat](https://www.rocketseat.com.br/) 
