window.onload = function() {
  var input1 = document.getElementById("AP_1");
  var input2 = document.getElementById("AC");
  var input3 = document.getElementById("AP_2");
  var resultado = document.getElementById("nota-final");
  
  input1.addEventListener("input", calcularResultado);
  input2.addEventListener("input", calcularResultado);
  input3.addEventListener("input", calcularResultado);


  initValues();

  function initValues() {
    
      if(localStorage.getItem('AP_1')) {
          input1.value = localStorage.getItem('AP_1');
      } 
      if(localStorage.getItem('AC')) {
          input2.value = localStorage.getItem('AC');
      }
      if(localStorage.getItem('AP_2')) {
        input3.value = localStorage.getItem('AP_2');
      }


  }
  
  function calcularResultado() {
      var valor1 = parseFloat(input1.value) || 0;
      var valor2 = parseFloat(input2.value) || 0;
      var valor3 = parseFloat(input3.value) || 0;

    
      var resultadoAtualizado = (valor1 * 0.4) + (valor2 * 0.2) + (valor3 * 0.4)
    
      resultado.innerHTML = resultadoAtualizado.toFixed(2);
  
      if (resultadoAtualizado < 7) {
          resultado.classList.remove("verde-claro");
          resultado.classList.remove("laranja");
          resultado.classList.add("vermelho");
      } else if (resultadoAtualizado == 7) {
          resultado.classList.remove("verde-claro");
          resultado.classList.remove("vermelho");
          resultado.classList.add("laranja");
      } else {
          resultado.classList.remove("vermelho");
          resultado.classList.remove("laranja");
          resultado.classList.add("verde-claro");
      }

      localStorage.setItem('AP_1', input1.value);
      localStorage.setItem('AC', input2.value);
      localStorage.setItem('AP_2', input3.value);;
  }
  
  calcularResultado();
}
