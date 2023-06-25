pragma solidity ^0.8.0;

interface Template {
    function sendEther() external;
}

contract MyContract {
    // string public name = keccak256("mohammed");
    address public immutable Owner;

    constructor() {
        Owner = msg.sender;
    }

    modifier OnlyOwner() {
        require(msg.sender == Owner, "you're not owner");
        _; 
    }

    function getEther() public OnlyOwner {}
}