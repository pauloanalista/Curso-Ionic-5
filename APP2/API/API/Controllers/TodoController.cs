using API.Domain.commands;
using API.Domain.Entities;
using LiteDB;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    [Route("api/todo")]
    public class TodoController : Controller
    {
        //[HttpGet]
        //public string Get()
        //{
        //    return "API versão 1.0";
        //}


        [HttpGet]
        //[Route("api/todo/Listar")]
        public IActionResult ListarTarefa()
        {
            List<Tarefa> tarefas;

            using (var db = new LiteDatabase("banco.db"))
            {
                var taskCollection = db.GetCollection<Tarefa>("tarefas");

                tarefas = taskCollection.FindAll().ToList();

            }
            return Ok(tarefas);
        }

        [HttpPost]
        public IActionResult Post([FromBody]AddTaskRequest request)
        {

            var task = new Tarefa(request.Nome);
            
            using (var db = new LiteDatabase("banco.db"))
            {
                var taskCollection = db.GetCollection<Tarefa>("tarefas");
                taskCollection.Insert(task);
            }

            return Ok(new { Tarefa = task, Mensagem = "Operação realizada com sucesso!" });
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody]UpdateTaskRequest request)
        {
            using (var db = new LiteDatabase("banco.db"))
            {
                var taskCollection = db.GetCollection<Tarefa>("tarefas");

                var task = taskCollection.FindOne(x => x.Id == request.Id);

                task.Nome = request.Nome;
                task.Done = request.Done;

                taskCollection.Update(task);
            }

            return Ok(new { Mensagem = "Operação realizada com sucesso!" });
        }


        [HttpDelete("{id:guid}")]
        public IActionResult Delete(Guid id)
        {
            using (var db = new LiteDatabase("banco.db"))
            {
                var taskCollection = db.GetCollection<Tarefa>("tarefas");

                taskCollection.Delete(id);
            }

            return Ok(new { Mensagem = "Operação realizada com sucesso!" });
        }
    }
}
