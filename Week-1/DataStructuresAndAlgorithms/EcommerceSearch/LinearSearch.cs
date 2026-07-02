namespace EcommerceSearch
{
    class LinearSearch
    {
        public static Product Search(Product[] products, int productId)
        {
            foreach (Product product in products)
            {
                if (product.ProductId == productId)
                {
                    return product;
                }
            }

            return null;
        }
    }
}