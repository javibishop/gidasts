﻿using Microsoft.AspNetCore.Mvc;
using NHibernate;
using System.Collections.Generic;
using TSModel.Dominio.Consejeria;
using System.Linq;
using NHibernate.Criterion;
using tswebapi.Dtos;
using tswebapi.Mapper;
using reactredux.Dtos;
using TSModel.NH;
using System;

namespace tswebapi.Controllers
{
    [Route("api/[controller]")]
    public class ConsejeriasController : Controller
    {
        SessionFactory sessionFactory = SessionFactory.Instance;

        private ConsejeriaDtoMapper consejeriaDtoMapper;

        public ConsejeriasController()
        {
            this.consejeriaDtoMapper = new ConsejeriaDtoMapper(this.sessionFactory);
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public List<ConsejeriaDto> Get()
        {
            List<ConsejeriaDto> resutl = new List<ConsejeriaDto>();
            var criteria = sessionFactory.CreateCriteria<ConsejeriaEntidad>().List<ConsejeriaEntidad>();
            var consejerias = criteria.ToList();
            consejerias.ForEach(c => resutl.Add(this.consejeriaDtoMapper.MapConsejeriaToDto(new ConsejeriaDto(), c)));
            return resutl;
        }

        // GET api/pacientes
        [HttpGet("[action]")]
        public List<ConsejeriaDto> SearchConsejeria(string searchText)
        {
            List<ConsejeriaDto> resutl = new List<ConsejeriaDto>();
            string hql = "select c from ConsejeriaEntidad as c inner join c.Usuarie1 as u1 inner join c.Usuarie2 as u2 inner join c.Usuaria as ua where u1.Nombre like :texto or u2.Nombre like :texto or ua.Nombre like :texto or c.Observacion like :texto ";
            var query = sessionFactory.CreateQuery(hql);
            query.SetParameter("texto", "%" + searchText + "%");
            var consejerias = query.List<ConsejeriaEntidad>().ToList();
            consejerias.ForEach(c => resutl.Add(this.consejeriaDtoMapper.MapConsejeriaToDto(new ConsejeriaDto(), c)));
            return resutl;


            
            //var criteria = sessionFactory.CreateCriteria<ConsejeriaEntidad>();
            //criteria.CreateAlias("TSModel.Dominio.Usuarie", "Usuarie1", NHibernate.SqlCommand.JoinType.InnerJoin);
            //criteria.SetFetchMode("Usuaria", FetchMode.Join);
            //criteria.Add(Restrictions.Like("Usuarie1.UserName", searchText));
            //criteria.Add(Restrictions.Like("Usuaria.Nombre", searchText));
            //criteria.Add(Restrictions.Like("Observacion", searchText));
            //var consejerias = criteria.List<ConsejeriaEntidad>().ToList();
            //consejerias.ForEach(c => resutl.Add(this.consejeriaDtoMapper.MapConsejeriaToDto(new ConsejeriaDto(), c)));
            //return resutl;
        }

        // GET api/pacientes/5
        [HttpGet("{id}")]
        public ConsejeriaEntidad Get(int id)
        {
            var criteria = sessionFactory.CreateCriteria<ConsejeriaEntidad>();
            criteria.Add(Restrictions.Eq("Id", id));
            return criteria.UniqueResult<ConsejeriaEntidad>();
        }

        // GET api/pacientes/5
        [HttpGet("[action]")]
        public ConsejeriaDatosDto GetCompleta(int id)
        {
            ConsejeriaDatosDto consejeriaDatosDto = new ConsejeriaDatosDto();
            ConsejeriaDto consejeriaDto = new ConsejeriaDto();
            GestaActualDto gestaActualDto = new GestaActualDto();
            UsuariaDto usuariaDto = new UsuariaDto();
            AntecedenteDto antecedenteDto = new AntecedenteDto();
            EstudioComplementarioDto estudioComplementarioDto = new EstudioComplementarioDto();
            EntrevistaPostAbortoDto entrevistaPostAbortoDto = new EntrevistaPostAbortoDto();
            #region comentado
            // //http://www.andrewwhitaker.com/blog/2014/06/19/queryover-series-part-4-transforming/
            // //TODO: ver aca de mejorar esto, o meter las referencias en consejeria a los demas o ver de que forma.

            // //var result = sessionFactory.CreateSQLQuery(@"
            // //    select ConsejeriaDto.*, gestaActualDto.*
            // //    from Consejerias ConsejeriaDto 
            // //    Left join GestasActuales gestaActualDto on ConsejeriaDto.Id = gestaActualDto.Consejeria_id 
            // //    Left join Antecedentes antecedente on ConsejeriaDto.Id = antecedente.Consejeria_id 
            // //    Left join EstudiosComplementarios estudioComplementario on ConsejeriaDto.Id = estudioComplementario.Consejeria_id 
            // //    Left join EntrevistasPostAbortos entrevistaPostAborto on ConsejeriaDto.Id = entrevistaPostAborto.Consejeria_id")
            // //    //.SetResultTransformer(NHibernate.Transform.Transformers)
            // //    .UniqueResult();



            // var consejeria = sessionFactory.GetEntity<ConsejeriaEntidad>(id);
            // //var consejeria = criteria.UniqueResult<ConsejeriaEntidad>();
            // this.consejeriaDtoMapper.MapConsejeriaToDto(consejeriaDto, consejeria);
            // consejeriaDatosDto.ConsejeriaDto = consejeriaDto;

            // //List<ICriterion> expressions = new List<ICriterion>();
            // //expressions.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));

            // //var result = sessionFactory.GetResultCriteria<GestaActual>(expressions);

            // //var criteria = sessionFactory.CreateCriteria<GestaActual>();
            // //criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            // //var gestaActual = criteria.UniqueResult<GestaActual>();

            // if (consejeria.GestaActual != null)
            // {
            //     this.consejeriaDtoMapper.MapGestaActualToDto(gestaActualDto, consejeria.GestaActual);
            // }
            // consejeriaDatosDto.GestaActualDto = gestaActualDto;

            // if (consejeria.Usuaria != null)
            // {
            //     this.consejeriaDtoMapper.MapUsuariaToDto(usuariaDto, consejeria.Usuaria);
            //     usuariaDto.ConsejeriaId = consejeria.Id;
            // }
            // consejeriaDatosDto.UsuariaDto = usuariaDto;

            // //expressions.Clear();

            // //criteria = sessionFactory.CreateCriteria<Antecedente>();
            // //criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));

            // //expressions.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            // //var result2 = sessionFactory.GetResultCriteria<Antecedente>(expressions);

            ////var antecedente = result2.FirstOrDefault();//criteria.UniqueResult<Antecedente>();

            // if (consejeria.Antecedente != null)
            // {
            //     this.consejeriaDtoMapper.MapAntecedenteToDto(antecedenteDto, consejeria.Antecedente);
            // }
            // consejeriaDatosDto.AntecedenteDto = antecedenteDto;


            // //var result3 = sessionFactory.GetResultCriteria<EstudioComplementario>(expressions);
            // //criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            // //var estudioComplementario = result3.FirstOrDefault(); //criteria.UniqueResult<EstudioComplementario>();
            // if (consejeria.EstudioComplementario != null)
            // {
            //     this.consejeriaDtoMapper.MapEstudioComplementarioDto(estudioComplementarioDto, consejeria.EstudioComplementario);
            // }
            // consejeriaDatosDto.EstudioComplementarioDto = estudioComplementarioDto;

            // //criteria = sessionFactory.CreateCriteria<EntrevistaPostAborto>();
            // //criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            // //var result4 = sessionFactory.GetResultCriteria<EntrevistaPostAborto>(expressions);
            // //var entrevistaPostAborto = result4.FirstOrDefault();//criteria.UniqueResult<EntrevistaPostAborto>();

            // if (consejeria.EntrevistaPostAborto != null)
            // {
            //     this.consejeriaDtoMapper.MapEntrevistaPostAbortoDto(entrevistaPostAbortoDto, consejeria.EntrevistaPostAborto);
            // }
            // consejeriaDatosDto.EntrevistaPostAbortoDto = entrevistaPostAbortoDto;

            // return consejeriaDatosDto;
            #endregion
            var criteria = sessionFactory.CreateCriteria<ConsejeriaEntidad>();
            criteria.Add(Restrictions.Eq("Id", id));
            var consejeria = criteria.UniqueResult<ConsejeriaEntidad>();
            this.consejeriaDtoMapper.MapConsejeriaToDto(consejeriaDto, consejeria);

            consejeriaDatosDto.ConsejeriaDto = consejeriaDto;

            criteria = sessionFactory.CreateCriteria<GestaActual>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var gestaActual = criteria.UniqueResult<GestaActual>();

            if (gestaActual != null)
            {
                this.consejeriaDtoMapper.MapGestaActualToDto(gestaActualDto, gestaActual);
            }
            consejeriaDatosDto.GestaActualDto = gestaActualDto;

            if (consejeria.Usuaria != null)
            {
                this.consejeriaDtoMapper.MapUsuariaToDto(usuariaDto, consejeria.Usuaria);
                usuariaDto.ConsejeriaId = consejeria.Id;
            }
            consejeriaDatosDto.UsuariaDto = usuariaDto;

            criteria = sessionFactory.CreateCriteria<Antecedente>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var antecedente = criteria.UniqueResult<Antecedente>();

            if (antecedente != null)
            {
                this.consejeriaDtoMapper.MapAntecedenteToDto(antecedenteDto, antecedente);
            }
            consejeriaDatosDto.AntecedenteDto = antecedenteDto;


            criteria = sessionFactory.CreateCriteria<EstudioComplementario>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var estudioComplementario = criteria.UniqueResult<EstudioComplementario>();
            if (estudioComplementario != null)
            {
                this.consejeriaDtoMapper.MapEstudioComplementarioDto(estudioComplementarioDto, estudioComplementario);
            }
            consejeriaDatosDto.EstudioComplementarioDto = estudioComplementarioDto;

            criteria = sessionFactory.CreateCriteria<EntrevistaPostAborto>();
            criteria.Add(Restrictions.Eq("Consejeria.Id", consejeria.Id));
            var entrevistaPostAborto = criteria.UniqueResult<EntrevistaPostAborto>();

            if (entrevistaPostAborto != null)
            {
                this.consejeriaDtoMapper.MapEntrevistaPostAbortoDto(entrevistaPostAbortoDto, entrevistaPostAborto);
            }
            consejeriaDatosDto.EntrevistaPostAbortoDto = entrevistaPostAbortoDto;

            return consejeriaDatosDto;
        }

        // POST api/pacientes
        [HttpPost]
        public void Post([FromBody]ConsejeriaDatosDto value)
        {
            ConsejeriaEntidad ussuaria = new ConsejeriaEntidad();
            //ussuaria.Apellido = "cardenas";
            //ussuaria.Direccion = "la pasppp";
            //ussuaria.Edad = 22;
            //ussuaria.FechaNacimiento = System.DateTime.Now;
            //ussuaria.Nombre = "pedra";
            //ussuaria.Telefono = "333333";

            this.sessionFactory.SaveOrUpdateEntity(ussuaria);
        }

        //[FromBody] works for properly formatted content – ie. JSON, XML and whatever other media formatters that are configured in the Conneg pipeline. It requires that the data is formatted in JSON or XML. [FromBody] also works with a single POST form variable in urlencoded form data, but because it only works with a single parameter it’s kind of limited for that.
        
        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostConsejeria([FromBody]  ConsejeriaDto consejeriaDto)
        {
            var consejeria = this.consejeriaDtoMapper.MapDtoToConsejeria(consejeriaDto);
            this.sessionFactory.SaveOrUpdateEntity(consejeria);
            return this.GetCompleta(consejeria.Id);
        }

        [HttpPost("[action]")]
        public int PostConsejeriaNew([FromBody] ConsejeriaNewDatos consejeriaNewDatos)
        {
            var usuaria = this.consejeriaDtoMapper.MapDtoToUsuaria(new UsuariaDto {
                Apellido = consejeriaNewDatos.Apellido,
                Direccion = consejeriaNewDatos.Direccion,
                Edad = consejeriaNewDatos.Edad,
                Nombre = consejeriaNewDatos.Nombre,
                NacionalidadId = consejeriaNewDatos.NacionalidadId,
                FechaNacimiento = consejeriaNewDatos.FechaNacimiento,
                Telefono = consejeriaNewDatos.Telefono
            });
            this.sessionFactory.SaveOrUpdateEntity(usuaria);

            var criteria = this.sessionFactory.CreateCriteria<ConsejeriaEntidad>();
            criteria.SetProjection(Projections.Max("Numero"));
            var numero = (int)criteria.UniqueResult();
            var consejeria = this.consejeriaDtoMapper.MapDtoToConsejeria(new ConsejeriaDto {
                FechaIngreso = DateTime.Now,
                Numero = numero + 1,
                Observacion = consejeriaNewDatos.Observacion,
                Usuarie1Id = consejeriaNewDatos.Usuarie1Id,
                Usuarie2Id = consejeriaNewDatos.Usuarie2Id,
            });
            consejeria.Usuaria = usuaria;
            this.sessionFactory.SaveOrUpdateEntity(consejeria);
            return consejeria.Id;
        }

        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostUsuaria([FromBody] UsuariaDto usuariaDto)
        {
            var usuaria = this.consejeriaDtoMapper.MapDtoToUsuaria(usuariaDto);
            this.sessionFactory.SaveOrUpdateEntity(usuaria);
            return this.GetCompleta(usuariaDto.ConsejeriaId);
        }
        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostAntecedente([FromBody] AntecedenteDto antecedenteDto)
        {
            var antecedente = this.consejeriaDtoMapper.MapDtoToAntecedente(antecedenteDto);
            this.sessionFactory.SaveOrUpdateEntity(antecedente);
            return this.GetCompleta(antecedenteDto.ConsejeriaId);
        }

        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostGestaActual([FromBody] GestaActualDto gestaActualDto)
        {
            var gestaActual = this.consejeriaDtoMapper.MapDtoToGestaActual(gestaActualDto);
            this.sessionFactory.SaveOrUpdateEntity(gestaActual);
            return this.GetCompleta(gestaActualDto.ConsejeriaId);
        }

        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostEstudioComplementario([FromBody] EstudioComplementarioDto estudioComplementarioDto)
        {
            var estudioComplementario = this.consejeriaDtoMapper.MapDtoToEstudioComplementario(estudioComplementarioDto);
            this.sessionFactory.SaveOrUpdateEntity(estudioComplementario);
            return this.GetCompleta(estudioComplementarioDto.ConsejeriaId);
        }

        [HttpPost("[action]")]
        public ConsejeriaDatosDto PostEntrevistaPostAborto([FromBody] EntrevistaPostAbortoDto entrevistaPostAbortoDto)
        {
            var entrevistaPostAborto = this.consejeriaDtoMapper.MapDtoToEntrevistaPostAborto(entrevistaPostAbortoDto);
            this.sessionFactory.SaveOrUpdateEntity(entrevistaPostAborto);
            return this.GetCompleta(entrevistaPostAbortoDto.ConsejeriaId);
        }

        // PUT api/pacientes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ConsejeriaEntidad value)
        {
        }

        // DELETE api/pacientes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class ConsejeriaNewDatos
    {
        public DateTime FechaIngreso { get; set; }
        public string Usuaria { get; set; }
        public int Usuarie1Id { get; set; }
        public int Usuarie2Id { get; set; }
        public int UsuariaId { get; set; }
        public string Observacion { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int NacionalidadId { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
    }
}
