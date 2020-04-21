using System;

namespace API.Domain.Entities
{
    public class Tarefa
    {
        public Tarefa(string nome)
        {
            Nome = nome;
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string Nome { get; set; }
        public bool Done { get; set; }
    }
}
