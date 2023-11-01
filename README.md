# 📚 SSBook - Gerenciador de Livros
Este projeto consiste em uma aplicação para gerenciar e exibir a biblioteca de livros do usuário, fornecendo informações sobre cada livro. A aplicação possui duas telas: uma tela inicial que lista todos os livros do usuário e uma tela interna do livro que pode ser acessada ao clicar em qualquer livro.

# 🚀 Funcionamento
A aplicação utiliza uma API GraphQL para obter os dados necessários para exibir as informações dos livros. As bibliotecas `@apollo/client` e `graphql` foram utilizadas para auxiliar nas requisições à API.

Existem alguns componentes na aplicação que não possuem tratamento de clique, uma vez que esse não era o foco do projeto. Porém, há componentes com cliques funcionais, como as abas internas "Meus livros" e "Emprestados", as cápsulas de categoria do livro ("Todos", "Romance", "Aventura" e "Comédia") e o overflow horizontal na aba interna de "livros favoritos" e "autores favoritos".

# 💻 Instruções de Uso
Foi criado um container Docker para empacotar todas as dependências e configurações do projeto em um ambiente isolado e portátil. O uso de contêineres é recomendado, pois facilita a implantação e o compartilhamento do projeto com outros desenvolvedores.

Para iniciar a aplicação, é necessário ter o Docker instalado na máquina. Em seguida, execute os seguintes comandos:

``` bash
npm run compose:up
npm run dev
```

Isso iniciará um container Docker com a aplicação e já dará o start do projeto mapeando a porta do host para a porta do contêiner. Acesse http://localhost:3000 no navegador para utilizar a aplicação.

# 🔍 Visualize este projeto:
A aplicação foi implantada usando o serviço Surge e está disponível em [https://geovannaotoni-ssbook.surge.sh/](https://geovannaotoni-ssbook.surge.sh/).

# 💡 Habilidades:
Feito a partir dos conhecimentos de CSS, HTML, JavaScript, JSX, React e React Router Dom, Componentes Funcionais, PropTypes, GraphQL, Requisições via API, Docker.

# ℹ️ Observações
Este é um projeto em desenvolvimento e pode haver algumas funcionalidades que ainda não foram implementadas. Sinta-se à vontade para contribuir com o projeto ou relatar problemas encontrados.
