# Treasury module

## Status
Draft v3

## Context
We need the ability for DAO to have treasures that they can manage using the Governor's contract.

## Decision
Following contracts need to be implemented.
Treasure Factory -> Contract responsible for creating treasures.

`fn get_treasury(&self, owner: AccountId) -> Option<AccountId>`: Returns the treasury for the given `AccoundId`.

`fn create_treasury(&mut self) -> Result(Ok, Err)`: Creates a treasury where the owner is the caller of the method. If the caller already has Treasury, it throws an Error. There should not be any security requirements for this method. If DAO wants to create a treasury, it has to be done through a proposal. During execution of the proposal, the caller is the contract, making it owner of the treasury.

`fn create_treasury_on_behave(&mut self, account_id: AccountId) -> Result(Ok, Err)`: Allows creating a Treasury during the creation of the DAO, which possibly should be secured and allow calls only from the DAO Factory.

Treasury -> Contract responsible for managing the funds, to deposit funds, you have to use your wallet, treasury does not expose special methods to do so. Withdrawal methods can be called only by the owner of the treasury.

`fn withdraw_native(&self, to: AccountId, amount: Balance) -> Result<(), TreasuryError>`: Allows for the withdrawal of native tokens from the contract to a given account.

`fn withdraw_psp22(&self, token: AccountId, to: AccountId, amount: Balance, data: Vec<u8>) -> Result<(), TreasuryError>`: Allows for the withdrawal of PSP22 tokens from the contract to a given account.

`fn withdraw_psp34(&self, token: AccountId, to: AccountId, id: Id, data: Vec<u8>) -> Result<(), TreasuryError>`: Allows for the withdrawal of PSP34 tokens from the contract to a given account.

## Consequences
This architecture makes the Treasury contract completely independent of the Governor contract. It requires keeping track of treasuries, and the data must be kept in durable fasion, otherwise it will be nearly impossible to know if a given Governor contract has a Treasury contract. Storing it in a database is not advised due to its centralized nature.
