//app para agendamento de tarefas através do node
const schedule = require('node-schedule')
const funcao = function () {
    console.log('Execução da função', new Date().getMilliseconds())
}
const tarefa1 = schedule.scheduleJob('*/1 * * * * *', funcao) // *(segundos) *(minutos) *(horas) *(dia do mes) *(mes) *(dia da semana)
// ('5 * 12 * * *') -> dessa maneira ele executa ESPECIFICAMENTE NO SEGUNDO 5


//cancela a tarefa depois de 10000 milionesimos de segundos
setTimeout(() => {
    tarefa1.cancel()
    console.log('Tarefa encerrada')
}, 5000)

//utilizando regras/criando o objeto de regras recorrentes
const regra = new schedule.RecurrenceRule()
//instanciando as regras
regra.dayOfWeek = [new schedule.Range(1,6)] // segunda(1) à sábado(6)
regra.hour = 17
regra.second = 10
const tarefa2 = schedule.scheduleJob(regra,funcao)