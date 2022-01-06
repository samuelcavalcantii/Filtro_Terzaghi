document.addEventListener('keypress', function(e){
  if(e.keyCode == 13){
    calcular();
  }
}, false);
document.addEventListener('keydown', function(e){
  if(e.keyCode == 46){
    document.getElementById('limpar').click();
  }
}, false);


function calcular (){
  var num1 = document.getElementById('num1').value;

  var num2 = document.getElementById('num2').value;

  var num3 = document.getElementById('num3').value;

  if (num1 == ''|| num1 == null){
      alert ('Digite o valor de D15 do filtro.')
      document.getElementById('num1').focus()
      return false
    }
  if (num2 == ''|| num2 == null){
    alert ('Digite o valor de D15 do solo.')
    document.getElementById('num2').focus()
    return false
    }
  if (num3 == ''|| num3 == null){
    alert ('Digite o valor de D85 do solo.')
    document.getElementById('num3').focus()
    return false
    }
  var resultado = null

  num1 = Number(num1)
  num2 = Number(num2)
  num3 = Number(num3)

  piping_ratio = num1/num3
  permea_ratio = num1/num2

  if (piping_ratio <= 4 && permea_ratio > 5) {
    resultado1 = 'Filtro válido.'
  }
  else{
    resultado1 = 'Filtro inválido.'
  }

  if (piping_ratio <= 4) {
    resultado2 = `O valor ${piping_ratio.toFixed(2)} previne o piping.`   
  }
  else{
    resultado2 = 'Não garante proteção contra o piping.'
  }
  if (permea_ratio >5) {
    resultado3 = `O valor ${permea_ratio.toFixed(2)} permite a passagem dágua.`
  }
  else{
    resultado3 = 'Não garante a passagem de água.'
    
  }
  
  

  
    
  /*resultado1 = Math.tan(num1*(Math.PI/180))
  resultado2 = Math.cos(num2*(Math.PI/180))
  resultado = Math.round(Math.atan((resultado1 * resultado2))/(Math.PI/180),2)
  /*resultado = Math.atan(resultado3)*(Math.PI/180)*/

  document.getElementById('resultado1').value = resultado1
  document.getElementById('resultado2').value = resultado2
  document.getElementById('resultado3').value = resultado3
  
}