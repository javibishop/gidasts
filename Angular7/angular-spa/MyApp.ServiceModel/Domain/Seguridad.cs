using System.Collections.Generic;

namespace TSModel.Dominio
{
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
