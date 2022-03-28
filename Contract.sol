pragma solidity ^0.8.0;

interface Template {
    function sendEther() external {};
}

contract MyContract {
    string public name = "mohammed raazy";
    address payable public constant Owner = "0x99";

    constructor() {
        Owner = msg.sender;
    }

    modifier OnlyOwner() {
        require(msg.sender == Owner, "you're not owner");
        _; 
    }

    function getEther() public OnlyOwner {}
}