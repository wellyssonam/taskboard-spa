# Desafio | Frontend Developer

## Etapas de Instalação e Execução

1 -  Primeiro certifique-se de que possui o node instalado para utilizar os comandos npm, para isso em seu terminal digite:
> npm -v

2 - Se o node não estiver instalado acesse o site para download (**[node](https://nodejs.org/en/download/)**)

3 - Após instalação das dependências o projeto poderá ser executado, para isso acesse o diretório "taskboard-spa" pelo terminal, verifique se encontra-se na branch "master" e então execute o comando para a instalação de todas as dependência presentes no projeto.
> npm install

4 - No mesmo diretório digite o camando para executar o projeto.
> ng serve

5 - Para realizar os testes autônomos.
> ng test

5 - Para checar código em busca de possíveis erros seguindo o padrão da linguagem.
> ng lint

---
## Sobre o Projeto

Criar uma TODO list com as seguintes especificacoes:

- Angular 8;
- Usando router/lazy load;
- Usando SASS;
- Criar, listar, editar e remover;
- Usar OnPush como changeDetectionStrategy;
- Nao copiar o tutorial do angular (tour of heroes e semelhantes)
- pronto para ser colocado em producao.
- com testes;
- entregar via github

---
### Tecnologias Utilizadas

- HTML5, SASS, JavaScript, 
- Materialize
- Angular 8

---
### Melhorias Feitas

- Páginas responsivas para diferentes tamanhos de tela.
- Um contador de tarefas é exibido na parte superior da lista.
- Ebibe uma barra de progresso da tarefa na página de criação ou edição da tarefa.
- Exibe-se em cada card da tarefa a porcentagem do quanto a tarefa encontra-se concluída.
- As tarefas estão listadas por ordem crescente da data de entrega.
- A mesma interface utilizada para cadastrar a tarefa é utilizada também para edição.
- As páginas não encontradas serão redirecionadas para a página inicial.

---
### Não Foi Possível Fazer

- As opções "Editar" e "Deletar" presente no dropdown de cada card de tarefa, somente não serão exibidas caso exista uma única tarefa,
a partir da segunda apenas a última apresentará problema não exibindo assim as opções, os demais cards exibirão normalmente.

---
### Ajustes/Melhorias Futuras (Versão 2.0)

- Criação do campo de busca de tarefas.
- Criação de catergorias que irão definir o estado em que a tarefa se encontra, assim cada categoria terá sua lista de tarefas.
- Exibir opções de temas para o site.

---
### Página Publicada

Acessar página **[taskboard-spa](https://taskboard-spa.wellyssonam.now.sh/)**