// NUMERO DO WHATSAPP (troca pelo seu)
const numero = "5599999999999";

// FUNÇÃO DE COMPRA
function comprar(produto, preco) {
let mensagem = "Olá, quero comprar:\n\n🛍️ Produto: ${produto}\n💰 Preço: ${preco}";

let url = "https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}";

window.open(url, "_blank");
}

// ANIMAÇÃO SIMPLES AO CARREGAR
window.onload = function() {
document.body.style.opacity = "0";

setTimeout(() => {
document.body.style.transition = "0.5s";
document.body.style.opacity = "1";
}, 100);
};