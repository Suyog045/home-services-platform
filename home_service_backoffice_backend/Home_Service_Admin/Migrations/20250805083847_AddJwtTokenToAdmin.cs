using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Home_Service_Admin.Migrations
{
    /// <inheritdoc />
    public partial class AddJwtTokenToAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "JwtToken",
                table: "Admins",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "JwtToken", "PasswordHash" },
                values: new object[] { "", "$2a$11$RSzTPv48yKCY0PUHKr5GceC6Aa0uLrLiIZXHNnPQeArOcUyiwBxXe" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JwtToken",
                table: "Admins");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "Id",
                keyValue: 1,
                column: "PasswordHash",
                value: "$2a$11$DLoEMR1NlyLucofKA66wxOZ3NtDoI9b8eQb4DoyaQwg348n/h/MqO");
        }
    }
}
