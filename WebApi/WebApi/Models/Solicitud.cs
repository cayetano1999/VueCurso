using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Solicitud
    {
        public int Id { get; set; }
        public string Descripción { get; set; }
        public DateTime Fecha { get; set; }
        public string Solicitante { get; set; }
    }
}
