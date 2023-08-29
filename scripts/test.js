// test nft marketplace

const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require("fs");
const { id } = require("ethers/lib/utils");
const utils = ethers.utils;
require("dotenv").config();
// const { WETH } = require("@uniswap/v2-periphery");
// comandline: npx hardhat test scripts/test.js --network shibarium

const TokenFilePath = "./deployment/Token.json";
const tokenData = fs.readFileSync(TokenFilePath);
const tokenJSON = JSON.parse(tokenData);
// const tokenAddress = tokenJSON.address;
const tokenAddress = "0xe3fa865D7591329E8eAFc8b2382a5FE9509F8a5f";

const addres_recipient = "0xf30607e0cdEc7188d50d2bb384073bF1D5b02fA4";

describe("ShibLock ", function () {
  beforeEach(async function () {
    const Token = await ethers.getContractFactory("SHIBLOCK");
    token = await Token.attach(tokenAddress);

    [owner] = await ethers.getSigners();
    console.log("owner: ", owner.address);
    console.log("token: ", token.address);
  });

  describe("Token", function () {
    // it("should return all holders", async function () {
    //   const result = await token.getallHolders();
    //   console.log("result: ", result);
    //   for (let i = 0; i < result.length; i++) {
    //     const element = result[i];
    //     const balance = await token.getPercentageOfTotalSupply(element);
    //     console.log("balance: ", balance.toString());
    //   }
    // });
    // it("should addBots", async function () {
    //   const result = await token.delBots([
    //     "0x60fDD2AA46426C798D7063Fb830215b642714FAF",
    //   ]);
    //   console.log("result: ", result);
    // });
    // it("should removeLimits", async function () {
    //   const result = await token.removeLimits();
    //   console.log("result: ", result);
    // });
    it("should manualSwap", async function () {
      const result = await token.manualSwap();
      console.log("result: ", result);
    });
    // it("should delBots", async function () {
    //   const result = await token.delBots([
    //     "0x60fDD2AA46426C798D7063Fb830215b642714FAF",
    //   ]);
    //   console.log("result: ", result);
    // });
  });
});

// it("should transfer token", async function () {
//   const amount = 100;
//   const amountWei = utils.parseEther(amount.toString());
//   const result = await token.transfer(addres_recipient, amountWei);
//   console.log("result: ", result);
// });
