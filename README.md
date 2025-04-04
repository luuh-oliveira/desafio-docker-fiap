# Desafio Docker Fiap - Fase 1

## Objetivo: 
 
 Integrar Front, Back e Banco de dados, que devem estar em contêineres e conversando entre si com a mesma rede, sendo criados pelo Docker Compose. A ferramenta Trivy deve ser usada para analisar as imagens criadas. 

 ## Estrutura do repositório: 

- `backend`: contém uma API simples com Node.js que se conecta ao banco PostgreSQL.
- `frontend`: contém uma página base que chama o endpoint da API e exibe seu retorno.
- `docker-compose.yml`: contém toda a estrutura dos contêineres, incluindo o do banco de dados.
