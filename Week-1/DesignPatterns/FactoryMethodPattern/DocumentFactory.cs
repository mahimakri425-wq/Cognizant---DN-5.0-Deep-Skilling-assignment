namespace FactoryMethodPattern
{
    public abstract class DocumentFactory
    {
        public abstract Document CreateDocument();
    }

    public class WordFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            return new WordDocument();
        }
    }

    public class PdfFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            return new PdfDocument();
        }
    }

    public class ExcelFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            return new ExcelDocument();
        }
    }
}