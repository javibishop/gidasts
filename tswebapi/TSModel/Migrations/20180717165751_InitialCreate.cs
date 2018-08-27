using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TSModel.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pacientes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(maxLength: 250, nullable: false),
                    Apellido = table.Column<string>(maxLength: 200, nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacientes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TsAdmin",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(maxLength: 10, nullable: true),
                    Password = table.Column<string>(maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TsAdmin", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TsMenu",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TsMenu", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TsRole",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TsRole", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TsAdminMenu",
                columns: table => new
                {
                    AdminId = table.Column<int>(nullable: false),
                    MenuId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TsAdminMenu", x => new { x.AdminId, x.MenuId });
                    table.ForeignKey(
                        name: "FK_TsAdminMenu_TsAdmin_AdminId",
                        column: x => x.AdminId,
                        principalTable: "TsAdmin",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TsAdminMenu_TsMenu_MenuId",
                        column: x => x.MenuId,
                        principalTable: "TsMenu",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TsAdminRole",
                columns: table => new
                {
                    AdminId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TsAdminRole", x => new { x.AdminId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_TsAdminRole_TsAdmin_AdminId",
                        column: x => x.AdminId,
                        principalTable: "TsAdmin",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TsAdminRole_TsRole_RoleId",
                        column: x => x.RoleId,
                        principalTable: "TsRole",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TsAdminMenu_MenuId",
                table: "TsAdminMenu",
                column: "MenuId");

            migrationBuilder.CreateIndex(
                name: "IX_TsAdminRole_RoleId",
                table: "TsAdminRole",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pacientes");

            migrationBuilder.DropTable(
                name: "TsAdminMenu");

            migrationBuilder.DropTable(
                name: "TsAdminRole");

            migrationBuilder.DropTable(
                name: "TsMenu");

            migrationBuilder.DropTable(
                name: "TsAdmin");

            migrationBuilder.DropTable(
                name: "TsRole");
        }
    }
}
