import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Count", () => {
  async function deployCount() {
    const initValue = 3;
    const [owner] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(initValue);

    return {
      counter,
      initValue,
    };
  }

  it("Should set the right amount", async () => {
    const { counter, initValue } = await loadFixture(deployCount);

    expect(await counter.count()).equal(initValue);
  });

  it("Should increase by one", async () => {
    const { counter, initValue } = await loadFixture(deployCount);
    await counter.inc();
    expect(await counter.count()).equal(initValue + 1);
  });

  it("Should decrease by one", async () => {
    const { counter, initValue } = await loadFixture(deployCount);
    await counter.dec();
    expect(await counter.count()).equal(initValue - 1);
  });

  it("Should add amount", async () => {
    const { counter, initValue } = await loadFixture(deployCount);
    await counter.add(5);
    expect(await counter.count()).equal(initValue + 5);
  });

  it("Should get count", async () => {
    const { counter, initValue } = await loadFixture(deployCount);
    expect(await counter.getCount()).equal(initValue);
  });
});
