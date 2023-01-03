# PROJETO TRANSMAP

![image] [to-do])

# Introdução

O projeto TRANSMAP tem como principal função compilar e disponibilizar informações acerca de instituições que cuidam da saúde de pessoas trans. Sua primeira versão, a atual, procura apresentar um pequeno database de instituições públicas em todo o Brasil, dando informações de contato, modalidades de cuidado oferecidas e localização. 

# Estrutura da API
![image?] (to-do)

FUNÇÃO:
- Registrar instituições de cuidados trans em todo o Brasil.
- Filtrá-las por modalidade ou localização.

SCHEMA: 
Foi necessária somente uma coleção de dados para o serviço disponibilizado.

- Instituições

>     {
      _id: ID
      nomeDaInstituição: String
      cidadeDaInstituição: String
      procedimentosOferecidos: String
      endereço: String
      telefone: String
      email: String
      site: String
      }


[to-do]