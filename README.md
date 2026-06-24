# ⚡ Meu Blog Técnico Personalizado

Este é um projeto de blog estático, leve, rápido e responsivo, desenvolvido com **HTML5, CSS3 e JavaScript Vanilla**, projetado para ser hospedado gratuitamente no **GitHub Pages**.

## 🚀 Funcionalidades
- **SPA Lite:** Carregamento dinâmico de postagens através de um arquivo JSON centralizado utilizando a API Fetch do JavaScript.
- **Design Moderno:** Tema dark focado em leitura de artigos técnicos.
- **Totalmente Responsivo:** Adaptável para celulares, tablets e desktops.

## 🛠️ Como Adicionar Novos Posts?
Não há necessidade de duplicar arquivos HTML para criar novos posts. Basta editar o arquivo `posts.json` na raiz do projeto e adicionar um novo objeto seguindo a estrutura:

```json
{
  "id": "url-do-seu-post",
  "title": "Título do Artigo",
  "date": "Data de Publicação",
  "excerpt": "Resumo rápido do post que aparece na home.",
  "content": "Conteúdo completo em texto ou HTML."
}
