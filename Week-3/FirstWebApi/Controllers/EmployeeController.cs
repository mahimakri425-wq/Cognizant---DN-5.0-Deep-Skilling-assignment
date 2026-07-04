using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FirstWebApi.Models;
using FirstWebApi.Filters;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    // [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = GetStandardEmployeeList();

        private static List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(1998,5,20),

                    Department = new Department
                    {
                        Id = 1,
                        Name = "IT"
                    },

                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "C#" },
                        new Skill { Id = 2, Name = "SQL" }
                    }
                },

                new Employee
                {
                    Id = 2,
                    Name = "David",
                    Salary = 60000,
                    Permanent = false,
                    DateOfBirth = new DateTime(1999,7,10),

                    Department = new Department
                    {
                        Id = 2,
                        Name = "HR"
                    },

                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "Java" },
                        new Skill { Id = 4, Name = "Python" }
                    }
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
            {
                return BadRequest("Invalid employee id");
            }

            emp.Name = employee.Name;
            emp.Salary = employee.Salary;
            emp.Permanent = employee.Permanent;
            emp.Department = employee.Department;
            emp.Skills = employee.Skills;
            emp.DateOfBirth = employee.DateOfBirth;

            return Ok(emp);
        }
    }
}