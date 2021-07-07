/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    $,
    write,
    closeBrowser,
    goto,
    dropDown,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    waitFor,
    button
} = require('taiko');
const assert = require("assert").strict;
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless,
        args: [
            '--no-sandbox',
            '--start-fullscreen',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-zygote'],
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Add task <item>", async (item) => {
    await write(item, into(textBox("What needs to be done?")));
    await press('Enter');
});

step("View <type> tasks", async function (type) {
    await click(link(type));
});

step("Complete tasks <table>", async function (table) {
    for (var row of table.rows) {
        await click(checkBox(toLeftOf(row.cells[0])));
    }
});

step("Clear all tasks", async function () {
    await evaluate(() => localStorage.clear());
});

step("Open modanisa application", async function () {
    await goto("todo.taiko.dev");
});

step("Must not have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(!await text(row.cells[0]).exists(0, 0));
    }
});

step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});

step("Add tasks <table>", async function (table) {
    for (var row of table.rows) {
        await write(row.cells[0]);
        await press('Enter');
    }
});

step("Go to modanisa",async () => {
    
    await goto(process.env.base_url)
    
   
});




step("If there is popup close <key>", async (key) => { 

    await waitFor(3000)
    //await click($('div[id="insider-notification-content"] i[id*="icon-close-button"]'));
    const isExist = await $(key).exists()
    console.info("' " + isExist + " '" + " => Wanted element")

    if (isExist) {

        await click($(key))
        console.info("' " + key + " '" + " => Wanted element was clicked")
    } else {

        console.info("' " + key + " '" + " => Wanted element is not clicked")
    }
   
    //const isExist = await button("div[id='insider-notification-content'] i[id*='icon-close-button']").exists()
    //console.info("' " + isExist + " '" + " => Wanted element")
    
});

  step("Browser wait <second>", async (second) => {

    await waitFor(second)
    console.info("' " + second + " '" + " => Milliseconds were awaited")
  })

  step("Click <key> element", async(key) => {

    await click($(key))

  })

  step("Login e-mail <email> with <element1> and password <pw> with <element2>", async(email,element1,pw,element2) => {
   
    await waitFor(1000)
    await click($(element1))
    await waitFor(1000)
    await write(email)
    await waitFor(1000)
    await click($(element2))
    await waitFor(1000)
    await write(pw)

  })

  step("Write <key>", async(key)=> {

    await write(key)

  })

  step("Compare price <price1> basket price <price2>",async(price1,price2)=>{

    const price1text = await $(price1).text()
    console.log("Price of selected clothes in page ->"+price1text)
    await waitFor(1000)
    await click($("select[class='productSizeSelect productSizeSelect-type1']"))
    await waitFor(1500)
    await dropDown({class:'productSizeSelect productSizeSelect-type1'}).select('52')
    //await dropDown({element})
    // await click($(element)) and "select[class='productSizeSelect productSizeSelect-type1'] option[class*='size size']:not(.disabled)"
    console.log("Size selected")
    await waitFor(2000)
    await click($("a[class*='basket-button']"))
    console.log("Added to basket")
    await waitFor(2000)
    await click($("a[id='cart']"))
    console.log("Open basket page")
    const price2text = await $(price2).text()
    console.log("Price of selected clothes in basket" + price2text)
    await waitFor(2000)
    assert.equal(price1text,price2text);
    console.log("!!!!Priceses are same.!!!!")
  })

  
  
  step("Delete item from cart <key1> <key2>",async(key1,key2)=>{
    
    await click($(key1))
    console.log("Click Remove İcon")
    await waitFor(1500)
    await click($(key2))
    console.log("Remove Done")
    await waitFor(2000)

  })
  

  step("Rasgele abiye seç", async()=>{



  })

  step("Must have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(await text(row.cells[0]).exists());
    }
});