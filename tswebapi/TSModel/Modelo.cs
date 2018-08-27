using Microsoft.EntityFrameworkCore;
using TSModel.Dominio;

namespace TSModel
{
    public class TsModelo : DbContext
    {
        public TsModelo(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Shorten key length for Identity

            //http://ltuttini.blogspot.com/2013/08/entity-frameworkcode-first-herencia.html

            modelBuilder.Entity<Persona>(entity => {
                entity.HasKey(m => m.Id);
                entity.Property(m => m.Apellido).HasMaxLength(200).IsRequired(true);
                entity.Property(m => m.Nombre).HasMaxLength(250).IsRequired(true);
                entity.Property(m => m.Edad).IsRequired(true);
            });

            modelBuilder.Entity<Usuaria>(entity => {
                entity.HasKey(m => m.Id);
                entity.Property(m => m.Apellido).HasMaxLength(200).IsRequired(true);
                entity.Property(m => m.Nombre).HasMaxLength(250).IsRequired(true);
                entity.Property(m => m.Edad).IsRequired(true);
            });
            //modelBuilder.Entity<IdentityRole>(entity => {
            //    entity.Property(m => m.Name).HasMaxLength(127);
            //    entity.Property(m => m.NormalizedName).HasMaxLength(127);
            //});
            //modelBuilder.Entity<IdentityUserLogin<string>>(entity =>
            //{
            //    entity.Property(m => m.LoginProvider).HasMaxLength(127);
            //    entity.Property(m => m.ProviderKey).HasMaxLength(127);
            //});
            //modelBuilder.Entity<IdentityUserRole<string>>(entity =>
            //{
            //    entity.Property(m => m.UserId).HasMaxLength(127);
            //    entity.Property(m => m.RoleId).HasMaxLength(127);
            //});
            //modelBuilder.Entity<IdentityUserToken<string>>(entity =>
            //{
            //    entity.Property(m => m.UserId).HasMaxLength(127);
            //    entity.Property(m => m.LoginProvider).HasMaxLength(127);
            //    entity.Property(m => m.Name).HasMaxLength(127);

            //});
            //modelBuilder.Entity<ProductCategory>()
            //    .HasKey(x => new { x.ProductId, x.CategoryId });

            //modelBuilder.Entity<DataTypesVariable>(eb =>
            //{
            //    // Need to specify the type until EF#12212 is fixed
            //    eb.Property(e => e.TypeJsonArray).HasColumnType("json");
            //    eb.Property(e => e.TypeJsonArrayN).HasColumnType("json");
            //    eb.Property(e => e.TypeJsonObject).HasColumnType("json");
            //    eb.Property(e => e.TypeJsonObjectN).HasColumnType("json");
            //});

            //modelBuilder.Entity<GeneratedContact>(eb =>
            //{
            //    // Need to specify the type until EF#12212 is fixed
            //    eb.Property(e => e.Names).HasColumnType("json");
            //    eb.Property(e => e.ContactInfo).HasColumnType("json");
            //});

            // Add our models fluent APIs
            ModeloMeta.OnModelCreating(modelBuilder);
            //GeneratedContactMeta.OnModelCreating(modelBuilder);
            //PeopleMeta.OnModelCreating(modelBuilder);

            //if (AppConfig.EfSchema != null)
            //{
            //    // Generates all models in a different schema
            //    modelBuilder.HasDefaultSchema(AppConfig.EfSchema);
            //}

        }

        public DbSet<Dominio.Usuaria> Pacientes { get; set; }
    }
}
