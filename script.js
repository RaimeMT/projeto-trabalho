function soma (n){
  let total = 0

  for(var i = 0; i < n; ++i){
    if(i % 3 == 0 || i % 5 == 0) total += i

  }
  return total
}


const somaSpan = document.querySelector('#soma')
const primosInput = document.querySelector('#primos')
const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', (e) => {
  const somaResult = soma(primosInput.value)
  somaSpan.innerHTML = somaResult
}) 

