
function criptografar() {
    var mapaCriptografia = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
  
    var texto = document.getElementById("decoi").value;
    var textoCriptografado = '';
    for (var i = 0; i < texto.length; i++) {
      var letraAtual = texto[i];
      if (mapaCriptografia[letraAtual]) {
        textoCriptografado += mapaCriptografia[letraAtual];
      } else {
        textoCriptografado += letraAtual;
      }
    }
  
    document.getElementById("mensagem").value = textoCriptografado;
  }



  function descriptografar() {
    var mapaDescriptografia = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
  
    var textoCriptografado = document.getElementById("decoi").value;
    var texto = textoCriptografado;
  
    for (var palavraCriptografada in mapaDescriptografia) {
      var regex = new RegExp(palavraCriptografada, 'g');
      texto = texto.replace(regex, mapaDescriptografia[palavraCriptografada]);
    }
  
    document.getElementById("mensagem").value = texto;
  }


  function copiarTexto() {
    var textarea = document.getElementById("decoi");
    textarea.select();
    document.execCommand("copy");
    alert("Texto copiado: " + textarea.value);
  }