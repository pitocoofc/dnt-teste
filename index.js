module.exports = {
    name: "Modulo de Teste",
    init: (bot) => {
        console.log("🚀 [DNT] O modulo de teste foi ativado com sucesso!");
        
        // Vamos criar um comando de teste que só existe se o modulo for baixado
        bot.command({
            name: 'teste_modulo',
            description: 'Verifica se o modulo dnt funciona',
            run: (ctx) => ctx.reply('O sistema de modulos DNT esta funcionando 100%!')
        });
    }
};
