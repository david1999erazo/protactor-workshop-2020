import { browser } from 'protractor';
import { MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  SignInStepPage,
  BankPaymentPage,
  OrderSummaryPage} from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.addToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.clickProceedToPaymentButton();
    await(browser.sleep(3000));
    await summaryStepPage.clickCheckOut();
    await(browser.sleep(3000));

    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToCheckOut();
    await(browser.sleep(3000));

    await shippingStepPage.acceptTermsAndContinue();
    await(browser.sleep(3000));

    await paymentStepPage.clickPayByBank();
    await(browser.sleep(3000));
    await bankPaymentPage.goToConfirmOrder();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getOrderStatus())
      .toBe('Your order on My Store is complete.');
  });
});
