---
sidebar_position: 2
---

# Managing DAOs

Once a DAO instance is create, it can be edited by the admins anytime. We can distinguish two types of updates:

+ On-chain (changes require transaction to DAO smart contract)
+ Off-chain (changes do not required any transactions, as they are stored in the Database off-chain, outside of the smart contract)

## On-chain updates
These type of changes will require the user to submit the transaction to the DAO Smart Contract instance, and pay the necessary gas fees. Following settings can be updated on-chain:
+ Whitelisted address - add, or remove the given address from the list of the users who can access and vote in the given DAO
+ Governance Token - change PSP22 governance token address used in Token Holders Strategy

## Off-chain updates
All of the off-chain updated, do not require user to submit any transaction to the smart contract, and the info is stored off-chain either in the standard database or on the IPFS protocol. Following options can be updated:
+ DAO Name
+ DAO Description
+ Logo
+ Background Image
+ Public visibility
+ Social Media URLs

