# Evidência — Consulta ao Context7

Consultas feitas via MCP Context7 antes de usar as APIs `useState` e `Array.prototype.reduce` (regra do fluxo de trabalho do `AGENTS.md`).

| Tema | Biblioteca resolvida | Library ID | Fonte |
| --- | --- | --- | --- |
| `useState` | React (react.dev) | `/reactjs/react.dev` | `reference/react/useState.md`, `learn/updating-arrays-in-state.md` |
| `Array.prototype.reduce` | MDN Web Docs | `/mdn/content` | `web/javascript/reference/global_objects/array/reduce` |

## 1. `useState` (React)

**Consulta:** "useState: updating arrays in state without mutation, functional updates"

Pontos relevantes da documentação:

- Arrays no state devem ser tratados como **somente leitura**. Não reatribuir itens (`arr[0] = ...`) nem usar métodos que mutam (`push`, `pop`, `splice`, `sort`, `reverse`).
- Para atualizar, passe um **novo array** ao setter:

  | Operação | Evitar (muta) | Preferir (novo array) |
  | --- | --- | --- |
  | adicionar | `push`, `unshift` | `concat`, `[...arr]` |
  | remover | `pop`, `shift`, `splice` | `filter`, `slice` |
  | substituir | `splice`, `arr[i] = ...` | `map` |
  | ordenar | `reverse`, `sort` | copiar o array antes |

- Atualizador funcional mantém a atualização pura: `setTodos(prev => [...prev, novo])`.

Exemplos da documentação:

```js
// adicionar
setTodos([...todos, { id: nextId++, title, done: false }]);

// remover
setTodos(todos.filter(t => t.id !== todoId));

// substituir um item
setTodos(todos.map(t => (t.id === nextTodo.id ? nextTodo : t)));
```

**Aplicação no HairDay:**
- [src/App.tsx](../../src/App.tsx) guarda `appointments` com `useState<Appointment[]>([])`.
- Adicionar agendamento → spread (`[...prev, novo]`); excluir → `filter` por `id`. Nunca `push`/`splice`.
- [src/components/AppointmentForm.tsx](../../src/components/AppointmentForm.tsx) usa `useState` para `date`, `time`, `clientName` e `error` (validação).

## 2. `Array.prototype.reduce` (MDN)

**Consulta:** "Array.prototype.reduce syntax, initialValue, grouping objects by property"

Pontos relevantes da documentação:

- Sintaxe: `reduce(callbackFn)` ou `reduce(callbackFn, initialValue)`.
- O callback recebe `accumulator`, `currentValue`, `currentIndex` e `array`; o retorno de cada chamada vira o `accumulator` da próxima, e o retorno da última é o resultado de `reduce()`.
- Com `initialValue`, o callback começa no índice 0. Sem ele, o acumulador é `array[0]` e a iteração começa no índice 1.
- **Array vazio sem `initialValue` lança `TypeError`** (`[].reduce(fn)`); com `initialValue` retorna o próprio valor inicial (`[].reduce(fn, 1) // 1`).

Exemplo da documentação:

```js
const array = [1, 2, 3, 4];
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
// 10
```

**Aplicação no HairDay (planejada):**
- Agrupar os agendamentos do dia por período (Manhã / Tarde / Noite) com `reduce`, sempre passando um `initialValue` (objeto com as três chaves e arrays vazios). Isso evita o `TypeError` quando o dia não tem agendamentos e garante que os períodos vazios existam para mostrar a mensagem "Você ainda não tem agendamentos cadastrados nesse período."
- Dentro do callback, retornar um novo objeto/arrays (spread) em vez de mutar o acumulador, mantendo o estilo imutável do restante do projeto.

> Observação: na data desta consulta, `reduce` ainda não é chamado em nenhum arquivo de `src/`; o `useState` já está em uso.
