using Shopping.Business.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shopping.Business.Services
{
    public class ShoppingListService
    {
        public IEnumerable<ShoppingItem> GetList()
        {
            return new List<ShoppingItem>
            {
                new ShoppingItem { Name = "Carrots"}
            };
        }
    }
}
