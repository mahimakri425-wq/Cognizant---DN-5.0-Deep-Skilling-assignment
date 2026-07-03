using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests;

[TestFixture]
public class CalculatorTests
{
    private SimpleCalculator? calculator;

    [SetUp]
    public void Setup()
    {
        calculator = new SimpleCalculator();
    }

    [TearDown]
    public void TearDown()
    {
        calculator!.AllClear();
    }

    [TestCase(5, 5, 10)]
    [TestCase(10, 20, 30)]
    [TestCase(25, 15, 40)]
    public void TestAddition(double a, double b, double expected)
    {
        double actual = calculator!.Addition(a, b);

        Assert.That(actual, Is.EqualTo(expected));
    }
}