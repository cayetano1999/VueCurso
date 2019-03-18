using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Repositorio
{
   public interface IRepositorioCrud<Entity> where Entity : class
    {
        //Crud Methods

        IEnumerable<Entity> GetAll();
        Entity Get(int? id);
        bool Update(Entity entity);
        bool Add(Entity entity);
        bool Delete(int? id);


            

    }
}
