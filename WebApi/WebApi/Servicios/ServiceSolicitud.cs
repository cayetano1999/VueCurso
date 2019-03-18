using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Servicios
{
    public class ServiceSolicitud : ISolicitud
    {
        private readonly ApplicationDbContext _db;

        public ServiceSolicitud(ApplicationDbContext db)
        {
            _db = db;
        }


        public bool Add(Solicitud entity)
        {
           _db.Solicitud.Add(entity);
            _db.SaveChanges();
            return true;
            
        }

        public bool Delete(int? id)
        {
            var solicitud = _db.Solicitud.SingleOrDefault(s => s.Id == id);
            if (solicitud != null)
            {
                _db.Solicitud.Remove(solicitud);
                _db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public Solicitud Get(int? id)
        {
            var solicitud = _db.Solicitud.SingleOrDefault(s => s.Id == id);
            if (solicitud == null)
            {
                return null;
            }
            else
            {
                return solicitud;
            }
            
        }

        public IEnumerable<Solicitud> GetAll()
        {
            return _db.Solicitud.ToList().OrderByDescending(s=>s.Id);
        }

        public bool Update(Solicitud entity)
        {
            var solicitudeditar = _db.Solicitud.SingleOrDefault(s => s.Id == entity.Id);
            if(solicitudeditar != null)
            {
                solicitudeditar.Fecha = entity.Fecha;
                solicitudeditar.Descripción = entity.Descripción;
                solicitudeditar.Solicitante = entity.Solicitante;
                _db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
