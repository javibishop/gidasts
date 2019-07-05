using MyApp.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio.Consejeria;

namespace MyApp.ServiceInterface
{
  public class AntecedenteService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetAntecedentes request)
    {
      var alumnos = Db.Select<Antecedente>();
      return alumnos;
    }
    public object Get(GetAntecedenteById request)
    {
      return Db.SingleById<Antecedente>(request.Id);
    }

    public object Get(GetAntecedenteByConsejeriaId request)
    {
      return Db.Single<Antecedente>(ant => ant.ConsejeriaId == request.ConsejeriaId);
    }
    
    public object Post(PostAntecedente request)
    {
      request.Id = (int)Db.Insert<Antecedente>(request, true);
      return request;
    }

    public object Put(PostAntecedente request)
    {
      Db.Update<Antecedente>(request);
      return request;
    }

    public object Delete(DeleteAntecedente request)
    {
      try
      {
        Db.DeleteById<Antecedente>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
