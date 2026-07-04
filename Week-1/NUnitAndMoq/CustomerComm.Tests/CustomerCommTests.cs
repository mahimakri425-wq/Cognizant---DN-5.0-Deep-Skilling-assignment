using Moq;
using NUnit.Framework;
using CustomerCommLib;

namespace CustomerComm.Tests;

[TestFixture]
public class CustomerCommTests
{
    private Mock<IMailSender> _mockMailSender = null!;
    private CustomerComm _customerComm = null!;

    [OneTimeSetUp]
    public void Init()
    {
        _mockMailSender = new Mock<IMailSender>();

        _mockMailSender
            .Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>()))
            .Returns(true);

        _customerComm = new CustomerComm(_mockMailSender.Object);
    }

    [TestCase]
    public void SendMailToCustomer_ReturnsTrue()
    {
        bool result = _customerComm.SendMailToCustomer();

        Assert.That(result, Is.True);
    }
}