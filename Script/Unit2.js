function Test1()
{
  Browsers.Item(btChrome).Navigate("https://grb.poc.reflex-logistics.com/reflex/env/test");
  let page = Aliases.browser.pageReflexTest;
  let textbox = page.textboxUser;
  textbox.Click(37, 8);
  textbox.Keys("test3");
  let passwordBox = page.passwordboxPassword;
  passwordBox.Click(32, 7);
  passwordBox.SetText(Project.Variables.Password1);
  page.panelGreatBearReflex.Click(478, 107);
}

function Test2()
{
  Browsers.Item(btChrome).Navigate("https://grb.poc.reflex-logistics.com/reflex/env/test");
  let browser = Aliases.browser;
  let page = browser.pageReflexTest;
  page.buttonG7c.ClickButton();
  page.buttonYes.ClickButton();
  page = browser.pageReflexTest2;
  page.Wait();
  page.linkNewSession.Click();
}

When("user clicks on the {arg} button", function (param1){
  if(param1=="sumbit"){
    Sys.Browser("chrome").Page("https://grb.poc.reflex-logistics.com/reflex/env/test").Panel(2).Panel(0).FindElement("//span[@id='login_ok']").Click()
  }
  if(param=="logout"){
    Aliases.browser.pageReflexTest.FindElement("//div[@id='BarreHaut']//button[6]").Click();
  Aliases.browser.pageReflexTest.FindElement("//button[@data-dojo-attach-point='btnYesNode']").Click();
  Aliases.browser.Page("https://grb.poc.reflex-logistics.com/reflex/logout.jsp").Panel(0).Link("link").Click();
  }
});
