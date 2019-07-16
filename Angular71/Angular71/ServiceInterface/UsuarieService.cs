using ServiceStack;
using ServiceStack.OrmLite;
using System;
using TSModel.Dominio;
using MyApp.ServiceModel;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace MyApp.ServiceInterface
{
  public class UsuarieService : Service
  {
    public IAutoQueryDb AutoQuery { get; set; }

    public object Get(GetUsuaries request)
    {
      var alumnos = Db.Select<Usuarie>();
      return alumnos;
    }
    public object Get(GetUsuarieById request)
    {
      return Db.SingleById<Usuarie>(request.Id);
    }

    public object Post(PostAuthenticate request)
    {
      var user = Db.Single<Usuarie>(u => u.UserName == request.UserName);

      //https://www.youtube.com/watch?v=vEU9SDmIvVY
      if (user.PasswordHash == null)
      {
        byte[] hash;
        byte[] salt;
        CreatePasswordHash(user.Password, out hash, out salt);
        user.PasswordHash = hash;
        user.PasswordSalt = salt;
        Db.Save(user);
      }
      // check if password is correct
      if (!VerifyPasswordHash(request.PassWord, user.PasswordHash, user.PasswordSalt))
      {
        return null;
      }
      else
      {

        var claims = new[]
        {
          new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Mysuperclave"));
        var tokenjwt = new JwtSecurityToken(
          issuer: "http://localhost:4200/",
          audience: "http://localhost:5000/",
          expires: DateTime.UtcNow.AddHours(4),
          claims: claims,
          signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
          );

        return new { token = tokenjwt, expiration = tokenjwt.ValidTo, nombre = user.Nombre + " " + user.Apellido };
        //var expiryDuration = int.Parse(_configuration["Jwt:ExpiryDuration"]);

        //var tokenDescriptor = new SecurityTokenDescriptor
        //{
        //  Issuer = null,              // Not required as no third-party is involved
        //  Audience = null,            // Not required as no third-party is involved
        //  IssuedAt = DateTime.UtcNow,
        //  NotBefore = DateTime.UtcNow,
        //  Expires = DateTime.UtcNow.AddMinutes(expiryDuration),
        //  Subject = new ClaimsIdentity(new List {
        //        new Claim("userid", user.Id.ToString()),
        //        new Claim("role", user.Role)
        //    }),
        //  SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(signingKey), SecurityAlgorithms.HmacSha256Signature)
        //};
        //var jwtTokenHandler = new JwtSecurityTokenHandler();
        //var jwtToken = jwtTokenHandler.CreateJwtSecurityToken(tokenDescriptor);
        //var token = jwtTokenHandler.WriteToken(jwtToken);
        //return token;

        //return Db.Single<Usuarie>(u => u.UserName == request.UserName && u.Password == request.PassWord);
      }
    }

    private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

      using (var hmac = new System.Security.Cryptography.HMACSHA512())
      {
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }

    private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
    {
      if (password == null) throw new ArgumentNullException("password");
      if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
      if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
      if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

      using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
      {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        for (int i = 0; i < computedHash.Length; i++)
        {
          if (computedHash[i] != storedHash[i]) return false;
        }
      }

      return true;
    }

    public object Post(PostUsuarie request)
    {

      byte[] passwordHash, passwordSalt;
      CreatePasswordHash(request.Password, out passwordHash, out passwordSalt);

      request.PasswordHash = passwordHash;
      request.PasswordSalt = passwordSalt;

      request.Id = (int)Db.Insert<Usuarie>(request, true);
      return request;
    }

    public object Put(PostUsuarie request)
    {
      //var userdb = Db.SingleById<TSModel.Dominio.Usuarie>(request.Id);

      //por ahora la cambio siempre la clave.
      byte[] hash;
      byte[] salt;
      CreatePasswordHash(request.Password, out hash, out salt);
      request.PasswordHash = hash;
      request.PasswordSalt = salt;

      Db.Update<Usuarie>(request);
      return request;
    }

    public object Delete(DeleteUsuarie request)
    {
      try
      {
        Db.DeleteById<Usuarie>(request.Id);
        return true;
      }
      catch (Exception)
      {
        return false;
      }
    }
  }
}
