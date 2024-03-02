Then("user closes the browser", function (){
  var browser = Sys.Browser();
  browser.Close();
});

When("user enter username as {arg}", function (param1){
  NameMapping.Sys.browser.pageReflexTest.textboxUser.SetText(param1);
  //Sys.Browser("chrome").Page("https://grb.poc.reflex-logistics.com/reflex/env/test").Panel(2).Panel(0).Textbox("user").SetText(param1);
});

When("user enter password as {arg}", function (param1){
  Sys.Browser("chrome").Page("https://grb.poc.reflex-logistics.com/reflex/env/test").Panel(2).Panel(0).PasswordBox("password").SetText(param1);
});

When("user clicks on the submit button", function (){
  Sys.Browser("chrome").Page("https://grb.poc.reflex-logistics.com/reflex/env/test").Panel(2).Panel(0).FindElement("//span[@id='login_ok']").Click();
});

When("user clicks on the logout button", function (){
  Aliases.browser.pageReflexTest.FindElement("//div[@id='BarreHaut']//button[6]").Click();
  Aliases.browser.pageReflexTest.FindElement("//button[@data-dojo-attach-point='btnYesNode']").Click();
  Aliases.browser.Page("https://grb.poc.reflex-logistics.com/reflex/logout.jsp").Panel(0).Link("link").Click();
});
