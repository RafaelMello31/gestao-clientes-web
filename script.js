function validarCampos() {
  const campos = document.querySelectorAll('#empresaForm input, #empresaForm textarea');
  let algumVazio = false;

  campos.forEach(campo => {
    if (campo.value.trim() === '') {
      algumVazio = true;
    }
  });

  if (algumVazio) {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Todos os campos estão preenchidos corretamente!");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const empresa = urlParams.get("empresa");

  if (window.location.pathname.includes("empresa.html")) {
    const dados = {
      tech: {
        nome: "Tech Solutions",
        endereco: "Av. Paulista, 1000",
        telefone: "(11) 99999-0000",
        obs: "Empresa parceira desde 2018"
      },
      inova: {
        nome: "InovaSoft",
        endereco: "Rua das Startups, 200",
        telefone: "(11) 98888-1111",
        obs: "Cliente recente da área de TI"
      },
      data: {
        nome: "DataCorp",
        endereco: "Av. Data Center, 500",
        telefone: "(11) 97777-2222",
        obs: "Empresa especializada em big data"
      },
      alphacode: {
        nome: "AlphaCode Systems",
        endereco: "Rua dos Devs, 45",
        telefone: "(11) 90000-0001",
        obs: "Consultoria em desenvolvimento de software"
      },
      green: {
        nome: "GreenLog Transportes",
        endereco: "Rod. Verde, km 30",
        telefone: "(11) 95555-5555",
        obs: "Logística e transporte sustentável"
      },
      medvita: {
        nome: "MedVita Saúde",
        endereco: "Rua da Saúde, 150",
        telefone: "(11) 96666-6666",
        obs: "Plano de saúde e atendimento médico"
      },
      bluewave: {
        nome: "BlueWave Telecom",
        endereco: "Av. Conexão, 320",
        telefone: "(11) 97777-3333",
        obs: "Operadora de internet e telefonia"
      },
      faberstech: {
        nome: "Fabers Tech",
        endereco: "Rua do Líder, 1945",
        telefone: "(11) 98888-4444",
        obs: "Desenvolvimento de soluções tecnológicas"
      },
      simonjogos: {
        nome: "Simon Jogos",
        endereco: "AV. Fire Red, 2004",
        telefone: "(11) 98989-8989",
        obs: "Empresa de desenvolvimento de jogos"
      },
      mellocorp: {
        nome: "Mello Corp",
        endereco: "Av. Bigode Grosso, 31",
        telefone: "(11) 97676-7676",
        obs: "Corporação de tecnologia e inovação"
      }
    };

    const empresaSelecionada = dados[empresa];

    if (empresaSelecionada) {
      document.querySelector('#nome').value = empresaSelecionada.nome;
      document.querySelector('#endereco').value = empresaSelecionada.endereco;
      document.querySelector('#telefone').value = empresaSelecionada.telefone;
      document.querySelector('#obs').value = empresaSelecionada.obs;
      document.querySelector('#titulo').textContent = "Ficha da Empresa: " + empresaSelecionada.nome;
      document.querySelector('#linkContato').href = "contato.html?empresa=" + empresa;

    }
  }

  if (window.location.pathname.includes("contato.html")) {

    const contatos = {
      tech: {
        nome: "Ana Souza",
        cargo: "Gerente de Projetos",
        telefone: "(11) 91234-5678",
        email: "ana@techsolutions.com"
      },
      inova: {
        nome: "Carlos Lima",
        cargo: "CTO",
        telefone: "(11) 92345-6789",
        email: "carlos@inovasoft.com"
      },
      data: {
        nome: "Fernanda Silva",
        cargo: "Analista de Dados",
        telefone: "(11) 93456-7890",
        email: "fernanda@datacorp.com"
      },

      alphacode: {
        nome: "José da Silva",
        cargo: "Gerente de T.I",
        telefone: "(11) 95123-4564",
        email: "jose@alphacodesystems.com"
      },
      green: {
        nome: "Laís França",
        cargo: "Chefe de logística",
        telefone: "(11) 92629-6214",
        email: "lais@greenlogtransportes.com"
      },

      medvita: {
        nome: "Christian Stewart",
        cargo: "CEO",
        telefone: "(11) 93692-5814",
        email: "christian@medvitasaude.com"
      },

      bluewave: {
        nome: "Samira Leão",
        cargo: "GTI",
        telefone: "(11) 98745-6123",
        email: "samira@bluewavetelecom.com"
      },

      faberstech: {
        nome: "Fabio Stampone",
        cargo: "CEO & Founder",
        telefone: "(11) 91939-1945",
        email: "fabio@faberstech.com"
      },

      simonjogos: {
        nome: "Pedro 'Simon' Alves",
        cargo: "CEO & Founder",
        telefone: "(11) 97464-8090",
        email: "simon@simonjogos.com"
      },

      mellocorp: {
        nome: "Rafael Mello",
        cargo: "CEO & Founder",
        telefone: "(11) 93100-3100",
        email: "rafael@mellocorp.com"
      },
    };

    const contato = contatos[empresa];

    if (contato) {
      document.querySelector('#nomeContato').value = contato.nome;
      document.querySelector('#cargoContato').value = contato.cargo;
      document.querySelector('#telefoneContato').value = contato.telefone;
      document.querySelector('#emailContato').value = contato.email;

      document.querySelector('#voltarFicha').href = "empresa.html?empresa=" + empresa;
    }
  }

});
