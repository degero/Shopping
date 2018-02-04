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
                new ShoppingItem { Id= 1, Name = "Carrots"},
                new ShoppingItem { Id= 2, Name = "Bananas"},
                new ShoppingItem { Id =3, Name = "Eggplants"},
                new ShoppingItem { Id= 4, Name = "Adult Daipers"},
                new ShoppingItem { Id= 5, Name = "Shotgun"},
                new ShoppingItem { Id= 6, Name = "AK47"}
            };
        }
    }
}
