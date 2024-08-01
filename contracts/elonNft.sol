// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "hardhat/console.sol";
import  "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract elonNFT is ERC721URIStorage {
    uint private tokenIds;
    constructor() ERC721("ELON MUSK", "ELON") {}

    function mintNFT() public returns (uint256) {
        tokenIds++;
        uint newItemId = tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, "https://ipfs.io/ipfs/QmYkZeqh6zJPxCKLYmftdt2i2kmybaToYTXrcocQB3zNXu");//public gateway
        console.log(
            "The NFT ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
        return newItemId;
    }
}
