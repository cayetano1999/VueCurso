using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Interfaces;
using WebApi.Models;
using WebApi.Servicios;

namespace WebApi.Controllers
{
    [Route("api/solicitud")]
    public class SolicitudController : Controller
    {
        private readonly ISolicitud _service;

        public SolicitudController(ISolicitud service)
        {
            _service = service;
        }

        [HttpGet(Name = ("GetAll"))]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

       [HttpGet("{id}", Name=("GetSolicitud")) ]
       public IActionResult Get(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(_service.Get(id));
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] Solicitud solicitud)
        {
            if (ModelState.IsValid)
            {
                _service.Add(solicitud);
                return new CreatedAtRouteResult("GetSolicitud", new { id = solicitud.Id }, solicitud);
                
            }
            return BadRequest(ModelState);
        }

        [HttpDelete ("{id}", Name="DeleteSolicitud")]
        public IActionResult Delete(int? id)
        {
            
            return Ok 
                ( _service.Delete(id));

        }

        [HttpPut ]
        public IActionResult Edit([FromBody] Solicitud solicitud)
        {
            return Ok(_service.Update(solicitud));
        }

    }
}