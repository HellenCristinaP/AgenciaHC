# 🏦 Agência HC - Soluções Financeiras & Investimentos

<p align="center">
  <img src="imgs/logoP.png" alt="Logo Agência HC" width="120" />
</p>

<p align="center">
  <strong>Uma plataforma web responsiva para soluções financeiras e investimentos com área do cliente implementada em Programação Orientada a Objetos (POO).</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=for-the-badge" alt="Status" />
</p>

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Programação Orientada a Objetos (POO)](#-programação-orientada-a-objetos-poo)
- [Arquitetura e Metodologias CSS/Sass](#-arquitetura-e-metodologias-csssass)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Histórico de Refatoração & Correções (Branch fixbug)](#-histórico-de-refatoração--correções-branch-fixbug)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autora](#-autora)
- [Licença](#-licença)


---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Git](https://git-scm.com/) instalado no seu computador.
- [Node.js](https://nodejs.org/) (versão LTS recomendada).
- Extensão **Live Server** no VS Code ou qualquer servidor HTTP local (necessário para o correto carregamento dos ES Modules `type="module"`).

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/HellenCristinaP/AgenciaHC.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd AgenciaHC
   ```

3. **Instale as dependências (Bootstrap e Sass):**
   ```bash
   npm install
   ```

4. **Compile o SCSS para CSS:**
   ```bash
   npm run sass
   ```
   *Ou inicie o modo observador para compilação automática a cada salvamento:*
   ```bash
   npm run sass:watch
   ```

5. **Inicie a aplicação:**
   - Se estiver usando o VS Code, clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.
   - Ou utilize um servidor simples como o `npx serve .` e abra a URL indicada no navegador.
   
---

## 📌 Sobre o Projeto

O **Agência HC** é uma aplicação web desenvolvida como projeto prático no âmbito do curso da **EBAC (Escola Britânica de Artes Criativas e Tecnologia)**. A proposta do projeto é simular o portal digital de uma agência de consultoria financeira e investimentos com mais de 10 anos de experiência de mercado.

Além de apresentar a landing page institucional com serviços, depoimentos e canais de contato, o projeto conta com um **fluxo dinâmico de cadastro de usuário em modal**, integração com `localStorage` e uma **área de conta bancária** onde operações de depósito e saque são regidas por princípios sólidos de **Programação Orientada a Objetos (POO)** em JavaScript moderno (ES6+).

---

## 🎯 Objetivos

- **Praticar POO no JavaScript**: Implementar classes, encapsulamento de dados com atributos privados (`#`), métodos de consulta (`getters`) e regras de negócio para contas bancárias.
- **Estruturação Modular com ES Modules**: Separar responsabilidades em scripts reutilizáveis (`app.js`, `utils.js`, `classes.js`) usando sintaxe `import`/`export`.
- **Pré-processamento com Sass**: Organizar a camada de estilo em componentes modulares utilizando variáveis, mixins, nesting e a metodologia **BEM (Block Element Modifier)**.
- **Integração de Ferramentas Modernas**: Utilizar o Bootstrap integrado ao fluxo de compilação Sass e automação com scripts npm.
- **Responsividade e Acessibilidade**: Desenvolver uma interface adaptável para dispositivos móveis e desktops, com menu hambúrguer dinâmico e feedback visual de interação.

---

## ✨ Funcionalidades

### 🌐 Landing Page Institucional (`index.html`)
- **Header e Menu de Navegação Responsivo**: Menu com alternância dinâmica de classes para abertura/fechamento em telas móveis e alinhamento horizontal em telas amplas.
- **Seção Hero / Início**: Apresentação da marca com botão de chamada para ação (*CTA*) "Abra sua conta gratuita!".
- **Seção Sobre Nós**: Histórico e missão institucional da Agência HC.
- **Seção Nossos Serviços**: Apresentação de dashboards e painéis de controle financeiro.
- **Seção Depoimentos**: Cards de clientes com efeito de foco e transição de sombra (`box-shadow`).
- **Seção de Contato & Rodapé**: Links diretos para ligação telefônica, envio de e-mail e créditos à desenvolvedora.

### 📝 Cadastro e Gestão de Estado
- **Modal Interativo**: Abertura e fechamento de formulário de cadastro com backdrop escurecido (`bodyGray`).
- **Validação de Formulário**: Verificação de campos obrigatórios (nome, sobrenome, e-mail com `@` e senha).
- **Persistência Local**: Gravação dos dados cadastrais e do estado de submissão via `localStorage`.

### 💳 Área da Conta do Cliente (`pages/login.html`)
- **Identificação do Usuário**: Saudação personalizada resgatando o nome salvo no `localStorage`.
- **Exibição e Formatação de Saldo**: Apresentação monetária formatada no padrão brasileiro (`R$ X.XXX,XX` via `toLocaleString('pt-BR')`).
- **Depósitos e Saques**: Operações interativas via prompts com validações (saldo positivo, proibição de saques maiores que o saldo disponível).

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição / Finalidade |
| :--- | :--- |
| **HTML5** | Estruturação semântica da aplicação (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`). |
| **CSS3** | Estilização, layout em Grid e Flexbox, transições e media queries responsivas. |
| **Sass (SCSS)** | Pré-processador CSS para variáveis, mixins, aninhamento e modularização de arquivos. |
| **Bootstrap 5** | Framework para utilitários de estilo e padronização visual. |
| **JavaScript (ES6+)** | Lógica de negócios, manipulação dinâmica do DOM, ES Modules e POO. |
| **Node.js & npm** | Gerenciador de pacotes e execução dos scripts de compilação Sass. |
| **Git & GitHub** | Controle de versão e hospedagem do código-fonte. |

---

## 🧱 Programação Orientada a Objetos (POO)

A lógica bancária do projeto é encapsulada em classes ES6 localizadas em `pages/scripts/classes.js`:

```javascript
// Exemplo de estrutura das classes com atributos privados

export class Cliente {
    #senha;
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.#senha = senha;
    }

    getSenha() {
        return this.#senha;
    }
}

export class Conta {
    #saldo;
    constructor(cliente) {
        this.cliente = cliente;
        this.#saldo = 0;
    }

    depositar(valor) {
        // Validação de depósito positivo
    }

    sacar(valor) {
        // Validação de saldo suficiente
    }

    getSaldo() {
        return this.#saldo;
    }
}
```

### Destaques de POO aplicados:
- **Encapsulamento**: Os atributos `#senha` e `#saldo` utilizam o recurso nativo de campos privados do JavaScript (`#`), impedindo alterações diretas sem validação prévia.
- **Composição**: A classe `Conta` recebe uma instância de `Cliente` em seu construtor, estabelecendo uma relação clara entre o titular e a conta.
- **Regras de Negócio**: Métodos `depositar()` e `sacar()` validam os valores antes de atualizar o estado interno da conta.

---

## 🎨 Arquitetura e Metodologias CSS/Sass

O projeto segue boas práticas de organização de folhas de estilo:

- **Metodologia BEM**: Nomenclatura baseada em Blocos, Elementos e Modificadores (ex.: `.section__form--open`, `.menu__item--closed`, `.main__clientes`).
- **Arquitetura 7-1 simplificada**:
  - `scss/components/_vars.scss`: Cores da paleta institucional, espaçamentos e camadas de `z-index`.
  - `scss/components/_mixins.scss`: Mixins reutilizáveis para alinhamento (`center`), tipografia (`font`), dimensões (`cubo`) e links (`a`).
  - `scss/components/_form.scss`: Estilos isolados para o modal e formulário de cadastro.
  - `scss/_reset.scss`: Normalização de margens, paddings e box-sizing.
  - `scss/style.scss`: Ponto de entrada que importa os módulos, o Bootstrap e declara as regras globais e de layout.

---

## 📂 Estrutura do Projeto

```text
AgenciaCSSPOO/
├── imgs/                          # Imagens, ícones e assets gráficos
│   ├── dashboard-fluxo-caixa.jpg      # Preview do Dashboard de Fluxo de Caixa
│   ├── dashboard-investimentos.jpg    # Preview do Dashboard de Carteira de Investimentos
│   ├── dashboard-mercado.jpg          # Preview do Dashboard de Análise de Mercado
│   ├── dashboard-metas.jpg            # Preview do Dashboard de Metas Patrimoniais
│   ├── logo.ico                       # Favicon da aplicação
│   ├── logoP.png                      # Logotipo principal
│   ├── menu.svg                       # Ícone de menu fechado
│   └── menuOpen.svg                   # Ícone de menu aberto
├── pages/                         # Páginas secundárias
│   ├── login.html                 # Painel da conta do cliente
│   └── scripts/                   # Scripts específicos da página da conta
│       ├── app.js                 # Inicialização da conta e eventos de clique
│       ├── classes.js             # Definição das classes Cliente e Conta (POO)
│       └── utils.js               # Funções de conversão e formatação monetária
├── scripts/                       # Scripts da landing page
│   ├── app.js                     # Inicialização da navegação e eventos do modal
│   └── utils.js                   # Controle de abertura/fechamento do formulário
├── scss/                          # Arquivos-fonte do Sass
│   ├── components/
│   │   ├── _form.scss             # Estilos do modal e inputs
│   │   ├── _mixins.scss           # Mixins reutilizáveis do Sass
│   │   └── _vars.scss             # Variáveis de cores, fontes e z-index
│   ├── _reset.scss                # Reset CSS
│   └── style.scss                 # Arquivo SCSS principal
├── styles/                        # CSS compilado gerado pelo Sass
│   ├── style.css                  # Folha de estilo pronta para produção
│   └── style.css.map              # Source map para depuração
├── index.html                     # Landing page principal da Agência HC
├── package.json                   # Dependências e scripts do projeto
├── package-lock.json              # Trava de versões das dependências
└── README.md                      # Documentação completa do projeto
```

---

## 🛠️ Histórico de Refatoração & Correções (Branch `fixbug`)

Esta branch concentra uma série de revisões técnicas, correções de bugs funcionais e melhorias de UI/UX implementadas sobre a estrutura original:

### 1. 🧭 Navegação & Landing Page
- **Correção de Âncoras do Menu**: Inclusão dos identificadores semânticos correspondentes (`#Home`, `#Sobre`, `#Serviços`, `#Depoimentos`, `#Contato`) nas seções, garantindo que o clique em qualquer link do menu role a página suavemente (`scroll-behavior: smooth`).
- **Remoção de Requisições Quebradas**: Exclusão de tags `<link>` apontando para `styles/reset.css` e `styles/form.css` inexistentes (que geravam erros 404 no console), mantendo unicamente a folha compilada `styles/style.css`.
- **Ajuste de Responsividade do Menu**: Correção do fechamento automático do menu hambúrguer no mobile ao tocar em um link de navegação, além de desativação dos pseudoelementos móveis em telas desktop (`@media (min-width: 900px)`).

### 2. 🔐 Lógica de Cadastro & Sessão
- **Refatoração da Função de Visibilidade**: Substituição da antiga função ambígua `updateLoginId` por `alternarVisibilidadeLogin`, utilizando seletores dinâmicos por sufixo (`a[href$='login.html']`) e manipulação direta de classes BEM (`.menu__item--closed`).
- **Correção de ReferenceError**: Eliminação de referência a variáveis não declaradas no evento `DOMContentLoaded`.
- **Fluxo do Botão CTA**: Ao submeter o formulário de cadastro, o botão de chamada para ação é ocultado e a opção "Conta" passa a ser visível.
- **Padronização de Nomenclatura**: Correção de digitação de `firtsName` para `firstName` nos atributos HTML, manipulação no DOM e chaves do `localStorage`.

### 3. 🏦 POO & Regras de Negócio Bancárias
- **Correção Crítica no Método `depositar()`**: Removida a validação incorreta `valor > this.#saldo` (que impedia depósitos de valores menores que o saldo atual), substituindo-a por validação estrita de valores positivos e numéricos (`!isNaN(valor) && valor > 0`).
- **Eliminação de Código Duplicado**: Removida a segunda declaração do método `getSaldo()` e higienizada a pontuação dupla de ponto e vírgula na classe `Conta`.
- **Prevenção de Falhas no `prompt`**: Tratamento seguro para cancelamento do prompt (valor `null`), evitando exceções em cadeia de métodos de string.
- **Formatação Monetária Nativa**: Utilização de `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` para preservar e padronizar o símbolo monetário (`R$`) e casas decimais.

### 4. 🎨 Design, Layout & Experiência Visual
- **Transição de Grid Rígido para Fluxo Natural**: Substituição do `grid-template-rows` da página por fluxo flexível com espaçamentos proporcionais (`padding: 2rem 1.5rem`), aplicando CSS Grid exclusivamente na organização bidimensional dos componentes (`.main__paineis` e `.main__feedbacks` via variável `$grid-template`).
- **Otimização da Seção Hero (`.main__home`)**: Configuração de `min-height: 75vh` com compensação do cabeçalho fixo (`padding-top: 4.5rem`), gradiente suave e botão com cantos arredondados (`border-radius: 2em`).
- **Novos Dashboards em Alta Resolução**: Inclusão de 4 dashboards financeiros em formato widescreen 16:9 com detalhes em verde esmeralda, integrados em cards com efeitos de sombra e transição (`shadow-sm`, `transition-hover`).
- **Estilização da Área da Conta (`pages/login.html`)**: Criação de um cards(paineis) moderno com Bootstrap contendo exibição destacada de saldo, botões de ação e link de retorno para a página inicial.

### 5. Bug para concertar

- **Ao clicar em Conta**: Mesmo não tem login, ele abre normalmente, vai ser alterado posteriormente.

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run sass` | Compila o arquivo `scss/style.scss` gerando o arquivo `styles/style.css`. |
| `npm run sass:watch` | Inicia o modo de monitoramento contínuo do Sass, recompilando automaticamente a cada alteração nos arquivos `.scss`. |

---

## 👩‍💻 Autora

Desenvolvido por **Hellen Cristina**

- **GitHub**: [@HellenCristinaP](https://github.com/HellenCristinaP)
- **Portfólio**: [Hellen Cristina Portfolio](https://hellencristinap.github.io/Portifolio_Hellen/)
- **Repositório do Projeto**: [AgenciaHC](https://github.com/HellenCristinaP/AgenciaHC)

---

## 📄 Licença

Este projeto está licenciado sob a licença [ISC](https://opensource.org/licenses/ISC).
