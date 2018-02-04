using Microsoft.AspNetCore.Mvc;
using Shopping.Business.DTO;
using Shopping.Business.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping.Controllers
{
  [Route("api/[controller]")]
  public class ShoppingListController
  {
    private ShoppingListService _shoppingListService;

    public ShoppingListController()//ShoppingListService shoppingListService)
    {
      _shoppingListService = new ShoppingListService();
    }

    // GET api/values
    [HttpGet]
    public IEnumerable<ShoppingItem> Get()
    {
      return _shoppingListService.GetList();
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ShoppingItem Get(int id)
    {
      var items =_shoppingListService.GetList();
      return items.Where(r => r.Id == id).FirstOrDefault();
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
