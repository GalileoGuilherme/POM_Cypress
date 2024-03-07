POM_Cypress

Como Executar os Testes:
Existem duas maneiras de executar os testes:

Executar por linha de comando:

Para executar os testes por linha de comando, siga estas etapas:

Instale o Cypress globalmente:

Certifique-se de ter o Cypress instalado globalmente em sua máquina. Se você ainda não o fez, execute o seguinte comando no terminal:

npm install -g cypress

Execute um teste específico:

Para executar um teste específico, utilize o seguinte comando:

npm run [nome do teste]
Por exemplo, para executar o teste getPlayerBackofficeAPI, execute:

npm run getPlayerBackofficeAPI

Isso iniciará a execução do teste especificado usando o Cypress.

Executar usando a interface do Cypress:

Para executar os testes utilizando a interface do Cypress, siga estas etapas:

Inicie o Cypress usando npx:

Abra o terminal e navegue até o diretório raiz do seu projeto. Em seguida, execute o seguinte comando:

npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes interativamente.

Estrutura do Projeto:
A estrutura do projeto é organizada de acordo com as melhores práticas, seguindo uma separação clara de arquivos de teste e páginas de objeto. Aqui está uma visão geral da estrutura:

POM_Cypress/
│
├── cypress/
│   ├── integration/
│   │   ├── TestCase/
│   │   │   ├── getPlayerBackofficeAPI.cy.js
│   │   │   ├── LoginBackOfficeAdm.cy.js
│   │   │   ├── loginBackOfficeAPI.cy.js
│   │   │   ├── ...
│   │   │
│   ├── PageObject/
│   │   ├── LoginPage.js
│   │   ├── ...
│   │
│   └── ...
│
├── package.json
└── README.md
Navegue até a pasta do teste no terminal e execute npm run [nome do teste] para executar um teste específico.