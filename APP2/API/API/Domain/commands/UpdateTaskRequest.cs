using System;

namespace API.Domain.commands
{
    public class UpdateTaskRequest
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public bool Done { get; set; }
    }
}
