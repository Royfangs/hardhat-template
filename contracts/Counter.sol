// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint public count;

    event AddCount(address indexed from);

    constructor(uint _count) {
        count = _count;
    }

    function inc() public {
        count += 1;
    }

    function dec() public {
        count -= 1;
    }

    function add(uint amount) public {
        count += amount;
        emit AddCount(msg.sender);
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
