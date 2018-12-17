using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TSModel
{
    public static class ModeloMeta
    {
        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TsAdmin>(entity =>
            {
                entity.Property(m => m.Username)
                    .HasMaxLength(10);

                entity.Property(m => m.Password)
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<TsAdminRole>(entity =>
            {
                entity.HasKey(am => new { am.AdminId, am.RoleId });

                entity.HasOne(am => am.Admin)
                    .WithMany(a => a.AdminRoles)
                    .HasForeignKey(am => am.AdminId);

                entity.HasOne(am => am.Role)
                    .WithMany(m => m.AdminRoles)
                    .HasForeignKey(am => am.RoleId);
            });

            modelBuilder.Entity<TsAdminMenu>(entity =>
            {
                entity.HasKey(am => new { am.AdminId, am.MenuId });

                entity.HasOne(am => am.Admin)
                    .WithMany(a => a.AdminMenus)
                    .HasForeignKey(am => am.AdminId);

                entity.HasOne(am => am.Menu)
                    .WithMany(m => m.AdminMenus)
                    .HasForeignKey(am => am.MenuId);
            });

        }
    }

    public class TsAdmin
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public List<TsAdminRole> AdminRoles { get; set; }
        public List<TsAdminMenu> AdminMenus { get; set; }
    }

    public class TsRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<TsAdminRole> AdminRoles { get; set; }
    }

    public class TsMenu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<TsAdminMenu> AdminMenus { get; set; }
    }

    public class TsAdminRole
    {
        public int AdminId { get; set; }
        public int RoleId { get; set; }
        public TsAdmin Admin { get; set; }
        public TsRole Role { get; set; }
    }

    public class TsAdminMenu
    {
        public int AdminId { get; set; }
        public int MenuId { get; set; }
        public TsAdmin Admin { get; set; }
        public TsMenu Menu { get; set; }
    }
}

