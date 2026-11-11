# Evidência — Playwright MCP

Testes de interação feitos com o servidor MCP do Playwright (`@playwright/mcp`, configurado em `.mcp.json`) contra o app rodando com `npm run dev`. O agente usou as ferramentas `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_evaluate`, `browser_resize`, `browser_take_screenshot` e `browser_console_messages`.

| # | Cenário | Resultado | Captura |
|---|---------|-----------|---------|
| 1 | Carga inicial: três períodos com a mensagem de estado vazio | OK | [01](01-estado-vazio-desktop.png) |
| 2 | Clicar em "Agendar" com o formulário vazio | Mensagem: "Preencha a data, escolha um horário e informe o nome do cliente." | [02](02-validacao.png) |
| 3 | Criar 10:00 (Carlos Silva) e 13:00 (Ana Souza) | Aparecem em Manhã e Tarde; os horários ficam desabilitados | [03](03-agendamentos-desktop.png) |
| 4 | Excluir o agendamento de Carlos Silva | Item removido; Manhã volta ao estado vazio | [04](04-exclusao.png) |
| 5 | Trocar a data da agenda para 11/11/2026 | Todos os períodos vazios (agendamento de 10/11 não aparece) | [05](05-troca-de-data.png) |
| 6 | Viewport mobile 375×812 | Layout empilhado e responsivo | [06](06-mobile.png) |
| 7 | Console | Único erro: `favicon.ico` 404 (o projeto não tem favicon); sem erros de React | — |
