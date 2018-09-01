using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class EstudioComplementarioMap : ClassMap<EstudioComplementario>
    {
        public EstudioComplementarioMap()
        {
            Table("EstudiosComplementarios");
            Id(x => x.Id);
            References(x => x.Consejeria).Not.Nullable();
            Map(x => x.Eco1Observacion);
            Map(x => x.Eco1Fecha);
            Map(x => x.Eco1EG);
            Map(x => x.Eco1LFC);
            Map(x => x.Eco1Embrion);
            Map(x => x.Eco1Saco);
            Map(x => x.Eco1Ubicacion);
            Map(x => x.Eco1Normoincerto);
            Map(x => x.Eco1Ectopico);
            Map(x => x.Eco2Observacion);
            Map(x => x.Eco2Fecha);
            Map(x => x.Eco2EG);
            Map(x => x.Eco2LFC);
            Map(x => x.Eco2Embrion);
            Map(x => x.Eco2Saco);
            Map(x => x.Eco2Ubicacion);
            Map(x => x.Eco2Normoincerto);
            Map(x => x.Eco2Ectopico);
            Map(x => x.LabFecha);
            Map(x => x.LabGB);
            Map(x => x.LabGR);
            Map(x => x.LabHb);
            Map(x => x.LabHto);
            Map(x => x.LabGrupo);
            Map(x => x.LabRh);
        }
    }
}
