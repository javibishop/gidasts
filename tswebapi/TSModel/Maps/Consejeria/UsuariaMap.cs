﻿using FluentNHibernate.Mapping;
using TSModel.Dominio.Consejeria;

namespace TSModel.Maps.Consejeria
{
    public class UsuariaMap : SubclassMap<Usuaria>
    {
        public UsuariaMap()
        {
            Table("Usuarias");
            KeyColumn("Id");
            Map(x => x.UsuarioCentroSalud);
            Map(x => x.ParejaConViviente);
            Map(x => x.ParejaNoConViviente);
            Map(x => x.SinPareja);
            Map(x => x.TelefonoAlternativo);
            Map(x => x.ConocePorConocido);
            Map(x => x.ConocePorUS);
            Map(x => x.ConocePorReferente);
            Map(x => x.ConocePorOrganizacion);
            Map(x => x.ConocePorMedios);
            Map(x => x.ConocePorUsuarioConcejeria);
            Map(x => x.ConocePorInsititucionSalud);
            Map(x => x.ConocePorInsititucionSaludObs);
            Map(x => x.ConocePorOtro);
            Map(x => x.NivelInstruccion);
            Map(x => x.NivelInstruccionEstado);
        }
    }
}
