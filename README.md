# Teste Prático Front-end BeTalent

## 1. Título e Introdução

**Nome do Projeto:**  
Teste Prático Front-end BeTalent - João Luís Rodrigues de Moura

**Resumo/Descrição:**  
Bem-vindo(a) ao Teste Prático Front-end BeTalent! Este teste consiste em construir a visualização de uma tabela que exibe os dados dos colaboradores, utilizando uma API simulada (json-server). O desafio é desenvolver uma interface responsiva, seguindo o mockup fornecido no Figma, com funcionalidades de pesquisa e formatação de datas e telefones diretamente no front-end.

---

## 2. Contexto e Motivação

**Objetivo:**  
Desenvolver uma aplicação que apresente uma tabela de colaboradores com dados provenientes de uma API simulada. A interface permite filtrar os resultados por cargo, nome e telefone. Durante o desenvolvimento, os principais desafios foram implementar a responsividade, formatar os dados corretamente no front-end e integrar com a API simulada.

**Contexto:**  
Este projeto foi criado como parte de um teste técnico para um processo seletivo na BeTalent. A proposta é demonstrar habilidades em design responsivo e conhecimento em tecnologias modernas, alinhadas ao mockup fornecido, para construir uma aplicação clara e funcional.

---

## 3. Tecnologias Utilizadas

- **Next.js 15** – 
- **TypeScript** – 
- **Tailwind CSS** – 
- **Axios** – 
- **Lucide Icon** – 
- **json-server** – 
- **Node.js** – 
- **Yarn** –
- **Npm** – 

---

## Instruções para Rodar o Projeto

### Pré-requisitos
- **Node.js:**
- **Yarn/Npm:** Instalado globalmente.
- **json-server:** Pode ser instalado globalmente ou executado via npx.

### Passo a Passo

1. **Clonar Respositório DB**
  ```bash
   git clone https://github.com/BeMobile/teste-pratico-frontend
   cd teste-pratico-frontend
  ```
1.1. **Instalar json-server (caso não tenha)**  
```bash
  npx json-server db.json
  # or
  yarn json-server <path>/db.json
```
1.2. **Inicializar json-server**
```bash
  json-server --watch db.json
```
1.3. **Abrir Navegador no endereço: http://localhost:3000**

2. **Clonar esse Repositório:**
   ```bash
   git clone https://github.com/jooluisrm/BeTalent-Test
   cd BeTalent-Test
   ```
2.1. **Instalar Dependencias do Projeto**
  ```bash
  npm install
  ```
2.2. **Executar Projeto NextJS**
 ```bash
  npm run dev
  # or
  yarn dev
  ```
2.3. **Abrir Navegador no Endereço: http://localhost:3001**
