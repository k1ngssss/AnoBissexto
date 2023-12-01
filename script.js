//Função anos bissextos
function anob() {
    var ano = parseFloat(document.getElementById('ano').value);
    let anoc;
    let anob;
    let anoh;
    let anok;

//Verificar se o input é um número
  if (isNaN(ano)) {
    alert("Por favor preencha todos os campos.");
   return;
  }
  else if (ano < 2000) {
    alert("Por favor insira um ano superior a 2000.")
  }
  else if (ano % 4 == 0 && ano % 15 == 0 && ano % 55 == 0) {
    anob = "-ano bissexto";
    anoh = "-ano de festival Huluculu"
    anok = "-ano de festival Bulukulu"
    alert("O ano inserido é um ano bissexto, no qual ocorrem os festivais Huluculu e Bulukulu.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anob}</p>
    <p>${anoh}</p>
    <p>${anok}</p>`;
  }
  else if (ano % 4 == 0 && ano % 15 == 0) {
    anob = "-ano bissexto";
    anoh = "-ano de festival Huluculu";
    alert("O ano inserido é um ano bissexto, no qual ocorre o festival Huluculu.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anob}</p>
    <p>${anoh}</p>`;
  }
  else if (ano % 55 == 0 && ano % 4 == 0) {
    anob = "-ano bissexto";
    anok = "-ano de festival Bulukulu";
    alert("O ano inserido é um ano bissexto, no qual ocorre o festival Bulukulu.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anob}</p>
    <p>${anok}</p>`;
  }
  else if (ano % 15 == 0) {
    anoh = "-ano de festival Huluculu";
    alert("O ano inserido é um ano de festival Huluculu.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anoh}</p>`;
  }
  else if (ano % 4 == 0) {
    anob = "-ano bissexto";
    alert("O ano inserido é um ano bissexto.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anob}</p>`;
  }
  else {
    anoc = "-ano comum";
    alert("O ano inserido é um ano comum.");
    document.getElementById('tano').innerHTML = `
    <p style="text-decoration: underline">Tipo de ano:</p>
    <p>${anoc}</p>`;
  }
}