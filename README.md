# PROJETO TRANSMAP

![image](https://github.com/MargarethGalmier/TransMap/blob/main/rsz_transmapheader.png?raw=true)


# INTRODUÇÃO

O projeto TRANSMAP tem como principal função compilar e disponibilizar informações acerca de instituições que cuidam da saúde de pessoas trans. Sua primeira versão, a atual, procura apresentar um pequeno database de instituições públicas em todo o Brasil, dando informações de contato, modalidades de cuidado oferecidas e localização. 


# FUNÇÕES
- Registrar instituições de cuidados trans em todo o Brasil.
- Filtrá-las por modalidade ou localização.
- Adicionar novas instituições através de um processo simples.
- Deletar uma instituição caso necessário. 


# SCHEMA: 
Foi necessária somente uma coleção de dados para o serviço disponibilizado, utilizando do sequinte schema.


>     
      Schema das instituições:
      
      nomeDaInstituição: String
      cidadeDaInstituição: String
      procedimentosOferecidos: String
      endereço: String
      telefone: String
      email: String
      site: String      

# DOCUMENTAÇÃO DA API
![image](https://github.com/MargarethGalmier/TransMap/blob/main/swagger%20routes.png?raw=true)

# TECNOLOGIAS UTILIZADAS

- Javascript, como principal linguagem de programação.
- NodeJS, como suporte à linguagem.
- Postman, como plataforma para testes de rotas.
- MongoDB, como banco de dados.
- Render, para hospedar ao projeto em forma online.
