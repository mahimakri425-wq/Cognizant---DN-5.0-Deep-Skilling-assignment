using System;

namespace FactoryMethodPattern
{
    public class PdfDocument : Document
    {
        public void Open()
        {
            Console.WriteLine("PDF Document Opened");
        }
    }
}