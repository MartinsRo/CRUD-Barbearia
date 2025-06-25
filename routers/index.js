const routerAtendimento = require("./antendimentoRouter");

module.exports = (app =>{
    app.use(routerAtendimento);
});