namespace EcommerceSearch
{
    class BinarySearch
    {
        public static Product Search(Product[] products, int productId)
        {
            int low = 0;
            int high = products.Length - 1;

            while (low <= high)
            {
                int mid = (low + high) / 2;

                if (products[mid].ProductId == productId)
                    return products[mid];

                if (products[mid].ProductId < productId)
                    low = mid + 1;
                else
                    high = mid - 1;
            }

            return null;
        }
    }
}