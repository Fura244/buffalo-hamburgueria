document.getElementById("pedidoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const referencia = document.getElementById("referencia").value;
    const lanche = document.getElementById("lanche").value;
    const observacoes = document.getElementById("observacoes").value;
  
    // Cria a mensagem com as quebras de linha
    const mensagem = `Olá! Gostaria de fazer um pedido.\n
  Nome: ${nome}\n
  Telefone: ${telefone}\n
  Endereço: Rua ${rua}, nº ${numero}\n
  Ponto de Referência: ${referencia}\n
  Lanche: ${lanche}\n
  Observações: ${observacoes}`;
  
    // Número do WhatsApp (sem espaços ou símbolos)
    const numeroWhatsApp = "5538997431923"; 
  
    // Monta o link para o WhatsApp com texto formatado
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    // Redireciona para o WhatsApp com os parâmetros
    window.location.href = link;
  });
  